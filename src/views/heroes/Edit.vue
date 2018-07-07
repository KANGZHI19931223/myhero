<template>
    <div>
        <h2 class="sub-header">Add Hero</h2>
        <form>
            <div class="form-group">
            <label for="name">英雄姓名</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="name">
            </div>
            <div class="form-group">
            <label for="sex">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="gender">
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>

import axios from 'axios';

export default {

    data () {

        return {

            formData: {

                name: '',

                gender: ''

            },
            // 英雄的id初始值设置成-1
            id: -1

        };

    },

    // 1 获取url中的id,在钩子函数中获取
    created () {

        const id = this.$route.params.id;

        this.id = id;
        // 调用getHeroById()
        this.getHeroById();

    },

    methods: {

        getHeroById () {

            // 2 发送请求获取对应id的英雄数据
            axios

                .get(`http://localhost:3000/heroes/${this.id}`)

                .then((res) => {

                    if (res.status === 200) {

                        this.formData = res.data;

                    } else {

                        alert('获取信息失败');

                    }

                });


        }

    }

}
</script>

<style>

</style>
