import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Banner } from "../components/Banner/Banner";
import { Contacts } from "../components/Contacts/Contacts";
import { Footer } from "../components/Footer/Footer";
import { Gallery } from "../components/Gallery/Gallery";
import { Header } from "../components/Header/Header";
import { Menu } from "../components/Menu/Menu";


const response = await fetch("http://localhost:4000/api/drinks");
const json = await response.json();
const drinks = json.data;
console.log(drinks);

document.querySelector("#root").innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contacts />
    </main>
    <Footer />
  </div>
);

const navBtn = document.querySelector(".nav-btn");
navBtn.addEventListener("click", () => {
  document.querySelector(".rollout-nav").classList.toggle("nav-closed");
});

const rollNav = document.querySelector(".rollout-nav");
rollNav.addEventListener("click", () => {
  rollNav.classList.add("nav-closed");
});

const orderForm = document.querySelectorAll("form");
orderForm.forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const foundDrink= drinks.find((drink) => drink.id===Number(form.dataset.id))
    const ordered = foundDrink.ordered
    await fetch(`http://localhost:4000/api/drinks/${form.dataset.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ op: "replace", path: "/ordered", value: !ordered }]),
    });
    
    window.location.reload();
  });
});
