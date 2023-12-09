import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useGeneralStore } from "@/store/generalStore";

type TLessonProps = {
  lesson: string;
};

type OptionProps = {
  lessons: TLessonProps[];
};

const OptionLessons = ({ lessons }: OptionProps) => {
  const { setSelectedLesson } = useGeneralStore();

  const objDefaultLabel = { lesson: "Pilih mapel" };
  const [newLesson, _] = useState<TLessonProps[]>([
    objDefaultLabel,
    ...lessons,
  ]);

  const [selected, setSelected] = useState(newLesson[0]);

  useEffect(() => {
    setSelectedLesson(selected.lesson);
  }, [selected.lesson]);

  return (
    <div className="w-full relative">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full rounded-lg bg-white mb-2 py-3 none-highlight pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm cursor-pointer">
            <span className="block truncate text-[#4D4D4D] text-[14px]">
              {selected.lesson}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {lessons.length < 1 ? (
                <h2 className="text-red-500 text-15px p-2">Tidak ada mapel</h2>
              ) : (
                lessons.map((lesson) => (
                  <Listbox.Option
                    key={lesson.lesson}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 text-15px none-highlight ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={lesson}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected
                              ? "font-lexendMedium"
                              : "font-lexendRegular"
                          }`}
                        >
                          {lesson?.lesson}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default OptionLessons;
