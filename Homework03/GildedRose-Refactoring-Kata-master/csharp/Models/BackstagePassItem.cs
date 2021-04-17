using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace csharp.Models
{
	class BackstagePassItem : DefaultItem
	{
		public BackstagePassItem(Item item)
			:base(item)
		{
		}

		public override void UpdateItem()
		{

			item.SellIn--;

			if (item.Quality < 50 && item.SellIn > 10)
			{
				item.Quality++;
			}

			if (item.SellIn <= 5) 
			{
				item.Quality += 3;
			} else if (item.SellIn <= 10)
			{
				item.Quality += 2;
			} 

			if (item.Quality > 50) 
			{
				item.Quality = 50;
			}

			if (item.SellIn <= 0) 
			{
				item.Quality = 0;
			}
		}
	}
}
