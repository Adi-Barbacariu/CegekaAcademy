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
		
		public virtual void UpdateItem()
		{
			item.SellIn--;
			item.Quality--;

			if (item.SellIn <= 0)
			{
				item.Quality--;
			}

			if (item.Quality < 0)
			{
				item.Quality = 0;
			}
		}
	}
}
