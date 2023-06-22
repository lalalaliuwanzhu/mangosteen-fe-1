import { defineComponent, PropType } from 'vue';
import s from './Center.module.scss'; 
const directionMAp = {
  '-': 'horizontal',
  '|': 'vertical',
  'horizontal': 'horizontal',
  'vertical': 'vertical'
}
export const Center = defineComponent({
  props: {
    direction: {
      type: String as PropType<'-' | '|' | 'horizontal' | 'vertical'>,
      default: 'horizontal'
    }
  },
  setup: (props, context) => {
    const extraClass = directionMAp[props.direction]
    return ()=> <>
      <div class={[s.center, extraClass]}>
        { context.slots.default?.() }
      </div>
    </>
  }
})