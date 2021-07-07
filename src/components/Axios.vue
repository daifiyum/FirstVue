<template>
  <input type="button" value="笑话" @click="sh">
</template>

<script>
export default {
//   data(){
//     return {
      
//       }
//   },
  methods: { 
      sh(){
         this.$axios.get("api/...").then(function(response){})
        }
    }
}
</script>

<style>

</style>