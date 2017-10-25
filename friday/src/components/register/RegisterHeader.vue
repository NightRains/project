<template>
	<div class="login_header">
    <div class="header_topnav">
			<!--所在城市-->
			<div class="header_adress">
				<span>所在城市:</span>
				<a href="javascript:void(0)" class="a_adress">河南省</a><img src="../../assets/header/header_top.png" alt="" />
			</div>
			<!--城市弹框-->
			<div class="mask_back">
				<div class="mask_top">
					<p>建议您的收货地址&nbsp;:&nbsp;<span>哈密市伊州区</span></p>
					<v-distpicker province="河南省" city="郑州市" area="金水区"></v-distpicker>
					<button class="btn1">返回</button><button class="btn2">保存</button>
				</div>
			</div>
			<!--右侧信息-->
			<div class="header_menu">
				<a href="/login">登录</a>
				<a href="/register">注册</a>
				<a href="/user/order">我的订单</a>
				<a href="/user/message">我的消息</a>
				<a href="javascript:void(0)">我是商家</a>
				<a href="javascript:void(0)"><img src="../../assets/header/header_tel.png" /><span>400-800-8820</span></a>
			</div>
		</div>
		<!--logo所在区域-->
		<div class="header_middlenav">
			<div class="header_mainnav">
				<div class="header_logo"><a href="/"><img src="../../assets/header/logo.png" alt="" /></a></div>
				<div class="register_title"> 
					<p>会员注册</p>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
	export default{
		name:'registerheader',
		mounted(){
			$(".a_adress").on("click", function() {
				$(".mask_back").css("display", "block");
			});
			$(".btn1").click(function() {
				$(".mask_back").css("display", "none");
			});
		}
	}
</script>

<style scoped="scoped">
	body {
		width: 100%;
	}
	
	body,
	div {
		margin: 0;
		padding: 0;
	}
	img{
		vertical-align: middle;
	}
	ul,li{
		list-style: none;
	}
	.login_header {
		width: 100%;
		background-color: #eeeeee;
	}
	
	.header_topnav {
		width: 1280px;
		margin: auto;
		padding-top: 10px;
		padding-bottom: 10px;
		color: #787878;
		font-size: 0.8125rem;
		overflow: hidden;
	}
	
	.header_topnav a {
		color: #787878;
	}
	
	.header_topnav .header_adress {
		float: left;
	}
	
	.header_adress img {
		margin-left: 5px;
	}
	
	.header_topnav .header_menu {
		float: right;
	}
	
	.header_menu a {
		padding-left: 13px;
		padding-right: 13px;
		border-right: 1px solid #999999;
	}
	
	.header_menu a:last-child {
		border-right: 0;
	}
	.header_menu  a img{
		margin-right:6px;
	}
	.header_menu  a span{
		color: #666666;
		font-weight: 500;
	}
	.login_header .header_middlenav {
		background-color: white;
	}
	
	.header_middlenav .header_mainnav {
		width: 1280px;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.header_mainnav .header_logo {
		padding-top: 25px;
		padding-bottom: 38px;
		float: left;
	}
	.header_mainnav .register_title{
		float: left;
		margin-left:60px;
		margin-top: 40px;
	}
	.register_title p{
		padding-left:22px;
		border-left:1px solid #cecece;
		line-height: 40px;
		font-size:1.25rem;
		color: #666666;
	}
	/*城市弹框*/
	.mask_back {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 100;
		display: none;
	}
	
	.mask_top {
		width: 702px;
		height: 356px;
		background: url(../../assets/header/mask_bg.png) no-repeat;
		position: absolute;
		top: 50%;
		margin-top: -178px;
		left: 50%;
		margin-left: -351px;
		text-align: center;
	}
	
	.mask_top p {
		margin: 60px 0 65px 0;
		font-size: 18px;
		color: rgb(51, 51, 51);
		line-height: 1.667;
	}
	
	.mask_top p span {
		border-radius: 5px;
		display: inline-block;
		line-height: 35px;
		color: white;
		background-color: rgb(73, 142, 61);
		width: 178px;
		height: 35px;
	}
	
	.mask_top .address {
		/*text-align: left;*/
	}
	
	.mask_top button {
		border-radius: 5px;
		background-color: rgb(240, 130, 0);
		outline: none;
		border: 0;
		margin-top: 60px;
		width: 151px;
		height: 35px;
		color: white;
	}
	
	.mask_top .btn1 {
		background-color: rgb(153, 153, 153);
		margin-right: 20px;
	}
</style>