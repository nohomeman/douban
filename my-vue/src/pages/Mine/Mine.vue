<template>
	<div>
		<myheader>
			<h2 class="topheader">我的</h2>
			<img src='../../../src/assets/images/ic_settings.png' slot='leftimg'class="headericon"/>
		</myheader>
			<Minedenglu></Minedenglu>
			<Minetixing></Minetixing>
			<Mineicon>
				<Mineitem txt='喜欢'>
				<img src="../../assets/images/ic_my_likes.png" slot='mineitem'class="minepic"/></Mineitem>
				<Mineitem txt='日记'>
					<img src="../../assets/images/ic_my_note.png" slot='mineitem'class="minepic"/>
				</Mineitem>
				<Mineitem txt='相册'>
					<img src="../../assets/images/ic_my_album.png" slot='mineitem'class="minepic"/>
				</Mineitem>
				<Mineitem txt='广播'>
					<img src="../../assets/images/ic_my_status.png" slot='mineitem'class="minepic"/>
				</Mineitem>
				
			</Mineicon>
			<Mineicon>
				<Mineitem txt='电视'>
					<img src="../../assets/images/ic_my_movies_tvs.png" slot='mineitem'class="minepic"/>
				</Mineitem>
				<Mineitem txt='图书'>
					<img src="../../assets/images/ic_my_books.png" slot='mineitem'class="minepic"/>
				</Mineitem>
				<Mineitem txt='音乐'>
					<img src="../../assets/images/ic_my_music.png" slot='mineitem'class="minepic"/>
				</Mineitem>
				<Mineitem txt='同城活动'>
				<img src="../../assets/images/ic_my_events.png" slot='mineitem'class="minepic"/></Mineitem>
			</Mineicon>
			<Mineboticon>
				<Mineitem txt='豆瓣时间'>
					<img src="../../assets/images/ic_my_doulist.png" slot='mineitem'class="minepic"/>
				</Mineitem>
				<Mineitem txt='豆列'>
					<img src="../../assets/images/ic_my_doulist.png" slot='mineitem'class="minepic"/>
				</Mineitem>
				<Mineitem txt='订单'>
					<img src="../../assets/images/ic_my_orders.png" slot='mineitem'class="minepic"/>
				</Mineitem>
				<Mineitem txt='钱包'>
				<img src="../../assets/images/ic_my_note.png" slot='mineitem'class="minepic"/></Mineitem>
			</Mineboticon>
			
	</div>
</template>
<script type="text/javascript">
	import Myheader from '../../components/myheader'
	import Minedenglu from '../../components/minedenglu'
	import Minetixing from '../../components/minetixing'
	import Mineicon from '../../components/mineicon'
	import Mineboticon from '../../components/mineboticon'
	import Mineitem from '../../components/mineitem'
	export default{
		components:{
			Myheader,
			Minedenglu,
			Minetixing,
			Mineicon,
			Mineitem,
			Mineboticon
		}
	}
</script>
