import { useEffect, useState } from "react";
import { db, getUserFCMToken } from "../services/FirebaseConfig";
import { getDatabase, ref, get, update } from "firebase/database";

function Cashier() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  //fetching orders
  useEffect(() => {
    async function fetchOrder() {
      try {
        const ordersRef = ref(db, "orders"); //reference to the orders node
        const snapShot = await get(ordersRef); //fetch the data
        if (snapShot.exists()) {
          const ordersData = snapShot.val(); // get the data from snapshot
          const ordersArray = Object.entries(ordersData).map(([id, order]) => ({
            ...order,
            orderId: id, //add the firebase key as orderid
          }));
          setOrders(ordersArray); //set the orders instate
          console.log("Order: ", orders);
        } else {
          console.log("No orders found");
        }
      } catch (error) {
        console.log("Error fetching orders", error);
      } finally {
        setLoading(false);
      }
    }
    fetchOrder();
  }, []);

  //Handle update

  async function handleUpdate(orderId) {
    console.log("Order id to update", orderId);
    try {
      if (typeof orderId === "string") {
        //Reference to specific order in firebase
        const orderRef = ref(db, `orders/${orderId}`);
        //update the status of selected order to prepairing
        await update(orderRef, { status: "Preparing" });
        //update the local state to reflect the change
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.orderId === orderId
              ? { ...order, status: "Preparing" }
              : order
          )
        );
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <div>
      {loading && <span>Loading....</span>}
      <>
        <div className="flex flex-col">
          <h2>Cashier Dashboard</h2>
          {orders.length === 0 ? (
            "No orders display"
          ) : (
            <div>
              {orders.map((el) => (
                <div key={el.id}>
                  <h3>OrderId: {el.orderId}</h3>
                  <p>Status: {el.status}</p>
                  <p>Total: {el.total}</p>
                  <button
                    onClick={() => handleUpdate(el.orderId)}
                    className="px-5 py-2 bg-green-500 text-white rounded-lg"
                  >
                    Pay
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    </div>
  );
}

export default Cashier;
