using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using csharp.Models;

namespace csharp
{
	class ItemFactory
	{
		public static DefaultItem CreateItem(Item item)
		{
            DefaultItem createdItem;

            switch (item.Name)
            {
                case "Aged Brie":
                    createdItem = new IncreaseQualityItem(item);
                    break;

                case "Sulfuras, Hand of Ragnaros":
                    createdItem = new LegendaryItem(item);
                    break;

                case "Backstage passes to a TAFKAL80ETC concert":
                    createdItem = new BackstagePassItem(item);
                    break;

                case "Conjured Mana Cake":
                    createdItem = new ConjuredItem(item);
                    break;

                default:
                    createdItem = new DefaultItem(item);
                    break;
            }

            return createdItem;
        }
	}
}
