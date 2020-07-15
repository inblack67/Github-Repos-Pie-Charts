import React, { useContext, Fragment, useEffect } from 'react'
import highcharts from 'highcharts'
import ReactHighcharts from 'highcharts-react-official'
import PieContext from '../context/pies/pieContext.js'
import Preloaders from './Preloaders'

const Pie = () => {

    useEffect(() => {
        getGitRepos('inblack67');
        // eslint-disable-next-line
    },[])

    const pieContext = useContext(PieContext);

    const { loading, pies, user, getGitRepos } = pieContext;

    const options = {
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        series: [
            {
                name: 'Repos',
                colorByPoint: true,
                data: pies
            }
        ]
    }

    if(loading){
        return <Preloaders />
    }

    if(pies.length === 0){
        return <p className="flow-text center red-text">No repos yet.</p>
    }

    return (
        <div>
            { !loading && pies.length > 0 && <Fragment>
                <p className="flow-text center">
                    {user}
                </p>
                <ReactHighcharts options={options} highcharts={highcharts} />
                </Fragment>        }
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