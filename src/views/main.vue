<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <h1>Реализация непрофильных и залоговых активов</h1>
        <main-search-block/>
        <main-four-blocks/>
        <div class="content">
          <h2>
            Portal DA  – официальный сайт по реализации непрофильных активов<br/>и залогового имущества, созданный
            Сбербанком
          </h2>
          <div class="col-2">
            <div>
              <p class="normal">
                На Portal DA размещена информация о реализуемых банками, отраслевыми компаниями,
                арбитражными управляющими активах:
              </p>
              <ul>
                <li>
                  <p class="middle">
                    залоговое имущество, реализуемое кредиторами (ранее принятое в залог с целью
                    обеспечения исполнения обязательств по кредитным договорам);
                  </p>
                </li>
                <li>
                  <p class="middle">
                    непрофильные активы банков и компаний;
                  </p>
                </li>
                <li>
                  <p class="middle">
                    активы от собственников, реализуемые в добровольном порядке;
                  </p>
                </li>
              </ul>
              <br/>
              <p class="normal">
                Портал объединяет активы со всей территории России и за ее пределами.
              </p>
              <p class="middle">
                За каждым активом закреплен менеджер (контактная информация указана в карточке актива), который по запросу
                может предоставить дополнительную информацию, организовать осмотр и проконсультировать по возможным типам
                сделки и другим аспектам приобретения.
              </p>
            </div>
            <div>
              <p class="normal">
                На Портале можно найти необходимый для старта или расширения бизнеса актив по привлекательной стоимости.
                В базе представлены все типы реальных активов:
              </p>
              <ul>
                <li>
                  <p class="middle">
                    коммерческая недвижимость (торговая недвижимость, склады, офисы, гостиницы и др.)
                  </p>
                </li>
                <li>
                  <p class="middle">
                    производственные предприятия;
                  </p>
                </li>
                <li>
                  <p class="middle">
                    сельскохозяйственные комплексы;
                  </p>
                </li>
                <li>
                  <p class="middle">
                    жилая недвижимость (квартиры, частные дома, апартаменты);
                  </p>
                </li>
                <li>
                  <p class="middle">
                    земельные участки;
                  </p>
                </li>
                <li>
                  <p class="middle">
                    производственное и торговое оборудование;
                  </p>
                </li>
                <li>
                  <p class="middle">
                    транспорт и спецтехника.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import TopMenu from "@/components/top_menu/index.vue";
import Navbar from "@/components/navbar/index.vue";
import MainSearchBlock from "@/components/pages/main/search-block.vue";
import MainFourBlocks from "@/components/pages/main/four-blocks.vue";

@Component({
  components: {
    MainFourBlocks,
    MainSearchBlock,
    Navbar,
    TopMenu,
  },
})
export default class Home extends Vue {
}
</script>

<style scoped lang="scss">
.page {
  background-image: url('./../assets/pages/main/hero.png');
  background-repeat: no-repeat;
  background-size: auto 440px;
  background-position-x: center;
  min-height: 800px;
  text-align: left;
  h1 {
    color: #FFFFFF;
    margin-top: 100px;
    margin-bottom: 24px;
  }
}
</style>
