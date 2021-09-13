<template>
  <div class="four-blocks">
    <div class="four-blocks__block card" @click="openModal(1)">
      <svg-four-block1/>
      <header>Купить</header>
      <div class="counter" v-html="counters[1]" />
      <small>активов</small>
    </div>
    <div class="four-blocks__block card" @click="openModal(2)">
      <svg-four-block2/>
      <header>Снять</header>
      <div class="counter" v-html="counters[2]" />
      <small>актива</small>
    </div>
    <div class="four-blocks__block card" @click="openModal(3)">
      <svg-four-block3/>
      <header>Продать</header>
      <div class="counter" v-html="counters[3]" />
      <small>значение авто</small>
    </div>
    <div class="four-blocks__block card" @click="openModal(4)">
      <svg-four-block4/>
      <header>Сдать</header>
      <div class="counter" v-html="counters[4]" />
      <small>значение авто</small>
    </div>
    <gc-modal v-model="modal.active" class="content">
      <template slot="header">
        <header>Волшебный диалог</header>
        <p class="middle">
          Лорем ипсум сит амет и иже с ними
        </p>
      </template>
      <div class="modal-content">
        <div>
          <div>
            <p class="middle">Количество активов</p>
            <input v-model="modal.counterValue" />
            <p class="small">Укажите количество активов для отображения в карточке.</p>
          </div>
          <div>
            <button class="btn btn-primary outline small" @click="modal.counterValue = getRandom(1000, 10000)">
              Рандом
            </button>
          </div>
        </div>
      </div>
      <template slot="footer">
        <div class="modal-footer">
          <button class="btn btn-primary" @click="saveModal">Сохранить</button>
        </div>
      </template>
    </gc-modal>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import SvgFourBlock1 from '@/assets/pages/main/four-block-1.svg';
import SvgFourBlock2 from '@/assets/pages/main/four-block-2.svg';
import SvgFourBlock3 from '@/assets/pages/main/four-block-3.svg';
import SvgFourBlock4 from '@/assets/pages/main/four-block-4.svg';

@Component({
  name: 'main-four-blocks',
  components: {
    SvgFourBlock1, SvgFourBlock2, SvgFourBlock3, SvgFourBlock4
  },
})
export default class Home extends Vue {
  protected counters = {
    1: this.getRandom(1000, 10000),
    2: this.getRandom(1000, 10000),
    3: this.getRandom(1000, 10000),
    4: this.getRandom(1000, 10000),
  }
  protected modal = {
    active: false,
    counter: 0,
    counterValue: 0
  }

  getRandom(min: number, max: number): number {
    return Math.ceil(Math.random() * (max - min)) + min;
  }

  openModal(counter: number): void {
    this.modal.counter = counter;
    this.modal.counterValue = this.counters[counter];
    this.modal.active = true;
  }

  saveModal(): void {
    this.counters[this.modal.counter] = this.modal.counterValue;
    this.modal.active = false;
  }
}
</script>

<style lang="scss" scoped>
.four-blocks {
  @include d-flex-row-space-between;
  margin-top: 147px;
  margin-bottom: 94px;
  .four-blocks__block {
    width: calc(25% - 18px);
    cursor: pointer;
    svg {
      float: right;
      margin-top: -16px
    }
    header {
      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
      margin-bottom: 24px;
    }
    .counter {
      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
    }
    small {
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 18px;
      color: $c-black-80;
    }
  }
  .modal-content {
    & > div {
      @include d-flex-row-space-between;
    }
    input {
      height: 32px;
      line-height: 32px;
      width: 324px;
      border: 0;
      outline: none;
      border-bottom: 1px solid $c-black-40;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      text-align: left;
    }
    button {
      margin-left: 17px;
    }
    p.middle {
      margin-bottom: 2px;
    }
    p.small {
      margin-top: 7px;
    }
  }
}
</style>
