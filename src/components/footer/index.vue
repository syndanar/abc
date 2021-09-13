<template>
  <footer>
    <div class="container">
      <div class="row links">
        <router-link to="/">Каталог активов</router-link>
        <router-link to="/">Аукционы Портала DA</router-link>
        <router-link to="/">О проекте</router-link>
        <router-link to="/">Партнёрам</router-link>
        <router-link to="/">Помощь</router-link>
        <router-link to="/">Контакты</router-link>
      </div>
    </div>
    <div class="container">
      <div class="row footer-content">
        <footer-logo/>
        <div class="contacts">
          <header>Консультация</header>
          <a href="phone:+7 985 014-33-08">+7 985 014-33-08</a>
          <a href="mailto:auction_da@sberbank.ru">auction_da@sberbank.ru</a>
        </div>
        <div class="apps">
          <div>
            Скачайте приложение
          </div>
          <router-link to="/">
            <svg-app-store style="margin-right: 8px"/>
          </router-link>
          <router-link to="/">
            <svg-google-play/>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row footer-copyright">
        <div>
          © 2021 Portal DA – Реализация непрофильных и залоговых активов
        </div>
        <div>
          <router-link to="/">Политика конфиденциальности</router-link>
          <router-link to="/">Условия использования</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import TopMenu from "@/components/top_menu/index.vue";
import Navbar from "@/components/navbar/index.vue";
import FooterLogo from '@/assets/svg/footer_logo.svg';
import SvgAppStore from '@/assets/svg/app_store.svg';
import SvgGooglePlay from '@/assets/svg/google_play.svg';

@Component({
  name: 'page-footer',
  components: {
    Navbar,
    TopMenu,
    FooterLogo,
    SvgAppStore,
    SvgGooglePlay
  },
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>
footer {
  margin-top: 85px;
  .links {
    border-bottom: 1px solid $c-black-40;
    padding: 24px 0 21px;
    a {
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
      text-align: left;
      margin-right: 24px;
      text-decoration: none;
      color: $c-foreground;
      &:hover {
        color: $c-foreground-hover;
      }
    }
  }
  .footer-content {
    @include d-flex-row-space-between;
    padding: 40px 0;
    .apps {
      &>div:first-child {
        color: #404040;
        text-align: left;
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 8px;
      }
    }
    .contacts {
      header {
        font-size: 12px;
        line-height: 14px;
        color: #404040;
        margin-bottom: 8px;
      }
      a {
        display: block;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 19px;
        text-align: left;
        color: $c-foreground;
        text-decoration: none;
        &:hover {
          color: $c-foreground-hover;
        }

      }

    }
  }
  .footer-copyright {
    @include d-flex-row-space-between;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0;
    text-align: left;
    color: $c-black-80;
    padding-bottom: 20px;
    a {
      color: $c-black-80;
      margin-left: 24px;
    }

  }
}
</style>
