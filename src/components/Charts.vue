<template>
<div>
  <div id="myChart" :style="{width: '600px', height: '300px'}"></div>
  <input type="button" value="改变" @click="change">
</div>
</template>

<script>
export default {
  
  data () {
    return {
      df: [5, 20, 36, 10, 10, 20],
      
    }
  },
  mounted(){
    this.drawLine();
    
  },
  methods: {
    
      change(){
          this.df=[10, 40, 36, 50, 10, 40];
          this.drawLine()
      },
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: {
                text: 'ECharts 学习'
            },
            tooltip: {},
            legend: {
                data:['测试']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '测试',
                type: 'bar',
                data: this.df
            }]
        });
    }
  }
}
</script>

