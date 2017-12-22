using ShopForWood.Models;
using System.IO;
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
                    var filePath = GetPathOfImageForGood(imageName);
                    postedFile.SaveAs(filePath);
                }
            }

            return imageName;
        }

        public static void DeleteImageForGood(string imageName)
        {
            var filePath = GetPathOfImageForGood(imageName);
            if (string.IsNullOrEmpty(filePath))
            {
                return;
            }

            FileInfo file = new FileInfo(filePath);
            if (file.Exists)
            {
                file.Delete();
            }
        }

        #region private methods

        private static string GetPathOfImageForGood(string imageName)
        {
            if (!string.IsNullOrEmpty(imageName))
            {
                return HttpContext.Current.Server.MapPath($"~/Images/Goods/{imageName}");
            }

            return string.Empty;
        }

        #endregion
    }
}