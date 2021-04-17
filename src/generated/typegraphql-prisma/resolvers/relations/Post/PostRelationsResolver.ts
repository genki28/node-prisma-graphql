import * as TypeGraphQL from "type-graphql";
import { Channel } from "../../../models/Channel";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => Channel, {
    nullable: false
  })
  async channel(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<Channel> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).channel({});
  }
}
