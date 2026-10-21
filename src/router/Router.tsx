// src/router/Router.tsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout.tsx';
import Home from '../screens/Home.tsx';
import Projects from '../screens/Projects.tsx';
import Contact from '../screens/Contact.tsx';

export const createRouter = (darkMode: boolean, toggleDarkMode: () => void) =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'projects',
          element: <Projects />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
      ],
    },
  ]);