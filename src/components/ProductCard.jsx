import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "₹";

    // Calculate average rating safely
    const rating =
        product.rating?.length > 0
            ? Math.round(
                product.rating.reduce((acc, curr) => acc + curr.rating, 0) /
                product.rating.length
            )
            : 0;

    return (
        <Link
            to={`/product/${product.id}`}
            className="group max-xl:mx-auto"
        >
            {/* Product Image */}
            <div className="bg-[#F5F5F5] h-40 sm:w-60 sm:h-68 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="max-h-30 sm:max-h-40 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Product Details */}
            <div className="flex justify-between gap-3 text-sm text-slate-800 pt-2 max-w-60">
                <div>
                    <p>{product.name}</p>

                    <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                key={index}
                                size={14}
                                fill={rating >= index + 1 ? "#00C950" : "#D1D5DB"}
                                className="text-transparent"
                            />
                        ))}
                    </div>
                </div>

                <p>
                    {currency}
                    {product.price}
                </p>
            </div>
        </Link>
    );
};

export default ProductCard;