using System;
namespace FIT5120_WasteGuardian.Models
{
	public class KerbsideService
	{
		public int Id { get; set; }

		public DateTime Year { get; set; }

		public string Service { get; set; }

		public int Collected { get; set; }

		public int Sorted { get; set; }

		public int Contaminated { get; set; }

	}
}

