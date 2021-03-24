using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RESTful_API.Models;

namespace RESTful_API.Controllers
{
	[Route("api/[controller]")] //  /api/cars
	[ApiController]
	public class CarsController : Controller
	{
		List<Car> cars = Database.cars;

		[HttpGet] //  /api/cars
		public ActionResult ReadCars()
		{
			if (!cars.Any())
				return NotFound();

			return Ok(cars);
		}

		[HttpGet("{id}")] //  /api/cars/{id}
		public ActionResult ReadCar(int id)
		{
			if (!cars.Any(car => car.Id == id))
				return NotFound();

			return Ok(cars.Find(car => car.Id == id));
		}

		[HttpPost] //  /api/cars
		public ActionResult CreateCar([FromBody] Car car)
		{
			if (cars.Any(c => c.Id == car.Id))
				return BadRequest();

			car.CreateLinksForCar();
			
			cars.Add(car);

			return Ok(cars);
		}

		[HttpPut("{id}")] //  /api/cars/{id}
		public ActionResult UpdateCar(int id,[FromBody] Car car)
		{

			if (!cars.Any(car => car.Id == id))
				return NotFound();

			car.CreateLinksForCar();
			cars[cars.FindIndex(car => car.Id == id)] = car;

			return Ok(cars);
		}

		[HttpDelete("{id}")] //  /api/cars/{id}
		public ActionResult DeleteCar(int id)
		{
			if (!cars.Any(car => car.Id == id))
				return NotFound();
			
			cars.RemoveAt(cars.FindIndex(car => car.Id == id));

			return Ok(cars);
		}
	}
}
