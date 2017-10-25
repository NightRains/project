<template>
	<div class="detail_box">
		<div class="top_showgoods">
			<!--商品放大镜-->
			<detail-wheel></detail-wheel>
			<!--商品详细信息-->
			<div class="goods_infor">
				<div class="infor_title">
					<h4>新疆哈密瓜1500kg</h4>
					<span>全国</span><span>礼拜五</span><span>次日达</span><span>自营</span>
				</div>
				<div class="goods_detail">
					<div>
						<img src="../assets/detail/detail_goods02.jpg" alt="" />
						<h4>资深卖家</h4>
					</div>
					<p>
						雀斑石榴持续热卖！云南蒙自石榴，原产波斯（今伊朗）一带，公元前二世纪时传_入我国。是中国三大石榴之一,粒大皮薄,汁多味甜爽口. 雀斑石榴持续热卖！云南蒙自石榴，原产波斯（今伊朗）一带，公元前二世纪时传_入我国。是中国三大石榴之一,粒大皮薄,汁多味甜爽口.
					</p>
				</div>
				<div class="goods_standards">
					<div class="goods_price"><span>现价</span><span>:</span><span>¥ 20.0</span><i>原价</i><i>:</i><i>¥40.0</i></div>
					<div class="standards_box"><i>请选择规格</i><em class="choose">500g</em><em>1000g</em><em>2000g</em></div>
					<div class="num_choose">
						<span>数 量 :</span>
						<ul class="count">
							<li><span id="num-jian" class="num-jian">-</span></li>
							<li><input type="text" class="input-num" id="input-num" value="0" /></li>
							<li><span id="num-jia" class="num-jia">+</span></li>
						</ul>
						<span>件</span>
						<button @click="choose()">加入购物车</button><button>立即购买</button>
					</div>
					</ul>
				</div>
				<!--分享与收藏-->
				<div class="goods_icon">
					<div class="collect_goods">
						<a href="###"><img src="../assets/detail/start02.jpg" alt="" /></a><span>收藏此商品</span>
					</div>
					<div class="share_icon">
						<span>分享到:</span>
						<a href="javascript:void(0)"><img src="../assets/detail/goods_icon01.jpg" /></a>
						<a href="javascript:void(0)"><img src="../assets/detail/goods_icon02.jpg" /></a>
						<a href="javascript:void(0)"><img src="../assets/detail/goods_icon03.jpg" /></a>
						<a href="javascript:void(0)"><img src="../assets/detail/goods_icon04.jpg" /></a>
						<a href="javascript:void(0)"><img src="../assets/detail/goods_icon05.jpg" /></a>
					</div>
				</div>
			</div>
		</div>
		<!--商品详情与商品详情切换-->
		<div class="goods_taggle">
			<div class="taggle_title">
				<a href="javascript:void(0)" @click="toggle(index ,tab.view)" v-for="(tab,index) in tabs" :class="{active:active===index}">
					 {{tab.type}}   
				</a>
				<div></div>
			</div>
			<div class="taggle_box">
				<component :is="currentView"></component>
			</div>
		</div>
		<!--成功加入购物车弹框-->
		<div id="detail_mask" v-show="show">
			<div class="detail_mask">
				<div class="mask_middle">
					<img src="../assets/detail/success_icon.jpg" alt="" /><span>已成功加入购物车</span>
					<br />
					<a href="javascript:void(0)" @click="choose()">继续购物</a><a href="/cart/index">查看购物车</a>
				</div>
			</div>
		</div>
</div>
</template>

<script>
	import MyHeader from './MyHeader'
	import MyFooter from './Footer'
	import BreadCrumb from './BreadCrumb'
	import DetailWheel from './detail/DetailWheel'
	import DetailGoods from '@/components/detail/DetailGoods'
	import DetailEvalutate from '@/components/detail/DetailEvalutate'
	export default {
		name: 'detail',
		components: {
			MyHeader,
			MyFooter,
			BreadCrumb,
			DetailWheel,
			DetailGoods,
			DetailEvalutate
		},
		mounted() {

		},
		data() {
			return {
				active: 0,
				currentView: 'DetailGoods',
				tabs: [{
						type: '商品详情',
						view: 'DetailGoods'
					},
					{
						type: '商品评价',
						view: 'DetailEvalutate'
					}
				],
				show:false
			}
		},
		methods: {
			toggle(i, v) {
				this.active = i
				this.currentView = v
			},
			choose(){
				this.show = ! this.show;
			}
		}
	}
</script>

