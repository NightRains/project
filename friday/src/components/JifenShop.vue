 <template>	
	<div class="box">
	<my-header></my-header>
	
	<swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img src="../assets/jifenshop/jifen-bigbanner.jpg" alt="" /></swiper-slide>
    <!--<swiper-slide><img src="../assets/jifenshop/jifen-bigbanner.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/jifenshop/jifen-bigbanner.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/jifenshop/jifen-bigbanner.jpg" alt="" /></swiper-slide>-->
    
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
   </swiper>
   <!--商品详情-->
   <div class="jifen_cargo">
   	<!--第一横列商品-->
   	   <div class="jifen_cargo_top">
   			<div class="cargo_topone left">
   				<img src="../assets/jifenshop/jifenshop-01.jpg"/>
   				<h4>新西兰佳沛黄金奇异果</h4>
   				<p>花蜜版的甘甜百吃不厌</p>
   				<div class="cargo_price">
   					<span>积分 : </span>
	   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
	   				<span>价值&nbsp;: </span>
	   				<span>¥&nbsp;&nbsp;20.0</span>
	   				<a href="" class="cargo_btn">立即兑换</a>		
   				</div>
   				
   			</div>
   			<!--上面第二个商品-->
   			<div class="cargo_topone">
   				<img src="../assets/jifenshop/jifenshop-02.jpg"/>
   				<h4>新西兰佳沛黄金奇异果</h4>
   				<p>花蜜版的甘甜百吃不厌</p>
   				<div class="cargo_price">
   					<span>积分 : </span>
	   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
	   				<span>价值&nbsp;: </span>
	   				<span>¥&nbsp;&nbsp;20.0</span>	   				
	   				<a href="" class="cargo_btn">立即兑换</a>	   				
   				</div>
   			</div>
   			<!--上面第三个商品-->
   			<div class="cargo_topone">
   				<img src="../assets/jifenshop/jifenshop-03.jpg"/>
   				<h4>新西兰佳沛黄金奇异果</h4>
   				<p>花蜜版的甘甜百吃不厌</p>
   				<div class="cargo_price">
   					<span>积分 : </span>
	   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
	   				<span>价值&nbsp;: </span>
	   				<span>¥&nbsp;&nbsp;20.0</span>	   				
	   				<a href="" class="cargo_btn">立即兑换</a>	   			
   				</div>
   			</div>
   			
   			<!--上面第四个商品-->
   			<div class="cargo_topone">
   				<img src="../assets/jifenshop/jifenshop-04.jpg"/>
   				<h4>新西兰佳沛黄金奇异果</h4>
   				<p>花蜜版的甘甜百吃不厌</p>
   				<div class="cargo_price">
   					<span>积分 : </span>
	   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
	   				<span>价值&nbsp;: </span>
	   				<span>¥&nbsp;&nbsp;20.0</span>	   			
	   				<a href="" class="cargo_btn">立即兑换</a>	   				
   				</div>
   			</div>
   			
   			
   			<!--中部商品-->
   			<div class="jifen_cargo_top two">
	   			<div class="cargo_topone left">
	   				<img src="../assets/jifenshop/jifenshop-01.jpg"/>
	   				<h4>新西兰佳沛黄金奇异果</h4>
	   				<p>花蜜版的甘甜百吃不厌</p>
	   				<div class="cargo_price">
	   					<span>积分 : </span>
		   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
		   				<span>价值&nbsp;: </span>
		   				<span>¥&nbsp;&nbsp;20.0</span>	   				
		   				<a href="" class="cargo_btn">立即兑换</a>	   				
	   				</div>
	   				
	   			</div>
	   			<!--上面第二个商品-->
	   			<div class="cargo_topone">
	   				<img src="../assets/jifenshop/jifenshop-02.jpg"/>
	   				<h4>新西兰佳沛黄金奇异果</h4>
	   				<p>花蜜版的甘甜百吃不厌</p>
	   				<div class="cargo_price">
	   					<span>积分 : </span>
		   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
		   				<span>价值&nbsp;: </span>
		   				<span>¥&nbsp;&nbsp;20.0</span>	   				
		   				<a href="" class="cargo_btn">立即兑换</a>
	   				</div>
	   			</div>
	   			<!--上面第三个商品-->
	   			<div class="cargo_topone">
	   				<img src="../assets/jifenshop/jifenshop-03.jpg"/>
	   				<h4>新西兰佳沛黄金奇异果</h4>
	   				<p>花蜜版的甘甜百吃不厌</p>
	   				<div class="cargo_price">
	   					<span>积分 : </span>
		   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
		   				<span>价值&nbsp;: </span>
		   				<span>¥&nbsp;&nbsp;20.0</span>	   				
		   				<a href="" class="cargo_btn">立即兑换</a>	   			
	   				</div>
	   			</div>
	   			<!--上面第四个商品-->
	   			<div class="cargo_topone ">
	   				<img src="../assets/jifenshop/jifenshop-04.jpg"/>
	   				<h4>新西兰佳沛黄金奇异果</h4>
	   				<p>花蜜版的甘甜百吃不厌</p>
	   				<div class="cargo_price">
	   					<span>积分 : </span>
		   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
		   				<span>价值&nbsp;: </span>
		   				<span>¥&nbsp;&nbsp;20.0</span>	   				
		   				<a href=""  class="cargo_btn">立即兑换</a>	   				
	   				</div>
   				</div>
   	  		 </div>
   			<!--第三列商品-->
   			<!--中部商品-->
   			<div class="jifen_cargo_top two">
	   			<div class="cargo_topone left">
	   				<img src="../assets/jifenshop/jifenshop-01.jpg"/>
	   				<h4>新西兰佳沛黄金奇异果</h4>
	   				<p>花蜜版的甘甜百吃不厌</p>
	   				<div class="cargo_price">
	   					<span>积分 : </span>
		   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
		   				<span>价值&nbsp;: </span>
		   				<span>¥&nbsp;&nbsp;20.0</span>	   				
		   				<a href="" class="cargo_btn">立即兑换</a>	   				
	   				</div>
	   				
	   			</div>
	   			<!--上面第二个商品-->
	   			<div class="cargo_topone">
	   				<img src="../assets/jifenshop/jifenshop-02.jpg"/>
	   				<h4>新西兰佳沛黄金奇异果</h4>
	   				<p>花蜜版的甘甜百吃不厌</p>
	   				<div class="cargo_price">
	   					<span>积分 : </span>
		   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
		   				<span>价值&nbsp;: </span>
		   				<span>¥&nbsp;&nbsp;20.0</span>	   				
		   				<a href="" class="cargo_btn">立即兑换</a>
	   				</div>
	   			</div>
	   			<!--上面第三个商品-->
	   			<div class="cargo_topone">
	   				<img src="../assets/jifenshop/jifenshop-03.jpg"/>
	   				<h4>新西兰佳沛黄金奇异果</h4>
	   				<p>花蜜版的甘甜百吃不厌</p>
	   				<div class="cargo_price">
	   					<span>积分 : </span>
		   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
		   				<span>价值&nbsp;: </span>
		   				<span>¥&nbsp;&nbsp;20.0</span>	   				
		   				<a href="" class="cargo_btn">立即兑换</a>	   			
	   				</div>
	   			</div>
	   			<!--上面第四个商品-->
	   			<div class="cargo_topone ">
	   				<img src="../assets/jifenshop/jifenshop-04.jpg"/>
	   				<h4>新西兰佳沛黄金奇异果</h4>
	   				<p>花蜜版的甘甜百吃不厌</p>
	   				<div class="cargo_price">
	   					<span>积分 : </span>
		   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
		   				<span>价值&nbsp;: </span>
		   				<span>¥&nbsp;&nbsp;20.0</span>	   				
		   				<a href=""  class="cargo_btn">立即兑换</a>	   				
	   				</div>
   				</div>
   	  		 </div>
   	  		 
   	  		 <!--第四列商品-->
   	  		 <!--中部商品-->
   			<div class="jifen_cargo_top two">
	   			<div class="cargo_topone left">
	   				<img src="../assets/jifenshop/jifenshop-01.jpg"/>
	   				<h4>新西兰佳沛黄金奇异果</h4>
	   				<p>花蜜版的甘甜百吃不厌</p>
	   				<div class="cargo_price">
	   					<span>积分 : </span>
		   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
		   				<span>价值&nbsp;: </span>
		   				<span>¥&nbsp;&nbsp;20.0</span>	   				
		   				<a href="" class="cargo_btn">立即兑换</a>	   				
	   				</div>
	   				
	   			</div>
	   			<!--上面第二个商品-->
	   			<div class="cargo_topone">
	   				<img src="../assets/jifenshop/jifenshop-02.jpg"/>
	   				<h4>新西兰佳沛黄金奇异果</h4>
	   				<p>花蜜版的甘甜百吃不厌</p>
	   				<div class="cargo_price">
	   					<span>积分 : </span>
		   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
		   				<span>价值&nbsp;: </span>
		   				<span>¥&nbsp;&nbsp;20.0</span>	   				
		   				<a href="" class="cargo_btn">立即兑换</a>
	   				</div>
	   			</div>
	   			<!--上面第三个商品-->
	   			<div class="cargo_topone">
	   				<img src="../assets/jifenshop/jifenshop-03.jpg"/>
	   				<h4>新西兰佳沛黄金奇异果</h4>
	   				<p>花蜜版的甘甜百吃不厌</p>
	   				<div class="cargo_price">
	   					<span>积分 : </span>
		   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
		   				<span>价值&nbsp;: </span>
		   				<span>¥&nbsp;&nbsp;20.0</span>	   				
		   				<a href="" class="cargo_btn">立即兑换</a>	   			
	   				</div>
	   			</div>
	   			<!--上面第四个商品-->
	   			<div class="cargo_topone ">
	   				<img src="../assets/jifenshop/jifenshop-04.jpg"/>
	   				<h4>新西兰佳沛黄金奇异果</h4>
	   				<p>花蜜版的甘甜百吃不厌</p>
	   				<div class="cargo_price">
	   					<span>积分 : </span>
		   				<span>&nbsp;500</span>&nbsp;&nbsp;&nbsp;
		   				<span>价值&nbsp;: </span>
		   				<span>¥&nbsp;&nbsp;20.0</span>	   				
		   				<a href=""  class="cargo_btn">立即兑换</a>	   				
	   				</div>
   				</div>
   	  		 </div>
   			
   	  </div>
   </div>
   <my-footer></my-footer> 
 	</div>
	
