import Mock from 'mockjs';
// import swal from 'sweetalert';
import address from '../network/api';

// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
Mock.setup({
  timeout: '200 - 400',
});
const commodity = [
  // 华为mate40pro 5G手机 亮黑色 8+256G全网通（碎屏险套餐）
  {
    id: 'tui1',
    shopname: '聚捷联盛手机旗舰店',
    type: ['数码', '手机'],
    path: 'tui1.jpg',
    title: '华为mate40pro 5G手机',
    price: '7899.00',
    color: ['亮黑色', '釉白色', '秘银色', '夏日胡杨', '秋日胡杨'],
    version: ['8+256G全网通（碎屏险套餐）', '8+512G全网通（碎屏险套餐）', '8+128G全网通（碎屏险套餐）', '8+256（12期免息）', '8+128（12期免息）'],
    staging: ['不分期', '￥2666.33 x 3期', '￥1366.50 x 6期', '￥658.25 x 12期', '￥354.13 x 24期'],
    introductionpic: [
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/142812/32/12993/74230/5fa0c014E4d77b44b/71498b5f7119c951.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/134701/11/14441/76235/5fa0c014Ed0b357aa/5ef100f49576ba6c.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/139021/36/12850/119923/5fa0c014E0a58bf45/46acdf28f0e26413.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/137475/26/14405/135407/5fa0c014E9b6d7b5e/d1ff28bb792fd83b.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/130364/4/14632/108145/5fa0c014Ed020a855/faf0097d3770cc11.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/153153/31/4523/151496/5fa0c014E0f8a1433/7539cfa30e0c0fd0.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/144956/25/12942/110191/5fa0c014E44c61a92/ca65a527c176997d.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/141024/2/13004/82476/5fa0c014Ec7774061/399e073167f8f4ef.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/126944/32/17259/127679/5fa0c015Ef773481b/7ce145a8aec706d4.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/143901/18/13166/131969/5fa0c015E01031f29/cb4d31e92d4861e2.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/138629/27/12957/198682/5fa0c016E055d8a69/feb54938dc76a771.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/147453/36/13111/179002/5fa0c015E220d23b6/d2108a49816c3504.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/135480/20/14638/150063/5fa0c016E4ce4a8c0/3df0a8593cab314e.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/120705/6/17074/100999/5fa0c016E6abff5e2/ff9a474800429c86.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/140103/12/13082/53714/5fa0c016E7342be7f/b482e6d9e2679864.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/145436/22/13303/76046/5fa0c016E2ce07a66/dee88c07c58bbc53.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/131737/2/14205/132423/5fa0c016E35d2692e/c4ed23f1d80b3089.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/132162/18/14644/88007/5fa0c016Ee12e674a/9658e448ec115066.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/132141/7/14479/98679/5fa0c07aE1c413fc2/02ec18bd5cb6e6a6.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/153191/3/4580/115724/5fa0c07aE28c11feb/2c703386eb87d817.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/136664/33/14475/94589/5fa0c07aEac8aa80a/a066fdff11ab36ea.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/139843/20/13094/173699/5fa0c07bE14ea4f84/478714208880bb7e.jpg',
      'http://img30.360buyimg.com/popWareDetail/jfs/t1/141907/12/13070/9443/5fa0c07bE2ae72934/1cd1a030de3e9c3e.jpg',
    ],
  },
  {
    id: 'cu3',
    shopname: '京拍优品二手商品专营店',
    type: ['数码', '手机'],
    path: 'cu3.jpg',
    title: '苹果X手机 Apple iPhonex',
    price: '2588.00',
    color: ['深空灰', '银白色'],
    version: ['64G 全网通+【赠送充电套装】', '256G 全网通+【赠送充电套装】'],
    staging: ['不分期', '￥888.54 x 3期', '￥457.23 x 6期', '￥241.51 x 12期', '￥133.79 x 24期'],
    introductionpic: ['http://img20.360buyimg.com/imgzone/jfs/t1/144918/15/16630/269578/5fc8ca1bEf79a54a6/a89f34f67d1bfe71.jpg'],
  },
];
// 左导航栏
Mock.mock(address.navurl, 'get', {
  list: [
    {
      id: 1,
      lists: [
        { web: 'https://www.baidu.com/', msg: '女装' },
        { web: '#', msg: '内衣' },
        { web: '#', msg: '家具' },
      ],
      theme: [
        { web: '#', msg: '毛衣外套' },
        { web: '#', msg: '宝藏羊毛' },
        { web: '#', msg: '阔腿神裤' },
        { web: '#', msg: '小黑裙' },
        { web: '#', msg: '西装大衣' },
        { web: '#', msg: '芭比裤' },
        { web: '#', msg: '美背文胸' },
      ],
    },
    {
      id: 2,
      lists: [
        { web: '#', msg: '女鞋' },
        { web: '#', msg: '男鞋' },
        { web: '#', msg: '箱包' },
      ],
      theme: [
        { web: '#', msg: '电脑' },
      ],
    },
    {
      id: 3,
      lists: [
        { web: '#', msg: '男装' },
        { web: '#', msg: '户外运动' },
      ],
      theme: [
        { web: '#', msg: '平板' },
      ],
    },
    {
      id: 4,
      lists: [
        { web: '#', msg: '手机' },
        { web: '#', msg: '数码' },
        { web: '#', msg: '企业' },
      ],
      theme: [
        { web: '#', msg: '耳机' },
      ],
    },
    {
      id: 5,
      lists: [
        { web: '#', msg: '零食' },
        { web: '#', msg: '生鲜' },
        { web: '#', msg: '茶酒' },
      ],
      theme: [
        { web: '#', msg: '笔记本' },
      ],
    },
    {
      id: 6,
      lists: [{ web: '#', msg: '图书音像' }, { web: '#', msg: '文具' }],
      theme: [{ web: '#', msg: '显示屏' }],
    },
    {
      id: 7,
      lists: [{ web: '#', msg: '手表' }, { web: '#', msg: '眼镜' }, { web: '#', msg: '珠宝饰品' }],
      theme: [{ web: '#', msg: '鼠标' }],
    },
  ],
});

