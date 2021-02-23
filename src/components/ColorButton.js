function ColorButton(props) {
  const active = props.activeColor == props.color ? ' active' : ''; 
  return (
    <button className={"btn bg-" + props.color + active} onClick={() => props.changeColor(props.color)}>
    </button>

  )
}

export default ColorButton;