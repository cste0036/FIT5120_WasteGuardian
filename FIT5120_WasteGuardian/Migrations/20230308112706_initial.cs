using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FIT5120_WasteGuardian.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "KerbsideServices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Year = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Service = table.Column<string>(type: "TEXT", nullable: false),
                    Collected = table.Column<int>(type: "INTEGER", nullable: false),
                    Sorted = table.Column<int>(type: "INTEGER", nullable: false),
                    Contaminated = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KerbsideServices", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WasteCollecteds",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Year = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Type = table.Column<string>(type: "TEXT", nullable: false),
                    Collected = table.Column<int>(type: "INTEGER", nullable: false),
                    Sorted = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WasteCollecteds", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "KerbsideServices");

            migrationBuilder.DropTable(
                name: "WasteCollecteds");
        }
    }
}
