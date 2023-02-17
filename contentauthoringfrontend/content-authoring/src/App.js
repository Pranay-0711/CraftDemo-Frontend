import './App.css';
import DrawerAppBar from './Containers/DrawerAppBar';
import FAQForm from './Containers/FAQForm';
import HelpArticleForm from './Containers/HelpArticleForm';
import {Route, Routes} from 'react-router-dom';
import Home from './Containers/Home';

function App() {
  return (
    <div className="App">
      <DrawerAppBar></DrawerAppBar>
      <Routes>
        <Route path="/faq" element={<FAQForm></FAQForm>}>
        </Route>
        <Route path="/article" element={<HelpArticleForm></HelpArticleForm>}>
        </Route>
        <Route path="/" element={<Home></Home>}>
        </Route> 
      </Routes>
    </div>
  );
}

export default App;
