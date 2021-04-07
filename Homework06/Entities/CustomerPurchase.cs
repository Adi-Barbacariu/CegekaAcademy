using System;
using System.Collections.Generic;
using System.Text;

namespace Homework06.Entities
{
	class CustomerPurchase
	{
		public CustomerPurchase()
		{
			this.Customers = new HashSet<Customer>();

			this.CarInventories = new HashSet<CarInventory>();
		}

		public DateTime PurchaseDate { get; set; }

		public virtual ICollection<Customer> Customers { get; set; }

		public virtual ICollection<CarInventory> CarInventories { get; set; }
	}
}
