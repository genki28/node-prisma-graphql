import * as TypeGraphQL from "type-graphql";
import { CreateManyChannelArgs } from "./args/CreateManyChannelArgs";
import { Channel } from "../../../models/Channel";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Channel)
export class CreateManyChannelResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManyChannelArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).channel.createMany(args);
  }
}
