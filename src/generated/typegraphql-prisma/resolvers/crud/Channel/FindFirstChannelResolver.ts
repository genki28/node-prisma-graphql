import * as TypeGraphQL from "type-graphql";
import { FindFirstChannelArgs } from "./args/FindFirstChannelArgs";
import { Channel } from "../../../models/Channel";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Channel)
export class FindFirstChannelResolver {
  @TypeGraphQL.Query(_returns => Channel, {
    nullable: true
  })
  async findFirstChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstChannelArgs): Promise<Channel | null> {
    return getPrismaFromContext(ctx).channel.findFirst(args);
  }
}
