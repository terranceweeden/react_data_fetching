import { useCallback, useState } from "react";
import Search from "./Search";

const allUsers = ["john", "alex", "george", "simon", "james"];

interface CallbackDemoProps {}

export default function CallbackDemo({}: CallbackDemoProps) {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback(
    (text: string) => {
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <div>
      <button>Shuffle</button>
      <Search onChange={handleSearch} />
      <br />
      {users.map((user) => {
        return <ul key={user}>{user}</ul>;
      })}
    </div>
  );
}
