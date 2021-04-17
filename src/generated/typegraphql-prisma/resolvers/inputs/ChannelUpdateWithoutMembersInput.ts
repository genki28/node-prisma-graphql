import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutChannelInput } from "../inputs/PostUpdateManyWithoutChannelInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ChannelUpdateWithoutMembersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutChannelInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutChannelInput | undefined;
}
