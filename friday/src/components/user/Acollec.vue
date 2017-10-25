<template>
	<div class="Acollec">
		<div class="Acollec_up">我的收藏</div>
		<div class="Acollec_con">
			<div class="Acollec_list">
				<div class="Alist_two">
					<div class="Acollec_img"><img src="../../assets/首页中间部分/images/you.png"/></div>
					<p>新西兰佳沛黄金奇异果</p>
					<p>果肉绵密、花蜜般的百吃不厌</p>
					<div class="amoney">
						<div class="amoney_left">
							<span>¥ 28.80</span><span>¥ 40.00</span>
							<i></i>
						</div>
					</div>
					<div class="Alist_input">
						<input type="button"  value="已失效" />
					</div>
					<div class="Acollec_mask"></div>
				</div>
			</div>
			<div class="Acollec_list">
				<div class="Alist_two">
					<div class="Acollec_img"><img src="../../assets/首页中间部分/images/or.png"/></div>
					<p>新西兰佳沛黄金奇异果</p>
					<p>果肉绵密、花蜜般的百吃不厌</p>
					<div class="amoney">
						<div class="amoney_left">
							<span>¥ 28.80</span><span>¥ 40.00</span>
							<i></i>
						</div>
					</div>
					<div class="Alist_green">
						<input type="button"  value="取消收藏" />
					</div>
				</div>
			</div>
			<div class="Acollec_list">
				<div class="Alist_two">
					<div class="Acollec_img"><img src="../../assets/首页中间部分/images/apple.png"/></div>
					<p>新西兰佳沛黄金奇异果</p>
					<p>果肉绵密、花蜜般的百吃不厌</p>
					<div class="amoney">
						<div class="amoney_left">
							<span>¥ 28.80</span><span>¥ 40.00</span>
							<i></i>
						</div>
					</div>
					<div class="Alist_green">
						<input type="button" value="取消收藏" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Acollec"
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
	.Acollec{
		width: 1086px;
		/*height: 625px;*/
		float: right;
		border: 1px solid #d9d9d9;
	}
	.Acollec_up{
		line-height: 57px;
		padding-left: 20px;
		font-size: 19px;
		color: #333333;
		border-bottom: 1px solid #d9d9d9;
	}
	.Acollec_con{
		padding: 42px;
		display: flex;
		justify-content: space-between;
	}
	.Acollec_list{
		height: 478px;
		width: 304px;
		border: 1px solid #d9d9d9;
		line-height:34px;
		
		
	}
	.Alist_two{
		padding: 0 21px;
		position: relative;
	}
	.Acollec_img{
		margin-bottom: 37px;
		text-align: center;
	}
	.Acollec_img img{
		width: 100%;
		height: 250px;
	}
	.Acollec_list p:nth-child(2){
		font-size: 17px;
	}
	.Acollec_list p:nth-child(3){
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
	.Alist_input{
		text-align: center;
		margin: 20px 0;
	}
	.Alist_input input{
		width: 152px;
		line-height: 36px;
		background: #999999;
		border: 0;
		font-size: 16px;
		color: white;
		border-radius: 20px;
	}
	.Acollec_mask{
		height: 478px;
		width: 304px;
		background: rgba(255,255,255,0.3);
		position: absolute;
		top:0px;
		left: 0px;
	}
	.Alist_green{
		text-align: center;
		margin: 20px 0;
	}
	.Alist_green input{
		width: 152px;
		line-height: 36px;
		background: #4b943d;
		border: 0;
		font-size: 16px;
		color: white;
		border-radius: 20px;
	}
</style>