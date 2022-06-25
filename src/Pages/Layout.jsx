import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <Link to="/">
        <Header />
      </Link>

      <main>
        {/* Outlet will represent the "sub-route",
        the page determined by the inner part of the route */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
