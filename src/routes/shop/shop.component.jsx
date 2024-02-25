import {Routes, Route} from "react-router-dom" 
import Category from "../category/category.component";
import CategoriesPriview from "../categories-preview/categories-preview.component";
import "./shop.styles.scss"
const Shop = () => {
      
        return (
          <Routes>
            <Route index element={<CategoriesPriview />} />
            <Route path=":category" element = {<Category />} />
          </Routes>
        );
      };

      export default Shop