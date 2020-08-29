using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebTut.Website.Models;
using WebTut.Website.Services;

namespace WebTut.Website.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        public ProductsController(JsonFileProductService productService)
        {
            this.ProductService = productService;
        }

        public JsonFileProductService ProductService { get; }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return ProductService.GetProducts();
        }

    }
}
