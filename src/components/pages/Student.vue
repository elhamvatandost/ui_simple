<template>  
    <v-form>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>اضافه کردن دانش آموز</v-expansion-panel-header>
        <v-expansion-panel-content>
        <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="نام"
                  v-model="name"
                  :error-messages="nameErr"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="معدل"
                  v-model="number"
                  type="number"
                  :error-messages="numErr"
                  required
                  @input="$v.number.$touch()"
                  @blur="$v.number.$touch()"
                  outlined
                ></v-text-field>
              </v-col>
            <v-btn color="success" class="mr-2" @click="add" :disabled="$v.$invalid">
            ‍ ثبت اطلاعات
            </v-btn>
            </v-row>
        </v-container>
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
import { required } from "vuelidate/lib/validators";

export default {
    data(){
        return {
            name : '',
            number : '',
            panel: [0],
            snackbar : '',
            text : ''
        }
    },
    validations: {
        name: { required },
        number: { required }
    },
    methods : {
      add(){
        this.$store
        .dispatch("add", {
          name : this.name,
          number: this.number,
          actions: 1
        }).then(()=>{
          this.snackbar = true;
          this.text = "دانش آموز جدید اضافه شد ."
        });
      }
    },
    computed : {
        nameErr() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("نام را وارد کنید");
      return errors;
        },
        numErr() {
      const errors = [];
      if (!this.$v.number.$dirty) return errors;
      !this.$v.number.required && errors.push("معدل را وارد کنید");
      return errors;
        },
    }
}
</script>

<style>

</style>