using System;
using Homework06.Database;
using Microsoft.EntityFrameworkCore;
using Homework06.Entities;

namespace Homework06
{
	class Program
	{
		static void Main(string[] args)
		{
			// insert the connection strings

			var brandEntityFrameworkRepository = new EntityFrameworkRepository<Brand>();

			var brandMongoDBRepository = new MongoDBRepository<Brand>();

			brandMongoDBRepository.Insert( new Brand { Name = "Audi" } );
		}

	}
}
