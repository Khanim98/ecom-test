import ProductItem from "./ProductItem";


const ProductListing = ({products}) => {
    return ( 
        <div className="filtered-products">
            {products.map(product => {
                return <ProductItem product={product} key={product.id} />
            })}
        </div>
     );
}
 
export default ProductListing;