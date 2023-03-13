using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FIT5120_WasteGuardian.Controllers
{
    [Authorize]
    public class BinsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Recycling()
        {
            return View();
        }

        public IActionResult Landfill()
        {
            return View();
        }

        public IActionResult Organic()
        {
            return View();
        }
    }
}
