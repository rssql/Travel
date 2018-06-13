<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe64f;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe657;</span>
			输入城市/景点/游玩主题
		</div>
		<div class="header-right">
			城市
			<span class="iconfont">&#xe65b;</span>
		</div>
	</div>
</template>
<script>
export default {
	name:'Homeheader',
} 
</script>
<!-- 这里有个坑，需要sublime安装stylus插件，css语法才能高亮 -->
<style lang="stylus" scoped>
@import  '~style/varibles.styl'
.header
	line-height:.86rem
	background-color:$bgColor
	color:#fff
	display:flex
	.header-left
		width:.64rem
		float:left
		.back-icon
			text-align:center
			fon-size:.6rem
	.header-input
		height:.64rem
		line-height:.64rem
		color:#ccc
		flex:1
		background-color:#fff
		border-radius:.1rem
		margin-top:.12rem
		margin-left:.2rem
		padding-left:.2rem
	.header-right
		width:1.24rem
		float:right
		text-align:center

</style>