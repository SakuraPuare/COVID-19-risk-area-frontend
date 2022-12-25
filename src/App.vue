<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import SearchBox from './components/SearchBox.vue'

</script>

<template>
  <a-layout>
    <div class="container">
      <a-layout-content class="main">
        <div style="max-width: 700px; margin:auto;">
          <a-typography>
            <a-typography-paragraph>
              <a-typography-title class="text">抗疫，每个人都是自己健康的第一责任人</a-typography-title>
              <a-typography-title type="warning" :level="2" class="text" style="margin-bottom: 40px">
                关于进一步优化新冠肺炎疫情防控措施
                <br />
                科学精准做好防控工作的通知
              </a-typography-title>
              <a-typography-title :level="3" style="text-align: center;margin-bottom: 30px">二、落实党中央部署，积极稳妥抓好防控措施的优化调整
              </a-typography-title>
              <div class="text-list">
                <a-row style="margin: 0 2em 20px;">
                  <a-typography-text strong type="danger">
                    党中央对进一步优化防控工作的二十条措施作出重要部署、提出明确要求，各地各部门要不折不扣把各项优化措施落实到位。
                  </a-typography-text>
                </a-row>
                <a-row style="margin: 0 2em 20px;">
                  <a-typography-text>
                    <strong>（四）</strong>
                    “高、中、低”三类调整为“高、低”两类，最大限度减少管控人员。
                    原则上将感染者居住地以及活动频繁且疫情传播风险较高的工作地和活动地等区域划定为高风险区，高风险区一般以单元、楼栋为单位划定，
                    不得随意扩大；高风险区所在县（市、区、旗）的其他地区划定为低风险区。高风险区连续5天未发现新增感染者，降为低风险区。
                    符合解封条件的高风险区要及时解封。
                  </a-typography-text>
                </a-row>
              </div>
            </a-typography-paragraph>
          </a-typography>
          <a-typography-title :level="5" class="text">
            2022年12月24日12时 我国大陆地区中高风险区已全部清零
          </a-typography-title>
          <a-typography-title :level="4" class="text">
            山河无恙 ❤️ 四海清平
          </a-typography-title>
        </div>
      </a-layout-content>
      <a-layout-footer class="footer">
        <div class="text">
          <a-typography-paragraph>
            Created by <a href="https://blog.sakurapuare.com">SakuraPuare</a>
            <br />
            Host on <a href="https://github.com/ShuYingJiYu">ShuYingJiYu</a>
          </a-typography-paragraph>
        </div>
      </a-layout-footer>
    </div>
  </a-layout>
</template>

<style scoped>
.text {
  text-align: center;
  margin: 0 auto;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main {
  flex: 1;
  margin-top: 8%;
}
</style>
