<template>
	<div class="audioitemall">
	<div class="audioitem">
		<span><slot name='audioimg'></slot></span><br />
		<span>{{txt}}</span>
	</div>
	</div>
</template>

<script>
	export default{
		props:['txt']
	}
</script>

<style>
	.audioitemall{
		width: 1000px;
	}
	.audioitem{
		width: 100px;
		float: left;
		margin-left:10px ;
	}
	.audioitem img{
		width: 100%;
		
	}
</style>