import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateChannelArgs } from "./args/AggregateChannelArgs";
import { Channel } from "../../../models/Channel";
import { AggregateChannel } from "../../outputs/AggregateChannel";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Channel)
export class AggregateChannelResolver {
  @TypeGraphQL.Query(_returns => AggregateChannel, {
    nullable: false
  })
  async aggregateChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateChannelArgs): Promise<AggregateChannel> {
    return getPrismaFromContext(ctx).channel.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
