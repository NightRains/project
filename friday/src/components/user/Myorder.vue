<template>
	<div class="my-order">
		<p>我的订单</p>
		<div class="nav_box">
			<ul class="order_nav">
				<li>
					<a class="nav-item">全部</a>
				</li>
				<li>
					<a class="nav-item">待付款</a>
				</li>
				<li>
					<a class="nav-item">待发货</a>
				</li>
				<li>
					<a class="nav-item">待收货</a>
				</li>
				<li>
					<a class="nav-item">待评价</a>
				</li>
				<li>
					<a class="nav-item">退款/售后</a>
				</li>
				<li>
					<a class="nav-item">已完成/关闭</a>
				</li>
				<li>
					<a href="###">订单回收站</a>
				</li>
			</ul>
		</div>
		<div class="no_order">
			<img src="../../assets/account/wudingdan.png"/>
			<p>您还没有订单哦!</p>
			<a href="###">去首页看看</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "my-order",
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.my-order {
		width: 1086px;
		height: 622px;
		border: 1px solid #e9e9e9;
		position: absolute;
		top: 0;
		left: 195px;
	}
	
	.my-order p {
		width: 1066px;
		height: 57px;
		border-bottom: 1px solid #E9E9E9;
		font-size: 18px;
		font-family: "MicrosoftYaHei";
		color: rgb(51, 51, 51);
		line-height: 57px;
		padding-left: 20px;
	}
	
	.nav_box {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	
	ul,
	li {
		list-style: none;
	}
	
	a {
		text-decoration: underline;
	}
	
	.order_nav {
		display: flex;
	}
	
	.order_nav li {
		font-size: 16px;
		font-family: "MicrosoftYaHei";
		color: rgb(255, 255, 255);
		line-height: 28px;
		display: inline-block;
		padding: 0 20px;
		border-left: 2px solid #adadad;
		margin: 20px 0;
	}
	.order_nav li:nth-child(1){
		border-left: 0;
	}
	.order_nav li:nth-child(8){
		border-left: 0;
		margin-left: 66px;
		
	}
	.order_nav li:nth-child(1) a{
		background-color: #f08200;
		color: #fff;
		
	}
	.order_nav li:nth-child(8) a{
		color: #4b943d;
		text-decoration: underline;
		
	}
	
	.order_nav li a {
		color: #666;
		height: 28px;
		text-decoration: none;
		display: inline-block;
		padding: 0 14px;
	}
	
	
	/*.nav-item:link,
	.nav-item:visited {
		background-color: white;
		color: black;
	}*/
	
	.nav-item:hover,
	.nav-item:active {
		color: white;
		background-color: #f08200;
	}
	
	.no_order{
		width: 286px;
		height: 100px;
		position: absolute;
		left: 400px;
		bottom: 220px;
	}
	.no_order p{
		width: 170px;
		font-size: 20px;
		font-family: "MicrosoftYaHei";
		color: rgb(102, 102, 102);
		border: 0;
		display: inline-block;
		position: absolute;
		top: -14px;
		right: 0;
	}
	.no_order a{
		text-decoration: none;
		color: #fff;
		 border-radius: 5px;
		 line-height: 45px;
		 text-align: center;
  background-color: rgb(240, 130, 0);
  display: inline-block;
  width: 170px;
  height: 45px;
  position: absolute;
		bottom: 0;
		right: 0;
	}
	
</style>