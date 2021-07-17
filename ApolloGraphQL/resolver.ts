const Users = [
    {
      id: 123,
      name: 'JACK',
    },
    {
      id: 321,
      name: 'Paul',
    },
  ];

//resolver
export const resolvers = {
    Query: {
      /* userInfo: () => Users, */
      userInfo(parent, props, context, info) {
          console.log(context.token);
          return Users
      }
    },
  };
