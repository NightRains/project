<template>
	<div class="my-account">
		<!--<h1>个人中心</h1>-->
		<div class="person_tit">个人中心</div>
		<div class="person_tit tit_guanli">交易管理&nbsp;&nbsp;></div>
		<ul>
			<li class="li_fixedcolor">
				<router-link to="/user/" class="co_a">我的账户</router-link>
			</li>
			<li>
				<router-link to="/user/order" class="co_a">我的订单</router-link>
			</li>
			<li>
				<router-link to="/user/jifen" class="co_a">我的积分</router-link>
			</li>
			<li>
				<router-link to="/user/jifenorder" class="co_a">积分订单</router-link>
			</li>
			<li>
				<router-link to="/user/wallet" class="co_a">我的钱包</router-link>
			</li>
		</ul>
		<div class="person_tit tit_guanli">会员资料&nbsp;&nbsp;></div>
		<ul>
			<li>
				<router-link to="/user/personaldata" class="co_a">个人资料</router-link>
			</li>
			<li>
				<router-link to="/user/zjmyplaceyes" class="co_a">地址管理</router-link>
			</li>
			<li>
				<router-link to="/user/acollec" class="co_a">我的收藏</router-link>
			</li>
			<li>
				<router-link to="/user/abrowse" class="co_a">最近浏览</router-link>
			</li>
			<li>
				<router-link to="/user/abindphone" class="co_a">修改密码</router-link>
			</li>
		</ul>
		<div class="person_tit tit_guanli">站内信&nbsp;&nbsp;></div>
		<ul>
			<li>
				<router-link to="/user/message" class="co_a">我的消息</router-link>
			</li>
			<li>
				<router-link to="/user/feedback" class="co_a">意见反馈</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "my-account",
		data() {
			return {
				
			}
		},
		methods: {

		},
		mounted:function(){
			$(".my-account li a").click(function(){
				$(".my-account li a").css({"color":"#8c8c8c","textDecoration":"none"});
				$(this).css({"color":"#498e3d","textDecoration":"underline"});
			});
		}
	}
</script>

<style scoped>
	.my-account {
		width: 168px;
		height: 622px;
		border: 1px solid #e7e7e7;
		font-family: "MicrosoftYaHei";
		float: left;
	}
	
	.person_tit {
		width: 154px;
		height: 57px;
		color: rgb(102, 102, 102);
		line-height: 57px;
		font-size: 18px;
		border-bottom: 1px solid #E7E7E7;
		padding-left: 18px;
	}
	
	.tit_guanli {
		border-bottom: 0;
		font-size: 16px;
	}
	
	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
		line-height: 2.222;
		font-size: 14px;
	}
	
	.li_fixedcolor a {
		color: rgb(73, 142, 61);
		text-decoration: underline;
		
	}
	
	li a {
		text-decoration: none;
		color: #999;
		padding-left: 18px;
	}
	
	li a:hover {
		text-decoration: underline;
		color: rgb(73, 142, 61);
	}
	
	.class-a {
		text-decoration: none;
		color: #999;
	}
	
	.active {
		text-decoration: underline;
		color: rgb(73, 142, 61);
		background-color: red;
	}
</style>