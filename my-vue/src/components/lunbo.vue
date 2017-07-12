<template>
	<div>
		<div class="lunbo">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide"><img src="../assets/images/banner/01.jpg"></div>
					<div class="swiper-slide"><img src="../assets/images/banner/02.jpg"></div>
					<div class="swiper-slide"><img src="../assets/images/banner/03.jpg"></div>
				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination"></div>
			</div>
		</div>

</template>
<script type="text/javascript">
	import "../assets/libs/swiper/js/swiper.min.js"
	export default{
		var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
//  // 如果需要前进后退按钮
//  nextButton: '.swiper-button-next',
//  prevButton: '.swiper-button-prev',
//  
//  // 如果需要滚动条
//  scrollbar: '.swiper-scrollbar',
  })        
	}
</script>
<style>
 	@import url("../assets/libs/swiper/css/swiper.min.css");
	.swiper-container {
    width: 100%;
    height: 130px;
	}  
	/*.lunbo{
		width: 100%;
		height:130px;
		position: relative;
	}
		
	.lunbo-ul{
		width: 80px;
		height: 10px;
		position: absolute;
		right: 0;
		bottom: 8px;
		}
	.lunbo-ul li{
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: black;
		opacity: .5;
		float: left;
		margin-right: 3px;
		
	}
	.lunbo-img img{
		width: 100%;
	}*/
</style>