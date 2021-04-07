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
			var brandRepository = new EntityFrameworkRepository<Brand>();

			brandRepository.Insert( new Brand { Name = "Audi" } );
		}

	}
}
