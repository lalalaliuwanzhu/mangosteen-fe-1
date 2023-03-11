import { defineComponent, DefineComponent, ref } from 'vue';
// import s from './WelcomeLayout.module.scss'
import cloud from '../../assets/icons/cloud.svg'
// import { WelcomeLayout } from './WelcomeLayout-1';
// import { RouterLink } from 'vue-router';

import s from './welcome.module.scss';
export const Forth = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref='#cloud'></use>
    </svg>
    {/* <img class={s.icon} src={cloud} /> */}
    <h2>每日提醒<br />不遗漏每一笔账单</h2>
  </div>
)

Forth.displayName = 'Forth'

// export const Forth = defineComponent({
//   setup() {
//     return ()=>(
//       <WelcomeLayout>
//         {{
//           icon: () => <img class={s.icon} src={cloud} />,
//           title: () => <h2 class={s.h2}>每日提醒<br/>不遗漏每一笔账单</h2>,
//           buttons: () => <>
//             <RouterLink to='/start' class={s.fake}>跳过</RouterLink>
//             <RouterLink to='/start'>完成</RouterLink>
//             <RouterLink to='/start' class={s.fake}>跳过</RouterLink>
//           </>
//         }}
//       </WelcomeLayout>
//     )
//   }
// })

{/* <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.icon} src={cloud} />
          <h2 class={s.h2}>每日提醒<br/>不遗漏每一笔账单</h2>
        </div>
        <div class={s.actions}>
          <RouterLink to='/start' class={s.fake}>跳过</RouterLink>
          <RouterLink to='/start'>完成</RouterLink>
          <RouterLink to='/start' class={s.fake}>跳过</RouterLink>
        </div>
      </div> */}