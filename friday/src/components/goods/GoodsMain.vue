<template>
	<div class="goods_box">
		<div class="goods_submenu">
			<div><span>一级分类:</span><a href="/goods/index" class="active">全部</a><a href="/goods/index/id">苹果</a><a href="javascript:void(0)">阿克苏</a><a href="javascript:void(0)">酒店</a><a href="javascript:void(0)">休闲</a><a href="javascript:void(0)">电影</a></div>
		    <div><span>一级分类:</span><a href="/goods/index">全部</a><a href="/goods/index/id">苹果</a><a href="javascript:void(0)">阿克苏</a><a href="javascript:void(0)">酒店</a><a href="javascript:void(0)">休闲</a><a href="javascript:void(0)">电影</a></div>
		</div>
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
	</div>
</template>

<script>
	export default{
		name:'goodsmain',
		components:{
		},
		data(){
			return{
				dataList:[],
			}
		},
		mounted:function(){
			var path = this.$router.fullPath
			console.log(path);
		},
		methods:{
			geturl:function(){
				
			}
		}
	}
</script>

<style scoped="scoped">
	.goods_box{
		width:1280px;
		margin:0px auto;
	}
	.goods_box .goods_submenu{
		
	}
	.goods_submenu div{
		padding-top:16px;
		padding-bottom:14px;
		border-bottom:1px solid #e7e7e7;
	}
	.goods_submenu div span{
		color: #666666;
		font-size:1rem;
		margin-right:11px
	}
	.goods_submenu div a{
		color: #666666;
		font-size:1rem;
		display: inline-block;
		padding:4px 11px 6px;
		margin-left:15px;           
	}
	.goods_submenu div a.active{
		background-color:#498e3d;
		color:white !important;
	}
	 .goods_box .goods_select{
	 	padding:24px 0 6px;
	 	overflow: hidden;
	 }
	.goods_select .goods_order{
		float:left;
	}
	.goods_order span:nth-child(1){
		font-size:1.0625rem;
		color:#707070;
		margin-right:19px;
	}
	.goods_order a{
		display: inline-block;
		padding:4px 15px;
		border:1px solid #e7e7e7;
		margin-left:40px;
	}
	.goods_order a.green_border{
		color: #498e3d;
		border:1px solid #498e3d;
	}
	.goods_select .goods_filter{
		float: right;
	}
	.goods_filter span:nth-child(1){
		color:#707070;
		font-size:1.0625rem;
	}
	.goods_filter  a{
		margin-left:40px;
		display: inline-block;
		padding:5px 16px;
		background-color: #dedede;
		color: #333333;
	}
	.goods_filter  a.act{
		background-color: #498e3d;
		color: #FFFFFF;
	}
</style>