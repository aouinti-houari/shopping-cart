const Items = ({ onSetNumItems, productData }) => {
    return (
        <>
            {productData.map((product) => (
                <div key={product.id} className="flex flex-col items-center shadow-2xl rounded-md">
                    <img src={product.image} alt={product.title} className="object-contain w-full h-48" />
                    <p className="mt-10 text-center">{product.title}</p>
                    <p className="text-xl text-teal-500 font-extrabold">{product.price}$</p>
                    <p className="text-2xl bg-slate-800 text-gray-50 p-3 rounded-md" onClick={() => onSetNumItems(product)}>ADD TO CART</p>
                </div>
            ))}
        </>
    )
}

export default Items;
