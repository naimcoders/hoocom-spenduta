import PersonIcon from "./templates/PersonIcon";

type TLabelProps = {
  labelAPI: number | undefined;
};

const TotalPeopleAPI = ({ labelAPI }: TLabelProps) => {
  return (
    <section className="flex items-center gap-2 cursor-default">
      <PersonIcon title="total data" />
      <h2>{labelAPI}</h2>
    </section>
  );
};

export default TotalPeopleAPI;
