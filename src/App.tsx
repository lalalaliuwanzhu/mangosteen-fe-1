import { defineComponent, DefineComponent, ref } from "vue";
import { RouterView } from 'vue-router'
import './App.scss'

export const App = defineComponent({
  setup() {
    const refCount = ref(0);
    const onClick= ()=>{
      refCount.value += 2
    }
    return () => <>
      <div>
        <RouterView/>
      </div>
    </>
  }
})