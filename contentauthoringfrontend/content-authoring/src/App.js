import "./App.css";
import DrawerAppBar from "./containers/DrawerAppBar";
import FormBuilder from "./containers/FormBuilder";
import UpdateFaq from "./containers/UpdateFaq";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import HelpArticleSchema from "./Schema/HelpArticleSchema.json";
import faqSchema from "./Schema/FAQSchema.json";
import { BASE_URL } from "./Constant.js";
import { ADD_FAQ } from "./Constant.js";
import { ADD_HELP_ARTICLE } from "./Constant.js";

function App() {
  const addFaqEndpoint = BASE_URL + ADD_FAQ;
  const addArticleEndpoint = BASE_URL + ADD_HELP_ARTICLE;
  const faqFormTitle = "FAQ Form";
  const articleFormTitle = "Article Form";
  return (
    <div className="App">
      <DrawerAppBar></DrawerAppBar>
      <Routes>
        <Route
          path="/faq"
          element={
            <FormBuilder
              schema={faqSchema}
              endpoint={addFaqEndpoint}
              title={faqFormTitle}
              type="faq"
            ></FormBuilder>
          }
        ></Route>
        <Route
          path="/article"
          element={
            <FormBuilder
              schema={HelpArticleSchema}
              endpoint={addArticleEndpoint}
              title={articleFormTitle}
              type="article"
            ></FormBuilder>
          }
        ></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/faq/update" element={<UpdateFaq></UpdateFaq>}></Route>
      </Routes>
    </div>
  );
}

export default App;
