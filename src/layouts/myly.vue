<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <!-- content -->
        <div style='background-color:#4461C0; width:1024px;height:768px;position:relative;font-size:9pt'>
          <div style='position:absolute;z-index:1;width:100%;height:100px;background-image: url(/statics/images/다운로드.jpg);background-size: contain;'>

          </div>
          <div style='width:20%;height:100%;float:left'>
              <div style='width:100%;height:150px;border-bottom:1px black solid;'>

            </div>
            <div style='width:100%;height:215px;border:3px #536CC4 double;background-color:#D5D5D5;overflow-y:hidden'>
              <img src="/statics/images/다운로드.gif" style='width:100%;height:100%:'>
            </div>
            <stat style='width:100%;height:200px;border:3px #536CC4 double;'></stat>
            <log style='width:100%;height:200px;border:3px #536CC4 double;'></log>
          </div>
          <div style='width:80%;height:100%;float:left'>
            <div style='width:100%;height:100px;border-bottom:3px #536CC4 double'>
            </div>
            <div style='width:100%;height:666px;'>
              <div style='width:70%;height:100%;float:left'>
                <router-view style='width:100%;height:566px;border:3px #536CC4 double;background-color:#323233;color:#9A9A9A;'></router-view>
                <div style='width:100%;height:100px;border:3px #536CC4 double;background-color:#E3CC47'>

                </div>
              </div>
              <div style='width:30%;height:100%;border-bottom:1px black solid;float:left'>
                <div style='width:100%;height:100px;border:3px #536CC4 double;background-color:#9DA7B7'>

                </div>
                <div style='width:100%;height:566px;border:3px #536CC4 double;background-color:#C0C0C0'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Log from 'components/Log'
import Home from 'components/Home'
import Stat from 'components/Stat'
import Diary from 'components/Diary'
export default {
  components:{
    Log,Home,Stat,Diary
  }
  // name: 'PageName',
}
</script>

<style>
</style>
