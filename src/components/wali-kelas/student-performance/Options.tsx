import Loading from "@/components/Loading";
import OptionLessons from "@/components/options/OptionLessons";
import {
  TResLesson,
  useFindManyLessonsByClassAndPeriod,
} from "@/hooks/use-student-performance";

const AttentionComponent = () => {
  return (
    <section className="flex flex-col gap-4">
      <p className="text-[#4D4D4D] text-12px">
        *Pilihan mata pelajaran di bawah ini berdasarkan penilaian setiap guru
        mapel.
      </p>
      <p className="text-[#4D4D4D] text-12px">
        *Apabila tidak terdapat data penilaian, berarti guru mapel yang
        bersangkutan belum menentukan bobot penilaian.
      </p>
    </section>
  );
};

const transformLessonProperty = (lessons: TResLesson[]) => {
  return lessons.map(({ lessonId }) => ({
    ["lesson"]: lessonId,
  }));
};

const Options = () => {
  const { data, isLoading } = useFindManyLessonsByClassAndPeriod();

  const lessons = data?.data ?? [];
  const newLessons = transformLessonProperty(lessons);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="flex flex-col gap-6 851px:px-56 px-5">
          <AttentionComponent />
          <section className="flex flex-col gap-2">
            <h2 className="text-15px">Mata pelajaran</h2>
            <OptionLessons lessons={newLessons} />
          </section>
        </section>
      )}
    </>
  );
};

export default Options;
