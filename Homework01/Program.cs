using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System;

namespace Homework01
{
	class Program
	{
		static void Main(string[] args)
		{
			string[] models = { "Mercedes", "Audi", "Tesla", "Smart", "Volvo", "Toyota" };
			Package[] packages =
		   {
			new Package("Standard", 2.0f, 120, "automatic", "Diesel", false, false),
			new Package("Sport", 2.5f, 200, "manual", "Diesel", false, true),
			new Package("Comfort", 2.0f, 165, "automatic", "Diesel", true, false)
			};

			var Cars = new CarList();	 
			var Menu = new Menu();

			// menu
			int userInput;
			do
			{
				userInput = Menu.DisplayMenu();

				switch (userInput)
				{
					case 1:
						Cars.PrintAmountOfCars();
						break;
					case 2:
						Cars.PrettyPrintCars();
						break;
					case 3:
						// get the model index
						int modelIndex = Menu.DisplayCarModelMenu(models);
						if (modelIndex == -1) break;

						// get the package index
						int packageIndex = Menu.DisplayCarPackageMenu(packages);
						if (packageIndex == -1) break;

						// create new car
						var car = new Car(models[modelIndex], packages[packageIndex]);

						// add the new car to the list
						Cars.AddCarToList(car);

						// print success message on console
						Console.ForegroundColor = ConsoleColor.Green;
						Console.WriteLine("Successfully added new car");
						Console.ForegroundColor = ConsoleColor.White;

						break;
					default:
						break;
				}

			} while (userInput != 4);
		}

	}
}
