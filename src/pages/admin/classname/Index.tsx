import ClassnameCard from "@/components/admin/ClassnameCard";
import EmptyDatas from "@/components/EmptyDatas";
import FormCreateClass from "@/components/modals/CreateClassModal";
import { HeaderCreateData } from "@/components/headers/HeaderCreateData";
import { filterClassname } from "@/utils/filter-classname";
import { useGetClassname } from "@/hooks/use-admin";
import Loading from "@/components/Loading";

const ClassNameAdmin = () => {
  const { label7, label8, label9 } = {
    label7: "7",
    label8: "8",
    label9: "9",
  };

  const { data, isLoading } = useGetClassname();
  if (isLoading) return <Loading />;

  const classes = data?.data!;
  const filterClassOf7 = filterClassname(classes, label7);
  const filterClassOf8 = filterClassname(classes, label8);
  const filterClassOf9 = filterClassname(classes, label9);

  return (
    <section>
      <HeaderCreateData title="data kelas" labelBtn="Buat" />

      <section className="flex flex-col gap-8 py-2 mb-4">
        {filterClassOf7?.length !== 0 ? (
          <ClassnameCard
            title={`kelas ${label7}`}
            classDatas={filterClassOf7}
          />
        ) : (
          <EmptyDatas label={`Kelas ${label7}`} />
        )}

        {filterClassOf8?.length !== 0 ? (
          <ClassnameCard
            title={`kelas ${label8}`}
            classDatas={filterClassOf8}
          />
        ) : (
          <EmptyDatas label={`Kelas ${label8}`} />
        )}

        {filterClassOf9?.length !== 0 ? (
          <ClassnameCard
            title={`kelas ${label9}`}
            classDatas={filterClassOf9}
          />
        ) : (
          <EmptyDatas label={`Kelas ${label9}`} />
        )}
      </section>

      <FormCreateClass />
    </section>
  );
};

export default ClassNameAdmin;
