import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from '../Layout/MainLayout/MainLayout'
import Home from '../pages/Home/Home'
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        }
      ]
    }
  ])

  return <SkeletonTheme baseColor="#ddd" highlightColor="#04AA6D">  <RouterProvider router={router}/> </SkeletonTheme>
}

export default App
