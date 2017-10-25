<template>
	<div id="cart_box">
		<div class="detal">
			<div class="shopcar">
				<img src="../../assets/cart/cart_icon.jpg" alt="" />
				<span>购物车</span>
			</div>
			<div class="del">
				<div class="top">
					<div class="chebox">
						<input type="checkbox" name="" id="" value="" />
						<span>爱果果水果店</span>
					</div>
					<div class="xuan">
						<span>规格</span>
						<span>单价</span>
						<span>数量</span>
						<span>金额</span>
						<span>操作</span>
					</div>
				</div>
				<div class="content">
					<div class="chebox">
						<input type="checkbox" name="" id="" value="" />
						<img src="../../assets/cart/goods_smallpic.jpg" alt="" />
						<span>云南蒙自石榴8个装</span>
					</div>
					<div class="xuan">
						<span>8个装</span>
						<span>¥596</span>
						<ul class="count">
							<li><b id="num-jian" class="num-jian">➖</b></li>
							<li><input type="text" class="input-num" id="input-num" value="1" /></li>
							<li><b id="num-jia" class="num-jia">➕</b></li>
						</ul>
						<span>¥596</span>
						<span>删除</span>
					</div>
				</div>
				<div class="content">
					<div class="chebox">
						<input type="checkbox" name="" id="" value="" />
						<img src="../../assets/cart/goods_smallpic.jpg" alt="" />
						<span>云南蒙自石榴8个装</span>
					</div>
					<div class="xuan">
						<span>8个装</span>
						<span>¥596</span>
						<ul class="count">
							<li><b id="num-jian" class="num-jian">➖</b></li>
							<li><input type="text" class="input-num" id="input-num" value="1" /></li>
							<li><b id="num-jia" class="num-jia">➕</b></li>
						</ul>
						<span>¥596</span>
						<span>删除</span>
					</div>
				</div>
				<div class="content">
					<div class="chebox">
						<input type="checkbox" name="" id="" value="" />
						<img src="../../assets/cart/goods_smallpic.jpg" alt="" />
						<span>云南蒙自石榴8个装</span>
					</div>
					<div class="xuan">
						<span>8个装</span>
						<span>¥596</span>
						<ul class="count">
							<li><b id="num-jian" class="num-jian">➖</b></li>
							<li><input type="text" class="input-num" id="input-num" value="1" /></li>
							<li><b id="num-jia" class="num-jia">➕</b></li>
						</ul>
						<span>¥596</span>
						<span>删除</span>
					</div>
				</div>
				<div class="all">
					<p><span>商品金额</span><b>¥108.00</b></p>
				</div>

			</div>
			<div class="del">
				<div class="top">
					<div class="chebox">
						<input type="checkbox" name="" id="" value="" />
						<span>爱果果水果店</span>
					</div>
					<div class="xuan">
						<span>规格</span>
						<span>单价</span>
						<span>数量</span>
						<span>金额</span>
						<span>操作</span>
					</div>
				</div>
				<div class="content">
					<div class="chebox">
						<input type="checkbox" name="" id="" value="" />
						<img src="../../assets/cart/goods_smallpic.jpg" alt="" />
						<span>云南蒙自石榴8个装</span>
					</div>
					<div class="xuan">
						<span>8个装</span>
						<span>¥596</span>
						<ul class="count">
							<li><b id="num-jian" class="num-jian">➖</b></li>
							<li><input type="text" class="input-num" id="input-num" value="1" /></li>
							<li><b id="num-jia" class="num-jia">➕</b></li>
						</ul>
						<span>¥596</span>
						<span>删除</span>
					</div>
				</div>
				<div class="content">
					<div class="chebox">
						<input type="checkbox" name="" id="" value="" />
						<img src="../../assets/cart/goods_smallpic.jpg" alt="" />
						<span>云南蒙自石榴8个装</span>
					</div>
					<div class="xuan">
						<span>8个装</span>
						<span>¥596</span>
						<ul class="count">
							<li><b id="num-jian" class="num-jian">➖</b></li>
							<li><input type="text" class="input-num" id="input-num" value="1" /></li>
							<li><b id="num-jia" class="num-jia">➕</b></li>
						</ul>
						<span>¥596</span>
						<span>删除</span>
					</div>
				</div>
				<div class="content">
					<div class="chebox">
						<input type="checkbox" name="" id="" value="" />
						<img src="../../assets/cart/goods_smallpic.jpg" alt="" />
						<span>云南蒙自石榴8个装</span>
					</div>
					<div class="xuan">
						<span>8个装</span>
						<span>¥596</span>
						<ul class="count">
							<li><b id="num-jian" class="num-jian">➖</b></li>
							<li><input type="text" class="input-num" id="input-num" value="1" /></li>
							<li><b id="num-jia" class="num-jia">➕</b></li>
						</ul>
						<span>¥596</span>
						<span>删除</span>
					</div>
				</div>
				<div class="all">
					<p><span>商品金额</span><b>¥108.00</b></p>
				</div>
			</div>
			<div class="allmoney">
				<div class="choice">
					<span>全选</span>
					<span>批量删除</span>
				</div>
				<div class="money">
					<span>商品总计：</span>
					<b>¥2977</b>
					<i>立即购买</i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cartmain',
		components: {}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	i {
		font-style: normal;
	}
	
	img {
		vertical-align: middle;
	}
	
	#cart_box {
		border-top: 1px solid #e4e4e4;
	}
	
	.detal {
		width: 1280px;
		margin: 18px auto 20px;
		/*background-color: red;*/
	}
	
	.shopcar {
		font-size: 1.125rem;
		word-spacing: 20px;
		line-height: 60px;
	}
	.shopcar img{
		vertical-align: middle;
	}
	.shopcar span{
		vertical-align: middle;
		color: #666666;
	}
	.top {
		display: flex;
		justify-content: space-between;
		line-height: 46px;
		border-top: 1px solid #e9e9e9;
		line-height: 46px;
		background-color: #f2f2f2;
	}
	
	.xuan {
		width: 900px;
		display: flex;
		justify-content: space-between;
	}
	
	.xuan span {
		width: 130px;
		display: block;
		text-align: center;
	}
	
	.content {
		display: flex;
		/*height: 118px;*/
		justify-content: space-between;
		padding: 20px 0;
		border-bottom: 1px solid #f2f2f2;
	}
	
	.content .xuan {
		padding-top: 20px;
	}
	
	.xuan .count {
		float: left;
		overflow: hidden;
	}
	
	.count li {
		float: left;
	}
	
	.count .num-jian,
	.input-num,
	.num-jia {
		display: inline-block;
		width: 28px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		font-size:0.75rem;
		color: #999;
		cursor: pointer;
		border: 1px solid #e6e6e6;
		font-weight: bold;
	}
	
	.count  b{
		width: 28px;
		color: #999;
		background-color: #f2f2f2;
	}
	.count .input-num {
		width: 48px;
		height: 28px;
		color: #333;
		border-left: 0;
		border-right: 0;
		font-size:0.75rem;
	}
	.content .xuan span:nth-child(5) {
		color: green;
	}
	
	.content .xuan span:nth-child(2) {
		color: gainsboro;
	}
	
	.content .xuan span:nth-child(1) {
		color: gainsboro;
	}
	
	.all {
		line-height: 80px;
		border-bottom: 1px solid #f2f2f2;
		text-align: right;
	}
	/*.box b{
		display: inline-block;
		width: 27px;
		height: 27px;
		background-color: #f2f2f2;
	}*/
	
	.all span {
		font-size: 18px;
		display: inline-block;
		margin-right: 10px;
	}
	
	.all b {
		font-size: 24px;
		color: red;
		margin-right: 20px;
	}
	
	.top,
	.content {
		padding-left: 20px;
	}
	
	.allmoney {
		display: flex;
		justify-content: space-between;
		/*height: 133px;*/
		padding: 40px 20px;
	}
	
	.choice {
		color: green;
		word-spacing: 24px;
	}
	
	.money span {
		font-size: 20px;
	}
	
	.money span:nth-child(1) {
		color: #666666;
	}
	
	.money b {
		font-size: 24px;
		color: red;
	}
	
	.money i {
		font-size: 25px;
		color: white;
		display: inline-block;
		background-color: orange;
		width: 150px;
		text-align: center;
		margin-left: 20px;
		line-height: 50px;
		border-radius: 4px;
	}
</style>