import * as TypeGraphQL from "type-graphql";
import { DeleteManyTodoArgs } from "./args/DeleteManyTodoArgs";
import { Todo } from "../../../models/Todo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Todo)
export class DeleteManyTodoResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTodoArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).todo.deleteMany(args);
  }
}
