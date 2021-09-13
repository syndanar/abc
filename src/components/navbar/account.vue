<template>
  <button class="account">
    <SvgAccount/> Вход и регистрация
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SvgAccount from '@/assets/svg/navbar/account.svg'

@Component({
  name: 'navbar-account',
  components: {
    SvgAccount
  },
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>
.account {
  border: 1px solid $c-primary;
  border-radius: 3px;
  outline: none;
  line-height: 24px;
  padding: 4px 16px 4px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: $c-black-80;
  &:hover {
    border-color: $c-primary-hover;
    color: $c-black-70;
  }
}
</style>
