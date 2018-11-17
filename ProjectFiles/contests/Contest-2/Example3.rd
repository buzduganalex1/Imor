PREFIX db: <http://dbpedia.org/>
PREFIX nobel: <http://data.nobelprize.org/terms/>
PREFIX no: <http://km.aifb.kit.edu/projects/numbers/number#>

PREFIX dbp: <http://dbpedia.org/property/>
PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
Prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
Prefix dbpediaowl: <http://dbpedia.org/ontology/>

SELECT ?premiu ?an ?desc ?url ?t ?laur 
WHERE {
?premiu a nobel:AwardFile ; rdfs:label ?desc ;
nobel:category ?cat.
  ?t a nobel:LaureateAward; nobel:laureate ?laur.
   
OPTIONAL { ?premiu rdfs:seeAlso ?url . }
FILTER (?cat NOT IN
(<http://data.nobelprize.org/resource/category/Peace>,
<http://data.nobelprize.org/resource/category/Literature>))
}

LIMIT 2