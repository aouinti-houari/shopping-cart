import React, { useState } from "react";

const Shop = ({ onNumItems }) => {
    const [itemCounts, setItemCounts] = useState(onNumItems.reduce((acc, item) => {
        acc[item.id] = 1;
        return acc;
    }, {}));

    const handleIncrement = (id, price) => {
        setItemCounts(counts => ({
            ...counts,
            [id]: counts[id] + 1
        }));
    };

    const handleDecrement = (id, price) => {
        setItemCounts(counts => ({
            ...counts,
            [id]: Math.max(0, counts[id] - 1) // prevents negative count
        }));
    };

    const total = onNumItems.reduce((acc, item) => {
        return acc + itemCounts[item.id] * item.price;
    }, 0);

    return (
        <div className="grid place-content-center">
            {onNumItems.map(item => (
                <div key={item.id} className="ml-10 mt-10 flex space-x-10 overflow-auto rounded-lg p-10 shadow-2xl">
                    <div><img src={item.image} className="w-20" /></div>
                    <div>
                        <h3 className="mt-10">{item.title}</h3>
                        <div className="text-teal-500 font-extrabold">{item.price}$</div>
                        <div>
                            <button className="bg-slate-500 text-gray-50 text-xl mr-5 p-2" onClick={() => handleDecrement(item.id, item.price)}>-</button>
                            <span>Quantity: {itemCounts[item.id]}</span>
                            <button className="bg-slate-500 text-gray-50 text-xl ml-5 p-2" onClick={() => handleIncrement(item.id, item.price)}>+</button>
                        </div>
                    </div>
                </div>
            ))}
            <hr className="my-10" />
            <div className="text-7xl">Total: {total.toFixed(2)}$</div>
            <hr className="my-10" />
        </div>
    );
};

export default Shop;
