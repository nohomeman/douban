<template>
	<div class="item" @click='fn'>
		<span v-show='bol'><slot name='img'></slot><br /></span>
		<span v-show='!bol'><slot name='hoverimg'></slot><br /></span>
		<span>{{txt}}</span>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['txt','id'],
		computed:{
			bol:function(){
				if(this.$parent.sel==this.id){
					return false
				}
				return true
			}
		},
		methods:{
			fn:function(){
				this.$router.push('/'+this.id);
				this.$emit('change',this.id);
				
			}
		}
	}
</script>
<style>
 .wrap{
 	width: 100%;
 	height: 64px;
 	border-top: 1px solid #ccc;
 	position: fixed;
 	left: 0;
 	bottom: 0;
 	background: #eee;
 }
 .item{
 	width: 20%;
 	float: left;
 }
 .icon{
 	width: 33px;
 }
 .icon1{
 	width: 33px;
 }
</style>