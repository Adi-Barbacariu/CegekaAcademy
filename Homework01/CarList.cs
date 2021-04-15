using System;
using System.Collections.Generic;

namespace Homework01
{
	public class CarList
	{
		public List<Car> Cars { get; private set; }

		public CarList()
		{
			this.Cars = new List<Car>();
		}

		public void AddCarToList(Car car)
		{
			this.Cars.Add(car);
		}

		// print the number of cars in the list
		public void PrintAmountOfCars()
		{
			Console.ForegroundColor = ConsoleColor.Green;
			Console.WriteLine("Total cars manufactured: " + Cars.Count);
			Console.ForegroundColor = ConsoleColor.White;
		}

		// print car's details for all cars in the list
		public void PrintCarsDetails()
		{
			if (Cars.Count == 0)
			{
				// if there are no cars, print message
				Console.ForegroundColor = ConsoleColor.Green;
				Console.WriteLine("There are no manufactured cars.");
				Console.ForegroundColor = ConsoleColor.White;
				return;
			}

			Console.ForegroundColor = ConsoleColor.Green;
			Console.WriteLine("Cars that have been manufactured:");
			foreach (var car in Cars)
			{
				car.PrintDetails();
			}
			Console.ForegroundColor = ConsoleColor.White;
		}
	}
}
