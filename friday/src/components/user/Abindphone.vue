<template>
	<div class="Abindphone">
		<div class="Abinding_up">修改密码</div>
		<div class="Abinding_con">
			<input type="text" id="" placeholder="请输入手机号" />
			<input type="text" id="" placeholder="请输入密码(6-20号码字符)" />
			<input type="text" id="" placeholder="请再次输入密码确认" />
			<div class="Abinding_three">
				<input type="text" id="" placeholder="验证码"/><i></i><span>看不清换一张</span>
			</div>
			
			<div class="adouble">
				<input type="text" name="" id="" placeholder="手机验证码" />
				<input type="button" name="" id="adouble_put" value="获取验证码" />
			</div>
			<input type="button" id="Abinding_btn" value="提交修改" />
		</div>
		<div class="atrue">
			<i></i><span>恭喜您修改成功</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Abindphone"
	}
</script>

<style scoped>
	div,span,p,a,ul,li,input,h3{
		margin: 0;
		padding: 0;
	}
	ul,li{
		list-style: none;
	}
	.Abindphone{
		width: 1083px;
		height: 626px;
		border: 1px solid #d9d9d9;
		position: relative;
		float: right;
	}
	.Abinding_up{
		font-size: 18px;
		height: 56px;
		color: #323333;
		line-height: 56px;
		padding-left: 20px;
		border-bottom: 1px solid #d9d9d9;
		
	}
	.Abinding_con{
		width: 316px;
		margin:40px;
		
	}
	.Abinding_con input{
		width: 100%;
		border: 1px solid #d3d3d3;
		font-size: 16px;
		line-height: 42px;
		padding-left: 13px;
		margin-bottom: 30px;
		background: #f9f9f9;
		box-sizing: border-box;
	}
	.Abinding_three{
		width: 100%;
	}
	.Abinding_three input{
		width: 113px;
		
	}
	.Abinding_three i{
		width: 79px;
		height: 34px;
		display:inline-block;
		vertical-align: middle;
		margin-left: 20px;
		background: url(../../assets/首页中间部分/验证码.png) no-repeat;
	}
	.Abinding_three span{
		font-size: 13px;
		color: #ed712c;
		margin-left:14px;
	}
	.adouble{
		width: ;
		position: relative;
	}
	#adouble_put{
		position: absolute;
		width: 100px;
		line-height: 33px;
		background-color: #e8e8e8;
		top:5px;
		right:5px;
		border: 0;
		padding-left:0;
		color: #aeaeae;
	}
	#Abinding_btn{
		width: 150px;
		font-size: 18px;
		color: white;
		background: #f08200;
		border: 0;
		padding-left:0;
		border-radius: 5px;
	}
	.atrue{
		width: 454px;
		background: #d9d9d9;
		border-radius: 10px;
		text-align: center;
		position: absolute;
		top:218px;
		right:87px;
	}
	.atrue i{
		width: 44px;
		height: 44px;
		display: inline-block;
		vertical-align: middle;
		background:url(../../assets/首页中间部分/check.png) no-repeat ;
	}
	.atrue span{
		margin-left: 17px;
		font-size: 23px;
		color: #f08200;
		line-height:183px;
	}
</style>