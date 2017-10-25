<template>
	<div class="my-order">
		<p class="balance">账户余额&nbsp;:&nbsp;<span>¥20.0</span></p>
		<div class="wallet_box">
			<h5>请选择充值金额&nbsp;:&nbsp;</h5>
			<div class="chongzhi">
				<span>500元</span>
				<span>1000元</span>
				<span>2000元</span>
			</div>
			
			<h5 class="cz_gift">充值有礼</h5>
			<div class="refill_box">
				<div class="re_con">
					<span>充500送&nbsp;:&nbsp;</span>
					<div class="c_cont">
						<span>新疆哈密瓜</span>
						<span>价值&nbsp;:&nbsp;500</span>
					</div>
					
				</div>
				<div class="re_con">
					<span>充500送&nbsp;:&nbsp;</span>
					<div class="c_cont">
						<span>新疆哈密瓜</span>
						<span>价值&nbsp;:&nbsp;500</span>
					</div>
				</div>
			</div>
			<a href="###" class="liji_cz">立即充值</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "my-order",
		methods: {},
		data() {return {}}
	}
</script>

<style scoped>
	.my-order {
		width: 1086px;
		/*height: 622px;*/
		border: 1px solid #e9e9e9;
		float: right;
	}
	
	.balance {
		width: 1066px;
		height: 57px;
		border-bottom: 1px solid #E9E9E9;
		font-size: 18px;
		font-family: "MicrosoftYaHei";
		color: rgb(51, 51, 51);
		line-height: 57px;
		padding-left: 20px;
	}
	.balance span{
		color: #e85e35;
	}
	.wallet_box{
		margin: 20px 0 0 40px;
	}
	.wallet_box h5:first-child{
		font-size: 18px;
		  color: rgb(33, 33, 33);
		  font-weight: 400;
		  line-height: 76px;
	}
	.chongzhi{
		margin-bottom: 20px;
	}
	.chongzhi span{
		display: inline-block;
		margin-right: 32px;
		padding: 9px 32px;
		  font-size: 14px;
  color: rgb(42, 42, 42);
  text-align: center;
		border: 1px solid #d4d4d4;
  
	}
	.chongzhi span:first-child{
		background-color: #f4fff2;
		border: 1px solid #64a130;
	}	
	.chongzhi span:hover{
		background-color: #f4fff2;
		border: 1px solid #64a130;
	}
	.cz_gift{
		font-size: 18px;
		  color: #f08200;
		  font-weight: 400;
		  padding: 20px 0;
	}
	.refill_box{
		overflow: hidden;
	}
	.re_con{
		width: 335px;
		height: 169px;
		border: 1px solid #eaeaea;
		float: left;
		margin-right: 40px;
		background: url(../../assets/account/card.png) no-repeat;
		background-size: 100% 100%;
		padding: 20px 0 0 20px;
		position: relative;
		border-radius: 1px;
	}
	.re_con span{
		display: block;
		
	}
	.c_cont{
		position: absolute;
		top: 80px;
		left: 190px;
	}
	.liji_cz{
		 border-radius: 5px;
		 display: inline-block;
		 text-align: center;
		  background-color: rgb(240, 130, 0);
		  width: 150px;
		  height: 50px;
		 line-height: 50px;
		 margin-top: 40px;
		 color: white;
		 margin-bottom: 20px;
	}
	
</style>