import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTodoArgs } from "./args/AggregateTodoArgs";
import { CreateManyTodoArgs } from "./args/CreateManyTodoArgs";
import { CreateTodoArgs } from "./args/CreateTodoArgs";
import { DeleteManyTodoArgs } from "./args/DeleteManyTodoArgs";
import { DeleteTodoArgs } from "./args/DeleteTodoArgs";
import { FindFirstTodoArgs } from "./args/FindFirstTodoArgs";
import { FindManyTodoArgs } from "./args/FindManyTodoArgs";
import { FindUniqueTodoArgs } from "./args/FindUniqueTodoArgs";
import { GroupByTodoArgs } from "./args/GroupByTodoArgs";
import { UpdateManyTodoArgs } from "./args/UpdateManyTodoArgs";
import { UpdateTodoArgs } from "./args/UpdateTodoArgs";
import { UpsertTodoArgs } from "./args/UpsertTodoArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Todo } from "../../../models/Todo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTodo } from "../../outputs/AggregateTodo";
import { TodoGroupBy } from "../../outputs/TodoGroupBy";

@TypeGraphQL.Resolver(_of => Todo)
export class TodoCrudResolver {
  @TypeGraphQL.Query(_returns => Todo, {
    nullable: true
  })
  async todo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTodoArgs): Promise<Todo | null> {
    return getPrismaFromContext(ctx).todo.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Todo, {
    nullable: true
  })
  async findFirstTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTodoArgs): Promise<Todo | null> {
    return getPrismaFromContext(ctx).todo.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Todo], {
    nullable: false
  })
  async todos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTodoArgs): Promise<Todo[]> {
    return getPrismaFromContext(ctx).todo.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Todo, {
    nullable: false
  })
  async createTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTodoArgs): Promise<Todo> {
    return getPrismaFromContext(ctx).todo.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManyTodoArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).todo.createMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Todo, {
    nullable: true
  })
  async deleteTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTodoArgs): Promise<Todo | null> {
    return getPrismaFromContext(ctx).todo.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Todo, {
    nullable: true
  })
  async updateTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTodoArgs): Promise<Todo | null> {
    return getPrismaFromContext(ctx).todo.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTodoArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).todo.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTodoArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).todo.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Todo, {
    nullable: false
  })
  async upsertTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTodoArgs): Promise<Todo> {
    return getPrismaFromContext(ctx).todo.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTodo, {
    nullable: false
  })
  async aggregateTodo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTodoArgs): Promise<AggregateTodo> {
    return getPrismaFromContext(ctx).todo.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
