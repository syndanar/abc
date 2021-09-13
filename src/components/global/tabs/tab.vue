<template>
  <div v-show="isActive" class="gc-tab">
    <slot></slot>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'gc-tab',
})
export default class Tab extends Vue {
  @Prop(String) title: string;

  protected isActive = true;
}
</script>

<style lang="scss" scoped>
.gc-tab {
  background: $c-background;
  padding: 16px 12px;
  border-radius: 0 4px 4px 4px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.24);
}
</style>
