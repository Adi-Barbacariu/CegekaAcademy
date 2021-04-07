using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Homework06.Entities;

namespace Homework06.Database
{
	class CarDealerContext : DbContext
	{
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(@"");
		}

		public DbSet<Brand> Brands { get; set; }

		public DbSet<Model> Models { get; set; }
		
		public DbSet<PossibleFeature> PossibleFeatures { get; set; }

		public DbSet<CarInventory> CarInventories { get; set; }

		public DbSet<Customer> Customers { get; set; }

		public DbSet<CustomerPurchase> CustomerPurchases { get; set; }

		public DbSet<PotentialCustomer> PotentialCustomers { get; set; }

	}
}
