using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Mission14_ablack00.Data;

namespace Mission14_ablack00.Data;
    
public class JoelHiltonMovieCollectionContext : DbContext
    {
        public JoelHiltonMovieCollectionContext(DbContextOptions<JoelHiltonMovieCollectionContext> options) : base(options)
        {
        }

        public DbSet<Movie> Movies { get; set; }
    }
