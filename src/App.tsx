import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { lazy } from 'react'
import SuspenseElement from './components/SuspenseElement'
const LandingPage = lazy(() => import('@/pages/Index'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SuspenseElement>
        <LandingPage />
      </SuspenseElement>
    )
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
