// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Book{
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type User{
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Query{
        me: User
        users: [User]
    }
    type Mutation{
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
        saveBook(authors: [String], description: String, title: String, image: String, Link: String): User
        removeBook(bookId: String): User
    }
        type Auth{
        token: ID!
        user: User
    }

`;

// export the typeDefs
module.exports = typeDefs;