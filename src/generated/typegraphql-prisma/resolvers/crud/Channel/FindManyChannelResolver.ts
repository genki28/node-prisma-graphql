import * as TypeGraphQL from "type-graphql";
import { FindManyChannelArgs } from "./args/FindManyChannelArgs";
import { Channel } from "../../../models/Channel";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Channel)
export class FindManyChannelResolver {
  @TypeGraphQL.Query(_returns => [Channel], {
    nullable: false
  })
  async channels(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyChannelArgs): Promise<Channel[]> {
    return getPrismaFromContext(ctx).channel.findMany(args);
  }
}
