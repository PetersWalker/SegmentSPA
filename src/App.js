import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, NavLink
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import {Pane, Menu, Button, SideSheet, MenuIcon, Icon} from "evergreen-ui"

export default function App() {
  const [isShown, setIsShown] = React.useState(false)
  return (

    <Router>
        <Pane
        display="grid"
        grid-template-columns= "1fr 10fr">

          <Pane>
            <CustomMenu />
          </Pane>


        <Pane
        gridColumnStart="2"
        justifyConyent="center">
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
        </Pane>

        </Pane>
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
  }

  componentDidMount() {
    window.analytics.page()

  }
  render() {
    return (
      <Pane
      justifyConyent="center">

        <h1>Welcome</h1>
      </Pane>
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


class CustomMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu containerProps={{
        width:"32px"
      }}>
        <Menu.Group
        containerProps={{
          width:"32px"
        }}>
            <Menu.Item
            containerProps={{
              width:"32px",
            }}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item
            containerProps={{
              width:"32px"
            }}>
              <NavLink to="/about">About</NavLink>
            </Menu.Item>
            <Menu.Item
            containerProps={{
              width:"32px"
            }}>
              <Link to="/users">Users</Link>
            </Menu.Item>
        </Menu.Group>
      </Menu>
    );
  }
}
