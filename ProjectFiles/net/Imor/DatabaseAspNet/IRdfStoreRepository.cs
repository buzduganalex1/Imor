using System.Collections.Generic;

namespace DatabaseAspNet
{
    public interface IRdfStoreRepository
    {
        string Execute(string query);

        IEnumerable<Image> GetImages(string query);
    }
}