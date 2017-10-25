<template>
	<div class="personaldata">
		<div class="zj-personaldata-content">
			<div class="zj-nav">
				<span class="left">个人资料</span>
			</div>
			<div class="zj-center">
				<span>当前头像</span>
				<span>:</span>
				<img src="../../assets/个人/personaldata1.png"/>
				<span class="txt">修改</span>
			</div>
			<div class="myname">
				<span>昵称</span>
				<span>:</span>
				<input type="text" />
			</div>
			<div class="gender">
				<span>性别</span>
				<span>:</span>
				<div class="ract">
					<div class="ract-out"></div>
				</div>
				<span>男</span>
				<div class="ract2">
					<div class="ract-out2"></div>
				</div>
				<span>女</span>
			</div>
			<div class="birthday"> 
				<span>生日</span>
				<span>:</span>
				<select>
	  				<option value="" v-for="item in year">{{item}}</option>
	  			</select>
	  			<span class="date">年</span>
	  			<select>
	  				<option value="" v-for="item in month">{{item}}</option>
	  			</select>
	  			<span class="date">月</span>
	  			<select>
	  				<option value="" v-for="item in day">{{item}}</option>
	  			</select>
	  			<span class="date">日</span>
			</div>
			<div class="myphone">
				<span>手机</span>
				<span>:</span>
				<input type="text" />
				<span class="change"><a href="/user/changephone1">更换手机</a></span>
			</div>
			<button class="btn">确认提交</button>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'personaldata',
		data(){
			return{
				year:[],
				month:[],
				day:[]
			}
		},
		created: function(){
			for (var i = 1970; i < 2018; i++) {
				this.year.push(i);
			}
			for (var i = 1; i < 13; i++) {
				this.month.push(i);
			}
			for (var i = 1; i < 30; i++) {
				this.day.push(i);
			}
		},
		methods:{
			
		},
		
		mounted(){
			$(".ract").click(function () {
				$(this).css("borderColor","#4b943d");
				$(".ract-out").css("backgroundColor","#4b943d");
				$(".ract2").css("borderColor","#dadada");
				$(".ract-out2").css("backgroundColor","white");
			});
			$(".ract2").click(function () {
				$(this).css("borderColor","#4b943d");
				$(".ract-out2").css("backgroundColor","#4b943d");
				$(".ract").css("borderColor","#dadada");
				$(".ract-out").css("backgroundColor","white");
			});
			
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.personaldata{
		float: right;
	}
	.zj-personaldata-content{
		border: 1px solid #e9e9e9;
		width: 1083px;
		height: 623px;
	}
	.zj-personaldata-content .zj-nav{
		border-bottom: 1px solid #e9e9e9;
		height: 57px;
		font-size: 17px;
		color: #252525;
	}
	.zj-personaldata-content .zj-nav .left{
		margin-left: 20px;
		line-height: 57px;
	}
	.zj-personaldata-content .zj-center{
		font-size: 17px;
		font-weight: 200;
		vertical-align: middle;
		margin-left: 40px;
		margin-top: 40px;
	}
	.zj-personaldata-content .zj-center img{
		vertical-align: middle;
	}
	.zj-personaldata-content .zj-center .txt{
		font-size: 14px;
		color: #4b943d;
		padding-left: 14px;
	}
	.zj-personaldata-content .myname{
		font-size: 17px;
		font-weight: 200;
		vertical-align: middle;
		margin-left: 70px;
		margin-top: 10px;
	}
	.zj-personaldata-content .myname input{
		margin-left: 20px;
		width: 172px;
		height: 35px;
		background-color: #f4f4f4;
		border: 1px solid #d3d3d3;
	}
	.zj-personaldata-content .gender{
		margin-left: 70px;
		margin-top: 20px;
	}
	.zj-personaldata-content .gender .ract{
		display: inline-block;
		border: 1px solid #dadada;
		height: 16px;
		width: 16px;
		border-radius: 50%;
		vertical-align: middle;
		margin-left: 20px;
	}
	.zj-personaldata-content .gender .ract2{
		display: inline-block;
		border: 1px solid #4b943d;
		height: 16px;
		width: 16px;
		border-radius: 50%;
		vertical-align: middle;
		margin-left: 20px;
		margin-left: 35px;
	}
	.zj-personaldata-content .gender .ract .ract-out{
		background-color: white;
		height: 8px;
		width: 8px;
		border-radius: 50%;
		margin: auto;
		margin-top: 4px;
	}
	.zj-personaldata-content .gender .ract2 .ract-out2{
		background-color: #4b943d;
		height: 8px;
		width: 8px;
		border-radius: 50%;
		margin: auto;
		margin-top: 4px;
	}
	.zj-personaldata-content .birthday{
		margin-left: 70px;
		margin-top: 20px;
		font-size: 17px;
	}
	.zj-personaldata-content .birthday select{
		width: 110px;
		height: 36px;
		margin-left: 20px;
		border: solid 1px #d3d3d3;
		appearance:none;
	  -moz-appearance:none;
	  -webkit-appearance:none;
		background: url(../../assets/个人/personaldata2.png) no-repeat scroll right center transparent;
		 border-radius: 0;
		 padding-left: 10px;
		 font-size: 16px;
		 font-weight: 200;
	}
	.zj-personaldata-content .birthday .date{
		margin-left: 10px;
	}
	.zj-personaldata-content .myphone{
		font-size: 17px;
		font-weight: 200;
		vertical-align: middle;
		margin-left: 70px;
		margin-top: 20px;
	}
	.zj-personaldata-content .myphone input{
		margin-left: 20px;
		width: 172px;
		height: 35px;
		background-color: #f4f4f4;
		border: 1px solid #d3d3d3;
	}
	.zj-personaldata-content .myphone .change{
		color: #87b87e;
		font-size: 16px;
		font-weight: 100;
		margin-left: 20px;
	}
	.zj-personaldata-content .myphone .change a{
		color: #87b87e;
	}
	.zj-personaldata-content .btn{
		width: 150px;
		height: 50px;
		border: none;
		background-color: #f08200;
		margin-left: 142px;
		margin-top: 40px;
		border-radius: 5px;
		color: white;
		font-size: 20px;
		font-weight: 100;
	}
</style>