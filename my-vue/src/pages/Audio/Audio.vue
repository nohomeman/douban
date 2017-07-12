<template>
	<div class="audio">
		<myheader>
			<h2 class="topheader">书影音</h2>
			<img src="../../assets/images/ic_group_search.png" slot="leftimg" class="headericon1">
			<img src="../../assets/images/ic_chat_green.png" slot="rightimg" class="headericon">
		</myheader>
		<div class="nav">
		<span  class="span"><router-link to='/Audio/film'>电影</router-link></span>
		<span  class="span"><router-link to='/Audio/book'>读书</router-link></span>
		<span class="span"><router-link to='/Audio/tv'>电视</router-link></span>
		<span  class="span"><router-link to='/Audio/city'>同城</router-link></span>
		<span  class="span"><router-link to='/Audio/music'>音乐</router-link></span>
		</div>
		<router-view></router-view>
		
		<!--<ul>
			<li><router-link></router-link></li>
			<li><router-link></router-link></li>
			<li><router-link></router-link></li>
			<li><router-link></router-link></li>
			<li><router-link></router-link></li>
		</ul>-->
	</div>
</template>
<style>
	.audio .nav{
		width: 100%;
		height: 50px;	
	}
	.audio .span{
		width: 20%;
		height: 40px;
		background: white;
		display: block;
		float: left;
		margin-top:10px ;
		
		
	}
	.audio span a{
		color: #ccc;
	}
</style>
<script type="text/javascript">
	import Myheader from '../../components/myheader'
	
	export default{
//		var sel=0
		components:{
			Myheader,
			
		},
		created:function(){
	this.$router.push('/Audio/film')
}
		
	}
</script>