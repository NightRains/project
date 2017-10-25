<template>
 <div class="friday_box">
    <my-header></my-header>
    <friday-main></friday-main>
    <my-footer></my-footer>
 </div>
</template>

<script>
	import MyHeader from './MyHeader'
	import MyFooter from './Footer'
	import FridayMain from './friday/FridayMain'
	export default{
		name:'friday',
		components:{
			MyHeader,
			MyFooter,
			FridayMain
		}
	}
</script>

<style>
	
</style>