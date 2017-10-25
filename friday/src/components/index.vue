<template>
	<div class="box">
		<my-header></my-header>
		<!--banner轮播图-->
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide><img src="../assets/index/banner_img01.jpg" alt="" /></swiper-slide>
			<swiper-slide><img src="../assets/index/banner_img04.jpg" /></swiper-slide>
			<swiper-slide><img src="../assets/index/banner_img03.jpg" /></swiper-slide>
			<swiper-slide><img src="../assets/index/banner_img02.jpg" alt="" /></swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
			<!--    <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
		</swiper>
		<!--banner轮播图结束-->
		<home-main></home-main>
		<my-footer></my-footer>
	</div>
</template>
<script>
	import MyHeader from './MyHeader'
    import MyFooter from './Footer'
	import Wheel from  './home/wheel'
	import HomeMain from './home/HomeMain'
	export default {
		name: 'index',
		components: {
			MyHeader,
			MyFooter,
			Wheel,
			HomeMain
		},
		data() {
			return {
				swiperOption: { //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
					// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					notNextTick: true,
					// swiper configs 所有的配置同swiper官方api配置
					autoplay: 2000,
					direction: 'horizontal',
					grabCursor: true,
					setWrapperSize: true,
					autoHeight: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					prevButton: '.swiper-button-prev', //上一张
					nextButton: '.swiper-button-next', //下一张
					//        scrollbar:'.swiper-scrollbar',//滚动条
//					mousewheelControl: true,
					observeParents: true,
					// 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
					debugger: true,
					loop: true
				}
			}
		},
		
	}
</script>
<style scoped="scoped">
	@import url("../assets/css/swiper-3.4.2.min.css");
    .swiper-container{
		z-index: 0;
	}
	.swiper-container img {
		width:100%;
		height: 510px;
	}
	.swiper-button-prev{
	 	width:60px;
	 	height:60px;
	 	left:80px;
	 	margin-top:-30px;
		background:url(../assets/index/jiantou.png) no-repeat  scroll 0 0/100%;
		opacity: 0.5;
	}
	.swiper-button-next{
		width:60px;
	 	height:60px;
	 	right:80px;
	 	margin-top:-30px;
		background:url(../assets/index/jiantou.png) no-repeat  scroll 0 0/100%;
		opacity: 0.5;
		transform: rotate(180deg);
	}
	#box{
		overflow: hidden;
		width: 100%;
	}
</style>