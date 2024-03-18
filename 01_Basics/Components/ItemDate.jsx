import "./Item.css";

function ItemDate(props) {
  // const day = props.day;
  // const month = props.month;
  // const year = props.year;
  // const Title = props.Title;

  return (
    <>
      <div className="Item">
        <span className="date">{props.day}</span>
        <span className="date">{props.month} </span>
        <span className="date">{props.year} </span>
      </div>
      <div className="Title">
        <span className="date">{props.Title}</span>
      </div>
    </>
  );
}

export default ItemDate;
