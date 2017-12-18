using ShopForWood.Models;
using System;
using System.Web.Http;
using System.Web.Http.Description;

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
    }
}
