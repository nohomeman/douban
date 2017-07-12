<template>
	<div class="mineitem">
		<span><slot name='mineitem'></slot></span><br />
		<span>{{txt}}</span>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['txt']
	}
</script>
<style type="text/css">
	.mineitem{
		width: 25%;
		height: 80px;
		float: left;
		margin-top:20px ;
	}
	.minepic{
		width: 33px;
	}
</style>