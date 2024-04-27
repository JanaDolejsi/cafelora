import { Layer } from "../Layer/Layer";
import "./style.css";

export const Drink = ({ id, name, ordered, image, layers }) => {
  const layerElm = layers.map((layer) => (
    <Layer key={layer.label} color={layer.color} label={layer.label} />
  ));
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          <div className="layer">{layerElm}</div>
        </div>
      </div>
      <form data-id={id} className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        <button
          className={
            ordered ? ".ordered-btn .ordered-btn--ordered" : ".ordered-btn"
          }
        >
          {ordered ? "Zrušit" : "Objednat"}
        </button>
      </form>
    </div>
  );
};
