<template>
	<div class="Abrowse">
		<div class="Abrowse_up">最近浏览</div>
		<div class="Abrowse_con">
			<div class="Abrowse_list"><i></i>
				<div class="Abrowse_two">
					<div class="Abrowse_img"><img src="../../assets/首页中间部分/images/you.png"/></div>
					<p>新西兰佳沛黄金奇异果</p>
					<p>果肉绵密、花蜜般的百吃不厌</p>
					<div class="amoney">
						<div class="amoney_left">
							<span>¥ 28.80</span><span>¥ 40.00</span>
							<i></i>
						</div>
					</div>
					<div class="Abrowse_mask"></div>
				</div>
			</div>
			<div class="Abrowse_list"><i></i>
				<div class="Abrowse_two">
					<div class="Abrowse_img"><img src="../../assets/首页中间部分/images/you.png"/></div>
					<p>新西兰佳沛黄金奇异果</p>
					<p>果肉绵密、花蜜般的百吃不厌</p>
					<div class="amoney">
						<div class="amoney_left">
							<span>¥ 28.80</span><span>¥ 40.00</span>
							<i></i>
						</div>
					</div>
				</div>
			</div>
			<div class="Abrowse_list"><i></i>
				<div class="Abrowse_two">
					<div class="Abrowse_img"><img src="../../assets/首页中间部分/images/you.png"/></div>
					<p>新西兰佳沛黄金奇异果</p>
					<p>果肉绵密、花蜜般的百吃不厌</p>
					<div class="amoney">
						<div class="amoney_left">
							<span>¥ 28.80</span><span>¥ 40.00</span>
							<i></i>
						</div>
					</div>
				</div>
			</div>
			<div class="Abrowse_list"><i></i>
				<div class="Abrowse_two">
					<div class="Abrowse_img"><img src="../../assets/首页中间部分/images/you.png"/></div>
					<p>新西兰佳沛黄金奇异果</p>
					<p>果肉绵密、花蜜般的百吃不厌</p>
					<div class="amoney">
						<div class="amoney_left">
							<span>¥ 28.80</span><span>¥ 40.00</span>
							<i></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Abrowse"
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
	.Abrowse{
		width: 1086px;
		border: 1px solid #d9d9d9;
		float: right;
	}
	.Abrowse_up{
		line-height: 57px;
		padding-left: 20px;
		font-size: 19px;
		color: #333333;
		border-bottom: 1px solid #d9d9d9;
	}
	.Abrowse_con{
		padding: 22px 32px 0;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.Abrowse_list i:nth-child(1){
		width: 32px;
		height: 32px;
		background: url(../../assets/首页中间部分/形状20.png) no-repeat 100% 100%;
		display: inline-block;
		z-index: 3;
		position: absolute;
		right:10px;
		top: 10px;
		
	}
	.Abrowse_list{
		height: 431px;
		width: 303px;
		border: 1px solid #d9d9d9;
		line-height:34px;
		margin-bottom: 36px;
		position: relative;
	}
	.Abrowse_two{
		padding: 0 21px;
		position: relative;
	}
	.Abrowse_img{
		margin-bottom: 37px;
		text-align: center;
	}
	.Abrowse_img img{
		width: 100%;
		height: 250px;
	}
	.Abrowse_list p:nth-child(2){
		font-size: 17px;
	}
	.Abrowse_list p:nth-child(3){
		font-size: 14px;
		color: #707070;
	}
	.amoney span:nth-child(1){
		font-size: 21px;
		font-weight: 700;
		margin-right: 18px;
		color: #ff5757;
	}
	.amoney span:nth-child(2){
		font-size: 15px;
		text-decoration:line-through;
		font-weight: 500;
		color: #707070;
	}
	.amoney i{
		width: 35px;
		height: 32px;
		float: right;
		display: inline-block;
		vertical-align: middle;
		background: url(../../assets/首页中间部分/购物车.png) no-repeat;
	}
	.Abrowse_mask{
		height: 433px;
		width: 304px;
		background: rgba(255,255,255,0.3);
		position: absolute;
		top:0px;
		left: 0px;
	}
</style>