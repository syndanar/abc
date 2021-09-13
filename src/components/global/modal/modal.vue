<template>
  <div
      class="gc-modal-wrapper"
      :class="{active: value}"
  >
    <div class="gc-modal">
      <div class="gc-modal-header">
        <slot name="header"></slot>
        <icon-close class="icon-close"/>
      </div>
      <div class="gc-modal-content">
        <slot></slot>
      </div>
      <div class="gc-modal-footer">
        <div>
          <button class="btn btn-default text" @click="closeModal">
            Отменить
          </button>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
    <div class="gc-modal-close" @click="closeModal" />
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import TopMenu from "@/components/top_menu/index.vue";
import Navbar from "@/components/navbar/index.vue";
import PageFooter from "@/components/footer/index.vue";
import IconClose from '@/assets/icons/close.svg'

@Component({
  name: 'layout',
  components: {
    PageFooter,
    Navbar,
    TopMenu,
    IconClose
  },
})
export default class Home extends Vue {
  @Prop(Boolean) value!: false

  protected active = this.value;

  closeModal(): void {
    this.active = false;
    this.$emit('input', false);
  }
}
</script>

<style lang="scss" scoped>
.gc-modal-wrapper {
  @include d-flex-row;
  @include full-screen-fixed;
  background: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: opacity .25s linear;
  &.active {
    visibility: visible;
    opacity: 1;
    .gc-modal {
      opacity: 1;
      margin-top: 0;
    }
  }
  .gc-modal {
    background: $c-background;
    padding: 22px;
    border-radius: 4px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
    margin-top: -20vh;
    opacity: 0;
    transition: all .25s linear;
    position: absolute;
    z-index: 2;
  }
  .gc-modal-close {
    @include full-screen-fixed;
  }
  .gc-modal-header {
    padding-bottom: 19px;
    header {
      font-family: Montserrat, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      text-align: left;
      margin-bottom: 8px;
    }
    .icon-close {
      cursor: pointer;
      position: absolute;
      top: 17px;
      right: 17px;
      fill: $c-black-70;
      &:hover {
        fill: $c-black-80;
      }
    }
  }
  .gc-modal-content {
    padding: 24px 0;
  }
  .gc-modal-footer {
    padding: 24px 0 2px;
    & > div {
      @include d-flex-row-space-between
    }
  }

}
</style>
