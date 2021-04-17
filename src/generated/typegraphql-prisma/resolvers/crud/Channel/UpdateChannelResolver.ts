import * as TypeGraphQL from "type-graphql";
import { UpdateChannelArgs } from "./args/UpdateChannelArgs";
import { Channel } from "../../../models/Channel";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Channel)
export class UpdateChannelResolver {
  @TypeGraphQL.Mutation(_returns => Channel, {
    nullable: true
  })
  async updateChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateChannelArgs): Promise<Channel | null> {
    return getPrismaFromContext(ctx).channel.update(args);
  }
}
