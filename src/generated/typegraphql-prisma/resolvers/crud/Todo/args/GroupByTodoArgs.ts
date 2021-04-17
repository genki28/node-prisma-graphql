import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TodoOrderByInput } from "../../../inputs/TodoOrderByInput";
import { TodoScalarWhereWithAggregatesInput } from "../../../inputs/TodoScalarWhereWithAggregatesInput";
import { TodoWhereInput } from "../../../inputs/TodoWhereInput";
import { TodoScalarFieldEnum } from "../../../../enums/TodoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTodoArgs {
  @TypeGraphQL.Field(_type => TodoWhereInput, {
    nullable: true
  })
  where?: TodoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TodoOrderByInput], {
    nullable: true
  })
  orderBy?: TodoOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title">;

  @TypeGraphQL.Field(_type => TodoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TodoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
