<template>
  <div style='background-color:#CECECC;padding:3px;'>
    <p style='border-bottom:1px dotted;margin-bottom:0px;'>이    름</p>
    <p style='border-bottom:1px dotted;margin-bottom:0px; color:#706663'>개발자</p>
    <p style='margin-bottom:0px;'>주     소 : (44156)</p>
    <p style='margin-bottom:0px;'>성     향 : 금고털이</p>
    <p style='margin-bottom:0px;'>돈 (ly) : 6,312,217,000</p>
    <p style='margin-bottom:0px;'>사용턴 : 21,215</p>
    <p style='margin-bottom:0px;'>남은턴 : 55</p>
    <p style='margin-bottom:0px;cursor:pointer' @click="openItem">착용아이템보기</p>
    
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  methods: {
    openItem () {
      alert('아직 인벤토리가 준비중에 있습니다.')
    }
  }
}
</script>

<style>
</style>
