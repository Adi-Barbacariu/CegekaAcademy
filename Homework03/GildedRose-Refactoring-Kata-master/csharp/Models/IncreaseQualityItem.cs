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

		public override void UpdateItem()
		{
			item.SellIn--;

			if (item.Quality < 50)
			{
				item.Quality++;
			}
		}
	}
}
