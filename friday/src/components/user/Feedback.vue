<template>
	<div class="my-msg">
		<p>我的消息</p>
		<div class="feedback">
			<textarea name="feedback" class="f_cont" placeholder="请输入您的意见我们将期待与您共同成长"></textarea>
			<button class="msg_btn1">取消</button>
			<button class="msg_btn2">提交</button>
		</div>

	</div>
</template>

<script>
	export default {
		name: "feedback",
		data() {
			return {

			}
		},
		methods: {

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
	
	.f_cont {
		width: 961px;
		height: 332px;
		resize: none;
		border-color: #d9d9d9;
		padding: 20px;
		margin: 40px;
		font-size: 16px;
		color: rgb(153, 153, 153);
	}
	.feedback{
		text-align: center;
	}
	
	.feedback button {
		font-size: 20px;
		color: rgb(255, 255, 255);
		line-height: 50px;
		text-align: center;
		border: 0;
		padding: 0;
		outline: none;
	}
	
	.msg_btn1 {
		border-radius: 5px;
		background-color: rgb(153, 153, 153);
		width: 150px;
		height: 50px;
	}
	
	.msg_btn2 {
		border-radius: 5px;
		background-color: rgb(240, 130, 0);
		width: 150px;
		height: 50px;
		margin-left: 94px;
	}
</style>