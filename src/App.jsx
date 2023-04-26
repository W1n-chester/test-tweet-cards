// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Layout } from './components/layout/layout';
import Home from './pages/home/home';
import Tweets from './pages/tweets/tweets';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        {/* <Route path="*" element={<div>404</div>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
