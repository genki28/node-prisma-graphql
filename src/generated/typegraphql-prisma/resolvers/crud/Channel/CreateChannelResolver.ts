import * as TypeGraphQL from "type-graphql";
import { CreateChannelArgs } from "./args/CreateChannelArgs";
import { Channel } from "../../../models/Channel";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Channel)
export class CreateChannelResolver {
  @TypeGraphQL.Mutation(_returns => Channel, {
    nullable: false
  })
  async createChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateChannelArgs): Promise<Channel> {
    return getPrismaFromContext(ctx).channel.create(args);
  }
}
