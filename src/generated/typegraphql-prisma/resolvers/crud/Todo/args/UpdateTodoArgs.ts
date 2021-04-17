import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TodoUpdateInput } from "../../../inputs/TodoUpdateInput";
import { TodoWhereUniqueInput } from "../../../inputs/TodoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTodoArgs {
  @TypeGraphQL.Field(_type => TodoUpdateInput, {
    nullable: false
  })
  data!: TodoUpdateInput;

  @TypeGraphQL.Field(_type => TodoWhereUniqueInput, {
    nullable: false
  })
  where!: TodoWhereUniqueInput;
}