</template>

<script>
	import MyHeader from './MyHeader'
	import MyFooter from './Footer'
    export default {
    name: "jifenShop",
    components:{
    	MyHeader,
   	MyFooter,
    },
    data() {
      return {
        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 2000,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',//上一张
          nextButton:'.swiper-button-next',//下一张
          observeParents:true,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          loop:true
        }
      }
    },
  }
	
</script>

<style>
	@import url("../assets/css/swiper-3.4.2.min.css");
	.swiper-container{
		z-index: 0;
	}
	.swiper-container img {
		width:100%;
		height: 510px;
	}
	.swiper-button-prev{
	 	width:60px;
	 	height:60px;
	 	left:80px;
	 	margin-top:-30px;
		background:url(../assets/index/jiantou.png) no-repeat  scroll 0 0/100%;
		opacity: 0.5;
	}
	.swiper-button-next{
		width:60px;
	 	height:60px;
	 	right:80px;
	 	margin-top:-30px;
		background:url(../assets/index/jiantou.png) no-repeat  scroll 0 0/100%;
		opacity: 0.5;
		transform: rotate(180deg);
	}
	*{
		margin: 0;
		padding: 0;
	}
	a{	text-decoration: none;	}
	.box{
		/*width: 80%;
		height: 1000px;
		border: 1px solid red;*/
	}
	/*外层大边框*/
	.jifen_cargo{
		width: 1280px;
		margin: 10px auto 20px;
		overflow: hidden;
	}
	/*商品横*/
	.jifen_cargo_top{
		width: 100%;
		height: 480px;	
		/*margin-top: 20px;*/
	}
	/*第一个商品*/
	.cargo_topone{
		width: 303px;
		/*height: 100%;*/
		float: left;
		border: 1px solid #ececec;
		text-align: center;
	}
	.cargo_topone h4{
		color: #333333;
		font-size: 17px;
	}
	.cargo_topone p{
		margin-top: 12px;
		font-size: 15px;
		color: #999999;
	}
	.cargo_price{
		margin-top: 10px;
		
	}
	.cargo_price span:nth-child(1){		
		display: inline-block;
		padding-left: 25px;
	}
	.cargo_price span:nth-child(2){
		font-size: 23px;
		color: #ff6d6d;
		
		padding-right: 10px;
	}
	.cargo_price span:nth-child(3){		
		display: inline-block;
		padding-left: 20px;
	}
	.cargo_price .cargo_btn{
		width: 150px;
		height: 38px;
		display: inline-block;
		border: 1px solid white;
		background-color: #f08200;
		font-size: 17px;	
		margin-left: 20px;			
		line-height: 38px;
		border-radius: 25px;
		text-align: center;
	}
	
	
	/*第二个商品*/
	.cargo_topone{
		width: 303px;
		height: 100%;
		border: 1px solid #ececec;
		text-align: center;
		float: left;
		margin-left: 20px;
		margin-top: 20px;
	}
	/*.two{
		margin-top: 20px;
	}*/
	.cargo_topone h4{
		color: #333333;
		font-size: 17px;
	}
	.cargo_topone p{
		margin-top: 12px;
		font-size: 15px;
		color: #999999;
	}
	.cargo_price{
		margin-top: 10px;
		width: 265px;
	}
	.cargo_price span:nth-child(1){		
		display: inline-block;
		padding-left: 25px;
	}
	.cargo_price span:nth-child(2){
		font-size: 23px;
		color: #ff6d6d;
		/*display: block;*/
		padding-right: 10px;
	}
	.cargo_price span:nth-child(3){		
		display: inline-block;
		padding-left: 20px;
	}
	.cargo_btn{
		width: 150px;
		height: 38px;
		background-color: #f08200;
		font-size: 17px;		
		margin: 20px auto;
		line-height: 38px;
		color: white;
		border-radius: 15px;
		text-align: center;
	}
	
	.jifen_cargo_top:after{
		content: "";
	 	display: block;
	 	clear: both;
	}
	.left{
		margin-left:0;
	}
</style>