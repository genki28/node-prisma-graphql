import { UserPostsArgs } from './generated/typegraphql-prisma/resolvers/relations/User/args/UserPostsArgs';
import { Post } from './generated/typegraphql-prisma/models/Post';
import { UserChannelsArgs } from './generated/typegraphql-prisma/resolvers/relations/User/args/UserChannelsArgs';
import { User } from './generated/typegraphql-prisma/models/User';
import { Context } from './context';
import { Arg, Args, Ctx, Directive, FieldResolver, Int, Mutation, Resolver, Root } from 'type-graphql';
import { Channel } from './generated/typegraphql-prisma/models/Channel';
import { __Type } from 'graphql';
@Resolver(Channel)
export class CustomChannelResolver {

  @Directive("@adminOnly")
  @Mutation((returns) => Channel)
  async adminCreateChannel(
    @Arg("title", (type) => String) title: string,
    @Arg("members", (type) => [Int]) argMembers: number[],
    @Arg("description", (type) => String, {"nullable": true}) description: string,
    @Ctx() ctx: Context,
  ) {
    const members = {"connect": argMembers.map(x => ({"id": x}))};
    return ctx.prisma.channel.create({
      "data": {
        title,
        members,
        description,
      },
    });
  }

}

@Resolver(User)
export class CustomUserRelationsResolver {

  @Directive("@ownAccessOnly")
  @FieldResolver(_type => [Channel], {"nullable": false})
  async channels(@Root() user: User, @Ctx() ctx: Context, @Args() args: UserChannelsArgs): Promise<Channel[]> {
    return ctx.prisma.user.findUnique({"where": {"id": user.id}}).channels(args);
  }

  @Directive("@ownAccessOnly")
  @FieldResolver(_type => [Post], {"nullable": false})
  async posts(@Root() user: User, @Ctx() ctx: Context, @Args() args: UserPostsArgs): Promise<Post[]> {
    return ctx.prisma.user.findUnique({"where": {"id": user.id}}).posts(args);
  }
}