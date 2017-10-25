<template>
	<!--底部开始-->
	<div class="footers">
		<div class="footer_top">
			<div class="footer_topnav">
				<a href=""><img src="../assets/footer/footer_qgoods.jpg"/> <span>优先保障</span></a>
				<a href=""><img src="../assets/footer/footer_monitoring.jpg"/><span>全程监控</span></a>
				<a href=""> <img src="../assets/footer/footer_choose.jpg"/><span>礼拜五特惠</span></a>
				<a href=""><img src="../assets/footer/footer_supply.jpg"/><span>基地直供</span></a>
				<a href=""><img src="../assets/footer/footer_monitoring.jpg"/><span>准时到达</span></a>
			</div>	
			</div>
			<div class="footer_middlebox">
				
			
			<div class="footer_middle">
				<div class="footer_logo">
					<a href=""><img src="../assets/footer/footer_logo.jpg"/></a>
					<div class="footer_time">
						<span class="open_time">服务时间 : 08 : 00 - 22 : 00</span><img src="../assets/footer/footer_telicon.jpg" alt="" /><span class="tel_num">400-800-8820</span></div>
				</div>
				<div  class="footer_codeweixin">
						<img src="../assets/footer/fridayapp.jpg" alt="" />
						<p>礼拜五官方微博</p>
				</div>
				<div class="footer_codeapp">
					<img src="../assets/footer/footer_weixin.jpg" alt="" />
					<p>礼拜五APP</p>
				</div>
					<ul>
						<li>关于礼拜五</li>
						<li>新用户注册</li>
						<li>在线下单</li>
						<li>支付方式</li>
					</ul>
					<ul>
						<li>配送说明</li>
						<li>运费说明</li>
						<li>配送方式</li>
						<li>发票说明</li>
						
					</ul>
					<ul>
						<li>售后服务</li>
						<li>退换货说明</li>
						<li>服务保障承诺</li>
						<li>验货与签收</li>
					</ul>
					<ul>
						<li>加盟礼拜五</li>
						<li>加盟条约</li>
						<li>公司简介</li>
						<li>服务协议</li>
					</ul>
			</div>
			</div>
			<div class="footer_bottom">
				<p id="copyright"><span>版权所有©礼拜五</span><span class="copyright">保留所有权利</span><span>沪ICP备12042163</span></p>
				<p class="orange"><span>礼拜五</span><span>纵享品质</span></p>
			</div>
		</div>
	</div>
	<!--底部结束-->
</template>

<script>
	export default{
		name:"myfooter"
	}
</script>

<style scoped="scoped">
	div,img,p,span,a,ul,li{
		margin:0;
		padding:0;
	}
	img{
		vertical-align: middle;
	}
	ul,li{
		list-style: none;
	}
	.footers{
		/*margin-top:40px;*/
		background-color: #fff;
		margin-bottom: 0px;
	}
	.footers .footer_top{
		border-top:1px solid #dddddd;
		border-bottom:1px solid #dddddd;
	}
	.footer_top .footer_topnav{
		width:1280px;
		margin:22px auto;
		text-align: center;
	}
	.footer_topnav a{
		display: inline-block;
		padding-left:44px;
		padding-right:44px;
		height: 60px;
		line-height: 60px;
		border-right: 1px solid #dddddd;
		color:#333333;
	}
	.footer_topnav a span{
		margin-left:20px;
		font-size: 1.4375rem;
	}
	.footer_topnav a:last-child{
		border-right: 0;
	}
	.footers  .footer_middlebox{
		border-bottom: 1px solid #dddddd;
	}
	.footer_middlebox .footer_middle{
		width:1280px;
		margin:0 auto;
		overflow: hidden;
		padding-top:20px;
		padding-bottom: 20px;
	}
	.footer_middle .footer_logo{
		float: left;
		margin-top:10px;
		margin-left:30px;
	}
	.footer_logo .footer_time{
		margin-top:38px;
	}
	.footer_time .open_time{
		font-size: 1.125rem;
		color: #8c8c8c;
		vertical-align: middle;
		word-spacing: 2px;
	}
	.footer_time img{
		margin-left: 20px;
	}
	.footer_time .tel_num{
		vertical-align: middle;
		margin-left:10px;
		color: #f08200;
		font-size: 0.875rem;
	}
	.footer_middle .footer_codeweixin,.footer_middle .footer_codeapp{
		float: left;
		margin-left:40px;
		text-align: center;
		color: #b3b3b3;
	}
	.footer_middle .footer_codeweixin p,.footer_middle .footer_codeapp p{
		margin-top:16px;
	}
	.footer_middle ul{
		float: left;
		margin-left:50px;
		text-align: left;
		font-size: 0.875rem;
		/*margin-top: 12px;*/
		color:#999999;
	}
	.footer_middle ul li{
		line-height: 28px;
	}
	.footer_middle ul li{
		float: none;
	}
	.footer_middle ul li:nth-child(1){
		font-size:1rem;
		color: black;
		line-height: 42px;
	}
	.footers .footer_bottom{
		text-align: center;
		padding-top: 10px;
		padding-bottom: 26px;
		font-size: 0.9375rem;
	}
	.footer_bottom p{
		margin-top:10px;
	}
	.footer_bottom #copyright{
		color: #8c8c8c;
	}
	.footer_bottom #copyright .copyright{
		padding-left:10px;
		padding-right:6px;
		border-right: 2px solid #b3b3b3;
	}
	.footer_bottom #copyright span:nth-child(3){
		padding-left: 6px;
	}
	.footer_bottom .orange{
		color: #f08200;
	}
	.orange span:nth-child(2){
		margin-left: 8px;
	}
</style>