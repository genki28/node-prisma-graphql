import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TodoWhereInput {
  @TypeGraphQL.Field(_type => [TodoWhereInput], {
    nullable: true
  })
  AND?: TodoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereInput], {
    nullable: true
  })
  OR?: TodoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TodoWhereInput], {
    nullable: true
  })
  NOT?: TodoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;
}
