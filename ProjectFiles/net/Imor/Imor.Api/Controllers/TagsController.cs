using System;
using System.Collections.Generic;
using Imor.Business;
using Imor.Database;
using Microsoft.AspNetCore.Mvc;

namespace Imor.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/tags")]
    public class TagsController : Controller
    {
        [HttpGet("all")]
        public IEnumerable<ImorTag> Get()
        {
            var repo = new TagsRepository();

            return repo.GetAllTags();
        }

        [HttpGet("forImageUri")]
        public IEnumerable<ImorTag> GetTagsForImage(string imageUri)
        {
            var repo = new TagsRepository();

            return repo.GetTagsForImage(new Uri(imageUri));
        }
    }
}