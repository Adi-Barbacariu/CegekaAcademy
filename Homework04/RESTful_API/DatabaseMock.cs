using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RESTful_API.Models;


namespace RESTful_API
{
	public class DatabaseMock
	{

		public static List<Car> cars = new List<Car>()
		{
			new Car(1, "Volkswagen", "Golf", 2011, 105, TransmissionType.Manual, 5500),
			new Car(2, "Audi", "A4", 2018, 170, TransmissionType.Automatic, 20000),
			new Car(3, "Mercedes", "S", 2016, 250, TransmissionType.Automatic, 45000),
		};

		public static List<Customer> customers = GenerateCustomers();

		private static List<Customer> GenerateCustomers()
		{
			List<Customer> customers = new List<Customer>();

			for (int i = 0; i < 20; i++)
			{
				Customer c = new Customer(i, "customer__" + i);
				AddRandomCarToCustomer(c, cars);
				customers.Add(c);
			}
			
			return customers;
		}

		private static void AddRandomCarToCustomer(Customer customer, List<Car> cars)
		{
				var random = new Random();

				var randomId = random.Next(1, cars.Count + 1);

				customer.BuyCar(randomId, cars);
		}

	}
}
