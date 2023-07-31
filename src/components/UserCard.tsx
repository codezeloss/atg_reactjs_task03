import placeholderImg from "../assets/placeholderImage.png";
import Spinner from "./Spinner.tsx";

interface Props {
  image: string;
  username: string;
  about: string;
  firstname: string;
  lastname: string;
  jobTitle: string;
  email: string;
  isLoading: boolean;
}

function UserCard({
  image,
  username,
  about,
  firstname,
  lastname,
  jobTitle,
  email,
  isLoading,
}: Props) {
  return (
    <div className="bg-white w-[450px] flex flex-col items-center rounded">
      <h1 className="text-lg font-medium py-4 text-center bg-blue-950 text-white w-full">
        User Details
      </h1>

      {isLoading && <Spinner />}

      {!isLoading && (
        <div className="w-full p-8 flex flex-col border-[1px]">
          <div className="mb-8 flex flex-col items-center">
            <img
              className="w-[150px] h-[150px] rounded-full mb-2 text-xs border-[1px]"
              src={image ? image : placeholderImg}
              alt="User profile image"
            />
            <p className="text-base font-bold text-center">@{username}</p>
          </div>

          <div className="mb-8">
            <p className="text-sm font-bold mb-1">Bio</p>
            <p className="text-base">{about}</p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <div>
              <p className="text-sm font-bold mb-1">Full Name</p>
              <p className="bg-gray-100 px-4 py-2 border-[1px]">
                {firstname} {lastname}
              </p>
            </div>
            <div>
              <p className="text-sm font-bold mb-1">Job Title</p>
              <p className="bg-gray-100 px-4 py-2 border-[1px]">{jobTitle}</p>
            </div>
            <div>
              <p className="text-sm font-bold mb-1">Email</p>
              <p className="bg-gray-100 px-4 py-2 border-[1px]">{email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserCard;
