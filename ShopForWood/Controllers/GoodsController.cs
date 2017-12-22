using ShopForWood.Models;
using System.Data.Entity.Infrastructure;
using System;
using System.Web.Http;
using System.Web.Http.Description;
using System.Data.Entity;
using System.Net;
using System.Linq;
using ShopForWood.ViewModels;
using System.Web;
using ShopForWood.Utils;

namespace ShopForWood.Controllers
{
    [RoutePrefix("api/goods")]
    public class GoodsController : ApiController
    {
        private DatabaseContext db = new DatabaseContext();

        [Route("", Name = "GetGoods")]
        [HttpGet]
        public IHttpActionResult GetGoods()
        {
            try
            {
                var result = db.Goods.Select(GoodViewModel.ToGoodViewModel);

                return Ok(result);
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }

        [Route("{id}")]
        [ResponseType(typeof(GoodViewModel))]
        public IHttpActionResult GetGood(int id)
        {
            var good = db.Goods.Find(id);
            if (good == null)
            {
                return NotFound();
            }

            return Ok(GoodViewModel.ToGoodViewModel(good));
        }

        [Route("")]
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult EditGood([FromBody] Good good)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Entry(good).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GoodExists(good.GoodId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [Route("")]
        [ResponseType(typeof(Good))]
        [HttpPost]
        public IHttpActionResult CreateGood([FromBody] Good good)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Goods.Add(good);
            db.SaveChanges();

            return CreatedAtRoute("PostGoodImage", new { id = good.GoodId }, GoodViewModel.ToGoodViewModel(good));
        }

        [Route("{id}")]
        [ResponseType(typeof(Good))]
        [HttpDelete]
        public IHttpActionResult DeleteGood(int id)
        {
            Good good = db.Goods.Find(id);
            if (good == null)
            {
                return NotFound();
            }

            db.Goods.Remove(good);
            db.SaveChanges();

            return Ok(good);
        }

        [Route("good-image/{id}", Name = "PostGoodImage")]
        [HttpPost]
        public IHttpActionResult AddImageToGood(int id)
        {
            var good = db.Goods.Find(id);

            if (good == null)
            {
                return NotFound();
            }

            good.ImageName = ImageHelper.SaveImageForGood(good.GoodId, HttpContext.Current.Request.Files);
            db.Entry(good).State = EntityState.Modified;
            db.SaveChanges();

            return CreatedAtRoute("GetGoods", new { id }, "");
        }

        #region private methods

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GoodExists(int id)
        {
            return db.Goods.Count(e => e.GoodId == id) > 0;
        }

        #endregion
    }
}
