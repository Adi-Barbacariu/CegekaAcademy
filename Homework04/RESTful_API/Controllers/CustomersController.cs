using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RESTful_API.Models;

namespace RESTful_API.Controllers
{
	[Route("api/[controller]")] //  /api/customers
	[ApiController]
	public class CustomersController : Controller
	{
		List<Customer> customers = DatabaseMock.customers;
	    List<Car> cars = DatabaseMock.cars;

		[HttpGet("params")] //  /api/customers/params?page={page}&&car_brand={car_brand}
		public ActionResult ReadCustomers(int page, string car_brand)
		{
			var pageSize = 3;

			var formatStringCarBrand = car_brand.First().ToString().ToUpper() + car_brand.Substring(1).ToLower();
			
			var results = new List<Customer>();

			foreach (var customer in customers)
			{
				if (customer.OwnedCars.Any(car => car.Brand == formatStringCarBrand))
					results.Add(customer);
			}

			if (!results.Any())
			{
				return NotFound();
			}

			var resultsPage = results.Skip(page * pageSize).Take(pageSize).ToList();

			return Ok(resultsPage);
		}

		[HttpGet("{id}")] //  /api/customers/{id}
		public ActionResult ReadCustomer(int id)
		{
			if (customers.Any(c => c.Id == id))
			{
				var customer = customers[customers.FindIndex(customer => customer.Id == id)];

				return Ok(customer);
			}

			return NotFound();
		}

		[HttpGet("{id}/buy/{carId}")] //  /api/customers/{id}/buy/{carId}
		public ActionResult BuyCar(int id, int carId)
		{
			if (customers.Any(c => c.Id == id))
			{
				var foundCustomer = customers[customers.FindIndex(c => c.Id == id)];

				foundCustomer.BuyCar(carId, cars);

				return Ok(foundCustomer);
			}

			return NotFound();
		}

		[HttpPost] //  /api/customers
		public ActionResult CreateCustomer([FromBody] Customer newCustomer)
		{
			if (customers.Any(c => c.Id == newCustomer.Id))
				return BadRequest();

			newCustomer.OwnedCars.Clear();
			newCustomer.CreateLinksForCustomer();

			customers.Add(newCustomer);

			return Ok(newCustomer);
		}

		[HttpDelete("{id}")] //  /api/customers/{id}
		public ActionResult DeleteCustomer(int id)
		{
			if (!customers.Any(c => c.Id == id))
				return NotFound();

			customers.RemoveAt(customers.FindIndex(c => c.Id == id));
			return Ok(customers);
		}

	}
}
