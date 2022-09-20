import React from 'react';
import { createRoot } from 'react-dom/client';

const users = [
  { name: 'John Doe', id: 1 },
  { name: 'Jane Doe', id: 2 },
  { name: 'Billy Doe', id: 3 },
];

function App() {
  return (
    <div style={styles.container}>
      <p style={styles.title}>User names:</p>
      <div>{users.map(user=><Item user={user}/>)}</div>
    </div>
  );
}
function Item({user}){
  return <p key={user.id}>{user.name}</p>
}

const styles = {
  container: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
  },
  paragraph: {},
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
