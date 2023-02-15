import './App.css';
import DrawerAppBar from './Containers/DrawerAppBar';
import FAQForm from './Containers/FAQForm';
import HelpArticleForm from './Containers/HelpArticleForm';

function App() {
  return (
    <div className="App">
      <DrawerAppBar></DrawerAppBar>
      <FAQForm></FAQForm>
      <HelpArticleForm></HelpArticleForm>
    </div>
  );
}

export default App;
