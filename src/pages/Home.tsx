import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers, getSingleUser } from "../features/users/usersSlice.ts";
import UserCard from "../components/UserCard.tsx";
import { useLocation } from "react-router-dom";
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
  const { isLoading, isError, isSuccess, users, user } = usersState;

  return (
    <>
      <main className="w-full h-screen flex justify-center items-center 2bp:h-full my-5 2bp:my-10 3bp:my-3 3bp:w-full 3bp:h-full">
        <div className="flex gap-14 2bp:flex-col-reverse 2bp:gap-8 3bp:mx-3 3bp:w-full">
          {/* Users List */}
          <div>
            {users.length !== 0 && isSuccess && (
              <UsersList
                usersData={users}
                isLoading={isLoading}
                isError={isError}
              />
            )}
          </div>

          {/* User Card Details */}
          <div>
            {userID && (
              <div className="w-fit 3bp:w-full">
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
                      isError={isError && !user}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
