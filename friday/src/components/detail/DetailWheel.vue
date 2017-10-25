<template>
	<div class="hand_lens">
		<div class="show_goods">
			<div class="goods_cont">
				<div class="goods_small">
					<img src="../../assets/detail/detail_goods01.png" alt="" id="small" />
					<div class="mask"></div>
				</div>
				<div class="window">
					<div class="all_goodspic">
						<img src="../../assets/detail/detail_goods01.png" alt="" />
						<img src="../../assets/detail/detail_goods01.png" alt="" />
						<img src="../../assets/detail/detail_goods01.png" alt="" />
						<img src="../../assets/detail/detail_goods01.png" alt="" />
					</div>
					<div id="left">
						< </div>
							<div id="right"> > </div>
					</div>
					<!--大图部分-->
					<div class="goods_big"><img src="../../assets/detail/detail_goods01.png" alt="" id="big" /></div>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		name: 'detailwheel',
		data() {
			return {

			}
		},
		mounted() {
			$(".goods_small").mouseover(function() {
				$(".mask").css("display", "block");
				$(".goods_big").css("display", "block");
				$(".goods_small").mousemove(function(e) {
					var e = e || window.event;
					//1.蒙版跟随鼠标移动
					//鼠标到浏览器左边缘和上边缘的距离
					var x = e.clientX;
					var y = e.clientY;
					//获取outDiv 到浏览器左边 和 上边的距离
					var leftX = $(".show_goods").offset().left;
					var topY = $(".show_goods").offset().top;
					//获取蒙版maskDiv 的宽和高
					var width = $(".mask").innerWidth();
					var height = $(".mask").innerHeight();
					//计算蒙版maskDiv 的left 和 top
					var left = x - leftX - width / 2;
					var top = y - topY - height / 2;
					if(left <= 0) {
						left = 0;
					} else if(left >= $(".goods_small").innerWidth() - width) {
						left = $(".goods_small").innerWidth() - width;
					}
					if(top <= 0) {
						top = 0;
					} else if(top >= $(".goods_small").innerHeight() - height) {
						top = $(".goods_small").innerHeight() - height;
					}
					//赋值给蒙版
					$(".mask").css("left", left + "px");
					$(".mask").css("top", top + "px");
					//调整大图的left 和 top
					//计算比例系数
					var scaleX = ($("#big").innerWidth() - $(".goods_big").innerWidth()) / ($(".goods_small").innerWidth() - width);
					var scaleY = ($("#big").innerHeight() - $(".goods_big").innerHeight()) / ($(".goods_small").innerHeight() - height);
					//赋值给大图的left 和 top 
					$("#big").css("left", -left * scaleX + "px");
					$("#big").css("top", -top * scaleY + "px");
				})
			})
			$(".goods_small").mouseleave (function() {
				//隐藏 蒙版 和大图div
				$(".mask").css("display", "none");
				$(".goods_big").css("display", "none");
			})
		}
	}
</script>

<style scoped="scoped">
	img {
		vertical-align: top;
	}
	
	.top_showgoods .hand_lens {
		float: left;
	}
	
	.show_goods {
		width: 500px;
		height: 500px;
		position: relative;
	}
	
	.show_goods .goods_cont {}
	
	.goods_small #small {
		width: 500px;
		height: 500px;
	}
	
	.goods_small img {
		height: 500px;
		width: 500px;
	}
	
	.show_goods .window {
		width: 500px;
		height: 90px;
		overflow: hidden;
		position: relative;
		margin-top: 40px;
	}
	
	.windows .all_goodspic {
		width: 3600px;
		font-size: 0;
		position: absolute;
		/*text-align: center;*/
	}
	
	.all_goodspic img {
		width: 90px;
		height: 90px;
		border: 1px solid #e4e4e4;
		margin-right: 20px;
	}
	
	.all_goodspic img:first-child {
		margin-left: 30px;
	}
	
	.all_goodspic img:last-child {
		margin-right: 0;
	}
	
	#left,
	#right {
		position: absolute;
		top: 0;
		bottom: 0;
		background: white;
		font-size: 2.5rem;
		line-height: 90px;
		color: #e4e4e4;
		width: 24px;
	}
	
	#right {
		right: 0;
	}
	
	.show_goods .goods_big {
		width: 300px;
		height: 300px;
		overflow: hidden;
		position: absolute;
		left: 501px;
		top: -1px;
		display: none;
	}
	
	.goods_big #big {
		width: 1000px;
		height: 1000px;
		position: absolute;
	}
	
	.goods_small .mask {
		width: 150px;
		height: 150px;
		position: absolute;
		background: pink;
		opacity: 0.6;
		top: 0;
		left: 0;
		display: none;
	}
</style>