<template>
	<div class="groundtext">
		<h2>影院</h2>
		<div class="groundtextwrap">
			<div class="left-pic">
				<img src="../assets/images/media.jpg" />
			</div>
			<div class="center-text">
				<br />
					<strong>Gossip Girl</strong><br />
					<span>I love you.Alway have.Always will.</span>
			</div>
			<div class="right-wrap">
				<span>1123人</span>
				<img src="../assets/images/ic_group_check_anonymous.png" />
			</div>
		</div>
		<div class="groundtextwrap">
			<div class="left-pic">
				<img src="../assets/images/media.jpg" />
			</div>
			<div class="center-text">
				<br />
					<strong>Gossip Girl</strong><br />
					<span>I love you.Alway have.Always will.</span>
			</div>
			<div class="right-wrap">
				<span>1123人</span>
				<img src="../assets/images/ic_group_check_anonymous.png" />
			</div>
		</div>
		<div class="groundtextwrap">
			<div class="left-pic">
				<img src="../assets/images/media.jpg" />
			</div>
			<div class="center-text">
				<br />
					<strong>Gossip Girl</strong><br />
					<span>I love you.Alway have.Always will.</span>
			</div>
			<div class="right-wrap">
				<span>1123人</span>
				<img src="../assets/images/ic_group_check_anonymous.png" />
			</div>
		</div>
	</div>
</template>
<style>
	.groundtext{
		width: 95%;
		height: 120px;
		border-top: 1px solid #eee;
		margin: 30px 2.5%;
		position: relative;
		
	}
	.groundtext h2{
		width: 50px;
		height: 20px;
		font-size: 16px;
		background: white;
		position: absolute;
		left: 43%;
		top: -12px;
	}
	.groundtext .groundtextwrap{
		width: 100%;
		height: 70px;
		margin-top: 30px;
	}
	.groundtext .left-pic{
		width: 70px;
		height: 70px;
		border-radius:5px;
		overflow: hidden;
		float: left;
	}
	.groundtext .left-pic img{
		width: 70px;
	}
	.groundtextwrap .center-text{
		width: 190px;
		height: 70px;
		float: left;
		text-align: left;
		margin-left: 20px;
	}
	.groundtextwrap .center-text strong{
		font-size: 18px;
	}
	.groundtextwrap .center-text span{
		font-size: 11px;
		color: #ccc;
	}
	.groundtextwrap .right-wrap{
		width: 100px;
		height: 70px;
		position: relative;
		float: left;
	}
	.groundtextwrap .right-wrap img{
		width: 23px;
		position: absolute;
		right: -5px;
		top:20px
	}
	.groundtextwrap .right-wrap span{
		font-size: 11px;
		color: #ccc;
		position: absolute;
		top: 25px;
		left:20px;
		text-align: left;
	}
</style>