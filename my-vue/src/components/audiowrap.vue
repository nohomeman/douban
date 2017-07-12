<template>
	<div class="audiowrap">
		<h2>{{txt}}</h2>
		<span class="text">更多<img src="../assets/images/ic_arrow_green_right.png"/></span>
		<slot name='audiow'></slot>
	</div>
</template>

<script>
	export default{
		props:['txt']
	}
</script>

<style>
	.audiowrap{
		width: 100%;
		height: 250px;
		overflow: hidden;
	}
	.audiowrap h2{
		display: block;
		width: 260px;
		height: 18px;
		margin:31.5px 10px;
		float: left;
		font-size: 18px;
		text-align: left;
	}
	.audiowrap .text{
		float: right;
		color: #44bd56;
		position: relative;
		margin: 30px 30px;
	}
	.audiowrap .text img{
		height: 23px;
		position: absolute;
		right: -10px;
		top: 0;
	}
</style>