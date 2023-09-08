import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { lazy } from 'react'
import SuspenseElement from './components/SuspenseElement'

const Home = lazy(() => import('@/pages/Index'))
const AboutUs = lazy(() => import('@/pages/aboutus/Index'))
const Services = lazy(() => import('@/pages/services/Index'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SuspenseElement>
        <Home />
      </SuspenseElement>
    )
  },
  {
    path: '/tentang-kami',
    element: (
      <SuspenseElement>
        <AboutUs />
      </SuspenseElement>
    )
  },
  {
    path: '/layanan',
    element: (
      <SuspenseElement>
        <Services />
      </SuspenseElement>
    )
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App