import { defineComponent, DefineComponent, ref } from 'vue';
export const Second = defineComponent({
  setup() {
   const a = ref(0);
   return ()=> <>
     <div>Second</div>
   </>
  }
})