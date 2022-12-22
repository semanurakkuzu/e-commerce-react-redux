import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt={props.name} />
      <div className="card-body text-center">
        <h5 className="card-title">{props.name}</h5>
        <Link className="btn btn-warning" to={`/clothes/${props.id}`}>
          Show more
        </Link>
        <Link className="btn btn-warning ms-3" to={`/clothes/${props.id}`}>
        Add to cart
        </Link>
      </div>
    </div>
  );
}
