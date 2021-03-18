using System;
using System.Collections.Generic;

namespace GenericsExercise.Console
{
	public class Program
    {
        static void Main(string[] args)
        {
            var db = new DB();
            
            string userInput;

            do // while the user doesn't type '5'
            {
                userInput = UI.DisplayMenu(); // get the user's input 
                
                try
                {
                    
                    switch (userInput)
                    {
                        case "1": // Print all students 
                            System.Console.WriteLine("Students:");
                        
                            var students = db.ReadItems<Student>();
                        
                            UI.DisplayItems(students);
                        
                            break;
                    
                        case "2": // Print all universities
                            System.Console.WriteLine("Universities:");
                        
                            var universities = db.ReadItems<University>();
                        
                            UI.DisplayItems(universities);
                        
                            break;
                    
                        case "3": // add a new student
                            var createdStudent = new Student();

                            // get the user's data from user
                            List<string> studentData = UI.AddNewItemMenu(createdStudent);

                            createdStudent.Id = studentData[0];
                            createdStudent.FisrtName = studentData[1];
                            createdStudent.LastName = studentData[2];

                            // add the user to db
                            db.AddItem(createdStudent);
                        
                            break;
                    
                        case "4": // add a new uni
                            var createdUni = new University();

                            // get the uni's data from user
                            List<string> uniData = UI.AddNewItemMenu(createdUni);

                            createdUni.Id = uniData[0];
                            createdUni.Name = uniData[1];
                            createdUni.Address = uniData[2];

                            // add the uni to db
                            db.AddItem(createdUni);
                        
                            break;
                    
                        default: // do nothing on other inputs
                            break;
                    }

                }
                catch (ArgumentException ex) // id is invalid
				{
                    System.Console.WriteLine($"{ex.Message}. Id should be non-null, max 10 characters, and should not contain the character '%'");
				}
                catch (Exception ex) // other exceptions
                {
                    System.Console.WriteLine(ex.Message);
                }

            } while (userInput != "5");

        }
    }
}