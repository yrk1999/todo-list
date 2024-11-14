import notes from "./notes";
import Card from "./Card";

export default function Note() {
  {
    return <div className="note">{notes.map((element) => {})}</div>;
  }
}
<div className="card">
  <div className="top">
    <h2>{props.name}</h2>
    <img src={props.imgURL} alt="avatar_img" />
  </div>
  <div className="bottom">
    <p>{props.phone}</p>
    <p>{props.email}</p>
  </div>
</div>;
