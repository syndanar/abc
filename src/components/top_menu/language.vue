<template>
  <select v-model="$i18n.locale" class="language-select">
    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.lang">
      {{ lang.title }}
    </option>
  </select>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'top-menu-lanuage',
  components: {},
})
export default class Home extends Vue {
  private langs = [
      { lang: 'ru', title: 'RU' },
      { lang: 'en', title: 'EN' }
  ]
}
</script>

<style lang="scss" scoped>

</style>
