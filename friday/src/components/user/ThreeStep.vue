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
				<div id="three_step">
					<img src="../../assets/account/check_icon.jpg" alt="" /><span>恭喜您修改成功</span>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'threestep'
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
	
	#three_step {
		text-align: center;
		padding-top: 158px;
		padding-bottom: 86px;
	}
	
	#three_step img {
		vertical-align: middle;
	}
	
	#three_step span {
		margin-left: 20px;
		vertical-align: middle;
		font-size: 1.44rem;
		color: #ec6a17;
	}
</style>