<template>
  <router-link class="link" :to="{name: 'main'}" v-t="'activities_catalog'"></router-link>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'top-menu-activities',
  components: {},
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
