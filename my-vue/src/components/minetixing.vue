<template>
	<div class="minetixing">
		<div class="tixing">
			<div class="top">
				
				<img src="../assets/images/ic_mine_notification.png" />
				<!--<p><img src="../assets/images/ic_mine_notification" /></p>-->
				<strong>提醒</strong><span><img src="../assets/images/ic_group_topic_right_arrow.png"></span>
			</div>
			<p class="bottom">
				暂无消息
			</p>
		</div>
	</div>
</template>
<style>
	.minetixing{
		width: 100%;
		height: 120px;
		background: lightgray;
		position: relative;
	}
	.minetixing .tixing{
		width: 100%;
		height: 100px;
		background: white;
		position: absolute ;
		left: 0;
		top:10px
	}
	.tixing .top{
		
		width: 90%;
		height: 60px;
		border-bottom: 1px solid #ccc;
		margin-left:10% ;
		position: relative;
	}
	.tixing p{
		padding-top:10px ;
		color: #ccc;
		
	}
	.tixing .top img{
		width: 33px;
		position: absolute;
		left: 0;
		top: 15px;
	}
	.tixing .top strong{
		position: absolute;
		left: 40px;
		top: 20px;
		font-weight:bolder;
		font-size: 17px;
	}
	.tixing .top span {
		width: 21px;
		position: absolute;
		right: 30px;
		top: 5px;
	}
	.tixing .top span img{
		width: 23px;
	}
</style>