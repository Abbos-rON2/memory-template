import ColorButton from './ColorButton'
function Settings(props) {
  const bg = [1,2,3,4,5]
  return (
    <div className="Settings">
      <div className="background-setting">
        Background: 
        <div className="btn-group">{bg.map(i => <ColorButton color={i} changeColor={props.changeColor} activeColor={props.activeColor}/>)}</div>

      </div>
    </div>
  )
}

export default Settings;
