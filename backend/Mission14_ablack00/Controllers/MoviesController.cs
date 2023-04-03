using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission14_ablack00.Data;

namespace Mission14_ablack00.Controllers;

[ApiController]
[Route("[controller]")]
public class MoviesController : ControllerBase
{
    private JoelHiltonMovieCollectionContext context;

    public MoviesController(JoelHiltonMovieCollectionContext temp)
    {
        context = temp;
    }

    public IEnumerable<Movie> Get()
    {
        var movies = context.Movies.ToArray()
            .Where(x => x.Edited == "Yes");
        return (movies);
    }
}
