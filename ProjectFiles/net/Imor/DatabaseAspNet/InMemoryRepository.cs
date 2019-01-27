using System;
using System.Collections.Generic;
using RomanticWeb;
using RomanticWeb.DotNetRDF;
using RomanticWeb.Mapping;
using VDS.RDF;
using VDS.RDF.Parsing;
using VDS.RDF.Query;
using VDS.RDF.Query.Datasets;

namespace DatabaseAspNet
{
    public class InMemoryRepository : IRdfStoreRepository
    {
        public string Execute(string query)
        {
            IGraph g = new Graph();

            g.LoadFromFile("C:\\GitRepositories\\Imor\\ProjectFiles\\database\\ImagesOntologyV1.owl");
            
            var ds = new InMemoryDataset(g);

            var sparqlparser = new SparqlQueryParser();

            ISparqlQueryProcessor processor = new LeviathanQueryProcessor(ds);

            var sparqlQuery = sparqlparser.ParseFromString(query);

            var results = processor.ProcessQuery(sparqlQuery);

            if (results is SparqlResultSet)
            {
                var result = (SparqlResultSet) results;

                return result.Results.ToString();
            }

            return string.Empty;
        }

        public IEnumerable<Image> GetImages(string query)
        {
            IGraph g = new Graph();

            g.LoadFromFile("C:\\GitRepositories\\Imor\\ProjectFiles\\database\\ImagesOntologyV1.owl");

            var dnrTripleStore = new VDS.RDF.TripleStore();

            dnrTripleStore.Add(g);

            var contextFactory = new EntityContextFactory();

            contextFactory.WithMappings((MappingBuilder builder) =>
            {
                builder.FromAssemblyOf<Image>();
            });
            
            contextFactory.WithDotNetRDF(dnrTripleStore);
            
            var context = contextFactory.CreateContext();

            var catImage = context.Load<Image>(new Uri("CatImage"));

            return new List<Image>() {catImage};
        }
    }
}

