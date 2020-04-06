<template>
  <div class="about">
    <div class="header">
      <router-link
        to="/articleItem/all"
        :class="[isActive==='all' ? 'current-tab':'','topic-tab' ]"
        @click="change('all')"
      >全部</router-link>

      <router-link
        to="/articleItem/good"
        :class="[isActive==='good'? 'current-tab':'','topic-tab' ]"
        @click="change('good')"
      >精华</router-link>

      <router-link
        to="/articleItem/share"
        :class="[isActive=='share'? 'current-tab':'','topic-tab' ]"
        @click="change('share')"
      >分享</router-link>

      <router-link
        to="/articleItem/answer"
        :class="[isActive=='answer' ? 'current-tab':'','topic-tab' ]"
        @click="change('answer')"
      >问答</router-link>

      <router-link
        to="/articleItem/work"
        :class="[isActive=='work' ? 'current-tab':'','topic-tab' ]"
        @click="change('work')"
      >招聘</router-link>

      <router-link
        to="/articleItem/text"
        :class="[isActive=='text'? 'current-tab':'','topic-tab' ]"
        @click="change('text')"
      >客户端测试</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: "all"
    };
  },
  methods: {
    change(a) {
      this.isActive = a;
      /*       this.$router.push({ path: "https://cnodejs.org/api/v1/topics" + a }); */
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  height: 40px;
  width: 900px;
  background-color: #f6f6f6;
  color: #333333;
  .topic-tab {
    margin: 0 10px;
    color: #80bd01;
  }
  a:hover {
    color: #08c;
  }
  .current-tab {
    background-color: #80bd01;
    color: #fff;
  }
}
</style>