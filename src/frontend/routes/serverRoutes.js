import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';

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
    component: Home,
  },
];

export default serverRoutes;
