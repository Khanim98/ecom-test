import { ShoppingCartOutlined } from '@ant-design/icons';
const ProductItem = ({product}) => {
    let truncatedDescription = product.description.slice(0, 100) + "...";
    let formattedPrice = product.price.toLocaleString("en-US", {
        style: "currency",
        currency: product.currency,
      });
    let rating = stars => `★★★★★☆☆☆☆☆`.slice(5 - stars, 10 - stars);
    
    // const addToCart = () => {
        
    // }

    return ( 
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
                <div className="product-title">{product.title}</div>
                <div className="product-price">{formattedPrice}</div>
                <div className="product-description">{truncatedDescription}</div>
                <div className="product-rating">{rating(product.rating)}</div>
                <button className="add-to-cart" >
                    <ShoppingCartOutlined style={{color: "#007709", fontSize: "12px"}} />
                </button>
            </div>
        </div>
     );
}
 
export default ProductItem;