<template>
    <div>
        <h2 class="sub-header">Hero List</h2>
        <router-link class="btn btn-success" to="/heroes/add">Add</router-link>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr :key="item.id" v-for="(item, index) in list">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.gender }}</td>
                    <td>
                    <a href="edit.html">edit</a>
                    &nbsp;&nbsp;
                    <a @click.prevent="handleDel(item.id)">delete</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    // 二 . 完成删除功能
        // 1 给添加按钮绑定点击事件
        // 2 发送请求(携带的信息是对应的id)

    // 1 引入axios
    import axios from 'axios';

    export default {

        data () {

            return {

                list: []

            }

        },

        methods: {

            getData () {
                // 2 发送请求,获取英雄列表数据
                axios

                    .get('http://localhost:3000/heroes')

                    .then((res) => {

                        this.list = res.data;

                    })

            },

            handleDel (id) {

                if (!confirm('您确定要删除么')) {

                    return;

                }

                axios
                    // 使用模板字符串拼接变量
                    .delete(`http://localhost:3000/heroes/${id}`)

                    .then((res) => {

                        if (res.status === 200) {
                            // 删除成功,调用getData方法重新渲染数据
                            this.getData();

                        } else {

                            alert('删除失败');

                        }

                    })

            }

        },

        created () {

            this.getData();

        }

    }
</script>

<style>

</style>
