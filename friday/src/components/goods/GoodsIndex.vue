<template>
		<div class="goods_box">
		<my-header></my-header>
		<div id="box">
		<div class="bread_topnav">
			<bread-crumb></bread-crumb>
		</div>
		<!--<goods-main></goods-main>-->
		<router-view></router-view>
		<my-footer></my-footer>
	</div>
	</div>
</template>

<script>
	import MyHeader from '../MyHeader'
	import MyFooter from '../Footer'
	import BreadCrumb from '../BreadCrumb'
	import GoodsMain from '../goods/GoodsMain'
	export default {
		name: 'goods',
		components: {
			MyHeader,
			MyFooter,
			GoodsMain,
			BreadCrumb
		}
	}
</script>

<style>
.bread_topnav {
		width: 1280px;
		margin:20px auto 0px;
	}
	#box{
		border-top:1px solid #e4e4e4;
	}
</style>