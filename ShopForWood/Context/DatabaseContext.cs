using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ShopForWood.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext() : base ("DefaultConnection")
        {

        }

        public DbSet<Good> Goods { get; set; }
    }
}