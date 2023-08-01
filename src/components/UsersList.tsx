import ListUser from "./ListUser.tsx";
import Spinner from "./Spinner.tsx";

function UsersList({ usersData, isLoading, isError }: any) {
  return (
    <div className="bg-white w-[650px] max-h-[650px] h-full 3bp:w-full">
      <h1 className="text-lg font-medium py-3 text-center bg-blue-950 text-white w-full mb-4 4bp:text-base">
        Users List
      </h1>

      {isLoading && usersData.length === 0 && <Spinner />}
      {isError && (
        <h1 className="text-lg text-center font-bold my-20">No data to show</h1>
      )}

      <div className="flex flex-col gap-3 max-h-[550px] h-full overflow-y-scroll">
        {usersData &&
          usersData.map((user: any, index: React.Key | null | undefined) => (
            <div key={index}>
              <ListUser
                id={user?.id}
                image={user?.avatar}
                firstname={user?.profile?.firstName}
                lastname={user?.profile?.lastName}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default UsersList;
