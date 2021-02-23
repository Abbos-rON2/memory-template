export default function Card(props) {
  return (
    <div
      className={props.isHidden ? 'card-container hide' : 'card-container'}
      onClick={() => props.update(props.index)}
    >
      <img className="card-img" src={'/img/' + props.value + '.svg'} alt="" />
    </div>)
}