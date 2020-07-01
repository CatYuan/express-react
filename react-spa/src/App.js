import React, { Component, useState, useEffect } from "react";

let DEV_URL = "";
if (process.env.NODE_ENV === "development") {
  DEV_URL = "http://localhost:3000";
}

// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(async () => {
//     const res = await fetch(`${DEV_URL}/users`);
//     setUsers(await res.json());
//   });

//   return (
//     <div className="App">
//       <p>Users: </p>
//       {users.map((user) => (
//         <p>{user}</p>
//       ))}
//     </div>
//   );
// };

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const res = await fetch(`${DEV_URL}/users`);
    const users = await res.json();
    this.setState({ users });
  }

  render() {
    return (
      <div className="App">
        <p>Users: </p>
        {this.state.users.map((user) => (
          <p>{user}</p>
        ))}
      </div>
    );
  }
}

export default App;
