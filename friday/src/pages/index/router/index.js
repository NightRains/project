import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import User from '@/components/user'
import MyOrder from '@/components/user/MyOrder'
import Account from '@/components/user/account'
import MyOrderlist from '@/components/user/MyOrderlist'
import jifen from '@/components/user/jifen'
import JifenOrder from '@/components/user/JifenOrder'
import MyWallet from '@/components/user/MyWallet'
import MyMsg from '@/components/user/MyMsg'
import Feedback from '@/components/user/Feedback'
import Personaldata from '@/components/user/Personaldata'
import Zjmyplaceyes from '@/components/user/Zjmyplaceyes'
import Zjmyplaceno from '@/components/user/Zjmyplaceno'
import Acollec from '@/components/user/Acollec'
import Abrowse from '@/components/user/Abrowse'
import Abindphone from '@/components/user/Abindphone'
import Login from '@/components/Login'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import LoginTable from '@/components/login/LoginTable'
import Register from '@/components/Register'
import Friday from '@/components/Friday'
import Goods from '@/components/Goods'
import GoodsMain from '@/components/goods/GoodsMain'
import GoodsList from '@/components/goods/GoodsList'
import Detail from '@/components/Detail'
import GoodsIndex from '@/components/goods/GoodsIndex'
import JifenShop from '@/components/JifenShop'
import ShopCart from '@/components/ShopCart'
import OneCity from '@/components/OneCity'
import OneStep from '@/components/user/OneStep'
import TwoStep from '@/components/user/TwoStep'
import ThreeStep from '@/components/user/ThreeStep'
Vue.use(VueAwesomeSwiper)
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			component: Index,
		}, {
			path: '/user',
			component: User,
			children: [{
					path: '/',
					component: Account
				}, {
					path: '/user/order',
					component: MyOrderlist
				}, {
					path: '/user/jifen',
					component: jifen
				},
				{
					path: '/user/jifenorder',
					component: JifenOrder
				},
				{
					path:'/user/wallet',
					component:MyWallet
				},
				{
					path:'/user/personaldata',
					component:Personaldata
				}
				,{
					path:'/user/message',
					component: MyMsg
				},
				{
					path:'/user/feedback',
					component:Feedback
				},
				{
					path:'/user/zjmyplaceyes',
					component:Zjmyplaceyes
				},
				{
					path:'/user/zjmyplaceno',
					component:Zjmyplaceno
				},
				{
					path:'/user/acollec',
					component:Acollec
				},
				{
					path:'/user/abrowse',
					component:Abrowse
				},
				{
					path:'/user/abindphone',
					component:Abindphone
				},
				{
					path: '/user/jifenorder',
					component: JifenOrder
				},{
					path:'/user/changephone1',
					component:OneStep
				},
				{
					path:'/user/changephone2',
					component:TwoStep
				},
				{
					path:'/user/changephone3',
					component:ThreeStep
				}
			]
		}, {
			path: '/login',
			component: Login,
			children: [{
				path: '/',
				component: LoginTable
			}]
		},
		{
			path: '/register',
			component: Register
		},
		{
			path: '/friday',
			component: Friday,
			meta: {
				breadcrumbName: "> 礼拜五"
			}
		}, {
			path: '/goods',
			component: Goods,
			meta: {
				breadcrumbName: "> 全部商品"

			},
			children: [{
					path: "/index",
					component: GoodsIndex,
					children: [{
							path: "/goods/index",
							component: GoodsList,
						},
						{
							path: "/goods/index/id",
							component: GoodsList,
							meta: {
								breadcrumbName: "> 苹果"

							},
						},
						{
							path: '/goods/detail',
							component: Detail,
							meta:{
								breadcrumbName: "> 苹果"
							},
						}
					]
				},

			]

		},{
			path:'/jifenshop',
			component:JifenShop
		},
		{
			path:'/cart/index',
			component:ShopCart
		},
		{
			path:'/city',
			component:OneCity
		}

	]
})