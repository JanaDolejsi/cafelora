import './Layer.css'

export const Layer = ({color, label }) => {
    return (
      <div className="layer">
        <div className="layer_color" style={{backgroundColor: {color} }} />
        <div className="layer_label">{label}</div>
      </div>  
    )
}