using System;
using System.Collections.Generic;
using System.Text;

namespace Homework06.Entities
{
	class Model
	{
		public Model()
		{
			this.PossibleFeatures = new HashSet<PossibleFeature>();

			this.PotentialCustomers = new HashSet<PotentialCustomer>();
		}

		public Guid Id { get; set; }
		
		public string Name { get; set; }

		public Brand Brand { get; set; }

		public virtual ICollection<PossibleFeature> PossibleFeatures { get; set; }

		public virtual ICollection<PotentialCustomer> PotentialCustomers { get; set; }
	}
}
