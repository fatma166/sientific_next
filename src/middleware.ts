import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from "./i18n";
import { NextResponse, type NextRequest } from "next/server";
import clientApi from "./services/api/clientApi";

const initI18nMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: false
});


const authPages = ['/login', '/register']
const dashPages = ['/login', '/register']

const updateSession = async (req: NextRequest, res: NextResponse<unknown>) => {


  // auth codes here 
  const currentPath = req.nextUrl.pathname
  const token = req.cookies.get("token")?.value || "";

  if (token) {
    clientApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    if (authPages.includes(currentPath)) {
      return NextResponse.redirect(new URL('/', req.url))
    }

  } else {



    clientApi.defaults.headers.common['Authorization'] = ``;

    if (currentPath?.startsWith('/profile')) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    if (currentPath?.startsWith('/bookshelf')) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }
  return res;
}



export async function middleware(request: NextRequest) {

  const response = initI18nMiddleware(request);
  const locale = response.headers.get('x-middleware-request-x-next-intl-locale') || 'ar'

  clientApi.defaults.headers.common['Accept-Language'] = locale
  // response.headers.set('x-your-custom-locale', defaultLocale);
  return await updateSession(request, response);
}



// export default createMiddleware({
//   locales ,
//   defaultLocale ,
//   localePrefix: 'as-needed',
//   localeDetection: false
// });

export const config = {
  // Match only internationalized pathnames
  matcher: [
    /*
  * Match all request paths except:
  * - _next/static (static files)
  * - _next/image (image optimization files)
  * - favicon.ico (favicon file)
  * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
  * Feel free to modify this pattern to include more paths.
  */
    "/((?!_next/static|api|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ]
};