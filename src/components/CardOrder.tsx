import { formatDate } from '../utils/formatDate';
import { Order } from '../models/order';

type OrderProps = {
  data: Order;
}

function CardOrder(props: OrderProps) {
  const { data } = props;

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Order #{data.id}</h2>
          {data.orderDetail.map((v) => (
            <div key={v.id}>
              {v.id} - {formatDate(v.timestamp)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


export default CardOrder