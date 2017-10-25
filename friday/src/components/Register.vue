<template>
	<div class="register_box">
		<register-header></register-header>
		<register-main></register-main>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import RegisterHeader from './register/RegisterHeader'
	import RegisterMain from './register/RegisterMain'
	import MyFooter from './Footer'
	export default{
		name:'register',
		components:{
			RegisterHeader,
			RegisterMain,
			MyFooter
		}
	}
</script>

<style>
</style>