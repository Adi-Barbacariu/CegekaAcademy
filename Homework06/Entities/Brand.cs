using System;
using System.Collections.Generic;
using System.Text;
using Homework06.Interfaces;

namespace Homework06.Entities
{
	class Brand : IEntity
	{
		public int Id { get; set; }

		public string Name { get; set; }
	}
}
