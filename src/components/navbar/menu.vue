<template>
  <div class="menu">
    <ul>
      <li>
        Купить <svg-arrow-down/>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </li>
      <li>
        Снять <svg-arrow-down/>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </li>
      <li>
        Сервисы
      </li>
      <li>
        Исследования
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SvgArrowDown from '@/assets/svg/navbar/arrow-down.svg'

@Component({
  name: 'navbar-menu',
  components: {
    SvgArrowDown
  },
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>
.menu {
  flex: 1;
  text-align: left;
  padding-left: 25px;
  li {
    cursor: pointer;
    color: $c-black-80;
    svg {
      & > path {
        stroke: $c-black-80;
      }
    }
    &:hover {
      color: $c-black-70;
      svg > path {
        stroke: $c-black-70;
      }
    }
  }
  ul {
    display: inline-block;
    list-style: none;
    visibility: hidden;
    opacity: 0;
  }
  & > ul {
    visibility: visible;
    opacity: 1;
    li {
      display: inline-block;
      margin-right: 24px;

      ul {
        position: absolute;
      }
    }
  }
}
</style>
