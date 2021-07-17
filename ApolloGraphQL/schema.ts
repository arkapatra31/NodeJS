const {  gql } = require('apollo-server');
export const typeDefs = gql`
  
  type Users {
    id: Int
    name: String
  }

  type Query {
    userInfo: [Users]
  }
`;