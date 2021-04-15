using System;
using System.Text.RegularExpressions;

namespace Homework01
{
	public class Menu
	{
		private string[] mainMenuOptions = new string[]
		{
			"Display total number of manufactured cars",
			"Display cars' details",
			"Create a new car",
			"Exit"
		};

		public Car CreateNewCar(string[] models,Package[] packages)
		{
			int modelIndex = GetUserChoiceCarModelMenu(models);
			if (modelIndex == -1) return null;

			int packageIndex = GetUserChoiceOnCarPackageMenu(packages);
			if (packageIndex == -1) return null;

			var car = new Car(models[modelIndex], packages[packageIndex]);

			return car;
		}

		public int GetUserChoiceOnMainMenu()
		{
			var message = "Please choose an option:";

			PrintMenuOptions(message, mainMenuOptions);

			var result = Console.ReadLine();

			if (IsValidChoice(result, mainMenuOptions.Length))
			{
				return Convert.ToInt32(result);
			}

			return 0;
		}

		public void ConsoleWriteLineWithGreenColor(string message)
		{
			Console.ForegroundColor = ConsoleColor.Green;
			Console.WriteLine($"{message}");
			Console.ForegroundColor = ConsoleColor.White;
		}

		private int GetUserChoiceCarModelMenu(string[] carModels)
		{
			var message = "Choose the car's model:";

			PrintMenuOptions(message, carModels);

			var result = Console.ReadLine();

			if (IsValidChoice(result, carModels.Length))
			{
				return Convert.ToInt32(result);
			}

			return -1;
		}

		private int GetUserChoiceOnCarPackageMenu(Package[] carPackages)
		{
			var message = "Choose the car's package:";

			PrintMenuOptions<Package>(message, carPackages);

			var result = Console.ReadLine();

			if (IsValidChoice(result, carPackages.Length))
			{
				return Convert.ToInt32(result);
			}

			return -1;
		}

		private void PrintMenuOptions<T>(string message, T[] items)
		{
			Console.WriteLine("---------------------------");
			Console.WriteLine($"{message}");
			Console.WriteLine();
			for (int i = 0; i < items.Length; i++)
			{
				Console.WriteLine($"{i}. {items[i].ToString()}");
			}
			Console.WriteLine("----------------------------");
		}

		private bool IsValidChoice(string choice,int maxChoiceValue)
		{
			if (!Regex.IsMatch(choice, @"^\d+$"))
			{
				ConsoleWriteLineWithGreenColor($"You must enter a number from 0 to {maxChoiceValue - 1}");

				return false;
			}

			int parsedChoice = Convert.ToInt32(choice);

			if (parsedChoice >= 0 && parsedChoice < maxChoiceValue)
			{
				return true;
			}

			ConsoleWriteLineWithGreenColor("Invalid choice");

			return false;
		}
		
	}
}
