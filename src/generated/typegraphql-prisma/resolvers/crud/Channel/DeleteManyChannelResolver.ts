import * as TypeGraphQL from "type-graphql";
import { DeleteManyChannelArgs } from "./args/DeleteManyChannelArgs";
import { Channel } from "../../../models/Channel";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Channel)
export class DeleteManyChannelResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyChannelArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).channel.deleteMany(args);
  }
}
