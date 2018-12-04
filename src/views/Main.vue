<style>
.layout {
    border: 1px solid #d7dde4;
    background: #fff;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-footer-center {
    text-align: center;
}
</style>

<template>
    <div class="layout">
        <Layout>
            <!-- <Header> -->
                <menu-header :userName="userName" :menu-theme="theme" :menu-list="menuList" :open-names="openNames" @on-change="handleChange"></menu-header>
            <!-- </Header> -->
            <Content :style="{padding: '20px 0',margin:'0 auto',background:image,width:'100%'}">
                <!-- <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb> -->
                <router-view></router-view>
            </Content>
            <!-- <Footer class="layout-footer-center">2018-2019 &copy; JDCloud</Footer> -->
        </Layout>
    </div>
</template>
<script>
import menuHeader from './main-components/menuHeader.vue';
export default {
    components: {
        menuHeader
    },
    data() {
        return {
        image:"url(" + require("../assets/bg.png") + ")",
            userName: 'test',
            theme: 'dark',
            menuList: [
                {
                    name: '主菜单1',
                    icon: 'ios-paper',
                    children: [
                        {
                            title: '首页',
                            path: '/home',
                            name: 'home',
                        },
                    ]
                },
                {
                    name: '主菜单2',
                    icon: 'ios-paper',
                    children: [
                        {
                            title: '线索搜索',
                            path: '/search',
                            name: 'search',
                        },
                    ]
                },
                {
                    name: '主菜单3',
                    icon: 'ios-paper',
                    children: [
                        {
                            title: '线索日报',
                            path: '/board',
                            name: 'board',
                        },
                    ]
                },
                {
                    name: '主菜单4',
                    icon: 'ios-paper',
                    children: [
                        {
                            title: '监控大屏',
                            path: '/monitor',
                            name: 'monitor',
                        },
                    ]
                },
            ],
            openNames: ['home']
        };
    },
    methods: {
        handleChange(name) {
            this.$router.push({
                name: name
            });
        }
    }
};
</script>