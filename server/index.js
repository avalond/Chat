/**
 * Created by kevin on 7/12/17.
 */
import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';
import bodayParser from 'body-parser';
import {createServer} from 'http';
import {Schema} from './data/schema';
import {Mocks} from './data/mocks';

const PORT = 8080;
const app = express();

const executableSchema = makeExecutableSchema({
  typeDefs: Schema
});

addMockFunctionsToSchema({
  schema: executableSchema,
  mocks: Mocks,
  preserveResolvers: true
});

app.use('/graphql', bodayParser.json(), graphqlExpress({
  schema: executableSchema,
  context: {}, // at least(!) an empty object
}));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

const graphQLServer = createServer(app);

graphQLServer.listen(PORT, console.log(`server is running on http://localhost:${PORT}/graphiql`));