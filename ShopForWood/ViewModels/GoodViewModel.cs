using ShopForWood.Models;

namespace ShopForWood.ViewModels
{
    public class GoodViewModel
    {
        public int GoodId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }

        public static GoodViewModel ToGoodViewModel(Good good)
        {
            var goodViewModel = new GoodViewModel
            {
                GoodId = good.GoodId,
                Description = good.Description,
                Name = good.Name,
                Price = good.Price
            };

            return goodViewModel;
        }
    }
}