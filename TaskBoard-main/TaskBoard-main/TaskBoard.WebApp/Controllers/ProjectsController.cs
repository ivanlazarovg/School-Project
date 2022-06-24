using Microsoft.AspNetCore.Mvc;
using System.Linq;

using TaskBoard.Data;
using TaskBoard.WebApp.Models;
using TaskBoard.WebApp.Models.Task;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


namespace TaskBoard.WebApp.Controllers
{
    [Authorize]
    public class ProjectsController : Controller
    {

        private readonly ApplicationDbContext dbContext;
        public ProjectsController(ApplicationDbContext context)
        {
            this.dbContext = context;
        }


        public IActionResult All()
        {
            var projects = this.dbContext.Projects
                .Select(p => new ProjectViewModel()
                {
                    Id = p.Id,
                    Title = p.Title,
                    Description = p.Description
                });
            return View(projects);
        }
    }
}
