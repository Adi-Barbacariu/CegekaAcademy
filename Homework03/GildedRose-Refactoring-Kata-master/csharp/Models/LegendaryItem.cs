using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace csharp.Models
{
	class LegendaryItem : DefaultItem
	{
		public LegendaryItem(Item item)
			:base(item)
		{
			item.Quality = 80; 
		}

		public override void UpdateItem()
		{
		}
	}
}
