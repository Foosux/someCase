<style>
.layout-logo {
  width: 230px;
  height: 65px;
  float: left;
  margin-left: 160px;
}
.logo-text {
  float: left;
  padding-top: 10px;
  padding-left: 5px;
}
.logo-text p {
  font-weight: bold;
  color: #fff;
}
.logo-text p:nth-child(1) {
  font-size: 18px;
}
.logo-text p:nth-child(2) {
  font-size: 16px;
}
.layout-logo img {
  display: inline-block;
  float: left;
  margin-top: 8px;
  width: 50px;
  height: 50px;
}
.menu-con {
  margin-left: 250px;
  float: left;
}
.menu-con ul {
  list-style: none;
}
.menu-con ul li {
  height: 70px;
  text-align: center;
  margin-top: 4px;
  cursor: pointer;
  line-height: 56px;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  width: 120px;
  float: left;
  /* border-bottom: 1px solid #8fb6d1; */
}
.menu-con ul li a {
  color: #ccc;
}

.menu-con ul li a:active {
  color: #fff;
}
.menu-con ul li a:hover {
  color: #fff;
}
.tabbg_con {
  position: relative;
}
.tabbg_l,
.tabbg_r {
  position: absolute;
  top: 0;
  width: 60px;
  height: 60px;
}
.tabbg_l {
  left: -60px;
}
.tabbg_r {
  right: -60px;
}
</style>

<template>
  <div :style="{background:image,height:'65px',width:'100%'}">
    <div class="layout-logo">
      <img src="../../assets/logo_img.png" alt>
      <div class="logo-text">
        <p>昆明市人民检察院</p>
        <p>智慧侦监分析平台</p>
      </div>
    </div>
    <div class="menu-con">
      <ul>
        <li
          :style="{background:pageName=='main'?img_act:'',backgroundSize:pageName=='main'?'100% 90%':''}"
        >
          <router-link to="/main">首页
            <!-- <div class="tabbg_con"> -->
            <!-- <span class="tabbg_l" :style="{background:img_left}"></span>
            <span class="tabbg_r" :style="{background:img_right}"></span>-->
            <!-- </div> -->
          </router-link>
        </li>
        <li
          :style="{background:pageName=='search'?img_act:'',backgroundSize:pageName=='search'?'100% 90%':''}"
        >
          <router-link to="/search">线索搜索</router-link>
        </li>
        <li >
          
          <router-link tag="a" target="_blank" to="/clueDaily">线索日报</router-link>
        </li>
        <li>
          <router-link tag="a" target="_blank" to="/mlc">监控大屏</router-link>
        </li>
      </ul>
    </div>
    <div style="float:right; width:100px; height:80px; color:#fff;fontSize:10px;marginRight:10px;">
      <div style="float:left;marginTop:11px;">
        <p style="lineHeight:18px;">您好，</p>
        <p style="lineHeight:18px;">王检察官</p>
      </div>
      <Avatar
        style="background-color: rgba(255,0,0,0.5);float:right;marginTop:12px;"
        icon="ios-person"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "menuHeader",
  props: {
    menuList: Array,
    iconSize: Number,
    menuTheme: {
      type: String,
      default: "dark"
    },
    openNames: {
      type: Array
    },
    userName: String
  },
  data() {
    return {
      image: "url(" + require("../../assets/hd_bg.png") + ")",
      img_act: "url(" + require("../../assets/menu_bg.png") + ") no-repeat",
      img_left: "url(" + require("../../assets/left.jpg") + ")",
      img_right: "url(" + require("../../assets/right.jpg") + ")"
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
    }
  },
  methods: {
    changeMenu(active) {
      this.$emit("on-change", active);
    },
    handleClickUserDropdown(name) {
      if (name === "userCenter") {
        this.$router.push({
          name: "userCenter"
        });
      } else if (name === "loginout") {
        // 退出登录
        this.$store.dispatch("userLoginout");
      }
    }
  },
  mounted() {
    console.log(this.$route.name);
  },
  updated() {
    this.$nextTick(() => {
      if (this.$refs.sideMenu) {
        this.$refs.sideMenu.updateOpened();
      }
    });
  }
};
</script>
