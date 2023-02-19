import { defineComponent, DefineComponent, ref } from 'vue';
export const Foo = defineComponent({
  setup() {
   const hi= ref(0);
   return ()=> <>
      <div>
        Foo
      </div>
   </>
  }
})