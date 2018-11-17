const {SparqlClient, SPARQL} = require('sparql-client-2');
const client =
  new SparqlClient('http://data.nobelprize.org/sparql')
    .register({
      db: 'http://dbpedia.org/resource/',
      dbo: 'http://dbpedia.org/ontology/',
      dbpediaowl: 'http://dbpedia.org/ontology/'
    });
 
function fetchCityLeader(queryString) {
  return client
    .query(queryString)
    .execute()
    // Get the item we want.
    .then(response => Promise.resolve(response.results.bindings));
}

var query1 = SPARQL`SELECT (COUNT(?laureat) AS ?number) ?country
    WHERE {
      ?laureat dbo:birthPlace ?country .
      ?country a dbpediaowl:Country .
      
    } 
    Group by ?country`;

fetchCityLeader(query1)
  .then(leader => console.log(leader));