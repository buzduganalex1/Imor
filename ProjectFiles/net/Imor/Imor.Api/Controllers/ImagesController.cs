using System;
using System.Collections.Generic;
using Imor.Api.Contracts;
using Imor.Business;
using Imor.Database;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Imor.Api.Controllers
{
    [Route("api/Images")]
    public class ImagesController : Controller
    {
        [HttpGet]
        public IEnumerable<ImorImage> Get()
        {
            var repo = new ImagesRepository();

            return repo.GetImages();
        }

        [HttpPost]
        [Route("create")]
        public void Post([FromBody]CreateImageCommand request)
        {
                var repository = new ImagesRepository();

                var tagRepository = new TagsRepository();

                var tags = new List<ImorTag>();

                foreach (var tag in request.Tags)
                {
                    var existingTag = tagRepository.GetTagByUri(new Uri(ImorEnum.GetUri(tag)));

                    if (existingTag != null)
                    {
                        tags.Add(existingTag);
                    }
                }

                repository.InsertImage(new ImorImage
                {
                    Uri = request.Uri,
                    Description = request.Description,
                    Content = request.Content,
                    Tags = tags
                });
            }
        }
    }
