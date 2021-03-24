using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RESTful_API.Models
{
	public class Customer
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public List<Car> OwnedCars { get; set; }
		public List<Link> Links { get; set; }

		public Customer(int id, string name)
		{
			this.Id = id;
			this.Name = name;
			this.OwnedCars = new List<Car>();
			this.Links = new List<Link>();
			CreateLinksForCustomer();
		}

		public void BuyCar(int id, List<Car> cars)
		{
			if (cars.Any(c => c.Id == id))
				this.OwnedCars.Add(cars.Find(c => c.Id == id));
		}

		public void CreateLinksForCustomer()
		{
			this.Links.Clear();
			this.Links.Add(new Link($"/api/customers/{this.Id}", "self", "GET"));
			this.Links.Add(new Link($"/api/customers/{this.Id}/buy/{{carId}}", "buy_car", "GET"));
			this.Links.Add(new Link($"/api/customers/{this.Id}", "delete_customer", "DELETE"));
		}
	}
}
