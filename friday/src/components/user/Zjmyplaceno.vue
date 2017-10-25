<template>
	<div class="zjmyplaceno">
		<div class="zj-account-content">
			<div class="zj-nav">
				<span class="left">地址管理</span>
				<span class="right">添加新地址</span>
			</div>
			<div class="center">
				<img src="../../assets/个人/zjmyplace1.png"/>
				<span class="txt">暂无收货地址，请点击</span>
				<span class="right">添加新地址</span>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'zjmyplaceno',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.zj-account-content{
		border: 1px solid #e9e9e9;
		width: 1083px;
		height: 623px;
		float: right;
	}
	.zj-account-content .zj-nav{
		border-bottom: 1px solid #e9e9e9;
		height: 57px;
		font-size: 17px;
		
		color: #252525;
	}
	.zj-account-content .zj-nav .left{
		margin-left: 20px;
		line-height: 57px;
	}
	.zj-account-content .zj-nav .right{
		display: inline-block;
		width: 70px;
		height: 30px;
		border-radius: 5px;
		color: white;
		font-size: 14px;
		background-color: #498e3d;
		line-height: 30px;
		padding:0 10px 0 10px;
		float: right;
		margin-right: 20px;
		margin-top: 13px;
	}
	.zj-account-content .center{
		text-align: center;
		margin-top: 258px;
	}
	.zj-account-content .center img{
		vertical-align: middle;
	}
	.zj-account-content .center .txt{
		font-size: 17px;
		color: #adadad;
		font-weight: 200;
		margin-left: 10px;
	}
	.zj-account-content .center .right{
		display: inline-block;
		width: 70px;
		height: 30px;
		border-radius: 5px;
		color: white;
		font-size: 14px;
		background-color: #498e3d;
		line-height: 30px;
		padding:0 10px 0 10px;
		margin-left: 10px;
	}
</style>