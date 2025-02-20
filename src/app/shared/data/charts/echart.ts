/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
import { EChartsOption } from "echarts/types/dist/echarts";

//Echart (line Chart)
export let echartLineOption: EChartsOption = {

    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25',
    },
    tooltip: {
        show: true,
        showContent: true,
        alwaysShowContent: true,
        triggerOn: 'mousemove',
        trigger: 'axis',
        axisPointer:
        {
            label: {
                show: false,

            }
        },

    },
    xAxis: {
        data: ['2014', '2015', '2016', '2017', '2018'],
        axisLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#77778e'
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#77778e'
        }
    },
    series: [
        {
            name: 'sales',
            type: 'line',
            smooth: true,
            data: [12, 25, 12, 35, 12, 38],
            color: ['#6259ca']
        },
        {
            name: 'Profit',
            type: 'line',
            smooth: true,
            data: [8, 12, 28, 10, 10, 12],
            color: ['#eb6f33']
        }
    ],

};
//combined line and bar chart
export let echartLineBarOption: EChartsOption = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25'
    },
    tooltip: {
        show: true,
        showContent: true,
        alwaysShowContent: true,
        triggerOn: 'mousemove',
        trigger: 'axis',
        axisPointer: {
            label: {
                show: false,
            }
        }
    },
    xAxis: {    
        data: ['2014', '2015', '2016', '2017', '2018'],
        axisLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#77778e'
        },

    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#77778e'
        }
    },
    series: [
        {
            name: 'sales',
            type: 'bar',
            data: [10, 15, 9, 18, 10, 15]
        },
        {
            name: 'profit',
            type: 'line',
            smooth: true,
            data: [8, 5, 25, 10, 10]
        },
        {
            name: 'growth',
            type: 'bar',
            data: [10, 14, 10, 15, 9, 25]
        }
    ],
    color:  ['#6259ca', '#0faf97', '#eb6f33',]
};
//Horizontal line chart
export let echartHorizontalLineChart: EChartsOption = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '32',
    },
    tooltip: {
        show: true,
        showContent: true,
        alwaysShowContent: true,
        triggerOn: 'mousemove',
        trigger: 'axis',
        axisPointer:
        {
            label: {
                show: false,
            }
        }
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#77778e'
        }
    },
    yAxis: {
        type: 'category',
        data: ['2014', '2015', '2016', '2017', '2018'],
        splitLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#77778e'
        }
    },
    series: [
        {
            name: 'sales',
            type: 'line',
            smooth: true,
            data: [12, 25, 12, 35, 12, 38],
            color: ['#6259ca']
        },
        {
            name: 'Profit',
            type: 'line',
            smooth: true,
            data: [8, 12, 28, 10, 10, 12],
            color: ['#eb6f33']
        }
    ],
    color: ['#6259ca', '#eb6f33',]
};
//Combined Horizontal line  and bar chart
export let echartHorizontalLineBarChart: EChartsOption = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '32',
    },
    tooltip: {
        show: true,
        showContent: true,
        alwaysShowContent: true,
        triggerOn: 'mousemove',
        trigger: 'axis',
        axisPointer:
        {
            label: {
                show: false,
            }
        }
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#77778e'
        }
    },
    yAxis: {
        type: 'category',
        data: ['2014', '2015', '2016', '2017', '2018'],
        splitLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#77778e'
        }
    },
    series: [
        {
            name: 'sales',
            type: 'bar',
            data: [10, 15, 9, 18, 10, 15]
        },
        {
            name: 'profit',
            type: 'line',
            smooth: true,
            data: [8, 5, 25, 10, 10]
        },
        {
            name: 'growth',
            type: 'bar',
            data: [10, 14, 10, 15, 9, 25]
        }
    ],
    color: ['#6259ca', '#0faf97', '#eb6f33',]
};
//stacked bar chart
export let echartStackedBarChart: EChartsOption = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25',
    },
    tooltip: {
        show: true,
        showContent: true,
        alwaysShowContent: true,
        triggerOn: 'mousemove',
        trigger: 'axis',
        axisPointer:
        {
            label: {
                show: false,
            }
        }
    },
    xAxis: {
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        axisLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#77778e'
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#77778e'
        }
    },
    series: [
        {
            name: 'sales',
            type: 'bar',
            stack: 'Stack',
            data: [14, 18, 20, 14, 29, 21, 25, 14, 24]
        },
        {
            name: 'Profit',
            type: 'bar',
            stack: 'Stack',
            data: [12, 14, 15, 50, 24, 24, 10, 20, 30]
        }
    ],
    color: ['#6259ca', '#eb6f33']

};
//Horizontal stacked bar chart
export let echartHoriStackedBarChart: EChartsOption = {
    grid: {
        top: '6',
        right: '10',
        bottom: '17',
        left: '32',
    },
    tooltip: {
        show: true,
        showContent: true,
        alwaysShowContent: true,
        triggerOn: 'mousemove',
        trigger: 'axis',
        axisPointer:
        {
            label: {
                show: false,
            }
        }
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#77778e'
        }
    },
    yAxis: {
        type: 'category',
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        splitLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#77778e'
        }
    },
    series: [
        {
            name: 'sales',
            type: 'bar',
            stack: 'Stack',
            data: [14, 18, 20, 14, 29, 21, 25, 14, 24]
          },
          {
            name: 'Profit',
            type: 'bar',
            stack: 'Stack',
            data: [12, 14, 15, 50, 24, 24, 10, 20 ,30]
          }
    ],
    color:[ '#6259ca', '#eb6f33']
};
