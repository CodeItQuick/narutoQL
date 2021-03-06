import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import depthLimit from 'graphql-depth-limit';
import { VillageResolver } from './graphql/village';
import { CharacterResolver } from './graphql/character';
import { ClanResolver } from './graphql/clan';
import { GraphQLError } from 'graphql';

const createGraphqlServer = async () => {
  const formatError = (error: GraphQLError) => {
    return {
      message: error.message,
      statusCode: error?.extensions?.exception?.statusCode,
    };
  };
  const schema = await buildSchema({
    resolvers: [CharacterResolver, ClanResolver, VillageResolver],
  });

  return new ApolloServer({
    schema,
    validationRules: [depthLimit(4)],
    formatError,
  });
};

export default createGraphqlServer;
