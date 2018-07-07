// 1 导入vue-router
import VueRouter from 'vue-router';
import Vue from 'vue';

// 引入创建好的组件
import HeroesList from '../views/heroes/List.vue';

import EquipsList from '../views/equips/List.vue';

import WeaponsList from '../views/weapons/List.vue';

// 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);

// 2 创建路由对象
const router = new VueRouter({

    linkActiveClass: 'active',

    routes: [
        // 3 配置路由规则
        {name: 'heroes', path: '/heroes', component: HeroesList},

        {name: 'equips', path: '/equips', component: EquipsList},

        {name: 'weapons', path: '/weapons', component: WeaponsList}

    ]

});

// 4 导出模块
export default router;