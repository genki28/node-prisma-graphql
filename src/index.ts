import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const todoes = [
    {
        id: 1,
        title: '簡単なタスク'
    },
    {
        id: 2,
        title: 'まだまだなタスク'
    },
    {
        id: 3,
        title: 'ちょっとやばいタスク'
    },
    {
        id: 4,
        title: 'げき重なタスク'
    }
]

const typeDefs = gql`
    type Todo {
        id: Int!
        title: String
    }

    type Query {
        todo(id: Int): Todo
        todoes(title: String): [Todo]
    }
`

const resolvers = {
    Query: {
        todo: (_: any, { id }: { id: number}) => {
            return todoes.find(todo => todo.id === id)
        },
        todoes: (_: any, { title }: { title: string }) => {
            return todoes.filter(todo => todo.title.includes(title))
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => {
    console.log(`🚀Server ready at http://localhost:4000${server.graphqlPath}`)
})