import { FC, Suspense } from 'react'
import { ChildrenProps } from '@/constants/children-props'
import Loading from './Loading'

const SuspenseElement: FC<ChildrenProps> = ({ children }) => {
  return (
    <Suspense fallback={<Loading />}>
      { children }
    </Suspense>
  )
}

export default SuspenseElement