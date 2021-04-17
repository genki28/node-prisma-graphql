import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByTodoArgs } from "./args/GroupByTodoArgs";
import { Todo } from "../../../models/Todo";
import { TodoGroupBy } from "../../outputs/TodoGroupBy";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Todo)
export class GroupByTodoResolver {
  @TypeGraphQL.Query(_returns => [TodoGroupBy], {
    nullable: false
  })
  async groupByTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTodoArgs): Promise<TodoGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).todo.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
