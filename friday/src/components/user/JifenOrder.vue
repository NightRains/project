<template>
	<div class="my-order">
		<p class="p_tit">积分订单 <span class="jifen_state">当前积分&nbsp;:&nbsp;<span class="jifen_state_down">240</span></span></p>

		<div class="order_list">
			<div class="list_tit">
				<p class="order_num">订单号:<span>150319690000</span></p>
				<p class="order_time">下单日期:<span>2015.04.09 18:06:06</span></p>
				<p class="order_state">订单状态&nbsp;:&nbsp;<span>已完成</span></p>
			</div>
			<table>
				<tr>
					<td width="341" height="116"><img src="../../assets/account/goods1.png" /><span>赤小豆</span></td>
					<td width="92" height="116"><span>6个装</span></td>
					<td width="264" height="116"><span>¥16×1</span></td>
					<td rowspan="2" width="208" height="116">
						<h5>店铺合计:&nbsp;¥61</h5>
						<h5>(含运费:&nbsp;¥0)</h5>
					</td>
					<td rowspan="2" width="139" height="116">
						<a href="###">查看详情</a>
						<a href="###">删除订单</a>
					</td>
				</tr>
				
			</table>

		</div>
		
		
		<div class="order_list">
			<div class="list_tit">
				<p class="order_num">订单号:<span>150319690000</span></p>
				<p class="order_time">下单日期:<span>2015.04.09 18:06:06</span></p>
				<p class="order_state">订单状态&nbsp;:&nbsp;<span>已完成</span></p>
			</div>
			<table>
				<tr>
					<td width="341" height="116"><img src="../../assets/account/goods1.png" /><span>赤小豆</span></td>
					<td width="92" height="116"><span>6个装</span></td>
					<td width="264" height="116"><span>¥16×1</span></td>
					<td rowspan="2" width="208" height="116">
						<h5>店铺合计:&nbsp;¥61</h5>
						<h5>(含运费:&nbsp;¥0)</h5>
					</td>
					<td rowspan="2" width="139" height="116">
						<a href="###">查看详情</a>
						<a href="###">删除订单</a>
					</td>
				</tr>
				
			</table>

		</div>
		

	</div>
</template>

<script>
	export default {
		name: "my-order",
		methods: {
			
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.my-order {
		width: 1086px;
		border: 1px solid #e9e9e9;
		float: right;
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
		position: relative;
		margin-bottom: 20px;
	}
	
	.jifen_state{
		position: absolute;
		right: 20px;
	}
	
	.jifen_state_down{
		color: #F08200;
	}
	
	.order_list {
		width: 1044px;
		/*height: 286px;*/
		margin: 0 auto 20px;
	}
	
	
	.list_tit {
		width: 1042px;
		height: 46px;
		background-color: #f2f2f2;
		border: 1px solid #e9e9e9;
		border-bottom: 0;
	}
	
	.list_tit p {
		border: 0;
		font-size: 16px;
		font-family: "MicrosoftYaHei";
		color: rgb(51, 51, 51);
		line-height: 5;
		display: inline;
		line-height: 46px;
		margin-right: 130px;
	}
	

	.order_state {
		margin: 0 0 0 180px ;
	}

	
	.order_state span {
		color: #f08200;
	}
	
	.order_list table {
		border: 1px solid #e9e9e9;
		border-collapse: collapse;
		font-size: 14px;
		font-family: "MicrosoftYaHei";
		color: rgb(102, 102, 102);
	}
	
	.order_list table td {
		padding: 0px 0 0 0px;
		position: relative;
		text-align: center;
	}
	
	.order_list table td img {
		position: absolute;
		top: 18px;
		left: 18px;
	}
	
	.order_list table td a {
		display: block;
		font-size: 14px;
		font-family: "MicrosoftYaHei";
		width: 90px;
		height: 30px;
		text-decoration: none;
		margin: 5px auto;
		border-radius: 4px;
		line-height: 30px;
	}
	
	.order_list table td a:nth-child(1) {
		color: #6ca861;
		text-decoration: underline;
	}
	
	.order_list table td a:nth-child(2) {
		color: #fff;
		background-color: #f08200;
	}
	
	.order_list table td a:nth-child(3) {
		color: #fff;
		background-color: #999;
	}
	
	.order_list table tr:first-child td:nth-child(4) {
		border-left: 1px solid #e9e9e9;
	}
	
	.order_list table tr:first-child td:nth-child(5) {
		border-left: 1px solid #e9e9e9;
	}
	
	.order_list table tr:first-child td:nth-child(1) {
		border-bottom: 1px solid #e9e9e9;
	}
	
	.order_list table tr:first-child td:nth-child(2) {
		border-bottom: 1px solid #e9e9e9;
	}
	
	.order_list table tr:first-child td:nth-child(3) {
		border-bottom: 1px solid #e9e9e9;
	}
	
</style>