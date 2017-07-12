<template>
		<div class="groundhyp">
			<div class="icon">
				<div class="pic"><img src="../assets/images/ic_reshare_flag.png"/></div>
				<span>换一批</span>
			</div>
			<div class="text"><span>选好了，去玩小组</span></div>
		</div>
</template>
<style>
	.groundhyp{
		width: 100%;
		height: 50px;
		position: fixed;
		left: 0;
		bottom: 65px; 
		background: white;
		opacity: .8;
		
	}
	.groundhyp .icon{
		width: 100px;
		height: 30px;
		margin:10px 20px;
		float: left;
		
	}
	.groundhyp .pic{
		float: left;
		margin-left:10px ;
	}
	.groundhyp .icon img{
		width:28px ;
		
	}
	.groundhyp .icon span{
			font-size:13px ;
			display: inline-block;
			margin-top:5px ;
	}
	.groundhyp .text{
		width: 120px;
		height:25px;
		background: #ccc;
		float: right;
		font-size:12px ;
		margin: 10px 15px;
		
	}
	.groundhyp .text span{
		display: inline-block;
		margin-top:5px;
		color: white;
	}
</style>