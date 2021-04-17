import * as TypeGraphQL from "type-graphql";
import { UpdateTodoArgs } from "./args/UpdateTodoArgs";
import { Todo } from "../../../models/Todo";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Todo)
export class UpdateTodoResolver {
  @TypeGraphQL.Mutation(_returns => Todo, {
    nullable: true
  })
  async updateTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTodoArgs): Promise<Todo | null> {
    return getPrismaFromContext(ctx).todo.update(args);
  }
}
