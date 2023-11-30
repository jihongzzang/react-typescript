import Home from './Home';

import About from './About';

import Header from '../components/Header';

import Footer from '../components/Footer';

const pages = {
  '/location': Home,
  '/location/about': About,
};

export default function LocationEx() {
  const { location } = window;
  const { pathname } = location;

  const Page = Reflect.get(pages, pathname) || Home;

  return (
    <div>
      <Header />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}
