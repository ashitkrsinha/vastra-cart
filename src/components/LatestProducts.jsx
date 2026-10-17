import Title from "./Title";
import ProductCard from "./ProductCard";
import { useGlobalContext } from "../context/GlobalContext"; // Update path if needed

const LatestProducts = () => {
    const displayQuantity = 4;

    const { products } = useGlobalContext();

    return (
        <div className="px-6 my-30 max-w-6xl mx-auto">
            <Title
                title="Latest Products"
                description={`Showing ${products.length < displayQuantity
                        ? products.length
                        : displayQuantity
                    } of ${products.length} products`}
                href="/shop"
            />

            <div className="mt-12 grid grid-cols-2 sm:flex flex-wrap gap-6 justify-between">
                {products
                    .slice()
                    .sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    )
                    .slice(0, displayQuantity)
                    .map((product) => (
                        <ProductCard
                            key={product._id || product.id}
                            product={product}
                        />
                    ))}
            </div>
        </div>
    );
};

export default LatestProducts;