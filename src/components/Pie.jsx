import React, { useContext } from 'react'
import highcharts from 'highcharts'
import ReactHighcharts from 'highcharts-react-official'
import PieContext from '../context/pies/pieContext.js'


const Pie = () => {

    const pieContext = useContext(PieContext);

    const { loading, pies, repos } = pieContext;


    if(loading){
        return <h4 className='text-center'>Loading...</h4>
    }

    const options = {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Pies In React.JS'
        },
        series: [
            {
                name: 'Repos',
                colorByPoint: true,
                data: [{
                    name: 'Chrome',
                    y: 61.41,
                    // sliced: true,
                    // selected: true
                }, {
                    name: 'Internet Explorer',
                    y: 11.84
                }, {
                    name: 'Firefox',
                    y: 10.85
                }, {
                    name: 'Edge',
                    y: 4.67
                }, {
                    name: 'Safari',
                    y: 4.18
                }, {
                    name: 'Sogou Explorer',
                    y: 1.64
                }, {
                    name: 'Opera',
                    y: 1.6
                }, {
                    name: 'QQ',
                    y: 1.2
                }, {
                    name: 'Other',
                    y: 2.61
                }]
            }
        ]
    }

    return (
        <div>
            <ReactHighcharts options={options} highcharts={highcharts} />
        </div>
    )
}

export default Pie


/*
    const options = {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Pies In React.JS'
        },
        series: [
            {
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Chrome',
                    y: 61.41,
                    // sliced: true,
                    // selected: true
                }, {
                    name: 'Internet Explorer',
                    y: 11.84
                }, {
                    name: 'Firefox',
                    y: 10.85
                }, {
                    name: 'Edge',
                    y: 4.67
                }, {
                    name: 'Safari',
                    y: 4.18
                }, {
                    name: 'Sogou Explorer',
                    y: 1.64
                }, {
                    name: 'Opera',
                    y: 1.6
                }, {
                    name: 'QQ',
                    y: 1.2
                }, {
                    name: 'Other',
                    y: 2.61
                }]
            }
        ]
    }
*/