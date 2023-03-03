import { FunctionalComponent, defineComponent, DefineComponent, ref } from 'vue';
import s from './welcome.module.scss'
import pig from '../../assets/icons/pig.svg'
// import { WelcomeLayout } from './WelcomeLayout';  
// import { RouterLink } from 'vue-router';

export const First: FunctionalComponent = () => {
  return <div class={s.card}>
    <img class={s.icon} src={pig} />
    <h2>会挣钱<br />还会省钱</h2>
  </div>
}

First.displayName = 'First'


// export const First = defineComponent({
//   setup: (props,context) => {
//     const slots = {  
//       icon: () => <img class={s.icon} src={pig} />,
//       title: () => <h2 class={s.h2}>会挣钱<br/>还会省钱</h2>,
//       buttons: () => <>
//         <RouterLink to='/start' class={s.fake}>跳过</RouterLink>
//         <RouterLink to='/welcome/2'>下一页</RouterLink>
//         <RouterLink to='/start'>跳过</RouterLink>
//       </>
//     };
//     return ()=> (<>
//       <WelcomeLayout v-slots={slots}></WelcomeLayout>
//     </>)
//   }
// })