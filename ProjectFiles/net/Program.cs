using System;
using System.Net.Http;
using System.Web;
using VDS.RDF;
using VDS.RDF.Parsing;
using VDS.RDF.Query;
using VDS.RDF.Writing;

namespace GraphDbPoc
{
    class Program
    {
        static void Main(string[] args)
        {
            Example();

            TripleStore store = new TripleStore();

            //Assume that we fill our Store with data from somewhere

            //Execute a raw SPARQL Query
            //Should get a SparqlResultSet back from a SELECT query
            Object results = store.ExecuteQuery("SELECT * WHERE { { GRAPH ?g { ?s ?p ?o } } UNION { ?s ?p ?o } }");
            if (results is SparqlResultSet)
            {
                //Print out the Results
                SparqlResultSet rset = (SparqlResultSet) results;
                foreach (SparqlResult result in rset)
                {
                    Console.WriteLine(result.ToString());
                }
            }

            //Use the SparqlQueryParser to give us a SparqlQuery object
            //Should get an IGraph back from a CONSTRUCT query
            SparqlQueryParser sparqlparser = new SparqlQueryParser();
            SparqlQuery query =
                sparqlparser.ParseFromString(
                    "CONSTRUCT { ?s ?p ?o } WHERE { { GRAPH ?g { ?s ?p ?o } } UNION { ?s ?p ?o } }");
            results = store.ExecuteQuery(query);
            if (results is IGraph)
            {
                //Print out the Results
                IGraph g = (Graph) results;
                foreach (Triple t in g.Triples)
                {
                    Console.WriteLine(t.ToString());
                }

                //Print the time taken to make the query
                Console.WriteLine("Query took " + query.QueryExecutionTime.ToString());
            }

        }

        private static void Example()
        {
            var httpClient = new HttpClient();

            var baseUri = new Uri("http://localhost:7200/repositories/ImagesRepository/statements");

            var name = "Capitanu";

            var query =
                $"PREFIX Imor: <http://www.semanticweb.org/alexandru/ontologies/2018/11/Imor#>\r\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\r\nPREFIX owl: <http://www.w3.org/2002/07/owl#>\r\nInsert DATA{{\r\n    <http://www.semanticweb.org/alexandru/ontologies/2018/11/Imor#{name}>\r\n        rdf:type Imor:Author;\r\n        Imor:name \"{name}\" .\r\n}}";

            var request = new HttpRequestMessage(HttpMethod.Post, baseUri + $"?update={HttpUtility.UrlEncode(query)}");

            try
            {
                var task = httpClient.SendAsync(request);

                var result = task.Result;

                Console.WriteLine(result.Content.ReadAsStringAsync().Result);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            var getRequest = new HttpRequestMessage(HttpMethod.Get, baseUri + $"?subj={HttpUtility.UrlEncode("<http://www.semanticweb.org/alexandru/ontologies/2018/11/Imor#Author>")}");

            try
            {
                var task = httpClient.SendAsync(getRequest);

                var result = task.Result;

                Console.WriteLine(result.Content.ReadAsStringAsync().Result);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
