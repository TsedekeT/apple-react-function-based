import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Main from "./Components/Main/Main";
import Sharedlayout from "./Pages/Sharedlayout";

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import TV from "./Pages/TV/TV";
import IPad from "./Pages/iPad/iPad";
import Watch from "./Pages/Watch/Watch";
import Four04 from "./Pages/Four04/Four04";

// Import general CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<Sharedlayout />}>
          {/* Nested Routes */}
          <Route index element={<Main />} />
          <Route path="mac" element={<Mac />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="ipad" element={<IPad />} />
          <Route path="watch" element={<Watch />} />
          <Route path="tv" element={<TV />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
