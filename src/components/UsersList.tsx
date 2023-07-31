import ListUser from "./ListUser.tsx";

function UsersList({ usersData }: any) {
  return (
    <div className="flex flex-col gap-3">
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
  );
}

export default UsersList;
