import Home from '../pages/Home';
import Login from '../pages/Login';

const serverRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '**',
    component: Home,
  },
];

export default serverRoutes;
