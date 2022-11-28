export default function Card(props) {
  return (
      <div className="card">
        <img src={props.img} className="card-img-top" alt={props.name} />
        <div className="card-body text-center">
          <h5 className="card-title">{props.name}</h5>
          <a href="" className="btn btn-warning">
            Show
          </a>
        </div>
      </div>
  );
}
