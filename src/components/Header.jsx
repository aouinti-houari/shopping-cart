import { Link } from "react-router-dom";
import { useState } from 'react';
import StarRating from "./StartRating";

const Header = ({ onSetFilterProducts, productData, onNumItems }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isContainerVisible, setIsContainerVisible] = useState(false);

    const toggleContainer = () => {
        setIsContainerVisible(!isContainerVisible);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        filterProducts(e.target.value);
    };

    const filterProducts = (searchTerm) => {
        let filtered;
        if (searchTerm === '') {
            filtered = productData;
        } else {
            filtered = productData.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        onSetFilterProducts(filtered);
    };

    return (
        <>
            <header className="flex items-center justify-evenly font-extrabold p-4 bg-slate-800 text-gray-50">
                <h1 className="text-3xl cursor-pointer"><Link to="home">Clothes</Link></h1>
                <nav className="mr-10">
                    <ul className="flex space-x-96 mr-30">
                        <li className="cursor-pointer">
                            <input
                                type="text"
                                style={{ color: "#000" }}
                                onChange={handleSearchChange}
                                value={searchTerm}
                            /></li>
                        <li className="cursor-pointer"><Link to="men">Men</Link></li>
                        <li className="cursor-pointer"><Link to="women">Women</Link></li>
                        <li className="cursor-pointer"><Link to="jewelry">Jewelry</Link></li>
                    </ul>
                </nav>
                <div className="flex">
                    <svg onClick={toggleContainer} className="mr-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="#FFF" height="30" width="30" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                    <span>{onNumItems.length}</span>
                </div>
            </header>
            {isContainerVisible &&
                <div className="shop-container container-visible h-4/5 overflow-y-auto rounded-b-2xl">
                    {onNumItems.map(item => {
                        return (
                            <div key={item.id} className="ml-10 mt-10 flex space-x-10 overflow-auto">
                                <div><img src={item.image} className="w-20" /></div>
                                <div>
                                    <h3 className="mt-10">{item.title}</h3>
                                    <div className="text-teal-500 font-extrabold">{item.price}$</div>
                                    <div>
                                        <StarRating key={item.id} size={20} defaultRating={item.rating.rate} />
                                    </div>
                                    <div>Number of ratings: {item.rating.count}</div>
                                </div>
                            </div>
                        )
                    })}
                    {onNumItems.length ?
                        <div className="flex justify-center items-center h-12 bg-emerald-500 text-white cursor-pointer p-4 mt-10 mb-10">
                            <span>
                                <Link to="shop" onClick={toggleContainer}>GO TO CART</Link>
                            </span>
                        </div> :
                        <div></div>
                    }
                    <span className="flex justify-center items-center h-12 bg-slate-800 text-white cursor-pointer p-4 mb-10"
                        onClick={toggleContainer}>Close</span>
                </div>
            }
        </>
    );
}

export default Header;
