using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CURRICULAM_VITAE.Controllers
{
    public class CVController : Controller
    {
        // GET: CV
        public ActionResult Cv()
        {
            return View();
        }
    }
}