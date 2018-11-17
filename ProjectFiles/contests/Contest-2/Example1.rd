PREFIX dbp: <http://dbpedia.org/property/>
PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
Prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
Prefix dbpediaowl: <http://dbpedia.org/ontology/>

SELECT (COUNT(?laureat) AS ?number) ?country
WHERE {
  ?laureat dbo:birthPlace ?country .
  ?country a dbpediaowl:Country .
  
} 
Group by ?country