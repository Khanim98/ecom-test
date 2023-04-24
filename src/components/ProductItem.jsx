const ProductItem = ({product}) => {
    return ( 
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.description} />
            </div>
            <div className="product-info">{product.description}</div>
        </div>
     );
}
 
export default ProductItem;