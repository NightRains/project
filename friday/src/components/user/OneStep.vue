<template>
	<div id="cheng_telphone">
		<h4>换绑手机</h4>
		<div class="change_cont">
			<div class="change_title">
				<div class="step1"><img src="../../assets/account/phone_01.jpg" alt="" /><span class="a">1.验证手机号</span></div>
				<div class="step2"><img src="../../assets/account/phone_02.jpg" alt="" /><span>2.验证新手机号</span></div>
				<div class="step3"><img src="../../assets/account/phone_03.jpg" alt="" /><span>3.换绑成功</span></div>
			</div>
			<div id="taggle_box">
				<div id="one_step">
					<ul>
						<li><input type="text" name="" id="tel" /></li>
						<li> <input type="text" name="reg" id="reg" value="" placeholder="验证码" /><img src="../../assets/login/verify.png" /><span>看不清换一张</span></li>
						<li><input type="text" name="regNum" id="regNum" value="" placeholder="输入密码验证身份" /></li>
						<li><button id="regBtn" @click="toggle()">提交验证</button></li>
					</ul>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import TwoStep from './TwoStep'
	import ThreeStep from './ThreeStep'
	export default {
		name: 'onestep',
		components: {
			TwoStep,
			ThreeStep
		},
		methods: {
			toggle() {
				this.currentView = 'TwoStep';
			},
			choose() {
				this.currentView = 'ThreeStep';
			}
		}
	}
</script>

<style scoped="scoped">
	#cheng_telphone {
		width: 1086px;
		float: right;
		border: 1px solid #e9e9e9;
	}
	
	#cheng_telphone h4 {
		font-weight: normal;
		line-height: 56px;
		font-size: 1.0625rem;
		color: #323333;
		padding-left: 20px;
		border-bottom: 1px solid #e9e9e9;
	}
	
	#cheng_telphone .change_cont {
		padding: 40px 40px 154px;
	}
	
	.change_cont .change_title {
		overflow: hidden;
	}
	
	.change_title .step1,
	.change_title .step2,
	.change_title .step3 {
		float: left;
		position: relative;
	}
	
	.change_title .step1 span,
	.change_title .step2 span,
	.change_title .step3 span {
		display: inline-block;
		position: absolute;
		padding: 12px 40px;
		top: 0;
		left: 0;
	}
	
	.change_title div span.a {
		color: white;
	}
	
	#taggle_box {
		padding-top: 42px;
	}
	
	#one_step {}
	
	#one_step li input {
		border: 1px solid #d3d3d3;
		background-color: #f9f9f9;
		height: 42px;
	}
	
	input::-webkit-input-placeholder {
		color: #999999;
		padding-left: 14px;
	}
	
	#one_step ul li #tel {
		width: 304px;
		font-size: 0.75rem;
		color: #333333;
	}
	
	#one_step ul li:nth-of-type(2) {
		margin-top: 30px;
	}
	
	#one_step ul li img {
		margin-left: 20px;
		vertical-align: middle;
	}
	
	#one_step ul li span {
		margin-left: 14px;
		font-size: 0.875rem;
		color: #eb661c;
	}
	
	#one_step ul li:nth-of-type(3) {
		margin-top: 30px;
	}
	
	#one_step ul li #regNum {
		width: 304px;
		font-size: 0.75rem;
	}
	
	#one_step ul li:nth-of-type(4) {
		margin-top: 40px;
	}
	
	#one_step ul li #regBtn {
		width: 150px;
		border: none;
		border-radius: 4px;
		line-height: 50px;
		color: white;
		background-color: #f08200;
	}
</style>