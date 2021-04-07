using System;
using System.Collections.Generic;
using System.Text;

namespace Homework06.Entities
{
	class PotentialCustomer
	{
		public PotentialCustomer()
		{
			this.Models = new HashSet<Model>();
		}

		public Guid Id { get; set; }

		public string Name { get; set; }

		public virtual ICollection<Model> Models { get; set; }
	}
}
