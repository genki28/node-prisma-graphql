import * as TypeGraphQL from "type-graphql";
import { UpsertChannelArgs } from "./args/UpsertChannelArgs";
import { Channel } from "../../../models/Channel";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Channel)
export class UpsertChannelResolver {
  @TypeGraphQL.Mutation(_returns => Channel, {
    nullable: false
  })
  async upsertChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertChannelArgs): Promise<Channel> {
    return getPrismaFromContext(ctx).channel.upsert(args);
  }
}
