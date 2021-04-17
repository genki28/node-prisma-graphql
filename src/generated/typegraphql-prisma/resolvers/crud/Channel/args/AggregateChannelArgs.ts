import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChannelOrderByInput } from "../../../inputs/ChannelOrderByInput";
import { ChannelWhereInput } from "../../../inputs/ChannelWhereInput";
import { ChannelWhereUniqueInput } from "../../../inputs/ChannelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateChannelArgs {
  @TypeGraphQL.Field(_type => ChannelWhereInput, {
    nullable: true
  })
  where?: ChannelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChannelOrderByInput], {
    nullable: true
  })
  orderBy?: ChannelOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ChannelWhereUniqueInput, {
    nullable: true
  })
  cursor?: ChannelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
