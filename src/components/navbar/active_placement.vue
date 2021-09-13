<template>
  <router-link to="/" class="active-placement">
    <div class="plus">&#65291;</div>
    Разместить актив на продажу
  </router-link>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'navbar-active-placement',
  components: {},
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>
.active-placement {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
  color: $c-black-80;
  margin-right: 48px;
  &:hover {
    color: $c-black-70;
    .plus {
      background: $c-primary-hover;
    }
  }
  .plus {
    background: $c-primary;
    border-radius: 50%;
    color: #FFFFFF;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 13px;
    display: inline-block;
    margin-right: 10px;
    font-weight: 600;
  }
}

</style>
