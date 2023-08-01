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
  isError: boolean;
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
  isError,
}: Props) {
  return (
    <div className="bg-white w-[450px] flex flex-col items-center rounded 2bp:w-[650px] 3bp:w-full">
      <h1 className="text-lg font-medium py-3 text-center bg-blue-950 text-white w-full 4bp:text-base">
        User Details
      </h1>

      {isLoading && <Spinner />}
      {isError && (
        <h1 className="text-lg text-center font-bold my-20">No data to show</h1>
      )}

      {!isLoading && !isError && (
        <div className="w-full p-8 flex flex-col border-[1px] 2bp:grid 2bp:grid-cols-2 2bp:py-4 2bp:px-4 3bp:grid-cols-3 3bp:gap-6 4bp:flex">
          <div className="2bp:flex 2bp:items-center 2bp:justify-center 3bp:col-span-1 4bp:hidden">
            <div className="mb-8 flex flex-col items-center 2bp:mb-0 3bp:mb-4">
              <img
                className="w-[150px] h-[150px] rounded-full mb-2 text-xs border-[1px] flex items-center justify-center 3bp:w-[100px] 3bp:h-[100px] 4bp:w-[70px] 4bp:h-[70px]"
                src={image ? image : placeholderImg}
                alt="Profile image"
              />
              <p className="text-base font-bold text-center 2bp:text-sm 3bp:text-xs">
                @{username}
              </p>
            </div>
          </div>

          <div className="3bp:col-span-2 3bp:w-full">
            <div className="w-full mb-8 2bp:mb-4">
              <p className="text-sm font-bold mb-1 2bp:mb-0 2bp:text-xs">Bio</p>
              <p className="text-base 2bp:text-sm 4bp:text-xs">{about}</p>
            </div>

            <div className="w-full flex flex-col gap-3">
              <div>
                <p className="text-sm font-bold mb-1 2bp:mb-0 2bp:text-xs">
                  Full Name
                </p>
                <p className="text-base 2bp:text-sm 4bp:text-xs">
                  {firstname} {lastname}
                </p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1 2bp:mb-0 2bp:text-xs">
                  Job Title
                </p>
                <p className="text-base 2bp:text-sm 4bp:text-xs">{jobTitle}</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1 2bp:mb-0 2bp:text-xs">
                  Email
                </p>
                <p className="text-base 2bp:text-sm 4bp:text-xs">{email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserCard;
