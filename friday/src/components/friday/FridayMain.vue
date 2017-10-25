<template>
	<div class="uwrap">
			<div class="utop">
				<bread-crumb></bread-crumb>
			</div>
			<div class="ucont">
			<a href="###">	<img src="../../assets/firdaydatu/banner1.jpg"/></a>
			<a href="###">	<img src="../../assets/firdaydatu/banner22.jpg"/></a>
			<a href="###">	<img src="../../assets/firdaydatu/banner3.jpg"/></a>
			</div>
		</div>
</template>

<script>
	import BreadCrumb from '../BreadCrumb' 
	export default {
		name: "firdaymain",
		components:{
			BreadCrumb
		},
	}
</script>

<style scoped="scoped">
			*{
				margin: 0;
				padding: 0;
			}			
			.uwrap{
				width: 1280px;
				height: 100%;
				margin:20px auto 20px;
			}
			.utop{
				width: 100%;
				/*height: 54px;*/
				margin:0 auto;
				/*font-size: 14px;				
				background-color: #f4f4f4;*/
			}		
			.ucont{
				width: 100%;
				margin-top: 20px;				
			}
			.ucont img{
				width: 100%;
				height: 100%;
				padding-top: 10px;
			}
</style>