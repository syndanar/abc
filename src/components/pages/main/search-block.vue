<template>
  <gc-tabs>
    <gc-tab title="Купить">
      <div class="tab-content">
        <icon-catalog-list class="catalog-list-icon"/>
        <label>Тип актива</label>
        <div class="search-box">
          <icon-search class="search-icon"/>
          <input placeholder="Поиск по наименованию, категории или ID актива"/>
        </div>
        <div class="selector city">
          <icon-pin/>
          Страна, регион, город
          <icon-arrow-down class="arrow-down-icon"/>
        </div>
        <div class="selector">
          Стоимость
          <icon-arrow-down class="arrow-down-icon"/>
        </div>
        <div class="selector">
          Тип сделки
          <icon-arrow-down class="arrow-down-icon"/>
        </div>
      </div>
    </gc-tab>
    <gc-tab title="Сдать">Tab content 2</gc-tab>
  </gc-tabs>
</template>

<script>
import IconCatalogList from '@/assets/icons/catalog-list.svg'
import IconSearch from '@/assets/icons/search.svg'
import IconPin from '@/assets/icons/pin.svg'
import IconArrowDown from '@/assets/icons/arrow-down.svg'
import {Component, Vue} from "vue-property-decorator";
@Component({
  name: "main-search-block",
  components: {
    IconCatalogList,
    IconSearch,
    IconPin,
    IconArrowDown
  }
})
export default class Home extends Vue {
}
</script>

<style lang="scss">
.tab-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  .catalog-list-icon {
    margin-right: 8px;
  }
  label {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    color: $c-black-80;
    margin-right: 13px;
  }
  .search-box {
    position: relative;
    flex: 1;
    .search-icon {
      position: absolute;
      top: 11px;
      left: 15px;
    }
    input {
      border: 1px solid $c-background;
      outline: none;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0;
      text-align: left;
      padding: 9px 15px 9px 44px;
      width: 100%;
      &:focus {
        border-color: $c-primary-light-hover;
      }
    }
  }
  .selector {
    height: 40px;
    @include d-flex-row-left;
    padding: 9px 44px 9px 16px;
    min-width: 160px;
    position: relative;
    cursor: pointer;
    .arrow-down-icon {
      position: absolute;
      right: 8px;
      top: 8px
    }
    &.city {
      padding-left: 40px;
    }
  }

}
</style>
