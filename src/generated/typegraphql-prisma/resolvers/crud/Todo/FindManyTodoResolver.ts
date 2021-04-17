import * as TypeGraphQL from "type-graphql";
import { FindManyTodoArgs } from "./args/FindManyTodoArgs";
import { Todo } from "../../../models/Todo";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Todo)
export class FindManyTodoResolver {
  @TypeGraphQL.Query(_returns => [Todo], {
    nullable: false
  })
  async todos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTodoArgs): Promise<Todo[]> {
    return getPrismaFromContext(ctx).todo.findMany(args);
  }
}
