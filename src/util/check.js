const validateMobile = (rule, value, callback) => {
  if (!(/^1[345789]\d{9}$/.test(value))) {
    callback(new Error('手机号不合法'));
    this.survisePhone = false;
  } else {
    callback();
  }
};

export default {
  phone: {
    validator: validateMobile,
    trigger: 'change',
    required: true,
    message: '请输入正确的手机号',
  },
  work: {
    trigger: 'change',
    required: true,
    message: '请输入职位',
  },
  linkman: {
    trigger: 'change',
    required: true,
    message: '请输入联系人',
  },
  name: {
    required: true,
    message: '姓名不能为空',
    trigger: 'blur'
  },
  fullName: {
    require: true,
    message: '全称不能为空',
    trigger: 'blur'
  },
  ts: {
    require: true,
    message: '启动不能为空',
    trigger: 'blur'
  },
  code: {
    trigger: 'change',
    required: true,
    message: '请输入验证码',
  },
  ly: {
    required: true,
    message: '来源不能为空',
    trigger: 'change'
  },
  revenueCode:
    { required: true, message: '不能为空', trigger: 'blur' }
  ,

};
