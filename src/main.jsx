// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import CreateTrip from './create-trip/index.jsx'
// import Header from './components/custom/Header.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/create-trip',
//     element: <CreateTrip />
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Header />
//     {/* <div className="animated-bg fixed -z-10 inset-0 opacity-100" /> */}
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateRecipe from './create-recipe/index.jsx'
import RootLayout from './components/custom/Layout.jsx'
import ViewRecipe from './view-recipe/[recipeId]/index.jsx'
import MyRecipes from './my-recipes/index.jsx'


// Create a router with the routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'create-recipe',
        element: <CreateRecipe />
      },
      {
        path: 'view-recipe/:recipeId',
        element: <ViewRecipe />
      },
      {
        path: 'my-recipes',
        element: <MyRecipes />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)