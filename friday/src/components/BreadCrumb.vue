<template>
	<div id="breadCrumb_box">
		<span>您当前的位置是:</span>
		<ul>
			<li><router-link to='/'>首页</router-link></li>
			<li v-for="(item,index) in brumblist" :key="index">
				<router-link :to="item.path">{{item.meta.breadcrumbName}}</router-link>
				<!--<span class="separator" v-if="index !== brumblist.length-1">{{separator}}</span>-->
			</li>

		</ul>
	</div>
</template>

<script>
	export default {
		name: 'breadcrumb',
		created() {
			this.getBreadcrumb();
		},
		data() {
			return {
				title: '', // 页面标题
				brumblist: '' // 路由集合
			}
		},
		props: ['separator'],
		methods: {
			getBreadcrumb() {
				this.brumblist = this.$route.matched;
				console.log(this.brumblist);
				this.$route.matched.forEach((item, index) => {
					// 判断父级路由是否为空字符串或者meta是否为首页,直接复写路径到根目录
					// 后面的就是判断路由和当前遍历的项目是否一致,是的话把标题的值给上
					if(item.meta.breadcrumbName === '首页') {
						item.path = '/';
					}else {
						item.path = this.$route.path;
					}
				})
			}
		},
		watch: {
			$route() {
				this.getBreadcrumb();
			}
		}
	}
</script>

<style scoped="scoped">
	#breadCrumb_box {
		/*width: 100%;*/
		padding: 20px;
		background-color: #f4f4f4;
		font-size: 0.875rem;
		color: #666666;
		overflow: hidden;
	}
	
	#breadCrumb_box span {
		float: left;
	}
	
	#breadCrumb_box ul {
		float: left;
	}
	
	#breadCrumb_box ul li {
		float: left;
		margin-left: 10px;
		margin-right: 10px;
		word-spacing: 8px;
	}
	
	#breadCrumb_box ul li a {
		color: #666666;
	}
</style>