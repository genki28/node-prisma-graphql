import * as TypeGraphQL from "type-graphql";
import { FindUniqueChannelArgs } from "./args/FindUniqueChannelArgs";
import { Channel } from "../../../models/Channel";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Channel)
export class FindUniqueChannelResolver {
  @TypeGraphQL.Query(_returns => Channel, {
    nullable: true
  })
  async channel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueChannelArgs): Promise<Channel | null> {
    return getPrismaFromContext(ctx).channel.findUnique(args);
  }
}
