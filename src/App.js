import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import {Pane, Menu, TextInputField, Button} from "evergreen-ui"

export default function App() {
  return (

    <Router>
        <Pane
        display="grid"
        gridTemplateColumns= "1fr 10fr">

          <Pane>
            <CustomMenu />
          </Pane>


          <Pane
          gridColumnStart="2"
          display="flex"
          alignItems="center"
          justifyContent="center">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/experiment">
                <Experiment />
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

  componentDidMount() {
    window.analytics.page()

  }
  render() {
    return (
      <Pane
      alignItems="center">

        <h1>Welcome to this Segment Demo!</h1>
        <ContactForm />

      </Pane>
    );
  }
}

class About extends React.Component {

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

class Experiment extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      apiKey: '',
    };
  }

  handleClick(){

  }
  componentDidMount() {
    window.analytics.page()

  }
  render() {
    return (
      <Pane>
        <h1>Experiment</h1>
        <TextInputField
          label="Enter Your Analytics.js API key"
          onChange={e => this.setState({apikKey:e.target.value})}
        />
        <Button
        onClick={this.handleClick()}> Submit </Button>
      </Pane>
    );
  }
}


class CustomMenu extends React.Component {

  render() {
    return (
      <Menu>
        <Menu.Group
        containerProps={{
          width:"32px"
        }}>

          <Pane>
            <Link style={{ textDecoration: 'none' }} to="/">
              <Menu.Item > Home </Menu.Item>
            </Link>
          </Pane>

          <Pane>
            <Link style={{ textDecoration: 'none' }} to="/about">
              <Menu.Item > About </Menu.Item>
            </Link>
          </Pane>

          <Pane>
            <Link style={{ textDecoration: 'none' }} to="/experiment">
              <Menu.Item> Experiment </Menu.Item>
            </Link>
          </Pane>


        </Menu.Group>
      </Menu>
    );
  }
}


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: '',
      email: '',
      company: ''
    };
  }

  handleClick() {
    window.analytics.identify({
      "name":this.state.name,
      "email":this.state.email,
      "company":this.state.company

    })
  }
  render() {

    return (
      <Pane marginTop="32px">

      <h2>Contact Us</h2>
      <TextInputField
        label="Name"
        placeholder="e.g. John Smith"
        onChange={e => this.setState({name:e.target.value})}
      />

      <TextInputField
        label="Email"
        placeholder="e.g. John.Smith@example.com"
        onChange={e => this.setState({email:e.target.value})}
      />

      <TextInputField
        label="Company"
        placeholder="e.g. Segment"
        onChange={e => this.setState({company:e.target.value})}
      />
      <Button
      onClick={this.handleClick}> Submit </Button>
      </Pane>
    );
  }
}
