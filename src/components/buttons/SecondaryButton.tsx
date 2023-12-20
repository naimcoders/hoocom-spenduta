type TProps = {
  label: string;
  onClick?: () => void;
};

const SecondaryButton = ({ label, onClick }: TProps) => {
  return (
    <button
      className="capitalize bg-secondary text-primary p-2 rounded-lg my-2 hover:bg-blue-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
