const { gql } = require('graphql-tag');
const typeDefs = gql`
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }
  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }

  "Cats from outer space"
  type SpaceCat {
    id: ID!
    "name for space cat"
    name: String!
    "A cat's age, not representative of total lives lived"
    age: Int
    missions: [Mission]
  }

  "Mission"
  type Mission {
    id: ID!
    "mission name"
    name: String!
    "mission description"
    description: String!
  }

  "Query is entry point into gql schemas"
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    "Get list of cats from outer space"
    spaceCats: [SpaceCat]
  }
`;

module.exports = {
  typeDefs,
}
