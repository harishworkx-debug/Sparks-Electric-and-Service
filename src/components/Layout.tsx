import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MobileCallBar from './MobileCallBar';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main key={location.pathname} className="flex-1 pb-16 lg:pb-0 animate-fade-in">
        <Outlet />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
