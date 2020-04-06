<template >
  <div>
    <h3>All</h3>
    <div class="list" v-for="item in list" :key="item.id">
      <img :src="item.author.avatar_url" alt />
      -{{item.reply_count}}/{{item.visit_count}}- -{{item.title}}- -{{item.Last_reply_at}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      const tab = this.$route.params.tab;
      console.log("``````111111", this.$route.params);
      this.$http
        .get("https://cnodejs.org/api/v1/topics?tab=" + tab)
        .then(reponse => {
          this.list = reponse.data.data;
        });
    }
  },
  watch: {
    $route: function(newVal, oldVal) {
      console.log(1111);
      this.getList();
    }
  }
};
</script>
<style lang="less" scoped>
.list {
  height: 30px;
  width: 900px;
}
</style>