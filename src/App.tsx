import { RecoilRoot } from 'recoil';
import { ProjectChoice, SideBar } from './components';
import MainRoute from './Route';
import { globalStyle } from './styles/globalStyle';


function App() {
  return (
    <RecoilRoot> 
        <MainRoute />
    </RecoilRoot> 
  );
}

export default App;
