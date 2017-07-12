<template>
	<div>
		<Myheader>
			<h2 class="topheader">广播</h2>
			<img src="../../assets/images/ic_status_search_user.png" slot="leftimg" class="headericon1">
			<img src="../../assets/images/ic_chat_green.png" slot="rightimg" class="headericon">
		</Myheader>
		<div class='broadcast_main'>
      <!--发现有趣的人-->
      <div class="find">
        <h4>发现有趣的人</h4>
        <span>关注他们,发现更大的世界</span>
      </div>
      <div class="bcItemlist">
        <BcItem v-for="item in bcArr" :bcurl="item.url" :bcName="item.name" :attention="item.gz" :talk="item.talk" :bcur2="item.url2" :likeNum="item.num" :likeNum2="item.num2"></BcItem>
      </div>
    </div>
  </div>
</template>
<script>
  import Myheader from '../../components/myheader'
  import BcItem from '../../components/BcItem'
  export default{
    data:function () {
      return {
          bcArr:[
            {
                url:require('../../assets/images/avatar_male_100.png'),
                name:"王硕",
                gz:'10000人关注',
                talk:'夏资文是瓜皮',
                url2:require('../../assets/images/avatar_male_100.png'),
                num:300,
                num2:400,
            },
            {
              url:require('../../assets/images/avatar_male_100.png'),
              name:"王硕",
              gz:'10000人关注',
              talk:'夏资文是瓜皮',
              url2:require('../../assets/images/avatar_male_100.png'),
              num:300,
              num2:400,
            }
          ]
      }
    },
    components:{
      Myheader,
      BcItem
    }
  }
</script>
<style>
  .broadcast_main{padding: 0px 12px;height: 736px;overflow: hidden;background: url("../../assets/images/gbBg_03.jpg") no-repeat
  #f8f8f8 72px 20px;}
  .find{height: 114px;text-align: left}
  .find h4,.find span{margin-left: 172px;}
  .find h4{padding-top: 40px;padding-bottom: 2px}
  .find span{color: #9d9d9d;font-size: 14px;}
</style>
