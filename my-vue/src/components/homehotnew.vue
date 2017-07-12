<template>
	<div>
		
			
				
				
			<div class="news" style="border-bottom: 1px solid #ccc;">
				<div class="newstext">
					<h3 style="font-size: 22px;">{{titlename}}</h3><br />
					<span>{{txt}}</span><br />
					
					<span>作者：{{author}}</span>
				</div>
				<div class="newspic">
					<img :src="url">
				</div>
			</div>
			
		
	</div>
</template>
<script type="text/javascript">
	export default{
		props:[
		'classtitle','titlename','txt','author','url','lanmu'
		]
	}
</script>
<style>
	
	
	.homehot-icon{
		width: 8px;
		height: 25px;
		background:#ff8159;
		float: left;
		margin-top: 3px;
		
	}
	.news{
		width: 100%;
		height: 200px;
		
	}
	.newstext{
		width: 250px;
		height:140px;
		float: left;
		text-align: left;
		margin:10px 0 0 10px ;
	}
	.newstext span{
		font-size: 14px;
		color: #666;
	}
	.newspic img{
		
		width: 80px;
	}
</style>
