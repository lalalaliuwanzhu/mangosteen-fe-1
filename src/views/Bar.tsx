import { defineComponent, DefineComponent, ref } from 'vue';
export const Bar = defineComponent({
  setup() {
    const h = ref(0);
    return ()=> <>
      <div>bar</div>
    </>
  }
})