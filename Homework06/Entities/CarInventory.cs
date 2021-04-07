using System;
using System.Collections.Generic;
using System.Text;

namespace Homework06.Entities
{
	class CarInventory
	{
		public CarInventory()
		{
			this.PossibleFeatures = new HashSet<PossibleFeature>();

			this.CustomerPurchases = new HashSet<CustomerPurchase>();
		}

		public Guid Id { get; set; }

		public Model Model { get; set; }

		public int Year { get; set; }

		public int Price { get; set; }

		public virtual ICollection<PossibleFeature> PossibleFeatures { get; set; }

		public ICollection<CustomerPurchase> CustomerPurchases { get; set; }
	}
}
