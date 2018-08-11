<template>
  <div>
    <form action="">
      <!-- v-model と dispatchのどちらの可能 -->
      <h2>{{ module }}</h2>
      <input type="text" v-model.number="from">から
      <input type="text" :value="to" @input="updateTo">までをカンマ区切りで出力
      <br>
      <textarea readonly cols="30" rows="10" v-model="separatedNum"></textarea>
    </form>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "module",
    props: {
      module: ""
    },
    computed: {
      from: {
        get() {
          return this.$store.getters[`${this.module}/from`]
        },
        set(value) {
          this.$store.dispatch(`${this.module}/updateFrom`, value)
        }
      },

      separatedNum() {return this.$store.getters[`${this.module}/separatedNum`]},
      to() { return this.$store.getters[`${this.module}/to`] }
      // error Uncaught TypeError: Cannot convert undefined or null to object
      // ...mapState(this.module,{
      //   to: state => state.to,
        // stateはv-modelで直接書き換えは出来ない
        //from: state => state.from
      // })
    },
    methods: {
      updateTo (e) {
        this.$store.dispatch(`${this.module}/updateTo`, e.target.value)
      }
    }
  }
</script>

<style scoped>

</style>
