using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace csharp.Models
{
	public class DefaultItem
	{
		protected readonly Item item;

		public DefaultItem(Item item)
		{
			this.item = item;
		}

		public int GetSellIn()
		{
			return this.item.SellIn;
		}

		public int GetQuality()
		{
			return this.item.Quality;
		}
		
		// default behavior of an item
		public virtual void UpdateItem()
		{
			//At the end of each day our system lowers both values for every item
			item.SellIn--;
			item.Quality--;

			// if the sell by date has passed, Quality degrades twice as fast
			if (item.SellIn <= 0)
			{
				item.Quality--;
			}

			// The Quality of an item is never negative
			if (item.Quality < 0)
			{
				item.Quality = 0;
			}
		}
	}
}
