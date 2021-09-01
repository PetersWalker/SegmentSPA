import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import {Pane, Menu} from "evergreen-ui"

export default function App() {
  return (
    <Router>
      <div>
        <Menu>
          <Menu.Group>
              <Link to="/" role="menuitem">Home</Link>
              <Link to="/about"  role="menuitem">About</Link>
              <Link to="/users"  role="menuitem">Users</Link>
          </Menu.Group>
        </Menu>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   compnentDidMount() {
//       window.analytics.page()
//   };
//
//   return <h2>Home</h2>;
// }
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    window.analytics.page()

  }
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    window.analytics.page()

  }
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    window.analytics.page()

  }
  render() {
    return (
      <div>
        <h1>Users</h1>
      </div>
    );
  }
}
