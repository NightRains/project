<template>
	<div id="cart_box">
        <shop-header></shop-header>
        <cart-main></cart-main>
        <my-footer></my-footer>
	</div>
</template>

<script>
	import ShopHeader from './cart/ShopHeader'
	import CartMain from './cart/CartMain'
	import MyFooter from './Footer'
	export default {
		name: 'shopcare',
		components: {
            ShopHeader,
            CartMain,
            MyFooter
		}
	}
</script>

<style>

</style>