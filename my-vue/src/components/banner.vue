<template>
    <div class="swiper-container" :class="swiperid">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <div :class="{'swiper-pagination':bol}" :style="{'text-align':paginationDirection}" ></div>
    </div>
</template>

<style>
  @import "../assets/libs/swiper/swiper-3.4.2.min.css";
  .swiper-slide img{width: 100%}
  .swiper-pagination-bullet-active{background: white}
</style>

<script>
  import '../assets/libs/swiper/swiper.js';

  export default{
    props:{
      swiperid:{
        type:String,
        default:""
      },
      bol:{
        type:Boolean,
        default:true
      },
      paginationDirection:{
        type:String,
        default:'center'
      },
      effect:{
        type:String,
        default:'slide'
      },
      loop:{
        type:Boolean,
        default:true
      },
      direction:{
        type:String,
        default:'horizontal'
      },
      autoplay:{
        type:Number,
        default:2000
      },
      paginationType:{
        type:String,
        default:"bullets"
      }
    },
    mounted:function(){
      this.swiper();
    },
    methods:{
        swiper:function () {
          var _this=this;
          var mySwiper = new Swiper ('.'+_this.swiperid,{
            autoplayDisableOnInteraction : false,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop:_this.loop,
            autoplay:_this.autoplay
          });
        }
    }
  }

</script>
