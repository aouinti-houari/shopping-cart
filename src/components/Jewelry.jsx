import Items from "./Items";

const Jewelry = ({ onSetNumItems, productData }) => {
    const jewelry = productData.filter(product => product.category === "jewelery");
    return (
        <div className="mt-32 mb-32 mx-auto grid grid-cols-3 gap-10 container">
            <Items onSetNumItems={onSetNumItems} productData={jewelry} />
        </div>
    );
}

export default Jewelry;