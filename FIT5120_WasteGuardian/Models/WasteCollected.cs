using System;
namespace FIT5120_WasteGuardian.Models
{
	public class WasteCollected
	{
        public int Id { get; set; }

        public DateTime Year { get; set; }

        public string Type { get; set; }

        public int Collected { get; set; }

        public int Sorted { get; set; }
    }
}

