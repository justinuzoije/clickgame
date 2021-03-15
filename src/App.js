import logo from './logo.svg';
import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { Screen } from './components/Screen';

function App() {
  return (
    <RecoilRoot>
      <Screen />
    </RecoilRoot>
    
  );
}

export default App;
