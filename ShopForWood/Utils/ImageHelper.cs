using System.Linq;
using System.Web;

namespace ShopForWood.Utils
{
    public class ImageHelper
    {
        /// <summary>
        /// Saves image from request for good
        /// </summary>
        /// <param name="goodId"></param>
        /// <param name="files"></param>
        /// <returns></returns>
        public static string SaveImageForGood(int goodId, HttpFileCollection files)
        {
            string imageName = string.Empty;
            if (files.Count > 0)
            {
                foreach (string file in files)
                {
                    var postedFile = files[file];
                    var imageType = postedFile.FileName.Split('.').Last();
                    imageName = goodId + "." + imageType;
                    var filePath = HttpContext.Current.Server.MapPath($"~/Images/Goods/{imageName}");
                    postedFile.SaveAs(filePath);
                }
            }

            return imageName;
        }
    }
}