using RomanticWeb;
using RomanticWeb.Entities;
using RomanticWeb.Mapping.Attributes;

namespace DatabaseAspNet
{
    [Class("imor:Image")]
    public class Image : IEntity
    {
        [Property("imor:description")]
        public string Description { get; set; }

        public EntityId Id { get; }

        public IEntityContext Context { get; }
    }
}