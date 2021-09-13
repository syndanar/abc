<template>
  <div class="top-menu">
    <div class="container">
      <div>
        <top-menu-activities/>
        <top-menu-auctions/>
      </div>
      <div>
        <top-menu-about/>
        <top-menu-blog/>
        <top-menu-help/>
        <top-menu-contacts/>
        <top-menu-language/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopMenuActivities from "@/components/top_menu/activites.vue";
import TopMenuAuctions from "@/components/top_menu/auctions.vue";
import TopMenuAbout from "@/components/top_menu/about.vue";
import TopMenuBlog from "@/components/top_menu/blog.vue";
import TopMenuHelp from "@/components/top_menu/help.vue";
import TopMenuContacts from "@/components/top_menu/contacts.vue";
import TopMenuLanguage from "@/components/top_menu/language.vue";

@Component({
  name: 'top-menu',
  components: {
    TopMenuLanguage,
    TopMenuContacts,
    TopMenuHelp,
    TopMenuBlog,
    TopMenuAbout,
    TopMenuAuctions,
    TopMenuActivities
  },
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