// 轮播图图片链接
Mock.mock(address.carurl, 'get', {
  imgs: [
    'https://img14.360buyimg.com/pop/s1180x940_jfs/t1/136586/28/19545/70180/5fd18680E04b3bdac/088a6fa717c6aae3.jpg.webp',
    'https://img12.360buyimg.com/pop/s1180x940_jfs/t1/151140/33/8873/86453/5fc6020aE3db37807/4bf59ed01cefe954.jpg.webp',
    'https://img10.360buyimg.com/babel/s1180x940_jfs/t1/139909/20/17733/140763/5fd0a877E79d39f8d/df0fbd261e24c5c5.jpg.webp',
  ],
});
// 促销商品数据
Mock.mock(address.cuurl, 'get', {
  lists: [
    {
      path: 'cu1.jpg',
      font: '欧乐B电动牙刷 IO云感',
    },
    {
      path: 'cu2.jpg',
      font: '唛芭兔 摇摇马二合一滑行木马车',
    },
    {
      path: 'cu3.jpg',
      font: '苹果X 深空灰 64G',
    },
    {
      path: 'cu4.jpg',
      font: '四川麻辣香肠7分瘦 500g',
    },
    {
      path: 'cu5.jpg',
      font: '精工 新5号翡翠绿水鬼自动机械表',
    },
    {
      path: 'cu6.jpg',
      font: '倍思 120W氮化镓线充套装黑',
    },
  ],
});
// 推荐商品数据
Mock.mock(address.tuiurl, 'get', {
  lists: [
    {
      path: 'tui1.jpg',
      font: '华为 Mate40 Pro 5G手机',
    },
    {
      path: 'tui2.jpg',
      font: 'DAHON 折叠 自行车',
    },
    {
      path: 'tui3.jpg',
      font: '上海 自动机械 手表',
    },
    {
      path: 'tui4.jpg',
      font: '小牛 轻便 踏板车',
    },
    {
      path: 'tui5.jpg',
      font: '施华洛世奇 镂空圆环 耳钉',
    },
    {
      path: 'tui6.jpg',
      font: '阿玛尼 圆领字母 T恤',
    },
  ],
});
// 详情页数据
Mock.mock('/details', (options) => {
  // JSON.parse()
  // JSON.stringify()
  for (let index = 0; index < commodity.length; index += 1) {
    if (options.body === commodity[index].id) {
      return commodity[index];
    }
  }
  return null;
  // return swal('该商品数据不存在', '您可以返回首页', 'error', {
  //   buttons: {
  //     content: '确定',
  //   },
  // }).then(() => { window.location.href = '/'; });
});
// 返回地址信息
Mock.mock(address.address, {
  options: [{
    value: 'beijing',
    label: '北京',
    children: [{
      value: 'zhaoyang',
      label: '朝阳区',
      children: [{
        value: 'balizhuangjiedao',
        label: '八里庄街道',
      }, {
        value: 'beiwan',
        label: '北菀',
      }, {
        value: 'chaoyingxiang',
        label: '朝营乡',
      }, {
        value: 'chaoweijiedao',
        label: '朝外街道',
      }],
    }, {
      value: 'haidian',
      label: '海淀区',
      children: [{
        value: 'balizhuangjiedao',
        label: '八里庄街道',
      }, {
        value: 'beitaipingzhuangjiedao',
        label: '北太平庄街道',
      }],
    }],
  }, {
    value: 'zujian',
    label: '组件',
    children: [{
      value: 'basic',
      label: 'Basic',
      children: [{
        value: 'layout',
        label: 'Layout 布局',
      }, {
        value: 'color',
        label: 'Color 色彩',
      }, {
        value: 'typography',
        label: 'Typography 字体',
      }, {
        value: 'icon',
        label: 'Icon 图标',
      }, {
        value: 'button',
        label: 'Button 按钮',
      }],
    }, {
      value: 'form',
      label: 'Form',
      children: [{
        value: 'radio',
        label: 'Radio 单选框',
      }, {
        value: 'checkbox',
        label: 'Checkbox 多选框',
      }, {
        value: 'input',
        label: 'Input 输入框',
      }, {
        value: 'input-number',
        label: 'InputNumber 计数器',
      }, {
        value: 'select',
        label: 'Select 选择器',
      }, {
        value: 'cascader',
        label: 'Cascader 级联选择器',
      }, {
        value: 'switch',
        label: 'Switch 开关',
      }, {
        value: 'slider',
        label: 'Slider 滑块',
      }, {
        value: 'time-picker',
        label: 'TimePicker 时间选择器',
      }, {
        value: 'date-picker',
        label: 'DatePicker 日期选择器',
      }, {
        value: 'datetime-picker',
        label: 'DateTimePicker 日期时间选择器',
      }, {
        value: 'upload',
        label: 'Upload 上传',
      }, {
        value: 'rate',
        label: 'Rate 评分',
      }, {
        value: 'form',
        label: 'Form 表单',
      }],
    }, {
      value: 'data',
      label: 'Data',
      children: [{
        value: 'table',
        label: 'Table 表格',
      }, {
        value: 'tag',
        label: 'Tag 标签',
      }, {
        value: 'progress',
        label: 'Progress 进度条',
      }, {
        value: 'tree',
        label: 'Tree 树形控件',
      }, {
        value: 'pagination',
        label: 'Pagination 分页',
      }, {
        value: 'badge',
        label: 'Badge 标记',
      }],
    }, {
      value: 'notice',
      label: 'Notice',
      children: [{
        value: 'alert',
        label: 'Alert 警告',
      }, {
        value: 'loading',
        label: 'Loading 加载',
      }, {
        value: 'message',
        label: 'Message 消息提示',
      }, {
        value: 'message-box',
        label: 'MessageBox 弹框',
      }, {
        value: 'notification',
        label: 'Notification 通知',
      }],
    }, {
      value: 'navigation',
      label: 'Navigation',
      children: [{
        value: 'menu',
        label: 'NavMenu 导航菜单',
      }, {
        value: 'tabs',
        label: 'Tabs 标签页',
      }, {
        value: 'breadcrumb',
        label: 'Breadcrumb 面包屑',
      }, {
        value: 'dropdown',
        label: 'Dropdown 下拉菜单',
      }, {
        value: 'steps',
        label: 'Steps 步骤条',
      }],
    }, {
      value: 'others',
      label: 'Others',
      children: [{
        value: 'dialog',
        label: 'Dialog 对话框',
      }, {
        value: 'tooltip',
        label: 'Tooltip 文字提示',
      }, {
        value: 'popover',
        label: 'Popover 弹出框',
      }, {
        value: 'card',
        label: 'Card 卡片',
      }, {
        value: 'carousel',
        label: 'Carousel 走马灯',
      }, {
        value: 'collapse',
        label: 'Collapse 折叠面板',
      }],
    }],
  }, {
    value: 'ziyuan',
    label: '资源',
    children: [{
      value: 'axure',
      label: 'Axure Components',
    }, {
      value: 'sketch',
      label: 'Sketch Templates',
    }, {
      value: 'jiaohu',
      label: '组件交互文档',
    }],
  }],
});

Mock.mock(address.order, (options) => {
  // JSON.parse()
  // JSON.stringify()
  for (let index = 0; index < commodity.length; index += 1) {
    if (options.body === commodity[index].id) {
      // console.log(commodity[index].title);
      return commodity[index].title;
    }
  }
  return null;
  // return swal('该商品数据不存在', '您可以返回首页', 'error', {
  //   buttons: {
  //     content: '确定',
  //   },
  // }).then(() => { window.location.href = '/'; });
});
export default Mock;
