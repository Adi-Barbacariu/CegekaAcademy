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

		//increases in Quality as its SellIn value approaches;
		public override void UpdateItem()
		{

			item.SellIn--;

			if (item.Quality < 50 && item.SellIn > 10)
			{
				item.Quality++;
			}

			if (item.SellIn <= 5) //Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less
			{
				item.Quality += 3;
			} else if (item.SellIn <= 10)
			{
				item.Quality += 2;
			} 

			if (item.Quality > 50) //The Quality of an item is never more than 50
			{
				item.Quality = 50;
			}

			if (item.SellIn <= 0) //Quality drops to 0 after the concert
			{
				item.Quality = 0;
			}
		}
	}
}
