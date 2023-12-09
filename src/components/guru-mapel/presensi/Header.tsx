import { useParseDate } from "@/custom-hook/useParseDate";
import { ClockCounterClockwise } from "@phosphor-icons/react";

type TProps = {
  title: string;
  onClick: () => void;
};

const handleDate = () => {
  const now = new Date();
  const toUtcString = now.toUTCString();
  return useParseDate(toUtcString);
};

const HeaderPresenceAndAssessment = ({ title, onClick }: TProps) => {
  const { fixedDate, fixedDay } = handleDate();

  return (
    <header className="flex items-center justify-between p-5 gap-2 bg-white 851px:px-56">
      <section className="flex flex-col gap-1">
        <section className="text-center 601px:text-[14px]">
          <h1>{title}</h1>
        </section>
        <h3 className="text-12px text-[#4D4D4D]">
          {fixedDay}, {fixedDate}
        </h3>
      </section>

      <ClockCounterClockwise
        size={20}
        onClick={onClick}
        className="cursor-pointer"
      />
    </header>
  );
};

export default HeaderPresenceAndAssessment;
