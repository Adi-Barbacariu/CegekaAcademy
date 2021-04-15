namespace Homework01
{
	public class Package
	{
		public string Name { get; private set; }
		private float engineCapacity;
		private int enginePower;
		private string transmission;
		private string fuelType;
		private bool parkingSensors;
		private bool sportSeats;

		public Package(string name,float engineCapacity, int enginePower, string transmission, string fuelType, bool parkingSensors, bool sportSeats)
		{
			this.Name = name;
			this.engineCapacity = engineCapacity;
			this.enginePower = enginePower;
			this.transmission = transmission;
			this.fuelType = fuelType;
			this.parkingSensors = parkingSensors;
			this.sportSeats = sportSeats;
		}

		public string GetDetailsString()
		{
			var str = $"{this.engineCapacity}D {this.enginePower}HP {this.fuelType} {this.transmission} ({this.Name} Edition)";
			return str;
		}

		public override string ToString()
		{
			return this.Name;
		}
	}
}
