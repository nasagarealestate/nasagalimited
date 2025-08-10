import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
