using System;

namespace Homework01
{
	public class Menu
	{
		public int DisplayMenu()
		{
			Console.WriteLine("----------------------------");
			Console.WriteLine("Please choose an option:");
			Console.WriteLine();
			Console.WriteLine("1. Display total number of manufactured cars");
			Console.WriteLine("2. Display cars details");
			Console.WriteLine("3. Create a new car");
			Console.WriteLine("4. Exit");
			Console.WriteLine("----------------------------");
			var result = Console.ReadLine();

			// check if user made a valid choice
			if (result == "1" || result == "2" || result == "3" || result == "4")
			{
				return Convert.ToInt32(result);
			} else
			{
				return 0;
			}
		}

		public int DisplayCarModelMenu(string[] carModels)
		{
			Console.WriteLine("----------------------------");
			Console.WriteLine("Choose the car's model:");
			Console.WriteLine();
			for (int i = 0; i < carModels.Length; i++)
			{
				Console.WriteLine($"{i}. {carModels[i]}");
			}
			Console.WriteLine("----------------------------");
			var result = Console.ReadLine();

			// check if user made a valid choice
			int parsedResult;
			if (int.TryParse(result, out parsedResult))
			{
				// value is held in parsedResult
				if (parsedResult >= 0 && parsedResult < carModels.Length)
				{
					return parsedResult;
				}

				Console.ForegroundColor = ConsoleColor.Green;
				Console.WriteLine("Invalid choice");
				Console.ForegroundColor = ConsoleColor.White;

				return -1;
			} else
			{
				// result was not a number
				return -1;
			}

		}

		public int DisplayCarPackageMenu(PackageType[] carPackages)
		{
			Console.WriteLine("---------------------------");
			Console.WriteLine("Choose the car's package:");
			Console.WriteLine();
			for (int i = 0; i < carPackages.Length; i++)
			{
				Console.WriteLine($"{i}. {carPackages[i].Name}");
			}
			Console.WriteLine("----------------------------");
			var result = Console.ReadLine();

			// check if user made a valid choice
			int parsedResult;
			if (int.TryParse(result, out parsedResult))
			{
				// value is held in parsedResult
				if (parsedResult >= 0 && parsedResult < carPackages.Length)
				{
					return parsedResult;
				}

				Console.ForegroundColor = ConsoleColor.Green;
				Console.WriteLine("Invalid choice");
				Console.ForegroundColor = ConsoleColor.White;

				return -1;
			} else
			{
				// result was not a number
				return -1;
			}
		}
	}
}
