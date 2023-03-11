import { FunctionalComponent, defineComponent, DefineComponent, ref } from 'vue';
import s from './welcome.module.scss'
import clock from '../../assets/icons/clock.svg'
// import { WelcomeLayout } from './WelcomeLayout';
// import { RouterLink } from 'vue-router';

export const Second: FunctionalComponent = () => {
  return <div class={s.card}>
    <svg>
      <use xlinkHref='#clock'></use>
    </svg>
    {/* <img class={s.icon} src={clock} /> */}
    <h2>每日提醒<br />不遗漏每一笔账单</h2>
  </div>
}

Second.displayName = 'Second'


// export const Second = defineComponent({
//   setup() {
//     return ()=> (
//       <WelcomeLayout>
//         {{
//           icon: () => <img class={s.icon} src={clock} />,
//           title: () => <h2 class={s.h2}>每日提醒<br/>不遗漏每一笔账单</h2>,
//           buttons: () => <>
//             <RouterLink to='/start' class={s.fake}>跳过</RouterLink>
//             <RouterLink to='/welcome/3'>下一页</RouterLink>
//             <RouterLink to='/start'>跳过</RouterLink>
//           </>
//         }}
//       </WelcomeLayout>
//     )
//   }
// })

{/* <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.icon} src={clock} />
          <h2 class={s.h2}>每日提醒<br/>不遗漏每一笔账单</h2>
        </div>
        <div class={s.actions}>
          <RouterLink to='/start' class={s.fake}>跳过</RouterLink>
          <RouterLink to='/welcome/3'>下一页</RouterLink>
          <RouterLink to='/start'>跳过</RouterLink>
        </div>
      </div> */}