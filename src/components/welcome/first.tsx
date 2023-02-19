import { defineComponent, DefineComponent, ref } from 'vue';
export const First = defineComponent({
  setup() {
   const a = ref(0);
   return ()=> <>
     <div>First</div>
   </>
  }
})