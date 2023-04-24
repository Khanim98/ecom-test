const ProductItem = ({product}) => {
    return ( 
        <div className="product-card">
            <div className="product-image">image</div>
            <div className="product-info">{product.description}</div>
        </div>
     );
}
 
export default ProductItem;