<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import SearchBox from './components/SearchBox.vue'

</script>

<template>
  <a-layout>
    <a-layout-content style="padding-top: 100px;" align="center">
      <a-typography>

        <a-typography-title>国内主要风险区查询</a-typography-title>
        <a-typography-paragraph>
          用此工具实时查询国内主要中高风险区，请搜索地区或选择特定地区
        </a-typography-paragraph>
      </a-typography>

    </a-layout-content>

    <SearchBox />

    <a-layout-footer style="text-align: center">
      数据来源 - <a href="http://bmfw.www.gov.cn/yqfxdjcx/risk.html">中国政府网 疫情风险等级查询</a>
      <br />
      此网页著作权，解释权归作者本人所有
      <br />
      Created by <a href="https://sakurapuare.com">SakuraPuare</a>. Host on <a
        href="https://github.com/ShuYingJiYu">书樱寄语</a>


    </a-layout-footer>

  </a-layout>
</template>

<style scoped>

</style>
