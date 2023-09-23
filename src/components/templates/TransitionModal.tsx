import { Fragment, FC, ReactNode } from 'react'
import { Transition, Dialog } from '@headlessui/react'

type ModalComponentProps = {
  title: string
  isOpenModal: boolean
  isCloseModal: () => void
}

type ChildrenProps = ModalComponentProps & {
  children: ReactNode
}

const TransitionModal: FC<ChildrenProps> = ({
  children,
  title,
  isOpenModal,
  isCloseModal
}) => {
  return (
    <Transition appear show={isOpenModal} as={Fragment}>
      <Dialog as="section" className="relative z-10" onClose={isCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h2"
                  className="text-18px font-lexendMedium leading-6 text-secondary capitalize"
                >
                  { title }
                </Dialog.Title>

                { children }

                <div className="flex justify-center">
                  <button
                    type="button"
                    className="none-highlight inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={isCloseModal}
                  >
                    Batal
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default TransitionModal