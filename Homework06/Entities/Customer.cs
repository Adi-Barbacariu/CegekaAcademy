using System;
using System.Collections.Generic;
using System.Text;

namespace Homework06.Entities
{
	class Customer
	{
		public Customer()
		{
			this.CustomerPurchases = new HashSet<CustomerPurchase>();
		}

		public Guid Id { get; set; }

		public string Name { get; set; }

		public ICollection<CustomerPurchase> CustomerPurchases { get; set; }
	}
}
