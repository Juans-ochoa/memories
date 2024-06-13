import "./input.css";

export default function TextArea(props) {
  return (
    <div className="text-area">
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        className="text"
        id={props.id || props.name}
        {...props}
      ></textarea>
    </div>
  );
}
