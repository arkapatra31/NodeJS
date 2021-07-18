const { ApolloServer, gql } = require('apollo-server');
import { typeDefs } from "./schema";
import { resolvers } from "./resolver";
import fetchAuthToken from './authToken';
const authClass = new fetchAuthToken();

interface ContextInput{
  req: any;
  res: any;
}

/* function getCookie(req:any, cookieName:any){
  let cookies = req.headers.cookie.toString().split(";");
  return cookies.filter((cookie:any) => cookie.trim().startsWith(cookieName))[0].split('=')[1];
} */

const server = new ApolloServer({
     typeDefs, resolvers , context: (contextInput : ContextInput) => {
      let { req, res } = contextInput; 
      const token = authClass.fetchToken();
      return { token, res };
     }
    });

//Start Server
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀 🚀 🚀  Server ready at ${url}`);
});

  
