import './App.css';

import AppRouter from './routes/AppRouter';
import Bag from './components/bag/Bag';
import Nav from './components/nav/nav';
import { useSelector } from "react-redux";

function App() {
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  return (
    <div className="app__container">
      <Nav />
      <main className="app__main">
        {isCartOpen && <Bag />}
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
