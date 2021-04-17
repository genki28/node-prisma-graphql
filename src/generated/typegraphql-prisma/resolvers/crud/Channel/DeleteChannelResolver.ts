import * as TypeGraphQL from "type-graphql";
import { DeleteChannelArgs } from "./args/DeleteChannelArgs";
import { Channel } from "../../../models/Channel";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Channel)
export class DeleteChannelResolver {
  @TypeGraphQL.Mutation(_returns => Channel, {
    nullable: true
  })
  async deleteChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteChannelArgs): Promise<Channel | null> {
    return getPrismaFromContext(ctx).channel.delete(args);
  }
}
