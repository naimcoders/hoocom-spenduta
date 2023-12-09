import { FC } from "react";
import CardActionParent from "./CardActionParent";
import ShowInfoStudentAndParent from "@/components/modals/ShowInfoStudentAndParent";
import { TBaseParentAndStudent } from "@/types/commonTypes";

type TCardProps = {
  students?: TBaseParentAndStudent[];
};

const CardDataParent: FC<TCardProps> = ({ students }) => {
  return (
    <section className="grid grid-cols-auto-fit gap-4">
      {students?.map((student) => (
        <section
          className="bg-white p-5 rounded-2xl flex justify-between"
          key={student.id}
        >
          <section className="flex flex-col gap-1">
            <h2 className="text-[14px] text-[#4D4D4D]">
              {student.student.nis}
            </h2>
            <h3 className="font-lexendMedium">{student.fullname}</h3>
          </section>

          <CardActionParent
            students={student}
            parentId={student.student.parentId}
          />
        </section>
      ))}

      <ShowInfoStudentAndParent />
    </section>
  );
};

export default CardDataParent;
