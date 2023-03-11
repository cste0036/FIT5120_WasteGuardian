using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using FIT5120_WasteGuardian.Models;
using Microsoft.AspNetCore.Authorization;

namespace FIT5120_WasteGuardian.Controllers;

[Authorize] // Display website only to authorized users
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }
    
    public IActionResult Index()
    {
            return View();
    }

    public IActionResult Game()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

