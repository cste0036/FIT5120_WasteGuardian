using System;
using Microsoft.EntityFrameworkCore;
using FIT5120_WasteGuardian.Data;
using FIT5120_WasteGuardian.Models;

namespace FIT5120_WasteGuardian.Data
{
    public class WasteDbContext : DbContext
    {
        // Define the Database context to be connected to
        public WasteDbContext(DbContextOptions<WasteDbContext> options) : base(options)
        {

        }
        // Define the new tables to be created based on the data models of the app
        public DbSet<KerbsideService> KerbsideServices { get; set; }

        public DbSet<WasteCollected> WasteCollecteds { get; set; }
    }
}