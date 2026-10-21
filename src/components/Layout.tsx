// src/components/Layout.tsx
import { Outlet } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

interface LayoutProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Layout({ darkMode, toggleDarkMode }: LayoutProps) {
  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}