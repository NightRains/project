<template>
	<div class="layui-form-item">
    <label class="layui-form-label"></label>
    <div class="layui-block">
        <input v-model="phone"  v-validate="'required|min:11|phone'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" name="phone" class="layui-input" placeholder="请输入手机号">
        <p v-show="errors.has('phone')" class="text-style" v-cloak> {{ errors.first('phone') }} </p>
    </div>
</div>
</template>

<script>
	import '../../static/js/validate.js'
	export default{
		name:'from'
	}
</script>
<style>
</style>