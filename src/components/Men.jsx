import Items from "./Items";

const Men = ({ onSetNumItems, productData }) => {
    const menClothes = productData.filter(product => product.category === "men's clothing");
    return (
        <div className="mt-32 mb-32 mx-auto grid grid-cols-3 gap-10 container">
            <Items onSetNumItems={onSetNumItems} productData={menClothes} />
        </div>
    );
}

export default Men;