// 1 导入vue-router
import VueRouter from 'vue-router';
import Vue from 'vue';

// 引入创建好的组件
import HeroesList from '../views/heroes/List.vue';

import EquipsList from '../views/equips/List.vue';

import WeaponsList from '../views/weapons/List.vue';

// 引入添加英雄组件
import AddHero from '../views/heroes/Add.vue';

// 引入修改英雄组件
import EditHero from '../views/heroes/Edit.vue';

// 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);

// 2 创建路由对象
const router = new VueRouter({

    linkActiveClass: 'active',

    routes: [
        // 配置默认路由
        {name: 'home', path: '/', redirect: '/heroes'},

        // 3 配置路由规则
        {name: 'heroes', path: '/heroes', component: HeroesList},

        {name: 'equips', path: '/equips', component: EquipsList},

        {name: 'weapons', path: '/weapons', component: WeaponsList},
        // 配置添加英雄路由
        {name: 'add', path: '/heroes/add', component: AddHero},
        // 配置修改英雄路由
        {name: 'edit', path: '/heroes/edit/:id', component: EditHero}

    ]

});

// 4 导出模块
export default router;