const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { typeDefs } = require('./schema');
const { addMocksToSchema } = require('@graphql-tools/mock');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const mocks = {
  Query: () => ({
    getTracks: () => [{
    id: () => "spacecat_01",
    title: () => "Spacecat pioneer",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
    },
    {
      id: () => "spacecat_02",
      title: () => "Intergacatic Catsronaut",
      author: () => {
        return {
          name: "Feline Spacey",
          photo:
            "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
        };
      },
      thumbnail: () =>
        "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
      length: () => 2520,
      modulesCount: () => 21,
    }],
  }),
  SpaceCat: () => ({
    id: () => "spacecat_01",
    title: () => "spacecat pioneer",
  }),
  Track: () => ({
    id: () => "spacecat_01",
    title: () => "Spacecat pioneer",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 2520,
    modulesCount: () => 21,
  }),
}

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    })
  });
  const { url } = await startStandaloneServer(server);
  console.log(`
  🚀 Server is running! Better go cache it!
  ☎️ Query at ${url}
  `)
};

startApolloServer();
