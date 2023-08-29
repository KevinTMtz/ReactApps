import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { UserData } from './models/UserData';

const App = () => {
  const [usersList, setUsersList] = useState<UserData[]>([]);

  const addUserHandler = (uName: string, uAge: string) => {
    setUsersList((prevUsersList: UserData[]) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
