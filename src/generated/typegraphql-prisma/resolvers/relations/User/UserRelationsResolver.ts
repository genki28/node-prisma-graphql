import * as TypeGraphQL from "type-graphql";
import { Channel } from "../../../models/Channel";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { UserChannelsArgs } from "./args/UserChannelsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Channel], {
    nullable: false
  })
  async channels(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserChannelsArgs): Promise<Channel[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).channels(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).posts(args);
  }
}
