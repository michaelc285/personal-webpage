import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROOT_PATH, ABOUT_PATH, PROFOLIO_PATH, RESUME_PATH } from "./path";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Contents Components
import Profolio from "./components/contents/profolio/Profolio";
import About from "./components/contents/about/About";
import Resume from "./components/contents/resume/Resume";
// 404 Not Found Error Page
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path={ROOT_PATH} exact component={Profolio} />
        <Route path={PROFOLIO_PATH} exact component={Profolio} />
        <Route path={ABOUT_PATH} exact component={About} />
        <Route path={RESUME_PATH} exact component={Resume} />
        {/* 404 Not found */}
        <Route path="*" component={NotFoundPage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
