import { defineComponent, DefineComponent, ref } from 'vue';
// import s from './WelcomeLayout.module.scss'
import chart from '../../assets/icons/echart.svg'
// import { WelcomeLayout } from './WelcomeLayout-1';
// import { RouterLink } from 'vue-router';

import s from './welcome.module.scss';
export const Third = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref='#echart'></use>
      </svg>
      {/* <img class={s.icon} src={chart} /> */}
      <h2>每日提醒<br />不遗漏每一笔账单</h2>
    </div>
  )
}

Third.displayName = 'Third'

// export const Third = defineComponent({
//   setup() {
//     const a = ref(0);
//     return ()=> (
//       <WelcomeLayout>
//         {{
//           icon: () => <img class={s.icon} src={chart} />,
//           title: () => <h2 class={s.h2}>每日提醒<br/>不遗漏每一笔账单</h2>,
//           buttons: () => <>
//             <RouterLink to='/start' class={s.fake}>跳过</RouterLink>
//             <RouterLink to='/welcome/4'>下一页</RouterLink>
//             <RouterLink to='/start'>跳过</RouterLink>
//           </>
//         }}
//       </WelcomeLayout>
//     )
//   }
// })

/* <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.icon} src={chart} />
          <h2 class={s.h2}>每日提醒<br/>不遗漏每一笔账单</h2>
        </div>
        <div class={s.actions}>
          <RouterLink to='/start' class={s.fake}>跳过</RouterLink>
          <RouterLink to='/welcome/4'>下一页</RouterLink>
          <RouterLink to='/start'>跳过</RouterLink>
        </div>
      </div> */