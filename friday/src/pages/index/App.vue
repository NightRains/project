<template>
  <div id="app">
 
  	<router-view></router-view>
  		
  </div>
</template>

<script>
//import MyHeader from '../../components/MyHeader'
//import MyFooter from '../../components/Footer'
//import  Index   from '../../components/index'
//import '../../../static/js/validate.js'
export default {
   name:"app",
   components:{

   }
}
</script>

<style>
	html,body{
		font-size:16px;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
	}
	body,div,a,span,img,ul,li,dl,dt,dd,h4,i,em,p,button{
		margin:0;
		padding:0;
	}
	ul,li{
		list-style: none;
	}
	a{
		text-decoration: none;
		color: black;
	}
	i,em{
		font-style: normal;
	}
	img{
		vertical-align: top;
	}
	
</style>
