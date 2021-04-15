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
			
			int userChoice;
			
			do
			{
				userChoice = Menu.GetUserChoiceOnMainMenu();

				switch (userChoice)
				{
					case 0:
						Cars.PrintAmountOfCars();
						break;
					case 1:
						Cars.PrintCarsDetails();
						break;
					case 2:
						var car = Menu.CreateNewCar(models, packages);
						
						if (car == null) break; 

						Cars.AddCarToList(car);

						Menu.ConsoleWriteLineWithGreenColor("Successfully added new car");
						break;
					default:
						break;
				}

			} while (userChoice != 3);
		}

	}
}
