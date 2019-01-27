using System;
using System.Collections.Generic;
using System.Linq;
using Imor.Business;
using VDS.RDF.Nodes;

namespace Imor.Database
{
    public class TagsRepository
    {
        public IEnumerable<ImorTag> GetTagsForImage(Uri image)
        {
            var tags = new List<ImorTag>();

            var graph = DatabaseInitializer.Initialize();

            var imageNode = graph.GetUriNode(image);

            var hasA = graph.GetUriNode(new Uri(ImorEnum.HasA));

            var triplesForNode = graph.GetTriplesWithSubjectPredicate(imageNode, hasA);

            foreach (var triple in triplesForNode)
            {
                var tag = new ImorTag
                {
                    Uri = triple.Subject.ToString()
                };

                var tagProperties = graph.GetTriplesWithSubject(triple.Object);

                foreach (var property in tagProperties)
                {
                    if (property.Predicate.ToString() == ImorEnum.TagLabel)
                    {
                        tag.Label = property.Object.AsValuedNode().AsString();
                    }

                    if (property.Predicate.ToString() == ImorEnum.Description)
                    {
                        tag.Description = property.Object.AsValuedNode().AsString();
                    }
                }

                tags.Add(tag);
            }
            
            return tags;
        }

        public IEnumerable<ImorTag> GetAllTags()
        {
            var tags = new List<ImorTag>();

            var graph = DatabaseInitializer.Initialize();
            
            var tagNode = graph.GetUriNode(new Uri(ImorEnum.Tag));
            
            var tagsTriples = graph.GetTriplesWithObject(tagNode);

            foreach (var tagsTriple in tagsTriples.Where(x => x.Predicate.ToString() == ImorEnum.RdfType))
            {
                var tagProperties = graph.GetTriplesWithSubject(tagsTriple.Subject);

                var tag = new ImorTag()
                {
                    Uri = tagsTriple.Subject.ToString()
                };

                foreach (var property in tagProperties)
                {
                    if (property.Predicate.ToString() == ImorEnum.TagLabel)
                    {
                        tag.Label = property.Object.AsValuedNode().AsString();
                    }

                    if (property.Predicate.ToString() == ImorEnum.Description)
                    {
                        tag.Description = property.Object.AsValuedNode().AsString();
                    }
                }

                tags.Add(tag);
            }

            return tags;
        }

        public ImorTag GetTagByUri(Uri uri)
        {
            var graph = DatabaseInitializer.Initialize();

            var tagNode = graph.GetUriNode(uri);

            if (tagNode == null)
            {
                return null;
            }

            var properties = graph.GetTriplesWithSubject(tagNode);

            var tag = new ImorTag()
            {
                Uri = uri.OriginalString
            };

            foreach (var property in properties)
            {
                if (property.Predicate.ToString() == ImorEnum.TagLabel)
                {
                    tag.Label = property.Object.AsValuedNode().AsString();
                }

                if (property.Predicate.ToString() == ImorEnum.Description)
                {
                    tag.Description = property.Object.AsValuedNode().AsString();
                }
            }

            return tag;
        }
    }
}