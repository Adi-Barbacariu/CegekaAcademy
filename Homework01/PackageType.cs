namespace Homework01
{
	public class PackageType
	{
		public string Name { get; private set; }
		private float engineCapacity;
		private int enginePower;
		private string transmission;
		private string fuelType;
		private bool parkingSensors;
		private bool sportSeats;

		public PackageType(string name,float engineCapacity, int enginePower, string transmission, string fuelType, bool parkingSensors, bool sportSeats)
		{
			this.Name = name;
			this.engineCapacity = engineCapacity;
			this.enginePower = enginePower;
			this.transmission = transmission;
			this.fuelType = fuelType;
			this.parkingSensors = parkingSensors;
			this.sportSeats = sportSeats;
		}

		// returns a string with details of the package
		public string GetDetailsString()
		{
			var str = $"{this.engineCapacity}D {this.enginePower}HP {this.fuelType} {this.transmission} ({this.Name} Edition)";
			return str;
		}
	}
}
