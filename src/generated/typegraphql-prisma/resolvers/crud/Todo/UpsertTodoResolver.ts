import * as TypeGraphQL from "type-graphql";
import { UpsertTodoArgs } from "./args/UpsertTodoArgs";
import { Todo } from "../../../models/Todo";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Todo)
export class UpsertTodoResolver {
  @TypeGraphQL.Mutation(_returns => Todo, {
    nullable: false
  })
  async upsertTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTodoArgs): Promise<Todo> {
    return getPrismaFromContext(ctx).todo.upsert(args);
  }
}
