using System.Web;
using System.Web.Mvc;

namespace CURRICULAM_VITAE
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
