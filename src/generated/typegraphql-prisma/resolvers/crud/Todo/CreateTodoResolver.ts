import * as TypeGraphQL from "type-graphql";
import { CreateTodoArgs } from "./args/CreateTodoArgs";
import { Todo } from "../../../models/Todo";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Todo)
export class CreateTodoResolver {
  @TypeGraphQL.Mutation(_returns => Todo, {
    nullable: false
  })
  async createTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTodoArgs): Promise<Todo> {
    return getPrismaFromContext(ctx).todo.create(args);
  }
}
