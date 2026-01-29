
import { Routes, Route } from 'react-router-dom';

import Footer from './src/components/Footer';
import Home from './src/pages/Home';
import RecipeDetail from './src/pages/RecipeDetail';
import Categories from './src/pages/Categories';
import CategoryDetail from './src/pages/CategoryDetail';
import Favorites from './src/pages/Favorites';
import NotFound from './src/pages/NotFound';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:category" element={<CategoryDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
