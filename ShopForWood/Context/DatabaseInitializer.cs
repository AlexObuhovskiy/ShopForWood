using ShopForWood.Models;
using System.Data.Entity;

namespace ShopForWood.Context
{
    public class DatabaseInitializer : DropCreateDatabaseIfModelChanges<DatabaseContext>
    {
        protected override void Seed(DatabaseContext context)
        {
            base.Seed(context);
        }
    }
}