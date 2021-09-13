<template>
  <div class="navbar">
    <div class="container">
      <navbar-logo/>
      <navbar-menu/>
      <navbar-active-placement/>
      <navbar-account/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavbarLogo from "@/components/navbar/logo.vue";
import NavbarMenu from "@/components/navbar/menu.vue";
import NavbarActivePlacement from "@/components/navbar/active_placement.vue";
import NavbarAccount from "@/components/navbar/account.vue";

@Component({
  name: 'navbar',
  components: {NavbarAccount, NavbarActivePlacement, NavbarMenu, NavbarLogo},
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
