<template>
	<div id="detail_evaluate">
		<!--评论-->
		<div class="appraise_box">
			<div class="appraise_user">
				<img src="../../assets/detail/person_icon.jpg" alt="" />
				<p>
					158****0203
				</p>
			</div>
			<div class="appraise_cont">
				<div class="appraise"><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /></div>
				<p>帮同事买的,真心不错</p>
				<div class="appraise_pic">
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
				</div>
			</div>
			<span class="appraise_time">2016-08-22 20:45:01</span>
		</div>
		<div class="appraise_box appraise_reply">
			<div class="appraise_user">
				<img src="../../assets/detail/person_icon.jpg" alt="" />
				<p>
					158****0203
				</p>
			</div>
			<div class="appraise_cont">
				<div class="appraise"><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /></div>
				<p>帮同事买的,真心不错</p>
				<!--<div class="appraise_pic">
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
				</div>-->
				<div class="reply">
					<p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
					<div class="reply_cont">
						<span>汉能商城回复 :</span><i>谢谢亲的评价,我们会更努力!</i>
					</div>
				</div>
			</div>
			<span class="appraise_time">2016-08-22 20:45:01</span>
		</div>
		<div class="appraise_box">
			<div class="appraise_user">
				<img src="../../assets/detail/person_icon.jpg" alt="" />
				<p>
					158****0203
				</p>
			</div>
			<div class="appraise_cont">
				<div class="appraise"><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /></div>
				<p>帮同事买的,真心不错</p>
				<div class="appraise_pic">
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
				</div>
			</div>
			<span class="appraise_time">2016-08-22 20:45:01</span>
		</div>
		<div class="appraise_box appraise_reply">
			<div class="appraise_user">
				<img src="../../assets/detail/person_icon.jpg" alt="" />
				<p>
					158****0203
				</p>
			</div>
			<div class="appraise_cont">
				<div class="appraise"><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /><img src="../../assets/detail/appraise_pic02.jpg" alt="" /></div>
				<p>帮同事买的,真心不错</p>
				<!--<div class="appraise_pic">
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
					<span><img src="../../assets/detail/appraise_pic.jpg" alt="" /></span>
				</div>-->
				<div class="reply">
					<p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
					<div class="reply_cont">
						<span>汉能商城回复 :</span><i>谢谢亲的评价,我们会更努力!</i>
					</div>
				</div>
			</div>
			<span class="appraise_time">2016-08-22 20:45:01</span>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	#detail_evaluate{
		padding-top:20px;
	}
	#detail_evaluate .appraise_box{
		padding-top:20px;
		padding-bottom:20px;
		overflow: hidden;
	}
	.appraise_box .appraise_user{
		float: left;
	}
	.appraise_box .appraise_cont{
		float: left;
		margin-left:20px;
		font-size: 0;
	}
	.appraise_cont .appraise img{
		margin-right:6px;
	}
	.appraise_cont .appraise img:last-child{
		margin-right:0;
	}
	.appraise_cont p{
		color: #666666;
		font-size: 1rem;
		line-height:52px;
	}
	.appraise_cont .appraise_pic span{
		display: inline-block;
		border:2px solid #d5d5d5;
		margin-right: 10px;
	}
	.appraise_cont .appraise_pic span:last-child{
		margin-right: 0;
	}
	.appraise_cont .appraise_pic span img{
		padding:1px;
	}
	.appraise_box .appraise_time{
		float: right;
		font-size: 0.6875rem;
		color: #999999;
	}
	.appraise_box .reply p{
		line-height: 0;
	}
	.reply .reply_cont{
		margin-top:16px;
	}
	.reply .reply_cont span{
		font-size: 0.875rem;
		color: #eb661c;
	}
	.reply .reply_cont i{
		color: #999999;
		font-size:0.75rem;
		margin-left:10px;
	}
</style>