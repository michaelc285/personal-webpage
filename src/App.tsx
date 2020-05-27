import React from "react";
import { Route, Switch } from "react-router-dom";
import { ABOUT_PATH, HOME_PATH, PROFOLIO_PATH, RESUME_PATH } from "./path";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Contents Components
import Home from "./components/contents/Home";
import Profolio from "./components/contents/Profolio";
import About from "./components/contents/About";
import Resume from "./components/contents/Resume";
// 404 Not Found Error Page
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <div className="mx-0 pd-0 min-w-full">
      <Navbar />

      <Switch>
        <Route path={HOME_PATH} exact component={Home} />
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
