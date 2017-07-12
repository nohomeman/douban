<template>
	<div>
		<myheader>
			<h2 class="topheader">小组</h2>
			<img src="../../assets/images/ic_group_search.png" slot="leftimg" class="headericon1">
			<img src="../../assets/images/ic_chat_green.png" slot="rightimg" class="headericon">
		</myheader>
		<Grounpjion></Grounpjion>
		<Grounptext></Grounptext>
		<Grounphyp></Grounphyp>
	</div>
</template>
<script type="text/javascript">
	import Myheader from '../../components/myheader'
	import Grounpjion from '../../components/grounpjion'
	import Grounptext from '../../components/grounp'
	import Grounphyp from '../../components/groundhyp'
	export default{
		components:{
			Myheader,
			Grounpjion,
			Grounptext,
			Grounphyp
		}
	}
</script>