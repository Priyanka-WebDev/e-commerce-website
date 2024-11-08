import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

function CartTile({ singleCartItem }) {
    const { handleRemoveFromCart, handleAddToCart } = useContext(ShoppingCartContext);

    return (
        <>
            <div className="grid grid-cols-3 items-start gap-5">
                <div className="col-span-2 flex items-start gap-4">
                    <div className="w-28 h-28 max:sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
                        <img 
                            src={singleCartItem?.thumbnail}
                            className="w-full h-full object-contain" 
                            alt={singleCartItem?.title || "Product Image"} 
                        />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-gray-900">{singleCartItem?.title}</h3>
                        <button 
                            onClick={() => handleRemoveFromCart(singleCartItem, true)} 
                            className="text-sm px-4 py-3 mt-4 bg-black rounded-md text-white font-extrabold"
                        >
                            REMOVE
                        </button>
                    </div>
                </div>
                <div className="ml-auto">
                    <h3 className="text-lg font-bold text-gray-900">
                        ${singleCartItem?.totalPrice?.toFixed(2) || "0.00"}
                    </h3>
                    <p className="mt-2 mb-3 font-bold text-[16px]">
                        Quantity: {singleCartItem?.quantity || 1}
                    </p>
                    <div className="mt-3 flex gap-2">
                        <button 
                            onClick={() => handleRemoveFromCart(singleCartItem, false)} 
                            className="px-3 py-2 border border-[#000] rounded-md disabled:opacity-65"
                            disabled={singleCartItem?.quantity === 1}
                        >
                            -
                        </button>
                        <button 
                            onClick={() => handleAddToCart(singleCartItem)}
                            className="px-3 py-2 border border-[#000] rounded-md"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <hr className="border-gray-500 mt-4" />
        </>
    );
}

export default CartTile;
