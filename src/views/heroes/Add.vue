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
            <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
// 1 将表单中的文本框双向绑定
// 2 给submit按钮绑定点击事件
// 3 获取表单中的数据
// 4 发送请求 --引入axios
import axios from 'axios';

export default {
    data () {

        return {

            formData: {

                name: '',

                gender: ''

            }

        };

    },

    methods: {

        handleAdd () {

            axios

                .post('heroes', this.formData)

                .then((res) => {

                    if (res.status === 201) {

                        this.$router.push({name: 'heroes'})

                    } else {

                        alert('添加失败');

                    }

                })

        }

    }

}
</script>

<style>

</style>
