using System.Collections.Generic;

namespace GenericsExercise.Console
{
	public class DB
    {
        private readonly Persistence db = new Persistence();

        // add a new item to db
        public void AddItem<T>(T item) where T : IEntity
        {
            this.db.InsertAsync<T>(item);
        }

        // display on console all items of same type from db
        public IEnumerable<T>  ReadItems<T>() where T : IEntity
        {
            return this.db.GetAllAsync<T>().Result;
        }
    }
}