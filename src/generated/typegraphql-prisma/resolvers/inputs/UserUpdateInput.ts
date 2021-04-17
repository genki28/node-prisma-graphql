import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelUpdateManyWithoutMembersInput } from "../inputs/ChannelUpdateManyWithoutMembersInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { PostUpdateManyWithoutAuthorInput } from "../inputs/PostUpdateManyWithoutAuthorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ChannelUpdateManyWithoutMembersInput, {
    nullable: true
  })
  channels?: ChannelUpdateManyWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutAuthorInput | undefined;
}
