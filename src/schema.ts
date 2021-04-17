import { buildSchemaSync } from "type-graphql";
import { FindManyUserResolver, FindUniqueUserResolver, UserRelationsResolver, CreateUserResolver, FindManyChannelResolver, CreateChannelResolver, ChannelRelationsResolver, PostCrudResolver } from "./generated/typegraphql-prisma";
import { CustomChannelResolver, CustomUserRelationsResolver } from "./resolvers";

export const schema = buildSchemaSync({
  "resolvers": [
    FindManyUserResolver,
    FindUniqueUserResolver,
    UserRelationsResolver,
    CreateUserResolver,
    FindManyChannelResolver,
    CreateChannelResolver,
    ChannelRelationsResolver,
    PostCrudResolver,
    CustomChannelResolver,
    CustomUserRelationsResolver
  ],
  "validate": false,
});