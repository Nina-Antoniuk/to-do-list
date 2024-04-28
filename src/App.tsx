import { Route, Routes } from 'react-router-dom';

import { Home, Bin, NotFoundPage } from './routes';
import { NavBar } from './components/nav-bar';

function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <Routes>
          <Route path="./" element={<Home />} />
          <Route path="./bin" element={<Bin />} />
          <Route path="./*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
