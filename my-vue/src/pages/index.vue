<template>
  <div>
  <h2>{{msg}}</h2>
    <!--<Parent></Parent>-->
  </div>
</template>

<script>
//import Parent from '../components/Parent.vue'
export default {
  data: function () {
    return {
      msg: 'index'
    }
  },
  components: {
    Parent
  },
  props: []
}

</script>

<style>

</style>
