<template>
  <div ref="move" class="col" style="text-align:center;line-height:30px;color:#D8D6D9;position:relative;" @click.self="clearList();HighLevel=!HighLevel">
    이동
    <div v-show="HighLevel" class="row" style="position:absolute;width:200px;bottom:-25px;left:0px;height:20px;background-color:#CCCCCC;color:#696969;padding:3px;">
      <div class="col" style="line-height:6px;border-right:1px black solid;padding:5px;position:relative" @click="clearList();CompanyLevel=!CompanyLevel">
        회사
        <div v-show="CompanyLevel" class="row" style="position:absolute;top:20px;left:0px;background-color:#CCCCCC;color:#696969;padding:3px;">
          <div style="padding:7px; border-bottom:1px dashed #696969;width:100px;text-align:left" v-for="company in CompanyList" @click="$router.push('place')" >
            {{company}}
          </div>
        </div>
      </div>
      <div class="col" style="line-height:6px;border-right:1px black solid;padding:5px;position:relative" @click="clearList();ShoppingLevel=!ShoppingLevel">
        쇼핑
        <div v-show="ShoppingLevel" class="row" style="position:absolute;top:20px;left:0px;background-color:#CCCCCC;color:#696969;padding:3px;">
          <div style="padding:7px; border-bottom:1px dashed #696969;width:100px;text-align:left" v-for="shop in ShoppingList" @click="$router.push('place')" >
            {{shop}}
          </div>
        </div>
      </div>
      <div class="col" style="line-height:6px;border-right:1px black solid;padding:5px;position:relative" @click="clearList();PlayLevel=!PlayLevel">
        유흥가
        <div v-show="PlayLevel" class="row" style="position:absolute;top:20px;left:0px;background-color:#CCCCCC;color:#696969;padding:3px;">
          <div style="padding:7px; border-bottom:1px dashed #696969;width:100px;text-align:left" v-for="play in PlayList"  @click="$router.push('place')">
            {{play}}
          </div>
        </div>
      </div>
      <div class="col" style="line-height:6px;padding:5px;position:relative" @click="clearList();EtcLevel=!EtcLevel">
        기타
        <div v-show="EtcLevel" class="row" style="position:absolute;top:20px;left:0px;background-color:#CCCCCC;color:#696969;padding:3px;">
          <div style="padding:7px; border-bottom:1px dashed #696969;width:100px;text-align:left" v-for="etc in EtcList"  @click="$router.push('place')">
            {{etc}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      HighLevel:false,
      CompanyLevel:false,
      ShoppingLevel:false,
      PlayLevel:false,
      EtcLevel:false,
      CompanyList:[
        '라이코스',
        '대박증권',
        'LBC방송국',
        '카리스마기획',
        '트라이포트음반',
        '떠벌려신문사',
        '포도자동차',
        '머니은행',
        '감나라연예',
        '츄팟전자',
        '강건너무역',
        '오옷디자인',
        'LO무비',
        '먹므지칸햄버거'
      ],
      ShoppingList:[
        '우체국',
        '만물상',
        '상설시장',
        '편의점',
        '옷가게',
        '음반매장',
        '패스트푸드',
        '선물가게',
        '서점',
        '암시장',
        '약국',
        '복덕방',
        '백화점',
        '꽃가게'
      ],
      PlayList:[
        '오락실',
        '전당포',
        '경매장',
        '레스토랑',
        '개그콘서트',
        '게임방'
      ],
      EtcList:[
        '커뮤시청',
        '사회사업장',
        '학원',
        '사랑의전화',
        '약사협회',
        '가정병원',
        '사랑의스튜디오',
        '기업관리센터',
        '커뮤니티',
        '경찰서'
      ]
    }
  },
  methods:{
    clearList(){
      this.CompanyLevel=false;
      this.ShoppingLevel=false;
      this.PlayLevel=false;
      this.EtcLevel=false;
    },
    clearAll(){
      this.clearList()
      this.HighLevel = false
    }
  },
  mounted () {
    document.addEventListener('click', (e)=> {
      var container = this.$refs.move
      if(container != e.target && !container.contains(e.target)) {
        this.clearAll()
      }
    })
  }
}
</script>

<style>
</style>
