import Layout from './Layout';

import Home from '../pages/Home';

import About from '../pages/About';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/about', element: <About /> },
    ],
  },
];

export default routes;