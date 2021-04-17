// import express from 'express'
// import { ApolloServer, gql } from 'apollo-server-express'
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// const todoes = [
//     {
//         id: 1,
//         title: '簡単なタスク'
//     },
//     {
//         id: 2,
//         title: 'まだまだなタスク'
//     },
//     {
//         id: 3,
//         title: 'ちょっとやばいタスク'
//     },
//     {
//         id: 4,
//         title: 'げき重なタスク'
//     }
// ]

// const typeDefs = gql`
//     type Todo {
//         id: Int
//         title: String
//     }

//     type Query {
//         todo(id: Int): Todo
//         todoes(title: String): [Todo]
//     }
// `

// const resolvers = {
//     Query: {
//         todo: (_: any, { id }: { id: number}) => {
//             return prisma.todo.findUnique({
//                 where: {
//                     id: id
//                 }
//             })
//         },
//         todoes: (_: any, { title }: { title: string }) => {
//             return todoes.filter(todo => todo.title.includes(title))
//         }
//     }
// }

// const server = new ApolloServer({ typeDefs, resolvers })

// const app = express()

// server.applyMiddleware({ app })

// app.listen({ port: 4000 }, () => {
//     console.log(`🚀Server ready at http://localhost:4000${server.graphqlPath}`)
// })

import "reflect-metadata";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import { prisma } from "./context";

const app = express();

app.use("/graphql", graphqlHTTP(async (request) => ({
  schema,
  graphiql: true,
  "context": {prisma, request},
})));
app.listen(9000);

console.log("http://localhost:9000/graphql");