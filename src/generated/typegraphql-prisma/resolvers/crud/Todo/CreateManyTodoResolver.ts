import * as TypeGraphQL from "type-graphql";
import { CreateManyTodoArgs } from "./args/CreateManyTodoArgs";
import { Todo } from "../../../models/Todo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Todo)
export class CreateManyTodoResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManyTodoArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).todo.createMany(args);
  }
}
