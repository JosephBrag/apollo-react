export default `
  extend type Query {
    authors: [Author!]!
    author(id: String!): Author!
  }

  extend type Mutation {
    signUp(username: String!, email: String!, password: String!): Author!
    signIn(login: String!, password: String!): Token!

    updateAuthor(username: String!): Author!
    deleteAuthor: Boolean!
  }

  type Token {
    token: String!,
  }

  type Author {
    id: String!
    username: String!,
    tweets: [Tweet!]!
  }
`;
