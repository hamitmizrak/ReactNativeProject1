import { Router, Scene } from 'react-native-router-flux';
import ButtonCounter from './src/component/AppFunction';

//FUNCTION
export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="counter" component={ButtonCounter} title="Button Counter" initial={true} />
      </Scene>
    </Router>
  );
}

