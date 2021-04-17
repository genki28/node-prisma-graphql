import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByChannelArgs } from "./args/GroupByChannelArgs";
import { Channel } from "../../../models/Channel";
import { ChannelGroupBy } from "../../outputs/ChannelGroupBy";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Channel)
export class GroupByChannelResolver {
  @TypeGraphQL.Query(_returns => [ChannelGroupBy], {
    nullable: false
  })
  async groupByChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByChannelArgs): Promise<ChannelGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).channel.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
