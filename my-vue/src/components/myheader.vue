<template>
	<div class="header" :style="{background:col}">
		<slot></slot>
		<slot name='leftimg'></slot>
		<slot name='rightimg'></slot>
	</div>
</template>
<style>
	.header{
		width: 100%;
		height: 64px;
		background: #42B983;
		border-bottom:1px solid #ccc ;
		
	}
	.header .topheader{
		font-size: 21px;
		padding-top:13px ;
		font-weight: 800;
	}
	.header .headericon{
		width: 33px;
		position: absolute;
		right: 20px;
		top: 12px;
	}
	.header .headericon1{
		width: 35px;
		position: absolute;
		right: 80px;
		top: 12px;
	}
</style>
<script type="text/javascript">
	export default{
		props:{
			col:{
				default:'#f9f9f9'
			}
		}
	}
</script>