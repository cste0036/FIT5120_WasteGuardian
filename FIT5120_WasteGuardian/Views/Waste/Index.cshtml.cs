using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using FIT5120_WasteGuardian.Data;
using FIT5120_WasteGuardian.Models;

namespace FIT5120_WasteGuardian.Views
{
    public class WasteInfoModel : PageModel
    {
        private readonly FIT5120_WasteGuardian.Data.WasteDbContext _context;

        public WasteInfoModel(FIT5120_WasteGuardian.Data.WasteDbContext context)
        {
            _context = context;
        }

        public IList<WasteCollected> WasteCollected { get;set; } = default!;

        public async Task OnGetAsync()
        {
            if (_context.WasteCollecteds != null)
            {
                WasteCollected = await _context.WasteCollecteds.ToListAsync();
            }
        }
    }
}
