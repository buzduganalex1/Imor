using System;
using System.Collections.Generic;
using System.Linq;
using Imor.Business;
using VDS.RDF;
using VDS.RDF.Nodes;

namespace Imor.Database
{
    public class ImagesRepository
    {
        public IEnumerable<ImorImage> GetImages()
        {
            var results = new List<ImorImage>();

            var graph = DatabaseInitializer.Initialize();

            var imageNode = graph.GetUriNode(new Uri(ImorEnum.Image));

            var images = graph.GetTriplesWithObject(imageNode);

            foreach (var image in images)
            {
                var imageProperties = graph.GetTriplesWithSubject(image.Subject);

                var imorImage = new ImorImage
                {
                    Uri = image.Subject.ToString()
                };

                foreach (var imageProperty in imageProperties)
                {
                    var propertyName = ImorImage.RdfPropertiesDictionary.SingleOrDefault(x => x.Key == imageProperty.Predicate.ToString());

                    var properties = imorImage.GetType().GetProperties();

                    foreach (var property in properties)
                    {
                        if (property.Name == propertyName.Value)
                        {
                            property.SetValue(imorImage, imageProperty.Object.AsValuedNode().AsString());
                        }
                    }
                }

                imorImage.Tags = new TagsRepository().GetTagsForImage(new Uri(image.Subject.ToString()));

                results.Add(imorImage);
            }

            return results;
        }

        public void InsertImage(ImorImage image)
        {
            var graph = DatabaseInitializer.Initialize();

            var node = graph.CreateUriNode(new Uri(image.Uri));

            var typeNode = graph.GetUriNode(new Uri(ImorEnum.RdfType));

            var imageNode = graph.GetUriNode(new Uri(ImorEnum.Image));

            var t = new Triple(node, typeNode, imageNode);
            
            if (!string.IsNullOrEmpty(image.Description))
            {
                var descriptionNode = graph.GetUriNode(new Uri(ImorEnum.Description));

                var descriptionTriple = new Triple(node, descriptionNode, graph.CreateLiteralNode(image.Description));

                graph.Assert(descriptionTriple);
            }
            
            if (!string.IsNullOrEmpty(image.Content))
            {
                var contentNode = graph.GetUriNode(new Uri(ImorEnum.Content));

                var contenTriple = new Triple(node, contentNode, graph.CreateLiteralNode(image.Content));

                graph.Assert(contenTriple);
            }

            if (image.Tags.Any())
            {
                foreach (var tag in image.Tags)
                {
                    var tagNode = graph.GetUriNode(new Uri(tag.Uri));

                    if (tagNode != null)
                    {
                        var hasNode = graph.GetUriNode(new Uri(ImorEnum.HasA));

                        var tagTriple = new Triple(node, hasNode, tagNode);

                        graph.Assert(tagTriple);
                    }
                }
            }

            graph.Assert(t);
            
            graph.SaveToFile(DatabaseInitializer.ontology);
        }
    }
}