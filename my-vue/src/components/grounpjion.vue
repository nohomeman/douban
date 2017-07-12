<template>
	<div>
	<div class="groundtop">
		<p class="top">418861个小组等你来玩</p>
		<p class="center">立即选择加入吧</p>
		<span class='bot'>根据你的兴趣推荐</span>
	</div>
	<div class="groundcenter">
		<span class="text">精选推进</span>
	</div>
	</div>
</template>
<style>
	.groundtop{
		background:url(../assets/images/ic_group_banner.png) no-repeat ;
		background-size:cover ;
		width: 100%;
		height: 160px;
		margin-bottom:15px ;
		position: relative;
	}
	.groundtop .top{
		padding-top:50px;
		font-weight: bold;
		font-size: 20px;
	}
	.groundtop .center{
		color: #999;
		font-size: 13px;
	}
	.groundtop .bot{
		color:#999 ;
		font-size: 12px;
		position: absolute;
		left: 1em;
		bottom: 0;
	}
	.groundcenter{
		width: 95%;
		height: 70px;
		background: url(../assets/images/ic_rec_group_banner_6.png) no-repeat ;
		background-size:cover ;
		background-position:0px 0px;
		margin:0 auto;
		position: relative;
		
	}
	.groundcenter .text{
		color: white;
		position: absolute;
		left: 10px;
		bottom:2px;
		font-size: 15px;
	}
</style>