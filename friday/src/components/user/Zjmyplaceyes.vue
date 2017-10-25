<template>
	<div class="zjmyplaceyes">
		<div class="zj-account-content">
			<div class="zj-nav">
				<span class="left">地址管理</span>
				<span class="right">添加新地址</span>
			</div>
			<div class="zj-details">
				<table>
					<tr>
						<th>收货人</th>
						<th>所在区域</th>
						<th>街道地址</th>
						<th>联系电话</th>
						<th>备注</th>
						<th>操作</th>
					</tr>
					<tr>
						<td>张强强</td>
						<td>北京 北京市 朝阳区</td>
						<td>朝阳奥运媒体区(北苑天畅区)C3-2506</td>
						<td>18338205623</td>
						<td>家里的地址</td>
						<td class="last">
							<span class="left">设为默认地址</span>
							<span>丨</span>
							<span class="center">修改</span>
							<span>丨</span>
							<span class="right">删除</span>
						</td>
					</tr>
					<tr>
						<td>张强强</td>
						<td>北京 北京市 朝阳区</td>
						<td>朝阳奥运媒体区(北苑天畅区)C3-2506</td>
						<td>18338205623</td>
						<td>家里的地址</td>
						<td class="last">
							<span class="left">设为默认地址</span>
							<span>丨</span>
							<span class="center">修改</span>
							<span>丨</span>
							<span class="right">删除</span>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'zjmyplaceyes',
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.zj-account-content {
		border: 1px solid #e9e9e9;
		width: 1083px;
		height: 623px;
		float: right;
	}
	
	.zj-account-content .zj-nav {
		border-bottom: 1px solid #e9e9e9;
		height: 57px;
		font-size: 17px;
		color: #252525;
	}
	
	.zj-account-content .zj-nav .left {
		margin-left: 20px;
		line-height: 57px;
	}
	
	.zj-account-content .zj-nav .right {
		display: inline-block;
		width: 70px;
		height: 30px;
		border-radius: 5px;
		color: white;
		font-size: 14px;
		background-color: #498e3d;
		line-height: 30px;
		padding: 0 10px 0 10px;
		float: right;
		margin-right: 20px;
		margin-top: 13px;
	}
	
	.zj-details {
		border: 1px solid #e9e9e9;
		margin-top: 20px;
		margin-left: 20px;
		width: 1041px;
		height: 158px;
	}
	
	table {
		border-collapse: collapse;
 		border-spacing:0;
	}
	table,td {
		border-bottom: 1px solid #f2f2f2;
	}
	td{
		text-align: center;
		color: #707070;
		height: 53px;
		font-size: 14px;
	}
	th:nth-child(n){
		background-color: #f2f2f2;
		color: #333333;
		font-size: 17px;
	}
	th:nth-child(1){
		width: 90px;
		height: 45px;
	}
	th:nth-child(2){
		width: 160px;
		height: 45px;
	}
	th:nth-child(3){
		width: 323px;
		height: 45px;
	}
	th:nth-child(4){
		width: 134px;
		height: 45px;
	}
	th:nth-child(5){
		width: 107px;
		height: 45px;
	}
	th:nth-child(6){
		width: 220px;
		height: 45px;
	}
	.last .left{
		color: #f08200;
	}
	.last .center,.last .right{
		color: #4b943d;
	}
	.zj-end{
		color: #4b943d;
	}
	.zj-end .center{
		color: #707070;
	}
</style>