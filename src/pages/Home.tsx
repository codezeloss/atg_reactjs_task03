import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers, getSingleUser } from "../features/users/usersSlice.ts";
import UserCard from "../components/UserCard.tsx";
import { useLocation } from "react-router-dom";
import Spinner from "../components/Spinner.tsx";
import UsersList from "../components/UsersList.tsx";

function Home() {
  const dispatch = useDispatch();
  const location = useLocation();

  // ** Get the current user ID
  const userID = location.pathname.split("/")[1];

  // ** Dispatch All Users
  useEffect(() => {
    // @ts-ignore
    dispatch(getAllUsers());

    // @ts-ignore
    dispatch(getSingleUser(userID));
  }, [userID]);

  // ** RTK - Users State
  const usersState = useSelector((state: any) => state.users);
  const { isLoading, isError, users, user } = usersState;

  return (
    <>
      <main className="w-full flex justify-center my-20 mx-3">
        <div className="flex gap-20 w-fit">
          {/* Users List */}
          <div className="w-[650px]">
            <h1 className="text-lg font-medium py-4 text-center bg-blue-950 text-white w-full mb-4">
              Users List
            </h1>

            <div className="h-[600px] overflow-y-scroll">
              <div>{isLoading && users.length === 0 && <Spinner />}</div>
              <div>
                {isError && (
                  <h1 className="text-lg font-bold my-20">No data to show</h1>
                )}
              </div>
              <div>{users && <UsersList usersData={users} />}</div>
            </div>
          </div>

          {/* User Card Details */}
          {userID && (
            <div className="w-fit">
              {user && (
                <div key={user?.id}>
                  <UserCard
                    image={user?.avatar}
                    username={user?.profile?.username}
                    about={user?.Bio}
                    firstname={user?.profile?.firstName}
                    lastname={user?.profile?.lastName}
                    jobTitle={user?.jobTitle}
                    email={user?.profile?.email}
                    isLoading={isLoading}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
