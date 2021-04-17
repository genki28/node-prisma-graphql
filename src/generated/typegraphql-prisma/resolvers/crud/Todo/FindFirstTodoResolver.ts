import * as TypeGraphQL from "type-graphql";
import { FindFirstTodoArgs } from "./args/FindFirstTodoArgs";
import { Todo } from "../../../models/Todo";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Todo)
export class FindFirstTodoResolver {
  @TypeGraphQL.Query(_returns => Todo, {
    nullable: true
  })
  async findFirstTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTodoArgs): Promise<Todo | null> {
    return getPrismaFromContext(ctx).todo.findFirst(args);
  }
}
