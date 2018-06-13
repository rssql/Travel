<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
		    <swiper-slide v-for="item in swiperList" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl" >
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
  	</div>
</template>
<script>
export default {
	name:'HomeSwiper',
	data (){
		return{
			swiperOption:{
				pagination:'.swiper-pagination',	
				loop:true
			},
			swiperList:[
				{id:'0001',imgUrl:'http://img1.qunarzz.com/piao/fusion/1805/13/6332699c44387902.jpg_750x200_b7afa4f8.jpg'
				},{id:'0002',imgUrl:'http://img1.qunarzz.com/piao/fusion/1806/64/cc63aa526e8bb302.png_750x200_d32776c5.png'
				},{id:'0003',imgUrl:'http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg'
				},{id:'0004',imgUrl:'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg'
				}
			]
		}
	}
}
</script>
<style lang="stylus" scoped>
.wrapper >>>.swiper-pagination-bullet-active
	background:#fff
.wrapper
	width:100%
	height:0
	overflow:hidden
	padding-bottom:26.67%
	background:#ccc
	.swiper-img
		width: 100%;
	

	
		
</style>