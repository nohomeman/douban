<template>
  <div class="bcItem">
      <div class="bcItem_left ">
        <div class="bcItem_titPic"><img :src="bcurl"></div>
      </div>
      <div class="bcItem_right">
        <h4 v-text="bcName"></h4>
        <span v-text="attention" class="attention"></span>
        <p v-text="talk" class="talk"></p>
        <div class="bcItem_pic"><img :src="bcur2"></div>
        <div class="bc_like">
          <img src="../assets/images/ic_liked.png"> <span v-text="likeNum"></span>
          <img src="../assets/images/ic_group_comment_0.png"> <span v-text="likeNum2"></span>
        </div>
      </div>
      <button type="button" class="gz_btn">关注</button>
      <div class="close"><img src="../assets/images/ic_close_status_recommend.png"></div>
  </div>
</template>
<script>
  export default {
      props:['bcurl','bcName','attention','talk','bcur2','likeNum','likeNum2']
  }
</script>
<style>
  .bcItem{height: 294px;border-radius: 4px;background-color: #fff;box-shadow: 0px 0px 10px rgba(0,0,0,.4);text-align: left;
    position: relative;margin-bottom: 14px;}
  .bcItem_left{width: 76px;height: 100%;float: left}
  .bcItem_right{float: left;width: 314px;height: 100%}
  .bcItem_titPic img{width: 56px;padding-top: 15px}
  .bcItem_titPic {text-align: center}
  .bcItem_right h4{padding-top: 20px;font-family: 黑体;padding-bottom: 6px;}
  .attention{font-size: 12px;color: #c3c3c3}
  .talk{font-family: 黑体;padding-top: 10px;padding-bottom: 12px}
  .bcItem_pic{height: 140px;width: 286px;}
  .bcItem_pic img{width: 100%;height: 100%}
  .bc_like img{width: 24px;vertical-align: middle}
  .bc_like{line-height: 30px;height: 30px;padding-top: 10px;}
  .bc_like span{font-size: 12px;color: #e0e0e0;position: relative;bottom: -2px;}
  .gz_btn{width: 74px;height: 28px;line-height: 28px;border-radius: 4px;background-color: #42bd55;color: #fff;font-size: 14px;
  border: none;position: absolute;top: 24px;right: 27px}
  .close {position: absolute;top: 0;right:0 }
  .close img{width: 28px;}
</style>
