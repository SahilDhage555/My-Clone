import { useProductContext } from "../Contexts/ProductContext";
import { FaStar } from "react-icons/fa";

const Products = () => {
  const { products } = useProductContext();

  if (!Array.isArray(products) || products.length === 0) {
    return <p className="text-center text-gray-500">No products available.</p>;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-x-5 gap-y-8">
        {products.map(
          ({
            _id,
            imgUrl,
            description,
            price,
            deliveryType,
            rating,
            reviews,
            trustLogo,
          }) => (
            <div
              key={_id}
              className="w-[220px] cursor-pointer border h-[360px] rounded-lg shadow-lg border-gray-300"
            >
              <img
                className="h-[207px] px-2 w-[224px]"
                src={imgUrl}
                alt={description}
              />
              <div className="space-y-2 p-2">
                <div>
                  <p className="text-gray-500 truncate">{description}</p>
                </div>
                <div>
                  <span className="font-bold text-lg text-gray-800">
                    ₹{price}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-gray-800 bg-slate-50 py-0.5 px-1 rounded-xl">
                    {deliveryType}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="flex items-center gap-2">
                    <span className="flex bg-green-700 rounded-2xl text-white text-base px-2 py-0.5 opacity-90 items-center">
                      {rating} <FaStar className="text-xs ms-[2px]" />
                    </span>
                    <span
                      className={`${
                        trustLogo ? "w-[30px]" : "w-[70px]"
                     } leading-3 font-semibold text-gray-500 text-[10px]`}
                   >
                    {reviews} Reviews
                     </span>
                  </p>
                  {trustLogo && <img src={trustLogo} />}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default Products;
