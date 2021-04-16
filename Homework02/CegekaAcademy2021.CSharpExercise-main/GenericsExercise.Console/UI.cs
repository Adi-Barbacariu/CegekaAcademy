using System.Collections.Generic;

namespace GenericsExercise.Console
{
	public class UI
	{
        // todo: make a dictionary with main menu options and use it here and in switch in program.cs

        public static string GetUserInputOnMainMenu()
		{
            System.Console.WriteLine("------------------------");
            System.Console.WriteLine("Choose an option:");
            System.Console.WriteLine("1. Display all students");
            System.Console.WriteLine("2. Display all universities");
            System.Console.WriteLine("3. Add a new student");
            System.Console.WriteLine("4. Add a new university");
            System.Console.WriteLine("5. Exit");
            System.Console.WriteLine("------------------------");
            
            string input = System.Console.ReadLine();

            return input;
        }

        public static Dictionary<string, string> GetUserInputOnNewItemMenu<T>(T item) where T : IEntity 
        {
            var props = item.GetType().GetProperties();

            var itemData = new Dictionary<string, string>();

			foreach (var prop in props)
			{
                    System.Console.WriteLine($"Enter {prop.Name}:");
                    var propValue = System.Console.ReadLine();
                    itemData.Add(prop.Name, propValue);
            }

            return itemData;
        }

        public static void PrintItemsOnConsole<T>(IEnumerable<T> items) where T : IEntity
		{
			foreach (var item in items)
			{
                ConsoleWritelineGreen(item.ToString());
			}
		}

        public static void ConsoleWritelineGreen(string message)
		{
            System.Console.ForegroundColor = System.ConsoleColor.Green;
            System.Console.WriteLine($"{message}");
            System.Console.ForegroundColor = System.ConsoleColor.White;
        }

        public static void ConsoleWritelineRed(string message)
        {
            System.Console.ForegroundColor = System.ConsoleColor.Red;
            System.Console.WriteLine($"{message}");
            System.Console.ForegroundColor = System.ConsoleColor.White;
        }

    }
}