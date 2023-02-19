  import { defineComponent, DefineComponent, ref } from 'vue';
  export const Third = defineComponent({
    setup() {
     const a = ref(0);
     return ()=> <>
       <div>third</div>
     </>
    }
  })