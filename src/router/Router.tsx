import { createHashRouter } from 'react-router-dom';
import Layout from '../components/Layout.js';
import Home from '../screens/Home.js';
import Projects from '../screens/Projects.js';
import Contact from '../screens/Contact.js';

export const createRouter = (darkMode: boolean, toggleDarkMode: () => void) =>
  createHashRouter([
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