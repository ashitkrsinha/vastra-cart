import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductDetails from "../components/ProductDetails";
import Layout from "../components/Layout";
import ProductDescription from "../components/ProductDescription";

const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState();
    const { products } = useProducts();

    const fetchProduct = async () => {
        const product = products.find((product) => product.id === productId);
        setProduct(product);
    }

    useEffect(() => {
        if (products.length > 0) {
            fetchProduct()
        }
        scrollTo(0, 0)
    }, [productId, products]);


    return (
        <Layout>
            <div className="mx-6">
                <div className="max-w-7xl mx-auto">

                    {/* Breadcrums */}
                    <div className="  text-gray-600 dark:text-slate-400 text-sm mt-8 mb-5">
                        Home / Products / {product?.category}
                    </div>

                    {/* Product Details */}
                    {product && (<ProductDetails product={product} />)}

                    {/* Description & Reviews */}
                    {product && (<ProductDescription product={product} />)}
                </div>
            </div>
        </Layout>
    )
}

export default Product;