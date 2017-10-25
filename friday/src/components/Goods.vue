<template>
	<div class="goods_index">
		<router-view></router-view>
	</div>
</template>

<script>
	import MyHeader from './MyHeader'
	import MyFooter from './Footer'
	import BreadCrumb from './BreadCrumb'
	import GoodsMain from './goods/GoodsMain'
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

<style scoped="scoped">
.goods_index{
	position: relative;
}
</style>