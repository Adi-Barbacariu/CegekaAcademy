using System;
using System.Collections.Generic;

namespace GenericsExercise.Console
{
	public class Program
    {
        static void Main(string[] args)
        {
            var databaseMock = new DatabaseMock();
            
            string userInput;

            do 
            {
                userInput = UI.GetUserInputOnMainMenu();  
                
                try
                {
                    
                    switch (userInput)
                    {
                        case "1": 
                            System.Console.WriteLine("Students:");
                        
                            var students = databaseMock.GetItems<Student>();
                        
                            UI.PrintItemsOnConsole(students);
                        
                            break;
                    
                        case "2": 
                            System.Console.WriteLine("Universities:");
                        
                            var universities = databaseMock.GetItems<University>();
                        
                            UI.PrintItemsOnConsole(universities);
                        
                            break;
                    
                        case "3": 
                            var student = new Student();

                            Dictionary<string, string> studentData = UI.GetUserInputOnNewItemMenu(student);

                            student.Id = studentData["Id"];
                            student.FisrtName = studentData["FisrtName"];
                            student.LastName = studentData["LastName"];

                            databaseMock.AddItem(student);
                        
                            UI.ConsoleWritelineGreen("Item successfully created.");

                            break;

                        case "4": 
                            var university = new University();

                            Dictionary<string, string> universityData = UI.GetUserInputOnNewItemMenu(university);

                            university.Id = universityData["Id"];
                            university.Name = universityData["Name"];
                            university.Address = universityData["Address"];

                            databaseMock.AddItem(university);

                            UI.ConsoleWritelineGreen("Item successfully created.");

                            break;
                    
                        default: 
                            break;
                    }

                }
                catch (ArgumentException ex) 
				{
                    var message = $"{ex.Message}. Id should be non-null, max 10 characters, and should not contain the character '%'";

                    UI.ConsoleWritelineRed(message);
				}
                catch (Exception ex) 
                {
                    UI.ConsoleWritelineRed(ex.Message);
                }

            } while (userInput != "5");

        }
    }
}