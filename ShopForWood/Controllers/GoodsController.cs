using ShopForWood.Models;
using System.Data.Entity.Infrastructure;
using System;
using System.Web.Http;
using System.Web.Http.Description;
using System.Data.Entity;
using System.Net;
using System.Linq;

namespace ShopForWood.Controllers
{
    public class GoodsController : ApiController
    {
        private DatabaseContext db = new DatabaseContext();

        //Creating a method to return Json data   
        [HttpGet]
        public IHttpActionResult Get()
        {
            try
            {
                //Prepare data to be returned using Linq as follows  
                var result = db.Goods;

                return Ok(result);
            }
            catch (Exception)
            {
                //If any exception occurs Internal Server Error i.e. Status Code 500 will be returned  
                return InternalServerError();
            }
        }

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

        [ResponseType(typeof(void))]
        public IHttpActionResult PutGood([FromBody] Good good)
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

        // POST: api/Goods
        [ResponseType(typeof(Good))]
        [HttpPost]
        public IHttpActionResult PostGood([FromBody] Good good)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Goods.Add(good);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = good.GoodId }, good);
        }

        // DELETE: api/Goods/{id}
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

        private bool GoodExists(int id)
        {
            return db.Goods.Count(e => e.GoodId == id) > 0;
        }
    }
}
