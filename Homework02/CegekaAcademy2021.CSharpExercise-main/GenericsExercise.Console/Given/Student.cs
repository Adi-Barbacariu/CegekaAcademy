namespace GenericsExercise.Console
{
    public class Student : IEntity
    {
        public string Id { get; set; }

        public string FisrtName { get; set; }
        public string LastName { get; set; }

		public override string ToString()
		{
			return $"Id: {Id}, Name: {FisrtName} {LastName}";
		}
	}
}