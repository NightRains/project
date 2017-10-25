<template>
<!--10.21-->
	<div class="login_box">
		<login-header></login-header>
		<login-main></login-main>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import LoginHeader from './login/LoginHeader'
	import LoginMain from './login/LoginMain'
	import MyFooter from './Footer'
	export default{
		name:'login',
		components:{
			LoginHeader,
			LoginMain,
			MyFooter
		}
	}
</script>

<style>

</style>