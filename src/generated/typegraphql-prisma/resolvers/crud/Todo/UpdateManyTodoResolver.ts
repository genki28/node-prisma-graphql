import * as TypeGraphQL from "type-graphql";
import { UpdateManyTodoArgs } from "./args/UpdateManyTodoArgs";
import { Todo } from "../../../models/Todo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Todo)
export class UpdateManyTodoResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTodoArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).todo.updateMany(args);
  }
}
