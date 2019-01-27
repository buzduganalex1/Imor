using System;
using VDS.RDF;

namespace Imor.Database
{
    public static class DatabaseInitializer
    {
        public const string ontology = "C:\\GitRepositories\\Imor\\ProjectFiles\\database\\ImagesOntologyV1.owl";

        public static IGraph Initialize()
        {
            IGraph g = new Graph();

            g.LoadFromUri(new Uri("http://www.w3.org/1999/02/22-rdf-syntax-ns#"));
            g.LoadFromFile(ontology);

            return g;
        }
    }
}