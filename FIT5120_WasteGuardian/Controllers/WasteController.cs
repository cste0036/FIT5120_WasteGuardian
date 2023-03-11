using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FIT5120_WasteGuardian.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FIT5120_WasteGuardian.Controllers
{
    [Authorize]
    public class WasteController : Controller
    {
        private readonly WasteDbContext _context;

        public WasteController(WasteDbContext context)
        {
            this._context = context;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            var wastes = _context.WasteCollecteds.ToList();
            return View(wastes);
        }
    }
}

