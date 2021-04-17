import { SchemaDirectiveVisitor } from "@graphql-tools/utils"
import { GraphQLField, defaultFieldResolver } from "graphql"
import { Context } from "../../context"

export class AdminOnlyDirective extends SchemaDirectiveVisitor {

    public visitFieldDefinition(field: GraphQLField<never, Context>) {
        const { resolve = defaultFieldResolver } = field
        field.resolve = async function(...args) {
            const [, , ctx] = args
            // 実際に使う場合には、JWTなどできちんと判断できるようにする
            if (ctx.request.header("role") === "ADMIN") {
                return resolve.apply(this, args)
            }
            throw new Error("not authorized")
        }
    }
}