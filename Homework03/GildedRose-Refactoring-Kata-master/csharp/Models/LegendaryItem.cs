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
			item.Quality = 80; //its Quality is 80 and it never alters.
		}

		// legendary item, never has to be sold or decreases in Quality
		public override void UpdateItem()
		{
		}
	}
}
