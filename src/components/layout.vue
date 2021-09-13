<template>
  <div>
    <top-menu/>
    <navbar/>
    <router-view/>
    <page-footer/>
    <gc-modal>
      Волшебный диалог
    </gc-modal>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import TopMenu from "@/components/top_menu/index.vue";
import Navbar from "@/components/navbar/index.vue";
import PageFooter from "@/components/footer/index.vue";

@Component({
  name: 'layout',
  components: {
    PageFooter,
    Navbar,
    TopMenu,
  },
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
