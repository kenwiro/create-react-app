import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { User } from "./types/types";
import UserItem from "./User/User";

const App = () => {

  useEffect(() => {
    (async function () {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers([ ...data ]);
    })();
  }, []);

  const [ users, setUsers ] = useState<Array<User> | undefined>();

  const listOfUsers = users?.map(user => {
    return (
      <UserItem key={user.id} user={user} />
    );
  });

  return(
    <div className="App">
      <header className="header">
        <h1>Create react app</h1>
      </header>
      <main className="main">
        <ul>
         {listOfUsers}
        </ul>
      </main>
      <footer className="footer">
        <h3>React</h3>
      </footer>
    </div>
  );
}

export default App;
