import * as TypeGraphQL from "type-graphql";
import { DeleteTodoArgs } from "./args/DeleteTodoArgs";
import { Todo } from "../../../models/Todo";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Todo)
export class DeleteTodoResolver {
  @TypeGraphQL.Mutation(_returns => Todo, {
    nullable: true
  })
  async deleteTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTodoArgs): Promise<Todo | null> {
    return getPrismaFromContext(ctx).todo.delete(args);
  }
}
