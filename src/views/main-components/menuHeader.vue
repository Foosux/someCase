<style>
.headerWrap {
  height: 100px;
  box-sizing: content-box;
  width: 100%;
  padding-top: 10px;
  background-position: 0 10px!important;
  background-color: #0f1537!important;
}
.innerWrap {
  width:1200px;
  margin: 0 auto;
}
.layout-logo {
  width: 245px;
  height: 100px;
  float: left;
}
.logo-text {
  float: left;
  padding-top: 19px;
  padding-left: 10px;
  color: #daf9ff;
}
.logo-text p {
  font-weight: bold;
  color: #daf9ff;
}
.logo-text p:nth-child(1) {
  font-size: 22px;
}
.logo-text p:nth-child(2) {
  font-size: 18px;
}
.layout-logo img {
  display: inline-block;
  float: left;
  margin-top: 20px;
  width: 58px;
}
.menu-con {
  /* margin-left: 250px; */
  float: left;
}
.menu-con ul {
  list-style: none;
}
.menu-con ul li {
  height: 100px;
  margin-top: -2px;
  text-align: center;
  cursor: pointer;
  line-height: 103px;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  width: 200px;
  float: left;
  /* background-position: center center!important; */
  /* border-bottom: 1px solid #8fb6d1; */
}
.menu-con ul li a {
  color: #daf9ff;
  font-size:17px;
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
  <div class="headerWrap" :style={background:image}>
    <div class='innerWrap'>
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
            :style="{background:pageName=='main'?img_act:''}"
          >
            <router-link to="/main">首页
              <!-- <div class="tabbg_con"> -->
              <!-- <span class="tabbg_l" :style="{background:img_left}"></span>
              <span class="tabbg_r" :style="{background:img_right}"></span>-->
              <!-- </div> -->
            </router-link>
          </li>
          <li
            :style="{background:pageName=='search'?img_act:''}"
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
        <div style="float:left;marginTop:30px;">
          <p style="lineHeight:18px;">您好，</p>
          <p style="lineHeight:18px;">王检察官</p>
        </div>
        <Avatar
          style="background-color: rgba(255,0,0,0.5);float:right;marginTop:31px;"
          icon="ios-person"
        />
      </div>
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
      img_act: "url(" + require("../../assets/menu_bg.png") + ") center center no-repeat",
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
