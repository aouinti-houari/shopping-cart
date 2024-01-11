import Items from "./Items";

const Content = ({onSetNumItems, productData }) => {
    return (
        <div className="mt-32 mb-32 mx-auto grid grid-cols-3 gap-10 container">
            <Items onSetNumItems={onSetNumItems} productData={productData} />
        </div>
    );
}

export default Content;
