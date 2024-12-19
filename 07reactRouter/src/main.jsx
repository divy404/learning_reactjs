import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Layout from './layout.jsx';
import About from './components/About/About.jsx';
import User from './components/User/User.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> {/* Use `index` for default child route */}
      <Route path="about" element={<About />} />
      <Route path="user" element={<User />} />
      <Route
        path="github"
        element={<Github />}
        loader={githubInfoLoader} // Fixed typo
      />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
