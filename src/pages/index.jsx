import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import {Banner} from '../components/Banner/Banner'
import { Contacts } from '../components/Contacts/Contacts'
import { Footer } from '../components/Footer/Footer'
import { Gallery } from '../components/Gallery/Gallery'
import { Header } from '../components/Header/Header'
import { Menu } from '../components/Menu/Menu'

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contacts />
    </main>
    <Footer />
  </div>
  
);

const navBtn = document.querySelector('.nav-btn')
navBtn.addEventListener("click", () => {
  document.querySelector('.rollout-nav').classList.toggle('nav-closed')
})

const rollNav = document.querySelector('.rollout-nav')
rollNav.addEventListener("click", () => {
  rollNav.classList.add('nav-closed')
})
