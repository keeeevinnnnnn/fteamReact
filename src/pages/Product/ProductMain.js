import React from 'react';
import FilterBox from './components/FilterBox';
import ProductList from './components/ProductList';
import ToolBox from './components/ToolBox';
import './styles/ProductMain.scss';
const ProductMain = () => {
    return (
        <>
            <div className="w-100 vh-100 d-flex justify-content-end align-items-end">
                <div className="work-area col-10 pb-5 pe-5 text-danger">
                    <ToolBox />
                    <FilterBox />
                    <ProductList />
                </div>
            </div>
        </>
    );
};

export default ProductMain;
