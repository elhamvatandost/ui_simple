<template>
  <v-list dense>
          <router-link tag="v-list-item" active-class="active" :to="{name : 'student'}" exact>
              <v-list-item-action>
                <v-icon>mdi mdi-account-network</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>اضافه کردن دانش آموز</v-list-item-title>
              </v-list-item-content>
          </router-link>
          <router-link tag="v-list-item" active-class="active" :to="{name : 'list'}" exact>
              <v-list-item-action>
                <v-icon>mdi-format-list-bulleted</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>لیست دانش‌ آموزان</v-list-item-title>
              </v-list-item-content>
          </router-link>                                         
  </v-list>
</template>

<script>
  export default {

  }
</script>
<style scoped>
.active{
  background-color: #ccc6c6;
}
</style>