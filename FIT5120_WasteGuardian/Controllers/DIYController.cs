using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FIT5120_WasteGuardian.Controllers
{
    [Authorize]
    public class DIYController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Clothes()
        {
            return View();
        }

        public IActionResult Plastic()
        {
            return View();
        }

        public IActionResult Glass()
        {
            return View();
        }
    }
}
