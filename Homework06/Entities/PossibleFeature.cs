using System;
using System.Collections.Generic;
using System.Text;

namespace Homework06.Entities
{
	class PossibleFeature
	{
		public PossibleFeature()
		{
			this.Models = new HashSet<Model>();

			this.CarInventories = new HashSet<CarInventory>();
		}

		public Guid Id { get; set; }

		public string Name { get; set; }

		public virtual ICollection<Model> Models { get; set; }

		public virtual ICollection<CarInventory> CarInventories { get; set; }
	}
}
