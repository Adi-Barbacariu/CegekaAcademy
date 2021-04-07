using System;
using System.Collections.Generic;
using System.Text;

namespace Homework06.Interfaces
{
	public interface IRepository<TEntity> where TEntity : IEntity
	{
		TEntity GetById(Guid id);

		IEnumerable<TEntity> GetByAll();

		void Insert(TEntity entity);

		void Update(TEntity entity);

		void Delete(TEntity entity);
	}
}
