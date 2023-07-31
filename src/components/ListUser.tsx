import placeholderImg from "../assets/placeholderImage.png";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  image: string;
  firstname: string;
  lastname: string;
}

function ListUser({ id, image, firstname, lastname }: Props) {
  return (
    <Link
      to={`/${id}`}
      className="w-full flex items-center gap-4 px-4 py-1 border-[1px] hover:bg-gray-200"
    >
      <img
        className="w-[40px] h-[40px] rounded-full text-xs"
        src={image ? image : placeholderImg}
        alt="Profile picture"
      />
      <p className="text-base">{`${firstname} ${lastname}`}</p>
    </Link>
  );
}

export default ListUser;
