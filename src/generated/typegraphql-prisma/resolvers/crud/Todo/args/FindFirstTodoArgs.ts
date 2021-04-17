import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TodoOrderByInput } from "../../../inputs/TodoOrderByInput";
import { TodoWhereInput } from "../../../inputs/TodoWhereInput";
import { TodoWhereUniqueInput } from "../../../inputs/TodoWhereUniqueInput";
import { TodoScalarFieldEnum } from "../../../../enums/TodoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTodoArgs {
  @TypeGraphQL.Field(_type => TodoWhereInput, {
    nullable: true
  })
  where?: TodoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TodoOrderByInput], {
    nullable: true
  })
  orderBy?: TodoOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TodoWhereUniqueInput, {
    nullable: true
  })
  cursor?: TodoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TodoScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title"> | undefined;
}
