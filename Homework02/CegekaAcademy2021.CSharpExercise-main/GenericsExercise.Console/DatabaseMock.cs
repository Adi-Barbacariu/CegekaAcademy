using System.Collections.Generic;

namespace GenericsExercise.Console
{
	public class DatabaseMock
    {
        private readonly Persistence database = new Persistence();

        public void AddItem<T>(T item) where T : IEntity
        {
            this.database.InsertAsync<T>(item);
        }

        public IEnumerable<T>  GetItems<T>() where T : IEntity
        {
            return this.database.GetAllAsync<T>().Result;
        }
    }
}