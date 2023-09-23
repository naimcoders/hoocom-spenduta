import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { lazy } from 'react'
import SuspenseElement from '../components/SuspenseElement'

const Home = lazy(() => import('@/pages/Index'))
const AboutUs = lazy(() => import('@/pages/aboutus/Index'))
const Services = lazy(() => import('@/pages/services/Index'))
const ContactUs = lazy(() => import('@/pages/contactus/Index'))
const LoginPage = lazy(() => import('@/pages/login/Index'))
const HomeAdmin = lazy(() => import('@/pages/admin/Index'))

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
  {
    path: '/hubungi-kami',
    element: (
      <SuspenseElement>
        <ContactUs />
      </SuspenseElement>
    )
  },
  {
    path: '/masuk',
    element: (
      <SuspenseElement>
        <LoginPage />
      </SuspenseElement>
    )
  },
  {
    path: '/admin',
    element: (
      <SuspenseElement>
        <HomeAdmin />
      </SuspenseElement>
    )
  },
])

const RoutesConfig = () => {
  return <RouterProvider router={router} />
}

export default RoutesConfig