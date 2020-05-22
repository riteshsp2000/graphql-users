const express = require('express');
const expresGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
app.use(
  '/graphql',
  expresGraphQL({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
