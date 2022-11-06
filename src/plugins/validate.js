import VeeValidate, { Field } from "vee-validate";
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import Vue from "vue";
Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN',{
    messages:{
        ...zh_CN.messages,
        is:(field)=>`${field}必须于与密码相同`
    },
    attributes:{
        phone:'手机号',
        code:'验证码',
        password:'密码',
        password1:'确认密码',
        isCheck:'协议'
    }
})

VeeValidate.Validator.extend('agree',{
    validate:value=>{
        return value
    },
    getMessage:field=>field+'必须同意'
})