import * as TypeGraphQL from "type-graphql";
import { Channel } from "../../../models/Channel";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { ChannelMembersArgs } from "./args/ChannelMembersArgs";
import { ChannelPostsArgs } from "./args/ChannelPostsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Channel)
export class ChannelRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() channel: Channel, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ChannelPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).channel.findUnique({
      where: {
        id: channel.id,
      },
    }).posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async members(@TypeGraphQL.Root() channel: Channel, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ChannelMembersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).channel.findUnique({
      where: {
        id: channel.id,
      },
    }).members(args);
  }
}
