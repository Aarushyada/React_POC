// // seo implementation 
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import NotFoundPage from './pages/NotFoundPage';
// import ProfilePage from './pages/ProfilePage';
// import ProfilesPage from './pages/ProfilesPage';
// import { Helmet, HelmetProvider } from 'react-helmet';

// import './index.css';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: '/profiles',
//     element: <ProfilesPage />,
//     children: [
//       {
//         path: '/profiles/:profileId',
//         element: <ProfilePage />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <HelmetProvider>
//       <RouterProvider router={router} />
//       <Helmet>
//         <title>REPORT PAGE</title>
//         {/*  metadata */}
//       </Helmet>
//     </HelmetProvider>
//   </React.StrictMode>,
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import ProfilesPage from './pages/ProfilesPage';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profiles',
    element: <ProfilesPage />,
    children: [
      {
        path: '/profiles/:profileId',
        element: <ProfilePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);