<style scoped="scoped">
	.detail_box {
		width: 1280px;
		margin: 22px auto 20px;
	}
	
	.top_showgoods {
		width: 100%;
		overflow: hidden;
		padding-bottom: 40px;
	}
	
	.top_showgoods .goods_infor {
		float: left;
		margin-left: 40px;
		width: 740px;
	}
	
	.goods_infor .infor_title {
		border-bottom: 1px solid #ededed;
		padding-bottom: 23px;
	}
	
	.goods_infor .infor_title h4 {
		font-weight: normal;
		font-size: 1.5rem;
		padding-top: 19px;
		padding-bottom: 22px;
	}
	
	.goods_infor .infor_title span {
		display: inline-block;
		padding: 6px 16px 5px;
		color: white;
		background-color: #498e3d;
		margin-right: 20px;
	}
	
	.infor_title span:nth-child(3) {
		background-color: #f08200;
	}
	
	.infor_title span:last-child {
		margin-right: 0px;
	}
	
	.goods_infor .goods_detail {
		padding-bottom: 21px;
		border-bottom: 1px solid #ededed;
		overflow: hidden;
	}
	
	.goods_detail p {
		float: right;
		width: 580px;
	}
	
	.goods_detail div {
		float: left;
		margin-top: 10px;
	}
	
	.goods_detail div img {
		margin: 10px;
	}
	
	.goods_detail div h4 {
		text-align: center;
		height: 30px;
		line-height: 30px;
		padding: 0px 28px;
		background-color: #ffe313;
		border-radius: 15px;
		font-size: 1rem;
		font-weight: normal;
	}
	
	.goods_detail p {
		margin-top: 33px;
		line-height: 30px;
		color: #666666;
	}
	
	.goods_standards {
		padding-top: 30px;
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
	
	.goods_standards .num_choose button {
		float: left;
		border: none;
		margin-left: 20px;
		width: 150px;
		line-height: 50px;
		color: white;
		background-color: #ffae4f;
		font-size: 1.125rem;
		border-radius: 4px;
	}
	
	.goods_standards .num_choose button:nth-of-type(2) {
		background-color: #f08200;
	}
	
	.goods_infor .goods_icon {
		overflow: hidden;
		margin-top: 40px;
		color: #333333;
	}
	
	.goods_infor .collect_goods {
		float: left;
	}
	
	.goods_infor .collect_goods span {
		margin-left: 10px;
	}
	
	.goods_infor .share_icon {
		float: left;
		margin-left: 40px;
	}
	
	.goods_infor .share_icon a {
		margin-left: 10px;
	}
	
	.goods_taggle {
		margin-top: 20px;
		border: 1px solid #e4e4e4;
	}
	
	.goods_taggle .taggle_title {
		background-color: #f4f4f4;
		overflow: hidden;
	}
	
	.taggle_title a {
		display: inline-block;
		padding: 15px 25px;
		background-color: #f4f4f4;
		border: 1px solid #e4e4e4;
	}
	
	.taggle_title a:nth-child(1) {
		border-left: none;
		border-right: none;
	}
	
	.taggle_title a:nth-child(2) {
		/* border-top:none;*/
	}
	
	.taggle_title a.active {
		background-color: #FFFFFF;
		border-bottom: none;
		border-top: 1px solid #498e3d;
	}
	
	.taggle_title div {
		float: right;
		height: 54px;
		width: 1048px;
		border-bottom: 1px solid #e4e4e4;
	}
	
	.goods_taggle .taggle_box {
		margin: 0px 40px 40px;
	}
	#detail_mask{
		position: fixed;
		left:0;
		right:0;
		bottom:0;
		top:0;
		background-color: rgba(0,0,0,0.6);
	}
	#detail_mask .detail_mask{
		width:658px;
		height:318px;
		border:5px solid #e2e2e2;
		background-color: #FFFFFF;
		position: absolute;
		top:50%;
		margin-top:-159px;
		left:50%;
		margin-left:-329px;
	}
	.detail_mask .mask_middle{
		padding-top:80px;
		text-align: center;
	}
	.detail_mask .mask_middle span{
		margin-left:20px;
		vertical-align: middle;
		font-size: 1.4375rem;
		color: #666666;
	}
	.detail_mask .mask_middle a{
		display: inline-block;
		padding:14px 50px;
		color: white;
		font-size: 1.0625rem;
		border-radius: 4px;
		margin-top:60px;
	}
	.detail_mask .mask_middle a:nth-of-type(1){
		background-color: #f08200;
	}
	.detail_mask .mask_middle a:nth-of-type(2){
		background-color: #498e3d;
		margin-left:40px;
	}
</style>