<template>
	<div class="register_main">
 	<div class="register_fontbox">
 		<div class="register_fonts">
 			<p>礼拜五会员</p>
 			<p>免 费 注 册</p>
 		</div>
 	</div>
 	<div class="register_table">
   	<div class="register_mainbox"  v-show="show">
   		<p class="reg_title">注册</p>
   		<ul>
   			<li class="phone_reg">
   				<input type="text" name="" id="getTel" value="" placeholder="请输入手机号" />
   			    <div><p v-show="phone"><span>!</span><span>{{msg}}</span></p></div>
   			</li>
   			<li class="phone_reg">
   				<input type="text" name="" id="getPassword" value="" placeholder="请输入密码(6-20位号码字符)" />
   			    <div><p v-show="phone"><span>!</span><span>{{msg}}</span></p></div>
   			</li>
   			<li class="phone_reg">
   				<input type="text" name="" id="aginPassword" value="" placeholder="请再次输入密码确认" />
   			    <div><p v-show="phone"><span>!</span><span>{{msg}}</span></p></div>
   			</li>
   			<li class="verify_reg phone_reg">
   				<input type="text" name="" id="verify_num" value="" placeholder="验证码" /><a href="###"><img src="../../assets/login/verify.png" alt="" /></a><a href="###"><span>看不清换一张</span></a>
   				<div><p v-show="verify"><span>!</span><span>{{msg}}</span></p></div>
   			</li>
   			<li class="phone_verify">
   				<input type="text" name="" id="getVerify" value="" placeholder="手机验证码" />
   				<span>获取验证码</span>
   			</li>
   			<li class="login_choose">
   				<input type="radio"  id="autoLogin"/><label>我已阅读并同意<<礼拜五用户协议>></label>
   			</li>
   			<li class="chooseBtn">
   				<button id="login">登录</button>
   				<button id="register">会员注册</button>
   			</li>
   		</ul>
   	</div>
</div>
</div>
</template>

<script>
	export default{
		name:'registermain',
		data(){
          return{
          	msg:'3333',
          	phone:true,
          	verify:true,
          	show:true
          }
		},
		methods:{
			reg:function(){
				
			},
			shows:function(){
				this.show=!this.show;
			}
		}
	}
</script>

<style scoped="scoped">
	div,p,span,input,a{
		margin: 0;
		padding: 0;
	}
	a{
		color: black;
		cursor: pointer;
	}
.register_main{
	background: url(../../assets/login/bg.png) no-repeat;
	background-size:100% 100%;
	position: relative;
	/*height: 525px;*/
	overflow: hidden;
}
/*中间白色框及文字*/
.register_main .register_fontbox{
	position: absolute;
	width:490px;
	top: 138px;
	left:540px;
	border:2px solid #fff;
}
.register_fontbox .register_fonts{
	margin:10px;
	border:2px solid #fff;
	text-align: center;
	color: #FFFFFF;
	font-size: 2.9375rem;
}
.register_fonts p{
	text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.35);
}
.register_fonts p:first-child{
	margin-top: 28px;
	line-height: 60px;
	
}
.register_fonts p:nth-child(2){
	line-height: 60px;
	margin-bottom:24px;
	word-spacing: 25px;
}
/* 登录框 */
.register_main .register_table{
	float: right;
	margin-right:320px;
	background-color: white;
	border-top:1px solid #eae9e9;
}
.register_table .register_mainbox{
	padding:30px 40px 38px;
}
/*注册标题*/
.register_mainbox .reg_title{
	font-size: 1.375rem;
	color: #666666;
}
/*登录input*/
.register_mainbox ul{
	margin-top:13px;
}
.register_mainbox ul li input{
	width: 306px;
	border:1px solid #d3d3d3;
	height:44px;
	font-size:0.9375rem;
	color: #999999;
	padding-left:13px;
	background-color:#f9f9f9;
}
.phone_reg div{
	height:30px;
}
.phone_reg  p{
	line-height: 30px;
}
.phone_reg p span{
	color: #db2630;
	vertical-align: middle;
	font-size: 0.6875rem;
}
.phone_reg p span:nth-child(1){
	display: inline-block;
	width: 12px;
	height: 12px;
	line-height: 12px;
	border-radius: 50%;
	background-color: #db2630;
	color: #fff;
	text-align: center;
	font-size:0.4375rem;
	margin-right:5px;
}
.register_mainbox ul .verify_reg{
	margin-top:0px;
}
.verify_reg #verify_num{
	width:113px;
	height:44px;
	border:1px solid #d3d3d3;
	font-size:0.9375rem;
	color: #999999;
	padding-left:13px;
	background-color:#f9f9f9;
}
.verify_reg img{
	vertical-align: middle;
	margin-left:20px;
}
.verify_reg a span{
	margin-left:10px;
	font-size: 0.8165rem;
	color: #f08200;
}
.register_mainbox ul .phone_verify #getVerify{
	width: 306px;
	height:44px;
	background-color:#f9f9f9;
	font-size:0.9375rem;
	color: #999999;
	padding-left:13px;
}
.register_mainbox ul .phone_verify{
	position: relative;
	height:44px;
	margin-top:9px;
	padding-bottom:0px;
}
.phone_verify span{
	position: absolute;
	top:2px;
	right:2px;
	display: inline-block;
	padding:9px 14px;
	background-color:#498e3d;
	color:white;
}
.register_mainbox ul .login_choose{
	margin-top:20px;
}
.login_choose #autoLogin{
	width:16px;
	height:16px;
	border:1px solid #66a05c;
	margin-right:10px;
	margin-left: 2px;
	background-color:#66a05c;
}
.login_choose label{
	font-size:0.875rem;
	color:#8c8c8c;
}
/*按钮*/
.register_mainbox ul .chooseBtn{
	margin-top:19px;
	overflow: hidden;
}
.chooseBtn #login,.chooseBtn #register{
	border:none;
	width:133px;
	line-height: 45px;
	background-color:#f08200;
	color: white;
	font-size:1.0625rem;
	border-radius: 4px;
}
.chooseBtn #register{
	float: right;
}
</style>