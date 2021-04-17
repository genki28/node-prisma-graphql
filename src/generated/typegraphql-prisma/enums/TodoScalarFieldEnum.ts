import * as TypeGraphQL from "type-graphql";

export enum TodoScalarFieldEnum {
  id = "id",
  title = "title"
}
TypeGraphQL.registerEnumType(TodoScalarFieldEnum, {
  name: "TodoScalarFieldEnum",
  description: undefined,
});
