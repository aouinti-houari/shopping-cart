import Items from "./Items";

const Women = ({ onSetNumItems, productData }) => {
    const womenClothes = productData.filter(product => product.category === "women's clothing");
    return (
        <div className="mt-32 mb-32 mx-auto grid grid-cols-3 gap-10 container">
            <Items onSetNumItems={onSetNumItems} productData={womenClothes} />
        </div>
    );
}

export default Women;