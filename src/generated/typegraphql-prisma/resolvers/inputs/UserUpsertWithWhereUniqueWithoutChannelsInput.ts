import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutChannelsInput } from "../inputs/UserCreateWithoutChannelsInput";
import { UserUpdateWithoutChannelsInput } from "../inputs/UserUpdateWithoutChannelsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutChannelsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutChannelsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutChannelsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutChannelsInput, {
    nullable: false
  })
  create!: UserCreateWithoutChannelsInput;
}
