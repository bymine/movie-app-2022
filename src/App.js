import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


import Nav from "./components/Nav";
import Home from "./router/Home";
import List from "./router/List";
import Detail from "./router/Detail";

class App extends React.Component {
  render() {
    return (
      <RecoilRoot>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/list/:path/:index" element={<List />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    );
  }
}

export default App;



