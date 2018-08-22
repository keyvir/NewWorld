<template>
  <div>
    <div style='margin:0 auto; padding-top:60px; width:60%; height:100%;'>
      <div style='text-align:center;padding:20px'>
          [ 스 킬 현 황 ]
      </div>
      <div style=' color:#9A9A9A;margin-bottom:2px; border-bottom:1px dashed #9A9A9A;border-top:1px dashed #9A9A9A;padding:10px'>
        <div class='row' v-for="stat in stats">
          <div class='col-3'>{{stat.name}}</div>
          <div class='col-8'>
            <q-progress
              :percentage="stat.value"
              :buffer="buffer"
              :color='stat.color'
              style="height: 14px"
            />
          </div>
          <div class='col-1' style='text-align:center'>
            {{stat.value}}
          </div>
        </div>
      </div>
      <div style='border-bottom:1px dashed #919191;border-top:1px dashed #9A9A9A;height:130px;padding:10px;'>
        <div class='row'>
          <div class='col'>
            * 기본스킬합계
          </div>
          <div class='col'>
            40
          </div>
        </div>
        <div class='row'>
          <div class='col'>
            * 아이템스코어
          </div>
          <div class='col'>
            7
          </div>
        </div>
        <div class='row'>
          <div class='col'>
            * 성향스코어
          </div>
          <div class='col'>
            0
          </div>
        </div>
        <div class='row'>
          <div class='col'>
            * 머니스코어
          </div>
          <div class='col'>
            0
          </div>
        </div>
        <div class='row'>
          <div class='col'>
            * 미니게임스코어
          </div>
          <div class='col'>
            0
          </div>
        </div>
      </div>
      <div style='text-align:center;color:#9A9A9A;padding:10px;cursor:pointer'  @click="$router.go(-1)">
        [ 복 귀 ]
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      stats:[
        {name:'매  력',value:79,color:"purple-3"},
        {name:'허영심',value:51,color:"blue-3"},
        {name:'활동성',value:-136,color:"deep-purple-11"},
        {name:'신  용',value:20,color:"deep-purple-2"},
        {name:'스트레스',value:256,color:"green-9"},
        {name:'행  운',value:32,color:"lime-7"},
        {name:'창조력',value:49,color:"light-green-13"},
        {name:'연애치',value:98,color:"pink-3"},
        {name:'호색',value:45,color:"red-8"},
        {name:'명성',value:20,color:"yellow-6"},
        {name:'아이큐',value:38,color:"purple-10"}
      ]
    }
  }
}
</script>

<style>
</style>
