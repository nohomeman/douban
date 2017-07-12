<template>
	<div >
		<myheader col='#44bd56' >
			
			<Search></Search>
		</myheader>
		
	<Banner swiperid="homebanner" paginationDirection="right">
      <div class="swiper-slide"><img src="../../assets/images/banner/01.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/images/banner/02.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/images/banner/03.jpg" alt=""></div>
    </Banner>
    	<div class="biaoti">
				<div class="homehot-icon"></div>
				<h2 style='font-size: 24px;float: left;margin-left: 10px;color: #ff8159;'>热点</h2>
			</div><br>
				<br />
		<Homehotnew v-for='e in arr' :titlename='e.title'  :txt='e.target.desc' :author='e.target.author.name' :url='e.target.cover_url' :lanmu='e.soure_cn'></Homehotnew>
	</div>
</template>
<script type="text/javascript">
	import Myheader from '../../components/myheader'
	import Search from '../../components/search'
	import Banner from '../../components/banner'
	import Homehotnew from'../../components/homehotnew'
	export default{
		components:{
			Myheader,
			Search,
			Homehotnew,
			Banner
		},
		data:function(){
			return{
				arr:[]
			}
		},
		mounted:function(){
			this.search()
		},
		methods:{
			search:function(){
				//console.log('search');
				this.axios.get('/api/homeData').then((response) => {
					console.log(response.data.data.recommend_feeds[0]);
					this.arr=response.data.data.recommend_feeds
					console.log(this.arr)
				})
			}
		}
	}
</script>
<style type="text/css">
	 .biaoti{
		color: #ff8159;
		margin-top: 15px;
		
	}
</style>
