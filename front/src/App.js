import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Category from './main/Category';
import MainHero from './main/Mainhero';
import MainContent from './main/Maincontent';
import JobPositionAccountPage from './account/JpAccount';
import ACCountChat from './account/AccountChat'
import ACb from './account/ACB1'

function App() {
  return(
  <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<MainHero/>}/>
        <Route path='/serch' element={<Category/>}/>
        <Route path="/content" element={<MainContent/>}/>
        <Route path="/account" element={<JobPositionAccountPage/>}/>
        <Route path="/account/chatbot" element={<ACCountChat/>}/>
        <Route path="/account/chatbot/report" element={<ACb/>}/>
      </Routes>
    </RecoilRoot>
  </BrowserRouter>
  );
}

export default App;
