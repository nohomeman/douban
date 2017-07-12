<template>
	<div class="taber">
		<Botwrap :sel='selected'>
			<Botitem txt='首页' id='Home' @change='fn'>
				<img src="../assets/images/ic_tab_home_normal.png" slot='img' class="icon">
				<img src="../assets/images/ic_tab_home_active.png" slot='hoverimg' class="icon1">
			</Botitem>
			<Botitem txt='书影音' id='Audio' @change='fn'>
				<img src="../assets/images/ic_tab_subject_normal.png" slot='img' class="icon">
				<img src="../assets/images/ic_tab_subject_active.png" slot='hoverimg' class="icon1">
			</Botitem>
			<Botitem txt='广播' id='Broadcast' @change='fn'>
				<img src="../assets/images/ic_tab_status_normal.png" slot='img' class="icon">
				<img src="../assets/images/ic_tab_status_active.png" slot='hoverimg' class="icon1">
			</Botitem>
			<Botitem txt='小组' id='Group' @change='fn'>
				<img src="../assets/images/ic_tab_group_normal.png" slot='img' class="icon">
				<img src="../assets/images/ic_tab_group_active.png" slot='hoverimg' class="icon1">
			</Botitem>
			<Botitem txt='我的' id='Mine' @change='fn'>
				<img src="../assets/images/ic_tab_profile_normal.png" slot='img' class="icon">
				<img src="../assets/images/ic_tab_profile_active.png" slot='hoverimg' class="icon1">
			</Botitem>
		</Botwrap>
	</div>
</template>
<script>
	import Botwrap from './botwrap'
	 import Botitem from './Botitem'
		export default {
	 		components:{
	 			Botwrap,
	 			Botitem
	 		},
	 		data:function(){
	 			return {selected:'Home'}
	 		},
	 		methods:{
				fn:function(value){
				this.selected=value;
				//console.log(this.seleted);
				}
			},
	 		
		}
</script>