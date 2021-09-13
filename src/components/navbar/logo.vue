<template>
  <div class="logo">
    <svg-logo class="svg-logo"/>
    <svg-portal-da class="svg-portal-da"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SvgLogo from '@/assets/svg/logo.svg'
import SvgPortalDa from '@/assets/svg/portal_da.svg'

@Component({
  name: 'navbar-logo',
  components: {
    SvgLogo,
    SvgPortalDa
  },
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>
.logo {
  padding: 8px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  .svg-logo {
    height: 40px;
    opacity: 0.8;
    transition: opacity 0.15s linear;
  }
  .svg-portal-da {
    margin-left: 10px;
    height: 15px;
    fill: $c-foreground;
    transition: fill 0.15s linear;
  }
  &:hover .svg-portal-da,
  &:hover .svg-logo {
    opacity: 1;
    fill: $c-primary;
  }
}
</style>
