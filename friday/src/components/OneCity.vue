<template>
	<div id="sever_box">
        <my-header></my-header>
         <swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide><img src="../assets/index/banner_img01.jpg" alt="" /></swiper-slide>
			<swiper-slide><img src="../assets/index/banner_img04.jpg" /></swiper-slide>
			<swiper-slide><img src="../assets/index/banner_img03.jpg" /></swiper-slide>
			<swiper-slide><img src="../assets/index/banner_img02.jpg" alt="" /></swiper-slide>
			<!--<swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>-->
			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
			<!--    <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
		</swiper>
        <tong-cheng></tong-cheng>
        <my-footer></my-footer>
	</div>
</template>

<script>
	import MyHeader from './MyHeader'
	import MyFooter from './Footer'
	import TongCheng from './tongcheng/TongCheng'
	import Wheel from './home/wheel'
	export default {
		name: 'onecity',
		components: {
			MyHeader,
			MyFooter,
			TongCheng,
			Wheel
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
					loop: true,
					slidesPerView: 1,
				}
			}
		},
	}
</script>

<style scoped="scoped">
@import url("../assets/css/swiper-3.4.2.min.css");
 .swiper-container{
    	width: 100%;
    	margin-left: auto;
    	margin-right: auto;
    }
	.swiper-container img {
		 width: 100%;
		height: 510px;
	}
	.swiper-slide{
		width: 100%;
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
</style>