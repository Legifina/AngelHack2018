$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2018 Q1',
            token3: 26,
            token2: null,
            token1: 26
        }, {
            period: '2018 Q2',
            token3: 27,
            token2: 22,
            token1: 24
        }, {
            period: '2018 Q3',
            token3: 49,
            token2: 19,
            token1: 25
        }, {
            period: '2018 Q4',
            token3: 37,
            token2: 35,
            token1: 56
        }, {
            period: '2019 Q1',
            token3: 68,
            token2: 19,
            token1: 22
        }, {
            period: '2019 Q2',
            token3: 56,
            token2: 42,
            token1: 18
        }, {
            period: '2019 Q3',
            token3: 48,
            token2: 37,
            token1: 15
        }, {
            period: '2019 Q4',
            token3: 15,
            token2: 59,
            token1: 51
        }, {
            period: '2020 Q1',
            token3: 10,
            token2: 44,
            token1: 20
        }, {
            period: '2020 Q2',
            token3: 84,
            token2: 57,
            token1: 17
        }],
        xkey: 'period',
        ykeys: ['token3', 'token2', 'token1'],
        labels: ['Token 3', 'Token 2', 'Token 1'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [ {
            label: "Current Score",
            value: 30
        }, {
            label: "Highest Score",
            value: 90
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
