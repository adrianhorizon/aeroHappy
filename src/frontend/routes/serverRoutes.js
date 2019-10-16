import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

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
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    path: '**',
    component: Home,
  },
];

export default serverRoutes;
