<template>
    <div>
        <h2 class="sub-header">Hero List</h2>
        <a class="btn btn-success" href="add.html">Add</a>
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
                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
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

            }

        },

        created () {

            this.getData();

        }

    }
</script>

<style>

</style>
