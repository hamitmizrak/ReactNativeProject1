
import { Component } from 'react';
import Routes from './Routes';
import { AppRegistry } from 'react-native';

//FUNCTION
class App extends Component {
  render() {
    return (
    <Routes/>
   );
  }
}

export default App
AppRegistry.registerComponent('App',()=>App)

