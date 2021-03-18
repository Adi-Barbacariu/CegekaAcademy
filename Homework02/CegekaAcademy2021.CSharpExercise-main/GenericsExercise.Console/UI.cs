using System.Collections.Generic;

namespace GenericsExercise.Console
{
	public class UI
	{
        // main menu
        public static string DisplayMenu()
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

        // gets new item's data
        public static List<string> AddNewItemMenu<T>(T item) where T : IEntity 
        {
            // get all props of an object passed as arg 
            var props = item.GetType().GetProperties();

            List<string> values = new List<string>();

            // iterate props and add user's input to list
			foreach (var prop in props)
			{
                    System.Console.WriteLine($"Enter {prop.Name}:");
                    var value = System.Console.ReadLine();
                    values.Add(value);
            }

            return values;
        }

        // print items of the same type
        public static void DisplayItems<T>(IEnumerable<T> items) where T : IEntity
		{
			foreach (var item in items)
			{
                string output = "";

                // get all props of the object
                var props = item.GetType().GetProperties();

                // iterate props and add to string name and value of each prop
                foreach (var prop in props)
				{
                    output += $"{prop.Name}: {prop.GetValue(item)}, ";
                }
                
                // print names and values of props
                System.Console.WriteLine(output);
			}
		}

	}
}