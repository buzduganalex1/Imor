using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Imor.Api.Contracts;
using Imor.Client.Tests;
using Newtonsoft.Json;

namespace Imor.Client
{
    class Program
    {
        static void Main(string[] args)
        {
            //new TagsRepositoryTests().Run();
            //new ImageRepositoryTests().Run();
            new ApiTests().Run();
        }
    }
}
