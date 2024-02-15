export type tUser = {
  id: number;
  name: string;
  username: string;
};

const User = ({ users }: {
  users: tUser[]
}): JSX.Element => {
  return (
    <ul>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

export default User;
