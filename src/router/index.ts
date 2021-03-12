import LogIn from "../pages/auth/login";
import QuoteGenerator from "../pages/QuoteGenerator";

const router: object[] = [
  {
    path: '/quotes',
    component: QuoteGenerator,
    exact: true
  },
  {
    path: '/',
    component: LogIn,
    exact: true
  }
];

export default router;