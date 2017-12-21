using ShopForWood.Models;
using System.Data.Entity.Infrastructure;
using System;
using System.Web.Http;
using System.Web.Http.Description;
using System.Data.Entity;
using System.Net;
using System.Linq;
using ShopForWood.ViewModels;

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
                //Prepare data to be returned using Linq as follows  
                var result = db.Goods.Select(GoodViewModel.ToGoodViewModel);

                return Ok(result);
            }
            catch (Exception)
            {
                //If any exception occurs Internal Server Error i.e. Status Code 500 will be returned  
                return InternalServerError();
            }
        }

        [Route("{id}")]
        [ResponseType(typeof(Good))]
        public IHttpActionResult GetGood(int id)
        {
            Good good = db.Goods.Find(id);
            if (good == null)
            {
                return NotFound();
            }

            return Ok(good);
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
            
            return CreatedAtRoute("GetGoods", new { id = good.GoodId }, good);
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

        [Route("good-image/{id}")]
        [HttpGet]
        public IHttpActionResult GetGoodImage(int id)
        {
            var good = db.Goods.Find(id);

            if (good == null)
            {
                return NotFound();
            }

            var result = Convert.ToBase64String(good.ImageContent);

            return Ok(result);
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
