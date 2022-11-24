import './App.css';

import AppRouter from './routes/AppRouter';
import Bag from './components/bag/Bag';
import Nav from './components/nav/nav';
import { useEffect } from 'react';
import { useSelector } from "react-redux";

function App() {
  // const { error, loading, data } = useQuery(LOAD_CATEGORIES)
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen])

  return (
    <div className="app__container">
      <Nav />
      {isCartOpen && <Bag />}
      <main className="app__main">
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
