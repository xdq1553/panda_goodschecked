import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import thunk from "redux-thunk";

const INIT_DATA = {
    category : {
        navList : [
            {
                hash:"woman",
                name: "女装",
                path: "/woman",
                img:"http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                ]
            },
            {
                hash:"beauty",
                name: "美妆护肤",
                path: "/beauty",
                img:"http://img1.lukou.com/static/img/category/category_3.jpg",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    
                ]
            },
            {
                hash:"man",
                name: "男装",
                path: "/man",
                img:"http://img1.lukou.com/static/p/fb/tab/5.png",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    
                ]
            },
            {
                hash:"acc",
                name: "配饰",
                path: "/acc",
                img:"http://img1.lukou.com/static/img/category/category_4.jpg",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    
                ]
            },
            {
                hash:"womanshoe",
                name: "女鞋",
                path: "/womanshoe",
                img:"http://img1.lukou.com/static/p/fb/tab/13.jpeg",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    
                ]
            },
            {
                hash:"womaneat",
                name: "零食王国",
                path: "/womaneat",
                img:"http://img1.lukou.com/static/img/category/category_12.jpg",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    
                ]
            },
            {
                hash:"bag",
                name: "箱包",
                path: "/bag",
                img:"http://img1.lukou.com/static/img/category/category_7.jpg",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    
                ]
            },
            {
                hash:"person",
                name: "个人洗护",
                path: "/person",
                img:"http://img1.lukou.com/static/img/category/category_8.jpg",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    
                ]
            },
            {
                hash:"manshoe",
                name: "男鞋",
                path: "/manshoe",
                img:"http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    
                ]
            },
            {
                hash:"phone",
                name: "手机周边",
                path: "/phone",
                img:"http://img1.lukou.com/static/p/fb/tab/6.png",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    
                ]
            },
            {
                hash:"homephone",
                name: "数码家电",
                path: "/homephone",
                img:"http://img1.lukou.com/static/img/category/category_10.jpg",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    
                ]
            },
            {
                hash:"cloth",
                name: "内衣袜子",
                path: "/cloth",
                img:"http://img1.lukou.com/static/img/category/category_11.jpg",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    
                ]
            },
            {
                hash:"manuse",
                name: "成人用品",
                path: "/manuse",
                img:"http://img1.lukou.com/static/img/category/category_15.jpg",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    
                ]
            },
            {
                hash:"day",
                name: "日用家居",
                path: "/day",
                img:"http://img1.lukou.com/static/img/category/category_13.jpg",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    
                ]
            },
            {
                hash:"chinese",
                name: "文体娱乐",
                path: "/chinese",
                img:"http://img1.lukou.com/static/img/category/category_14.jpg",
                sort: [
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/1.png",
                        sortName: "卫衣"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/2.jpeg",
                        sortName: "卫衣女"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/fb/tab/5.png",
                        sortName: "羽绒服"
                    },
                    
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/p/commodity/img/20171229-225348.png",
                        sortName: "男鞋"
                    },
                    {
                        sortImg: "http://img1.lukou.com/static/img/category/category_7.jpg",
                        sortName: "包包"
                    },
                    
                ]
            },
        ]
    },
    sort : {
        bottomList : [
            {
                path: "/home",
                icon: "icon-shouye",
                text: "首页"
            },
            {
                path: "/sort",
                icon: "icon-fenlel",
                text: "分类"
            },
            {
                path: "/collect",
                icon: "icon-shoucang1",
                text: "收藏"
            },
            {
                path: "/person",
                icon: "icon-icon-test",
                text: "我的"
            },
        ] 
    },
    goods : {
        goodsList: [
            {
                type: "goods",
                charts:2,
                goodsId: 1,
                goodsName: "萃汇尔芦荟胶正品祛痘膏淡化痘印青春痘疤痕女补水保湿男士去痘疤",
                goodsPrice: "5.9",
                goodsBuy: "2222",
                chit: "15元券",
                goodsImg:"http://img1.lukou.com/static/p/commodity/img/20045156.jpeg"
            },
            {
                type: "all",
                goodsImg:"http://img1.lukou.com/static/p/commodity/img/20045647.jpeg",
                textFirst: "那些好看的连衣裤",
                textSecond: "一秒搞定穿搭",
                pathname: "/allskirt"

            },
            {
                type: "all",
                goodsImg:"http://gd2.alicdn.com/imgextra/i4/3191570337/TB2U8SqrhdkpuFjy0FbXXaNnpXa_!!3191570337.jpg",
                textFirst: "今年最洋气的小白裤",
                textSecond: "网红明星人手必备",
                pathname: "/allwhite"

            },
            {
                type: "goods",
                charts:1,
                goodsId: 2,
                goodsName: "韩国丝绒雾面唇釉染唇液口红水润持久保湿不脱色不沾杯唇彩唇蜜",
                goodsPrice: "59.9",
                goodsBuy: "2.4万",
                chit: "65元券",
                goodsImg:"http://img1.lukou.com/static/p/commodity/img/20043371.jpeg"
            },
            
            {
                type: "goods",
                goodsId: 3,
                charts:3,
                goodsName: "ZUZU口红保湿防水滋润不易脱色学生哑光官网柔润唇彩精油润唇膏",
                goodsPrice: "19.9",
                goodsBuy: "1.2万",
                chit: "10元券",
                goodsImg:"http://img1.lukou.com/static/p/commodity/img/20044178.jpeg"
            },
            {
                type: "goods",
                goodsId: 4,
                charts:4,
                goodsName: "韩国丝绒雾面哑光唇釉五件套装染唇液口红持久保湿不脱色唇彩唇蜜",
                goodsPrice: "46.9",
                goodsBuy: "1.5万",
                chit: "20元券",
                goodsImg:"http://gaitaobao1.alicdn.com/tfscom/i2/2873055628/TB2AMIaquOSBuNjy0FdXXbDnVXa_!!2873055628.jpg"
            },
            {
                type: "all",
                goodsImg:"http://img1.lukou.com/static/p/commodity/img/20044079.jpeg",
                textFirst: "睡懒觉的法宝",
                textSecond: "送你一份安稳睡眠",
                pathname: "/allsleep"

            },
            {
                type: "goods",
                goodsId: 5,
                charts:5,
                goodsName: "隐形眼镜盒双联盒美瞳盒子隐形近视眼镜盒伴侣盒收纳护理盒两副装",
                goodsPrice: "146.9",
                goodsBuy: "1.7万",
                chit: "50元券",
                goodsImg:"http://img1.lukou.com/static/p/commodity/img/20024858.jpeg"
            },
            {
                type: "goods",
                goodsId: 6,
                charts:6,
                goodsName: "莱姿素颜霜学生裸妆遮瑕面霜补水保湿护肤",
                goodsPrice: "146.9",
                goodsBuy: "2.7万",
                chit: "10元券",
                goodsImg:"http://img.alicdn.com/imgextra/i4/1703155368/TB25zhirDlYBeNjSszcXXbwhFXa_!!1703155368-0-item_pic.jpg"
            },
        ]
    },
    classGoods: {
        tabs : [
            {
                title: "综合",
                goods:[
                    
                    {
                        type: "goods",
                        goodsId: 3,
                        charts:3,
                        goodsName: "ZUZU口红保湿防水滋润不易脱色学生哑光官网柔润唇彩精油润唇膏",
                        goodsPrice: "19.9",
                        goodsBuy: "1.2万",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20044178.jpeg"
                    },
                    {
                        type: "goods",
                        goodsId: 4,
                        charts:4,
                        goodsName: "韩国丝绒雾面哑光唇釉五件套装染唇液口红持久保湿不脱色唇彩唇蜜",
                        goodsPrice: "46.9",
                        goodsBuy: "1.5万",
                        chit: "20元券",
                        goodsImg:"http://gaitaobao1.alicdn.com/tfscom/i2/2873055628/TB2AMIaquOSBuNjy0FdXXbDnVXa_!!2873055628.jpg"
                    },
                    {
                        type: "goods",
                        charts:2,
                        goodsId: 1,
                        goodsName: "萃汇尔芦荟胶正品祛痘膏淡化痘印青春痘疤痕女补水保湿男士去痘疤",
                        goodsPrice: "5.9",
                        goodsBuy: "2222",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20045156.jpeg" 
                    },
                    {
                        type: "goods",
                        charts:1,
                        goodsId: 2,
                        goodsName: "韩国丝绒雾面唇釉染唇液口红水润持久保湿不脱色不沾杯唇彩唇蜜",
                        goodsPrice: "59.9",
                        goodsBuy: "2.4万",
                        chit: "65元券",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20043371.jpeg"
                    },
                    
                    {
                        type: "goods",
                        goodsId: 5,
                        charts:5,
                        goodsName: "隐形眼镜盒双联盒美瞳盒子隐形近视眼镜盒伴侣盒收纳护理盒两副装",
                        goodsPrice: "146.9",
                        goodsBuy: "1.7万",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20024858.jpeg"
                    },
                    {
                        type: "goods",
                        charts:2,
                        goodsId: 1,
                        goodsName: "萃汇尔芦荟胶正品祛痘膏淡化痘印青春痘疤痕女补水保湿男士去痘疤",
                        goodsPrice: "5.9",
                        goodsBuy: "2222",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20045156.jpeg" 
                    },
                ]
            },
            {
                title: "价格最低",
                goods:[
                   
                    {
                        type: "goods",
                        goodsId: 5,
                        charts:5,
                        goodsName: "隐形眼镜盒双联盒美瞳盒子隐形近视眼镜盒伴侣盒收纳护理盒两副装",
                        goodsPrice: "146.9",
                        goodsBuy: "1.7万",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20024858.jpeg"
                    },
                    {
                        type: "goods",
                        charts:2,
                        goodsId: 1,
                        goodsName: "萃汇尔芦荟胶正品祛痘膏淡化痘印青春痘疤痕女补水保湿男士去痘疤",
                        goodsPrice: "5.9",
                        goodsBuy: "2222",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20045156.jpeg" 
                    },
                    {
                        type: "goods",
                        charts:1,
                        goodsId: 2,
                        goodsName: "韩国丝绒雾面唇釉染唇液口红水润持久保湿不脱色不沾杯唇彩唇蜜",
                        goodsPrice: "59.9",
                        goodsBuy: "2.4万",
                        chit: "65元券",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20043371.jpeg"
                    },
                    
                    {
                        type: "goods",
                        goodsId: 3,
                        charts:3,
                        goodsName: "ZUZU口红保湿防水滋润不易脱色学生哑光官网柔润唇彩精油润唇膏",
                        goodsPrice: "19.9",
                        goodsBuy: "1.2万",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20044178.jpeg"
                    },
                    {
                        type: "goods",
                        goodsId: 4,
                        charts:4,
                        goodsName: "韩国丝绒雾面哑光唇釉五件套装染唇液口红持久保湿不脱色唇彩唇蜜",
                        goodsPrice: "46.9",
                        goodsBuy: "1.5万",
                        chit: "20元券",
                        goodsImg:"http://gaitaobao1.alicdn.com/tfscom/i2/2873055628/TB2AMIaquOSBuNjy0FdXXbDnVXa_!!2873055628.jpg"
                    },
                    {
                        type: "goods",
                        charts:2,
                        goodsId: 1,
                        goodsName: "萃汇尔芦荟胶正品祛痘膏淡化痘印青春痘疤痕女补水保湿男士去痘疤",
                        goodsPrice: "5.9",
                        goodsBuy: "2222",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20045156.jpeg" 
                    },
                ]
            },
            {
                title: "销量",
                goods:[
                    {
                        type: "goods",
                        charts:2,
                        goodsId: 1,
                        goodsName: "萃汇尔芦荟胶正品祛痘膏淡化痘印青春痘疤痕女补水保湿男士去痘疤",
                        goodsPrice: "5.9",
                        goodsBuy: "2222",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20045156.jpeg" 
                    },
                    {
                        type: "goods",
                        goodsId: 3,
                        charts:3,
                        goodsName: "ZUZU口红保湿防水滋润不易脱色学生哑光官网柔润唇彩精油润唇膏",
                        goodsPrice: "19.9",
                        goodsBuy: "1.2万",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20044178.jpeg"
                    },
                    {
                        type: "goods",
                        charts:2,
                        goodsId: 1,
                        goodsName: "萃汇尔芦荟胶正品祛痘膏淡化痘印青春痘疤痕女补水保湿男士去痘疤",
                        goodsPrice: "5.9",
                        goodsBuy: "2222",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20045156.jpeg" 
                    },
                   
                    {
                        type: "goods",
                        goodsId: 5,
                        charts:5,
                        goodsName: "隐形眼镜盒双联盒美瞳盒子隐形近视眼镜盒伴侣盒收纳护理盒两副装",
                        goodsPrice: "146.9",
                        goodsBuy: "1.7万",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20024858.jpeg"
                    },
                    
                    {
                        type: "goods",
                        goodsId: 4,
                        charts:4,
                        goodsName: "韩国丝绒雾面哑光唇釉五件套装染唇液口红持久保湿不脱色唇彩唇蜜",
                        goodsPrice: "46.9",
                        goodsBuy: "1.5万",
                        chit: "20元券",
                        goodsImg:"http://gaitaobao1.alicdn.com/tfscom/i2/2873055628/TB2AMIaquOSBuNjy0FdXXbDnVXa_!!2873055628.jpg"
                    },
                   
                    {
                        type: "goods",
                        charts:1,
                        goodsId: 2,
                        goodsName: "韩国丝绒雾面唇釉染唇液口红水润持久保湿不脱色不沾杯唇彩唇蜜",
                        goodsPrice: "59.9",
                        goodsBuy: "2.4万",
                        chit: "65元券",
                        goodsImg:"http://img1.lukou.com/static/p/commodity/img/20043371.jpeg"
                    },
                    
                    
                   
                ]
            },
        ]
    }

}

export default createStore(reducer,INIT_DATA,applyMiddleware(thunk))

