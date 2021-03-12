using System;

namespace Homework01
{
	public class Car
	{
		public string Model { get; private set; }
		public PackageType PackageType { get; private set; }

		public Car(string model, PackageType packageType)
		{
			this.Model = model;
			this.PackageType = packageType;
		}

		// print the car's details 
		public void PrettyPrint()
		{
			var detailsStr = this.PackageType.GetDetailsString(); 

			Console.WriteLine($"{Model} " + detailsStr);
		}

	}
}
