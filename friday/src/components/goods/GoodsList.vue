<template>
	<div class="goodslist_box">
		<div class="goods_box">
			<!--分类导航-->
			<div class="goods_submenu">
				<div><span>一级分类:</span>
					<a href="/goods/index" class="active">全部</a>
					<a href="/goods/index/id">苹果</a>
					<a href="javascript:void(0)">阿克苏</a>
					<a href="javascript:void(0)">酒店</a>
					<a href="javascript:void(0)">休闲</a>
					<a href="javascript:void(0)">电影</a>
				</div>
				<div><span>一级分类:</span>
					<a href="/goods/index">全部</a>
					<a href="/goods/index/id">苹果</a>
					<a href="javascript:void(0)">阿克苏</a>
					<a href="javascript:void(0)">酒店</a>
					<a href="javascript:void(0)">休闲</a>
					<a href="javascript:void(0)">电影</a>
				</div>
			</div>
			<!--分类导航结束-->
			<!--选择栏-->
			<div class="goods_select">
				<div class="goods_order"><span>排序:</span>
					<a href="javascript:void(0)" class="green_border">销量</a>
					<a href="javascript:void(0)">价格</a>
					<a href="javascript:void(0)">评分最高</a>
				</div>
				<div class="goods_filter">
					<span>筛选:</span>
					<a href="javascript:void(0)" class="act">全国</a>
					<a href="javascript:void(0)">次日达</a>
				</div>
			</div>
			<!--选择栏结束-->
		</div>
		<!--商品展示-->
		<div class="goods_list">
			<!--单行商品-->
			<ul>
				<li>
					<a href="">
						<img src="../../assets/index/home_goods03.jpg" alt="" />
					</a>
					<div>
						<h4>新西兰佳沛黄金奇异果</h4>
						<p>果肉绵密、花肉般的甘甜百吃不厌</p>
						<p class="money_box"><span class="red">¥ 28.80</span><span>¥40.00</span>
							<a href="javascripte:void(0)" @click="choose()"><img src="../../assets/index/goods_carticon.png" /></a>
						</p>
					</div>
				</li>
				<li>
					<a href="">
						<img src="../../assets/index/home_goods01.jpg" alt="" />
					</a>
					<div>
						<h4>新西兰佳沛黄金奇异果</h4>
						<p>果肉绵密、花肉般的甘甜百吃不厌</p>
						<p class="money_box"><span class="red">¥ 28.80</span><span>¥40.00</span>
							<a href="javascripte:void(0)"><img src="../../assets/index/goods_carticon.png" /></a>
						</p>
					</div>
				</li>
				<li>
					<a href="">
						<img src="../../assets/index/home_goods02.jpg" alt="" />
					</a>
					<div>
						<h4>新西兰佳沛黄金奇异果</h4>
						<p>果肉绵密、花肉般的甘甜百吃不厌</p>
						<p class="money_box"><span class="red">¥ 28.80</span><span>¥40.00</span>
							<a href="javascripte:void(0)"><img src="../../assets/index/goods_carticon.png" /></a>
						</p>
					</div>
				</li>
				<li>
					<a href="">
						<img src="../../assets/index/home_goods04.jpg" alt="" />
					</a>
					<div>
						<h4>新西兰佳沛黄金奇异果</h4>
						<p>果肉绵密、花肉般的甘甜百吃不厌</p>
						<p class="money_box"><span class="red">¥ 28.80</span><span>¥40.00</span>
							<a href="javascripte:void(0)"><img src="../../assets/index/goods_carticon.png" /></a>
						</p>
					</div>
				</li>
			</ul>
			<!--单行商品结束-->
			<ul>
				<li>
					<a href="">
						<img src="../../assets/index/home_goods03.jpg" alt="" />
					</a>
					<div>
						<h4>新西兰佳沛黄金奇异果</h4>
						<p>果肉绵密、花肉般的甘甜百吃不厌</p>
						<p class="money_box"><span class="red">¥ 28.80</span><span>¥40.00</span>
							<a href="javascripte:void(0)"><img src="../../assets/index/goods_carticon.png" /></a>
						</p>
					</div>
				</li>
				<li>
					<a href="">
						<img src="../../assets/index/home_goods01.jpg" alt="" />
					</a>
					<div>
						<h4>新西兰佳沛黄金奇异果</h4>
						<p>果肉绵密、花肉般的甘甜百吃不厌</p>
						<p class="money_box"><span class="red">¥ 28.80</span><span>¥40.00</span>
							<a href="javescript:void(0)"><img src="../../assets/index/goods_carticon.png" /></a>
						</p>
					</div>
				</li>
				<li>
					<a href="">
						<img src="../../assets/index/home_goods02.jpg" alt="" />
					</a>
					<div>
						<h4>新西兰佳沛黄金奇异果</h4>
						<p>果肉绵密、花肉般的甘甜百吃不厌</p>
						<p class="money_box"><span class="red">¥ 28.80</span><span>¥40.00</span>
							<a href="javascripte:void(0)"><img src="../../assets/index/goods_carticon.png" /></a>
						</p>
					</div>
				</li>
				<li>
					<a href="">
						<img src="../../assets/index/home_goods04.jpg" alt="" />
					</a>
					<div>
						<h4>新西兰佳沛黄金奇异果</h4>
						<p>果肉绵密、花肉般的甘甜百吃不厌</p>
						<p class="money_box"><span class="red">¥ 28.80</span><span>¥40.00</span>
							<a href="javascripte:void(0)"><img src="../../assets/index/goods_carticon.png" /></a>
						</p>
					</div>
				</li>
			</ul>
		</div>
		<!--商品展示结束-->
		<!--点击购物车弹窗-->
		<div id="goods_mask" v-show="show">
              <div id="maske_cont">
              	<p>请选择规格</p>
              	<div class="goods_standards">
					<div class="goods_price"><span>现价</span><span>:</span><span>¥ 20.0</span><i>原价</i><i>:</i><i>¥40.0</i></div>
					<div class="standards_box"><i>请选择规格</i><em class="choose">500g</em><em>1000g</em><em>2000g</em></div>
					<div class="num_choose">
						<span>数 量 :</span>
						<ul class="count">
							<li><span id="num-jian" class="num-jian">-</span></li>
							<li><input type="text" class="input-num" id="input-num" value="1" /></li>
							<li><span id="num-jia" class="num-jia">+</span></li>
						</ul>
						<span>件</span>
					</div>
					<button id="btn" @click="choose()">添加到购物车</button>
				</div>
              </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'goodslist',
		data(){
			return{
				show:false,
			}
		},
		methods:{
			choose:function(){
				this.show = ! this.show;
			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped="scoped">
	.goodslist_box {
		width: 1280px;
		margin: 0px auto 20px;
	}
	
	.goods_box {
		width: 1280px;
		margin: 0px auto;
	}
	/* 分类导航 */
	.goods_box .goods_submenu {
		
	}
	.goods_submenu div {
		padding-top: 16px;
		padding-bottom: 14px;
		border-bottom: 1px solid #e7e7e7;
	}
	
	.goods_submenu div span {
		color: #666666;
		font-size: 1rem;
		margin-right: 11px
	}
	
	.goods_submenu div a {
		color: #666666;
		font-size: 1rem;
		display: inline-block;
		padding: 4px 11px 6px;
		margin-left: 15px;
	}
	
	.goods_submenu div a.active {
		background-color: #498e3d;
		color: white !important;
	}
	/*选择栏*/
	.goods_box .goods_select {
		padding: 24px 0 6px;
		overflow: hidden;
	}
	
	.goods_select .goods_order {
		float: left;
	}
	
	.goods_order span:nth-child(1) {
		font-size: 1.0625rem;
		color: #707070;
		margin-right: 19px;
	}
	
	.goods_order a {
		display: inline-block;
		padding: 4px 15px;
		border: 1px solid #e7e7e7;
		margin-left: 40px;
	}
	
	.goods_order a.green_border {
		color: #498e3d;
		border: 1px solid #498e3d;
	}
	
	.goods_select .goods_filter {
		float: right;
	}
	
	.goods_filter span:nth-child(1) {
		color: #707070;
		font-size: 1.0625rem;
	}
	
	.goods_filter a {
		margin-left: 40px;
		display: inline-block;
		padding: 5px 16px;
		background-color: #dedede;
		color: #333333;
	}
	
	.goods_filter a.act {
		background-color: #498e3d;
		color: #FFFFFF;
	}
	/*商品展示*/
	.goods_list ul {
		overflow: hidden;
		margin-top: 20px;
	}
	
	.goods_list ul li {
		border: 1px solid #ececec;
		margin-right: 21px;
		float: left;
	}
	
	.goods_list ul li:last-child {
		margin-right: 0px;
	}
	
	.goods_list ul li div {
		margin: 10px 19px 30px;
	}
	
	.goods_list ul li div h4 {
		font-size: 1rem;
		font-weight: normal;
		color: #333333;
		margin-bottom: 17px;
	}
	
	.goods_list ul li div p {
		font-size: 0.875rem;
		color: #707070;
	}
	
	.goods_list ul li div .money_box {
		overflow: hidden;
		margin-top: 22px;
		line-height: 19px;
	}
	
	.goods_list ul li div .money_box .red {
		float: left;
		font-size: 1.1875rem;
		color: #ff5757;
	}
	
	.goods_list ul li div .money_box a {
		display: inline-block;
		height: 100%;
		float: right;
	}
	
	.goods_list ul li div .money_box a img {
		vertical-align: top;
	}
	
	.goods_list ul li div .money_box span:nth-child(2) {
		color: #666666;
		font-size: 0.875rem;
		margin-left: 17px;
		line-height: 19px;
		display: inline-block;
		float: left;
		text-decoration: line-through;
	}
	/*弹窗*/
	body #goods_mask{
		position: fixed;
		top:0;
		left:0;
		bottom:0;
		right:0;
		background-color:rgba(0,0,0,0.5);
		z-index: 2;
	}
	#goods_mask #maske_cont{
		width:688px;
		height:452px;
		background-color: #FFFFFF;
		position: absolute;
		top:50%;
		margin-top:-226px;
		left:50%;
		margin-left: -344px;
	}
	#maske_cont p{
		line-height: 68px;
		border-bottom:1px solid #e2e2e2;
		padding-left:30px;
		font-size: 1.1875rem;
		color: #498e3d;
		
	}
	#maske_cont .goods_standards {
		padding: 40px 38px;
	}
	/*价钱*/
	
	.goods_standards .goods_price span {
		color: #ff5757;
		font-size: 1.75rem;
	}
	
	.goods_standards .goods_price span:nth-child(2) {
		margin-left: 13px;
		margin-right: 13px;
	}
	
	.goods_standards .goods_price i {
		color: #666666;
		font-size: 1.25rem;
		text-decoration: line-through;
	}
	
	.goods_standards .goods_price i:nth-child(4) {
		margin-left: 33px;
	}
	/*规格*/
	
	.goods_standards .standards_box {
		margin-top: 36px;
	}
	
	.goods_standards .standards_box i {
		font-size: 1.0625rem;
		color: #666666;
	}
	
	.goods_standards .standards_box em {
		color: #666666;
		font-size: 0.75rem;
		display: inline-block;
		width: 83px;
		height: 34px;
		line-height: 34px;
		border: 1px solid #d4d4d4;
		text-align: center;
		margin-left: 20px;
	}
	.goods_standards .standards_box em.choose{
		border: 1px solid #4b943d;
		background-color: #f4fff2;
	}
	/*数量*/
	
	.goods_standards .num_choose {
		margin-top: 20px;
	}
	
	.goods_standards .num_choose {
		overflow: hidden;
	}
	
	.goods_standards .num_choose span {
		float: left;
		display: inline-block;
	}
	
	.goods_standards .num_choose span:nth-of-type(1) {
		line-height: 50px;
	}
	
	.goods_standards .num_choose span:nth-of-type(2) {
		margin-left: 11px;
		margin-right: 20px;
		line-height: 50px;
	}
	
	.goods_standards .num_choose .count {
		float: left;
		overflow: hidden;
	}
	
	.goods_standards .num_choose .count li {
		float: left;
	}
	
	.goods_standards .num_choose .count li:nth-child(1) {
		margin-left: 11px;
	}
	
	.goods_standards .num_choose span {
		font-size: 1.125rem;
		color: #666666;
	}
	
	.goods_standards .num_choose .count .num-jian,
	.input-num,
	.num-jia {
		display: inline-block;
		width: 32px;
		height: 32px;
		line-height: 32px;
		text-align: center;
		font-size: 18px;
		color: #999;
		cursor: pointer;
		border: 1px solid #e6e6e6;
	}
	
	.goods_standards .num_choose .count .num-jia {
		margin-left: 1px;
		line-height: 32px;
	}
	
	.goods_standards .num_choose .count .input-num {
		width: 67px;
		height: 30px;
		color: #333;
		border-left: 0;
		border-right: 0;
	}
	
	.count {
		padding-top: 10px;
	}
	/*按钮*/
	
	.goods_standards  #btn{
		border: none;
		width: 190px;
		line-height: 35px;
		color: white;
		background-color: #f08200;
		font-size: 1.0625rem;
		border-radius: 4px;
		margin-top:37px;
	}
</style>