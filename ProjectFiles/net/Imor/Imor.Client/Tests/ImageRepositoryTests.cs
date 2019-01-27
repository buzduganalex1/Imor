using System;
using System.Collections.Generic;
using Imor.Business;
using Imor.Database;
using Newtonsoft.Json;

namespace Imor.Client.Tests
{
    public class ImageRepositoryTests
    {
        public void Run()
        {
            //this.GetImagesTest();

            this.InsertImage();
        }

        private void GetImagesTest()
        {
            var repository = new ImagesRepository();

            var results = repository.GetImages();
            
            foreach (var result in results)
            {
                Console.WriteLine(JsonConvert.SerializeObject(result));
            }
        }

        private void InsertImage()
        {
            var repository = new ImagesRepository();

            repository.InsertImage(new ImorImage()
            {
                Uri = ImorEnum.GetUri("TestImage3"),
                Description = "Test image 3",
                Content = "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ffortunedotcom.files.wordpress.com%2F2017%2F01%2Fgettyimages-632438922.jpg&w=800&q=85",
                Tags = new List<ImorTag>
                {
                    new ImorTag
                    {
                        Uri = "http://www.semanticweb.org/ImagesOntology#CatsTag",
                        Description = "This is a cat tag",
                        Label = "Cats"
                    }
                }
            });
        }
    }
}