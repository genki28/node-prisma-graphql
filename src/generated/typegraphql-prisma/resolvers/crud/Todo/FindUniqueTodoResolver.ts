import * as TypeGraphQL from "type-graphql";
import { FindUniqueTodoArgs } from "./args/FindUniqueTodoArgs";
import { Todo } from "../../../models/Todo";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Todo)
export class FindUniqueTodoResolver {
  @TypeGraphQL.Query(_returns => Todo, {
    nullable: true
  })
  async todo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTodoArgs): Promise<Todo | null> {
    return getPrismaFromContext(ctx).todo.findUnique(args);
  }
}
