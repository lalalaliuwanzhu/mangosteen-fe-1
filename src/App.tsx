import { defineComponent, DefineComponent, ref } from "vue";
import { RouterView } from 'vue-router'
import './App.scss'

export const App = defineComponent({
  setup() {
    return () => <>
      <div class="page">
        <RouterView/>
      </div>
    </>
  }
})