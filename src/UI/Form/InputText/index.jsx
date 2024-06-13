import "./input.css";

export default function InputText(props) {
  return (
    <div className="input">
      <label htmlFor={props.name}>{props.label}</label>
      <input type="text" id={props.id || props.name} {...props} />
    </div>
  );
}
