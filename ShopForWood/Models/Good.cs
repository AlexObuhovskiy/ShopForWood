using System;
using System.ComponentModel.DataAnnotations;

namespace ShopForWood.Models
{
    public class Good
    {
        [Key]
        public int GoodId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public enum GoodType
    {

    }
}