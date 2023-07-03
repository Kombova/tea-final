import OrderForm from "@/components/order-form/OrderForm";
import OrderCart from "@/components/order-form/OrderCart";
const Order = () => {
    return(
        <div className="flex justify-center gap-5 flex-wrap">
            <OrderForm/>
            <OrderCart/>
        </div>
    )
}

export default Order;