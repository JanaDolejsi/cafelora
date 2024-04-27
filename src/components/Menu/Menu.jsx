import { Drink } from '../Drink'
import './Menu.css'


export const Menu = ({drinks}) => {
  // const drinkElm = drinks.map(({ id, name, ordered, image, layers }) => (
  //   <Drink
  //     key={name}
  //     id={id}
  //     name={name}
  //     ordered={ordered}
  //     image={image}
  //     layers={layers}
  //   />
  // ));

    return (
        <section className="menu" id="menu">
            <div className="container">
              <h2>Naše nabídka</h2>
              <p className="menu-intro">
                Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
              </p>
              <div className="drinks-list">

              {drinks.map((drink)=> <Drink
      key={drink.id}
      id={drink.id}
      name={drink.name}
      ordered={drink.ordered}
      image={`http://localhost:4000${drink.image}`}
      layers={drink.layers}
    />)}


    
              </div>
    
              <div className="order-detail">
                <a href="/order.html">Detail objednávky</a>
              </div>
            </div>
        </section>
    )
}