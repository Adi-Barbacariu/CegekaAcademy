using System;

namespace Homework01
{
	public class Car
	{
		public string Model { get; private set; }
		public Package PackageType { get; private set; }

		public Car(string model, Package packageType)
		{
			this.Model = model;
			this.PackageType = packageType;
		}

		// print the car's details 
		public void PrintDetails()
		{
			var detailsStr = this.PackageType.GetDetailsString(); 

			Console.WriteLine($"{Model} " + detailsStr);
		}

	}
}
