<template>
	<div class="my-jifen">
		<p>我的积分</p>
		<div class="jifen">
			<h5>当前积分&nbsp;:&nbsp;<span>240分</span></h5>
			<ul>
				<li>
					<span>积分日期</span>
					<span>变动</span>
					<span>来源</span>
				</li>
				<li>
					<span>2015_04_05_16:20:10</span>
					<span>+100</span>
					<span>消费赠送</span>
				</li>
				<li>
					<span>2015_04_05_16:20:10</span>
					<span>+100</span>
					<span>消费赠送</span>
				</li>
				<li>
					<span>2015_04_05_16:20:10</span>
					<span>+100</span>
					<span>消费赠送</span>
				</li>
				
			</ul>
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
	.my-jifen {
		width: 1083px;
		height: 622px;
		border: 1px solid #e9e9e9;
		position: absolute;
		top: 0;
		left: 195px;
		
	}
	
	.my-jifen p {
		width: 1083px;
		height: 57px;
		border-bottom: 1px solid #E9E9E9;
		font-size: 18px;
		color: rgb(51, 51, 51);
		line-height: 57px;
		padding-left: 20px;
	}
	.jifen{
		margin-left: 20px;
	}
	.jifen h5{
		font-size: 16px;
		color: rgb(51, 51, 51);
		font-weight: 500;
		height: 57px;
		line-height: 57px;
		
	}	
	.jifen h5 span{
		color: #f08200;;
	}
	.jifen ul{
		width: 1042px;
		border: 1px solid #e9e9e9;
		border-bottom: 0;
		/*overflow-y: scroll;*/
	}
	.jifen ul li{
		border-bottom: 1px solid #e9e9e9;
		height: 53px;
		line-height: 53px;
	}
	.jifen ul li:nth-child(1){
		background-color: #f2f2f2;
		border-bottom: 0;
		height: 46px;
		line-height: 46px;
	}
	.jifen li:hover{
		background-color: #f4fff2;
	}
	.jifen li span{
		width: 32%;
		display: inline-block;
		text-align: center;
		font-size: 14px;
		color: rgb(102, 102, 102);
	}
	
</style>