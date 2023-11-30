import Layout from './Layout';

import Home from '../pages/Home';

import About from '../pages/About';

import Logout from '../pages/Logout';

import Bye from '../pages/Bye';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/logout', element: <Logout /> },
      { path: '/bye', element: <Bye /> },
    ],
  },
];

export default routes;
