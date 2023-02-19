import { defineComponent, DefineComponent, ref } from 'vue';
export const Forth = defineComponent({
  setup() {
   const a = ref(0);
   return ()=> <>
     <div>forth</div>
   </>
  }
})