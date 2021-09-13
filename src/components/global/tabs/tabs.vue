<template>
  <div class="gc-tabs">
    <ul class="gc-tab__header">
      <li v-for="(tab, index) in tabs"
          :key="tab.title"
          @click="selectTab(index)"
          :class="{active: index === selectedIndex}"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script lang="ts">

import { Component, Vue} from 'vue-property-decorator';

@Component({
  name: 'gc-tabs',
})
export default class Tabs extends Vue {
  protected selectedIndex = 0;
  protected tabs = [];

  selectTab (i:number): void {
    this.selectedIndex = i;
    this.tabs.forEach((tab, index) => {
      tab.isActive = (index === i)
    });
  }

  mounted (): void {
    this.tabs = this.$children;
    this.selectTab(0)
  }
}
</script>

<style lang="scss" scoped>
.gc-tab__header {
  list-style: none;
  li {
    display: inline-block;
    border-radius: 4px 4px 0 0;
    padding: 11px 16px;
    line-height: 22px;
    font-size: 15px;
    font-weight: 500;
    margin-right: 4px;
    background: $c-foreground;
    color: $c-background;
    cursor: pointer;
    &:hover:not(.active) {
      background: $c-foreground-hover;
    }
    &.active {
      background: $c-background;
      color: $c-foreground;
    }
  }
 }

</style>
