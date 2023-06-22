import { defineComponent, ref } from 'vue';
import { Button } from '../shared/Button';
import { Center } from '../shared/Center';
import { FloatButton } from '../shared/FloatButton';
import { Icon } from '../shared/Icon';
import s from './StartPage.module.scss'; 
import { RouterLink } from 'vue-router';
import { MainLayout } from '../layout/MainLayout';
import { Overlay } from '../shared/Overlay';
export const StartPage = defineComponent({
  setup: (props, context) => {
    const refOverlayVisible = ref(false)
    const onClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value
    }
    return ()=> (
      <MainLayout>{
        {
          title: () => '山竹记账',
          icon: () => <Icon name='menu' class={s.navIcon} onClick={onClickMenu} />,
          default: ()=> <>
            <Center>
              <div class={s.pig_wrapper}><Icon name="pig" class={s.pig} /></div>
            </Center>
            <div class={s.button_wrapper}>
              <RouterLink to="/items/create">
                <Button class={s.button}>开始记账</Button>
              </RouterLink>
            </div>
            <RouterLink to="/items/create">
              <FloatButton iconName='add' />
            </RouterLink>
            {refOverlayVisible.value &&
              <Overlay onClose={() => refOverlayVisible.value = false} />
            }
          </>
        }
      }</MainLayout>
    )
  }
})
