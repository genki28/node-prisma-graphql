import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelOrderByInput } from "../../../inputs/ChannelOrderByInput";
import { ChannelScalarWhereWithAggregatesInput } from "../../../inputs/ChannelScalarWhereWithAggregatesInput";
import { ChannelWhereInput } from "../../../inputs/ChannelWhereInput";
import { ChannelScalarFieldEnum } from "../../../../enums/ChannelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByChannelArgs {
  @TypeGraphQL.Field(_type => ChannelWhereInput, {
    nullable: true
  })
  where?: ChannelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChannelOrderByInput], {
    nullable: true
  })
  orderBy?: ChannelOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChannelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "description">;

  @TypeGraphQL.Field(_type => ChannelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ChannelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
