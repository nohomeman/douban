<template>
		<div>
			<div id="search">
				<input type="text" name=""  placeholder="影视 图书 唱片 小说等" class="search-input"/>
				<img src="../assets/images/ic_chat_white.png" class="search-icon1"/>
				<img src="../assets/images/ic_scan_gray.png" class="search-icon2">
				<img src="../assets/images/ic_search_gray.png" class="search-icon3">
			</div>	
		</div>
</template>
<style>
	#search{
		width: 100%;
		height: 64px;
		position: relative;
	}
	.search-icon1{
		width: 26px;
		position: absolute;
		left: 88%;
		top: 18px;
	}
	.search-icon2{
		width: 26px;
		position: absolute;
		left: 280px;
		top: 18px;
	}
	.search-icon3{
		width: 26px;
		position: absolute;
		left: 25px;
		top: 18px;
	}
	.search-input{
		width: 80%;
		height: 40px;
		border:none;
		position: absolute;
		left: 20px;
		top: 20%;
		text-indent: 3em;
		border-radius: 6px;
	}
</style>