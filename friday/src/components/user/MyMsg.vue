<template>
	<div class="my-msg">
		<p>我的消息</p>
		<div class="jifen">
			<ul class="all_msg">
				<li>
					<span>标题</span>
					<span>发送时间</span>
					<span>状态</span>
					<span>操作</span>
				</li>
				<li>
					<span>您的货物已发货您的货物已发货您的货物已发货</span>
					<span>2015年9月23日 15:25:07</span>
					<span>未查看</span>
					<span>
						<a class="check_msg" href="###">查看</a><a href="###" class="remove_msg">删除</a>
					</span>
				</li>
				<li>
					<span>您的货物已发货您的货物已发货您的货物已发货</span>
					<span>2015年9月23日 15:25:07</span>
					<span>未查看</span>
					<span>
						<a class="check_msg" href="###">查看</a><a href="###" class="remove_msg">删除</a>
					</span>
				</li>
				<li>
					<span>您的货物已发货您的货物已发货您的货物已发货</span>
					<span>2015年9月23日 15:25:07</span>
					<span>未查看</span>
					<span>
						<a class="check_msg" href="###">查看</a><a href="###" class="remove_msg">删除</a>
					</span>
				</li>
			</ul>
			<div class="msg_details">
				<div class="details_tit">
					<p>您的货物已发货</p>
					<span>2015年9月21日 15:24</span>
				</div>
				<div class="details_txt">
					<p>我们的梦想是为全国14亿人民都能享用到安全虱高品质的斯鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴有美国Sunkist,新西兰Zespri,澳大利亚MFC,以色列Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过1000个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水用身份认证和溯源系统，确保食材的信息透明和安全。</p>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		name: "my-msg",
		data() {
			return {

			}
		},
		methods: {

		},
		mounted(){
			$(".check_msg").each(function () {
				$(this).click(function () {
					$(".all_msg").css("display","none");
					$(".msg_details").css("display","block");
				});
			});
			$(".remove_msg").each(function () {
				$(this).click(function () {
					$(this).parent().parent().remove();
				});
			})
		}
	}
</script>

<style scoped>
	.my-msg {
		width: 1083px;
		height: 622px;
		border: 1px solid #e9e9e9;
		position: absolute;
		top: 0;
		left: 195px;
	}
	
	.my-msg p {
		width: 1083px;
		height: 57px;
		border-bottom: 1px solid #E9E9E9;
		font-size: 18px;
		color: rgb(51, 51, 51);
		line-height: 57px;
		padding-left: 20px;
	}
	
	.jifen {
		margin: 20px 0 0 20px;
	}
	
	.jifen ul {
		width: 1042px;
		border: 1px solid #e9e9e9;
		border-bottom: 0;
	}
	
	.jifen ul li {
		border-bottom: 1px solid #e9e9e9;
		height: 53px;
		line-height: 53px;
	}
	
	.jifen ul li:nth-child(1) {
		background-color: #f2f2f2;
		border-bottom: 0;
		height: 46px;
		line-height: 46px;
	}
	
	.jifen li:hover {
		background-color: #f4fff2;
	}
	
	.jifen li span {
		/*width: 25%;*/
		display: inline-block;
		text-align: center;
		font-size: 14px;
		color: rgb(102, 102, 102);
	}
	
	.jifen li span:nth-child(1) {
		width: 40%;
	}
	
	.jifen li span:nth-child(2) {
		width: 24%;
	}
	
	.jifen li span:nth-child(3) {
		width: 16%;
	}
	
	.jifen li span:nth-child(4) {
		width: 16%;
	}
	
	.jifen li span a {
		color: #4b943d;
	}
	
	.jifen li span a:first-child {
		border-right: 2px solid #adadad;
		padding-right: 6px;
		margin-right: 6px;
	}
	
	.jifen .msg_details {
		margin-top: 13px;
		display: none;
	}
	
	.jifen .msg_details p {
		border: 0;
		width: 1021px;
		height: 87px;
		padding: 0 30px 0 10px;
	}
	
	.msg_details p {
		font-size: 18px;
		font-family: "MicrosoftYaHei";
		color: rgb(75, 148, 61);
		line-height: 87px;
		text-align: center;
	}
	
	.jifen .msg_details span {
		font-size: 12px;
		font-family: "MicrosoftYaHei";
		color: #999;
		position: absolute;
		right: 30px;
		bottom: 0;
	}
	
	.details_tit {
		position: relative;
	}
	
	.details_txt p {
		font-size: 14px;
		font-family: "MicrosoftYaHei";
		color: rgb(102, 102, 102);
		line-height: 30px;
		margin-top: 18px;
		text-align: left;
	}
</style>