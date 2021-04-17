import * as TypeGraphQL from "type-graphql";
import { UpdateManyChannelArgs } from "./args/UpdateManyChannelArgs";
import { Channel } from "../../../models/Channel";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Channel)
export class UpdateManyChannelResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyChannelArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).channel.updateMany(args);
  }
}
