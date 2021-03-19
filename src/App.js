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
import { TextBox } from './components/TextBox';
import { Menu } from './components/Menu';

function App() {
  return (
    <RecoilRoot>
      <Screen />
      <TextBox />
      <Menu />
    </RecoilRoot>
    
  );
}

export default App;
