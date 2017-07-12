<template>
  <div id="app">   
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
export default {
  name: 'app',
  components:{
  	Tabbar
  },
	created:function(){
	this.$router.push('/')
}
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
a{
	text-decoration: none;
}
ul li{
	list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
