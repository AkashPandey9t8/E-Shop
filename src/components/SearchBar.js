import React, { useState } from "react";
import { ProductContext } from "./ProductProvider";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { products } = React.useContext(ProductContext);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex items-center justify-center mb-4">
            <input
                type="search"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search products..."
                className="w-full py-2 pl-10 text-sm text-gray-700"
            />
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Search
            </button>
            {filteredProducts.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white shadow-md rounded p-4">
                            <h2 className="text-lg font-bold">{product.title}</h2>
                            <p className="text-gray-700">{product.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;