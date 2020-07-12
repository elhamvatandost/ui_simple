<template>  
    <v-form>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>لیست دانش آموزان</v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-data-table
              :headers="headers"
              :items="getList"
              class="elevation-1"
            >
            <template v-slot:item.actions="{ item }">
                <v-icon class="mr-2" @click="del(item)">mdi-delete</v-icon>
            </template>
            </v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-snackbar v-model="snackbar" :multi-line="true" top color="white">
      <span style="color : black">{{ text }}</span>
      <v-btn color="red" text @click="snackbar = false">بستن</v-btn>
    </v-snackbar>
  </v-form>
</template>

<script>
export default {
    data(){
        return {
            panel: [0],
            snackbar : '',
            text : '',
            headers: [
            {
              text: 'نام دانش آموز',
              align: 'start',
              sortable: false,
              value: 'name',
            },
            { text: 'معدل', value: 'number' },
            { text: 'حذف', value: 'actions', sortable: false }],
            items :[]
        }
    },methods : {
        del(item){
            const index = this.items.indexOf(item);
            this.$store
            .dispatch("rmv", index).then(()=>{
              this.snackbar = true;
              this.text="دانش آموز مد نظر حذف شد .";
            });
        }
    },
    computed : {
      getList() {
        this.items = this.$store.getters.getList;
        return this.$store.getters.getList;
      }
    }
}
</script>

<style>

</style>