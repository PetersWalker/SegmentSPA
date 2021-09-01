import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
