type TProps = {
  src: string;
  width: string;
  height: string;
  onClick?: () => void;
};

const ImageProfile = ({ src, onClick, width, height }: TProps) => {
  return (
    <img
      src={src}
      alt="profile"
      className={`${width} ${height} none-highlight object-cover img-rendering cursor-pointer rounded-50%`}
      title="img"
      onClick={onClick}
    />
  );
};

export default ImageProfile;
