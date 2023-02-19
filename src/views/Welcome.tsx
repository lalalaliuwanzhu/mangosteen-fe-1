import { defineComponent, DefineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
import s from './welcome.module.scss';
import logo from '../assets/icons/mangosteen.svg'
export const Welcome = defineComponent({
  setup() {
    const a = ref(0);
    return ()=> <div class={s.wrapper}>
      <header>
        <img src={logo} alt='logo'/>
        <h1>山竹记账</h1>
      </header>
      <main><RouterView/></main>
      <footer>buttons</footer>
    </div>
  }
})