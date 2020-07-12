<template>
  <v-app id="inspire">
    <v-navigation-drawer  v-model="drawer"  app  right>
        <app-menu></app-menu>
    </v-navigation-drawer>

    <v-app-bar  app  color="grey darken-3"  dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content style="margin:20px!important;">
      <router-view></router-view>
      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn
            color="primary"
            dark
            large
            fixed
            absolute
            bottom
            fab
            v-on="on"
            style="margin : 0px 20px 70px 0px"
          >
            <v-icon> mdi-information-outline</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">درباره من</span>
          </v-card-title>
          <v-card-text>
            با سلام من الهام وطن دوست هستم . <br> طراح رابط کابری <br> این پروژه برای واحد کار آموزی دانشگاه زده شده است <br> فایل پروژه را از گیت هاب من دریافت کنید <br>
            <v-btn href=""><v-icon> mdi-github-box</v-icon> گیت هاب من </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-content>

    <v-footer
      color="grey darken-3" app>
    </v-footer>

  </v-app>
  
</template>

<script>
import Menu from './AppSideMenu'
  export default {
      components : {
          'app-menu' : Menu
      },
    name: 'LayoutsDemosBaselineFlipped',

    props: {
      source: String,
    },
    data: () => ({
      dialog : false,
      drawer: null,
    }),
  }
</script>
