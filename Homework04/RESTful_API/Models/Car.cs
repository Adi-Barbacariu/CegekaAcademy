using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RESTful_API.Models
{
	public enum TransmissionType
	{
		Automatic,
		Manual,
		Electric
	}

	public class Car
	{
		public int Id { get; set; }
		public string Brand { get; set; }
		public string Model { get; set; }
		public int Year { get; set; }
		public int HorsePower { get; set; }
		public TransmissionType Transmission { get; set; }
		public int Price { get; set; }
		public List<Link> Links { get; set; }

		public Car(int id, string brand, string model, int year, int horsePower, TransmissionType transmission, int price)
		{
			Id = id;
			Brand = brand;
			Model = model;
			Year = year;
			HorsePower = horsePower;
			Transmission = transmission;
			Price = price;
			this.Links = new List<Link>();
			CreateLinksForCar();
		}

		public void CreateLinksForCar()
		{
			this.Links.Clear();
			this.Links.Add(new Link($"/api/cars/{this.Id}", "self", "GET"));
			this.Links.Add(new Link($"/api/cars/{this.Id}", "delete_car", "DELETE"));
			this.Links.Add(new Link($"/api/cars/{this.Id}", "update_car", "PUT"));
		}

		public override string ToString()
		{
			return $"{Brand} {Model} {Year} {HorsePower}HP {Transmission}";
		}
	}
}
