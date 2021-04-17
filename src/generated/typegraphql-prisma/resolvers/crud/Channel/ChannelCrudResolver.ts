import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateChannelArgs } from "./args/AggregateChannelArgs";
import { CreateChannelArgs } from "./args/CreateChannelArgs";
import { CreateManyChannelArgs } from "./args/CreateManyChannelArgs";
import { DeleteChannelArgs } from "./args/DeleteChannelArgs";
import { DeleteManyChannelArgs } from "./args/DeleteManyChannelArgs";
import { FindFirstChannelArgs } from "./args/FindFirstChannelArgs";
import { FindManyChannelArgs } from "./args/FindManyChannelArgs";
import { FindUniqueChannelArgs } from "./args/FindUniqueChannelArgs";
import { GroupByChannelArgs } from "./args/GroupByChannelArgs";
import { UpdateChannelArgs } from "./args/UpdateChannelArgs";
import { UpdateManyChannelArgs } from "./args/UpdateManyChannelArgs";
import { UpsertChannelArgs } from "./args/UpsertChannelArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Channel } from "../../../models/Channel";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateChannel } from "../../outputs/AggregateChannel";
import { ChannelGroupBy } from "../../outputs/ChannelGroupBy";

@TypeGraphQL.Resolver(_of => Channel)
export class ChannelCrudResolver {
  @TypeGraphQL.Query(_returns => Channel, {
    nullable: true
  })
  async channel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueChannelArgs): Promise<Channel | null> {
    return getPrismaFromContext(ctx).channel.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Channel, {
    nullable: true
  })
  async findFirstChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstChannelArgs): Promise<Channel | null> {
    return getPrismaFromContext(ctx).channel.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Channel], {
    nullable: false
  })
  async channels(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyChannelArgs): Promise<Channel[]> {
    return getPrismaFromContext(ctx).channel.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Channel, {
    nullable: false
  })
  async createChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateChannelArgs): Promise<Channel> {
    return getPrismaFromContext(ctx).channel.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManyChannelArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).channel.createMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Channel, {
    nullable: true
  })
  async deleteChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteChannelArgs): Promise<Channel | null> {
    return getPrismaFromContext(ctx).channel.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Channel, {
    nullable: true
  })
  async updateChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateChannelArgs): Promise<Channel | null> {
    return getPrismaFromContext(ctx).channel.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyChannelArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).channel.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyChannelArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).channel.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Channel, {
    nullable: false
  })
  async upsertChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertChannelArgs): Promise<Channel> {
    return getPrismaFromContext(ctx).channel.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateChannel, {
    nullable: false
  })
  async aggregateChannel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateChannelArgs): Promise<AggregateChannel> {
    return getPrismaFromContext(ctx).channel.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
