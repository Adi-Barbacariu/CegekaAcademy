using System;
using System.Collections.Generic;
using System.Text;
using Homework06.Interfaces;
using MongoDB.Driver;
using System.Linq;

namespace Homework06
{
	public class MongoDBRepository<TEntity> : IRepository<TEntity>
		where TEntity : class, IEntity
	{
		private readonly IMongoDatabase database;

		private IMongoCollection<TEntity> collection => database.GetCollection<TEntity>(typeof(TEntity).Name);

		public MongoDBRepository()
		{
			var dbClient = new MongoClient("add the connection string here");
			database = dbClient.GetDatabase("CarDealer");
		}

		public void Insert(TEntity entity)
		{
			collection.InsertOne(entity);
		}

		public TEntity GetById(Guid id)
		{
			return collection.Find(e => e.Id == id).SingleOrDefault();
		}

		public IEnumerable<TEntity> GetByAll()
		{
			return collection.Find(e => true).ToEnumerable();
		}

		public void Delete(TEntity entity)
		{
			collection.DeleteOne(e => e.Id == entity.Id);
		}

		public void Update(TEntity entity)
		{
			collection.ReplaceOne(e => e.Id == entity.Id, entity);
		}
	}
}
