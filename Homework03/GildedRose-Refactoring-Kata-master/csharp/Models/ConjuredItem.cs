using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace csharp.Models
{
	class ConjuredItem : DefaultItem
	{
		public ConjuredItem(Item item)
			:base(item)
		{
		}

		//degrades in Quality twice as fast as normal items
		public override void UpdateItem()
		{
			
			item.SellIn--;

			if (item.SellIn <= 0)
			{
				item.Quality -= 4;
			}
			else
			{
				item.Quality -= 2;
			}

			if (item.Quality < 0)
			{
				item.Quality = 0;
			}
		}
	}
}
