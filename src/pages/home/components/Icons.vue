<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) of pages"  :key="index">
				<div class="icon"  v-for="item in page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src='item.imgUrl'>
						<p class="icon-desc">{{item.desc}}</p>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script> 
export default {
	name:'HomeIcons',
	data (){
		return{
			swiperOption:{},
			iconList:[
				{id:'0001',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				desc:'景点门票'},
				{id:'0002',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
				desc:'游乐场'},
				{id:'0003',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
				desc:'水上乐园'},
				{id:'0004',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
				desc:'城市观光'},
				{id:'0005',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
				desc:'一日游'},
				{id:'0006',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
				desc:'动植物园'},
				{id:'0007',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png',
				desc:'海滨海岛'},
				{id:'0008',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
				desc:'东部华侨城'},
				{id:'0009',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
				desc:'海洋馆'},
				{id:'0010',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
				desc:'全部玩乐'},
			],
		}
	},
	computed:{
		pages (){
			let pages=[];
			this.iconList.forEach((item,index)=>{
				let page=Math.floor(index/8);
				if(!pages[page]){//保证pages里面的数据是数组
					pages[page]=[];
				}
				pages[page].push(item);
			})
			return pages //一个二维数组，数组第一项是一个8条数据的数组，第二项是2条数据的数组
		}
	}
}

</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
@import '~style/mixins.styl'
.icons>>>.swiper-container{
	height:0
	padding-bottom:50% //宽高比为2比1
}
.icon{
	float: left
	width :25% //宽和高都站25%
	padding-bottom:25% 
	overflow:hidden
	position:relative
	height:0
}
.icon-img{
	position:absolute
	top:0
	left:0
	right:0
	bottom:.44rem
	box-sizing:border-box
	padding:.1rem
}
.icon-img-content{
	height:100%
	display:block
	margin:0 auto
}
.icon-desc{
	position:absolute
	left:0
	right:0
	bottom:0
	height:.44rem
	line-height:.44rem
	color:$darkTextColor
	text-align:center
	ellipsis()
}

</style>