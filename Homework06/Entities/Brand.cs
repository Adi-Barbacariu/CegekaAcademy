using System;
using System.Collections.Generic;
using System.Text;
using Homework06.Interfaces;

namespace Homework06.Entities
{
	class Brand : IEntity
	{
		public Guid Id { get; set; }

		public string Name { get; set; }
	}
}
