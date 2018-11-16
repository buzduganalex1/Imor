PREFIX nobel: <http://data.nobelprize.org/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dbpediaowl: <http://dbpedia.org/ontology/>

SELECT ?institutie (COUNT(?laureat) AS ?laureati)
WHERE {
  ?laureat a nobel:Laureate ;
           rdfs:label ?laureatNume ;
           dbpediaowl:affiliation ?institutie .
}
GROUP BY ?institutie
ORDER BY DESC (?laureati)
LIMIT 50