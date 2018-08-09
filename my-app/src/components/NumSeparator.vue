<template>
  <div>
    <form action="">
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
    name: "numSeparator",
    computed: {
      from: {
        get() {
          return this.$store.getters['numSeparator/from']
        },
        set(value) {
          this.$store.dispatch('numSeparator/updateFrom', value)
        }
      },

      separatedNum() {return this.$store.getters['numSeparator/separatedNum']},
      ...mapState('numSeparator',{
        to: state => state.to
      })
    },
    methods: {
      updateTo (e) {
        this.$store.commit('numSeparator/updateTo', e.target.value)
      }
    }
  }
</script>

<style scoped>

</style>
