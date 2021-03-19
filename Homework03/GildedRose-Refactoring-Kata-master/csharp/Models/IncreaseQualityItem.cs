using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace csharp.Models
{
	class IncreaseQualityItem : DefaultItem
	{
		public IncreaseQualityItem(Item item)
			: base(item)
		{
		}

		// increases in Quality the older it gets
		public override void UpdateItem()
		{
			item.SellIn--;

			// The Quality of an item is never more than 50
			if (item.Quality < 50)
			{
				item.Quality++;
			}
		}
	}
}
