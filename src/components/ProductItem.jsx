const ProductItem = ({product}) => {
    let truncatedDescription = product.description.slice(0, 100) + "...";
    let formattedPrice = product.price.toLocaleString("en-US", {
        style: "currency",
        currency: product.currency,
      });
    
    return ( 
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
                <div className="product-title">{product.title}</div>
                <div className="product-price">{formattedPrice}</div>
                <div className="product-price">{truncatedDescription}</div>
            </div>
        </div>
     );
}
 
export default ProductItem;