<template>
<div>
  <Search/>
  <Charts/>
  <!-- <Axios/> -->
</div>
</template>

<script>
import Search from './components/search/Search.vue'
import Charts from './components/Charts'
// import Axios from './components/Axios'

export default {
  components: {
    Search,
    Charts,
    // Axios
  }
}
</script>