using ShopForWood.Models;
using System.Data.Entity;

namespace ShopForWood.Context
{
    public class DatabaseInitializer : DropCreateDatabaseIfModelChanges<DatabaseContext>
    {
        protected override void Seed(DatabaseContext context)
        {
            base.Seed(context);

            var plintus = new Good
            {
                Name = "Plintus",
                Description = "Plintus description"
            };
            var nalichnik = new Good
            {
                Name = "Nalichnik",
                Description = "Nalichnik description"
            };
            context.Goods.Add(plintus);
            
            context.SaveChanges();
        }
    }
}