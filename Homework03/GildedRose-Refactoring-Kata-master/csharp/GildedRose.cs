 using System.Collections.Generic;
using csharp.Models;

namespace csharp
{
    public class GildedRose
    {
        IList<Item> Items;
        public GildedRose(IList<Item> Items)
        {
            this.Items = Items;
        }

        public void UpdateQuality()
        {
			foreach (var item in this.Items)
			{
                DefaultItem currentItem = ItemFactory.CreateItem(item);

                currentItem.UpdateItem();
			}
            
        }
    }
}
