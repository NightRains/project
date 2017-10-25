<template>
	<div id="app">
		<my-header></my-header>
		<div class="user_box">
			<my-account></my-account>
			<router-view></router-view>
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import MyHeader from './MyHeader'
	import MyFooter from './Footer'
	import MyAccount from './user/MyAccount'
	import Account from './user/account'
	import MyOrder from './user/MyOrder'
	import MyOrderlist from './user/MyOrderlist'
	import Jifen from './user/jifen'
	import JifenOrder from './user/JifenOrder'
	import OneStep from './user/OneStep'
	import TwoStep from './user/TwoStep'
	import ThreeStep from './user/ThreeStep'
	export default {
		name: "app",
		components: {
			MyHeader,
			MyAccount,
			Account,
			MyFooter,
			MyOrder,
			MyOrderlist,
			Jifen,
			JifenOrder,
			OneStep,
			TwoStep,
			ThreeStep
		}
	}
</script>

<style>
	html,
	body {
		font-size: 16px;
		font-family: 'MicrosoftYaHei';
	}
	
	body,
	div,
	a,
	span,
	img,
	p,
	ul,
	li,
	h5 {
		margin: 0;
		padding: 0;
	}
	
	ul,
	li {
		list-style: none;
	}
	
	a {
		text-decoration: none;
	}
	
	.user_box {
		width: 1280px;
		margin: 39px auto;
		position: relative;
		overflow: hidden;
	}
</style>