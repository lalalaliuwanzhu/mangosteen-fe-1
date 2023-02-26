import { defineComponent, DefineComponent, ref } from 'vue';
import s from './WelcomeLayout.module.scss'
export const WelcomeLayout = defineComponent({
  setup: (prop,context) => {
    const {slots: {icon,title,buttons}} = context;
    return ()=> <>
      <div class={s.wrapper}>
        <div class={s.card}>
          {icon?.()}
          {title?.()}
        </div>
        <div class={s.actions}>
          {buttons?.()}
        </div>
      </div>
    </>
  }
})