<template>
	<div class="account">
		<div class="account_count">
			<div class="account_up">
				<div class="up_pic">
					<img src="../../assets/account/lemon.png" />
				</div>
				<p class="hello">您好,<span>135****2365</span></p>
				<div class="up_leiBox">
					<div class="up_lei"><span>当前积分</span><span>125</span></div>
					<div class="up_lei"><span>我的钱包</span><span>¥1220.0</span></div>
					<div class="up_lei"><span><a href="###">充值有礼>></a></span><span><a href="###">充值卡兑换</a>>></span></div>
				</div>
			</div>
			<div class="account_down">
				<div class="down_box">
					<div class="box_box">
						<p>新人福利享不停</p>
						<p>充值有好礼</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "account",
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.account_count {
		width: 1085px;
		height: 625px;
		position: absolute;
		top: 0;
		left: 195px;
	}
	
	.account_up {
		width: 1083px;
		height: 219px;
		border: 1px solid #E7E7E7;
		background-color: #f4fff2;
		position: relative;
	}
	
	.account_down {
		width: 1085px;
		height: 382px;
		border: 1px/*solid*/
		#E7E7E7;
		margin-top: 20px;
		background: url(../../assets/account/acc_down.png) no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
		cursor: pointer;
	}
	
	.up_pic {
		width: 140px;
		height: 140px;
		background-color: #ffe313;
		border-radius: 50%;
		margin: 40px;
	}
	
	.up_pic img {
		padding: 5px 5px;
	}
	
	.account_up .hello {
		width: 380px;
		font-size: 18px;
		font-family: "MicrosoftYaHei";
		color: rgb(102, 102, 102);
		line-height: 219px;
		margin: 0;
		padding: 0;
		position: absolute;
		left: 220px;
		top: 0;
	}
	
	.hello span {
		color: #e85e35;
	}
	
	.up_leiBox {
		width: 480px;
		height: 219px;
		position: absolute;
		top: 0;
		right: 0;
	}
	
	.up_leiBox .up_lei:nth-child(3) span:nth-child(1) a{
		color: #4b943d;
	}
	
	.up_lei {
		width: 152px;
		float: left;
		margin-top: 60px;
	}
	
	.up_lei span {
		display: inline-block;
		font-size: 18px;
		font-family: "MicrosoftYaHei";
		color: rgb(37, 37, 37);
		line-height: 2.667;
		width: 152px;
	}
	
	.up_lei span:nth-child(2),a {
		color: #e85e35;
	}
	
	.up_lei span a{
		text-decoration: none;
	}
	
	.down_box {
		background-color: rgba(255, 255, 255, 0.302);
		width: 537px;
		height: 234px;
		margin: 87px auto;
		overflow: hidden;
	}
	
	.box_box {
		background-color: rgba(255, 255, 255, 0.302);
		opacity: ;
		width: 517px;
		height: 214px;
		margin: 10px auto;
	}
	
	.box_box p {
		display: block;
		margin: auto;
	}
	
	.box_box p:nth-child(1) {
		/*width: 420px;*/
		font-size: 48px;
		font-family: "MicrosoftYaHei";
		color: rgb(255, 255, 255);
		font-weight: bold;
		line-height: 110px;
		text-align: center;
		text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.31);
		letter-spacing: 13px;
	}
	
	.box_box p:nth-child(2) {
		width: 420px;
		height: 68px;
		font-size: 36px;
		font-family: "MicrosoftYaHei";
		color: rgb(255, 255, 255);
		font-weight: bold;
		line-height: 68px;
		text-align: center;
		text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.31);
		border-bottom: 1px solid white;
		border-top: 1px solid white;
		letter-spacing: 34px;
	}
</style>