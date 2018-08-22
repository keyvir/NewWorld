<template>
  <div style="margin:0 auto;">
    <div class="row" style="background-color:#9A999B;padding-top:3px;padding-bottom:3px;cursor:pointer">
      <div class="col" style="text-align:center;line-height:30px;color:#D8D6D9;position:relative;" @click="ScheduleLevel=!ScheduleLevel">
        스케쥴
        <div v-show="ScheduleLevel" class="row" style="position:absolute;top:35px;left:0px;background-color:#CCCCCC;color:#696969;padding:3px;">
          <div style="padding:7px; line-height:13px; height:22px; border-bottom:1px dashed #696969;width:100px;text-align:left" v-for="schedule in ScheduleList" >
            {{schedule}}
          </div>
        </div>
      </div>
      <move></move>
      <div class="col" style="text-align:center;line-height:30px;color:#D8D6D9;">
        즐겨찾기
      </div>
      <div class="col" style="text-align:center;line-height:30px;color:#D8D6D9;cursor:pointer" @click="$router.push('diary')">
        다이어리
      </div>
      <div class="col" style="text-align:center;line-height:30px;color:#D8D6D9;">
        환경설정
      </div>
    </div>
    <div class="row" style=" margin-top:100px; padding:60px;">
      <div class="col-4">
        이곳은 사진
      </div>
      <div class="col-8" style="border-left:1px dashed #9A9A9A; border-right:1px dashed #9A9A9A; height:180px; padding:5px;">
        <p>[나의 집 : 전원주택3]</p>
        <p>
          이 정도의 집이라면 세계의 부호들도 부럽지 않으실 겁니다. <br>
          이곳은 많은 아이템은 기본으로 저장되고 당신의 품위를 더욱 확장시켜 줄거라고 확신합니다. <br>
          오늘도 보다 많은 수익 창출을 위해 새로운 사업구상을 하시기 바랍니다.
        </p>
        <p>
          스트레스 상태 : 매우좋음
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Move from "components/Move"
export default {
  // name: 'ComponentName',
  components:{
    Move
  },
  data () {
    return {
      ScheduleLevel:false,
      ScheduleList:[
        "학원","아르받이트"
      ]
    }
  }
}
</script>

<style>
</style>
