import { useEffect, useState } from 'react'
import './App.css'
import CardOrder from './components/CardOrder'
import { getOrder } from "./apis/order";
import { Order } from './models/order';

function App() {
  const [orders, setOrders] = useState<Order[] | undefined>([]);

  useEffect(() => {
    async function getAll() {
      try {
        const order = await getOrder();
        console.log(order);

        setOrders(order);
      } catch (error) {
        console.error(error);
      }
    }

    getAll();
  }, []);



  return (
    <>
      <div className="flex">
        <div className=" flex gap-4 flex-wrap bg-base-200 w-full p-4">

          {orders?.map((data) => (
            <CardOrder key={data.id} data={data} />
          ))}

        </div>
      </div>
    </>
  )
}

export default App
