import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelCreateWithoutPostsInput } from "../inputs/ChannelCreateWithoutPostsInput";
import { ChannelUpdateWithoutPostsInput } from "../inputs/ChannelUpdateWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ChannelUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => ChannelUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: ChannelUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => ChannelCreateWithoutPostsInput, {
    nullable: false
  })
  create!: ChannelCreateWithoutPostsInput;
}
