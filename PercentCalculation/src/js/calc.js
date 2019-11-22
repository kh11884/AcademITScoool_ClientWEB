function getRefinancingRateHistory() {
    return [
        {
            data: new Date("11/25/2009"),
            refinancing_rate: 0.09,
            days: 33
        },
        {
            data: new Date("12/28/2009"),
            refinancing_rate: 0.0875,
            days: 58
        },
        {
            data: new Date("02/24/2010"),
            refinancing_rate: 0.085,
            days: 33
        },
        {
            data: new Date("03/29/2010"),
            refinancing_rate: 0.0825,
            days: 32
        },
        {
            data: new Date("04/30/2010"),
            refinancing_rate: 0.08,
            days: 32
        },
        {
            data: new Date("06/01/2010"),
            refinancing_rate: 0.0775,
            days: 272
        },
        {
            data: new Date("02/28/2011"),
            refinancing_rate: 0.08,
            days: 64
        },
        {
            data: new Date("05/03/2011"),
            refinancing_rate: 0.0825,
            days: 237
        },
        {
            data: new Date("12/26/2011"),
            refinancing_rate: 0.08,
            days: 263
        },
        {
            data: new Date("09/14/2011"),
            refinancing_rate: 0.0825,
            days: 205
        },
        {
            data: new Date("04/07/2013"),
            refinancing_rate: 0.0825,
            days: 999
        },
        {
            data: new Date("01/01/2016"),
            refinancing_rate: 0.11,
            days: 165
        },
        {
            data: new Date("06/14/2016"),
            refinancing_rate: 0.105,
            days: 97
        },
        {
            data: new Date("09/19/2016"),
            refinancing_rate: 0.10,
            days: 104
        },
        {
            data: new Date("01/01/2017"),
            refinancing_rate: 0.10,
            days: 85
        },
        {
            data: new Date("03/27/2017"),
            refinancing_rate: 0.0975,
            days: 36
        },
        {
            data: new Date("05/02/2017"),
            refinancing_rate: 0.0925,
            days: 48
        },
        {
            data: new Date("06/19/2017"),
            refinancing_rate: 0.09,
            days: 91
        },
        {
            data: new Date("09/18/2017"),
            refinancing_rate: 0.085,
            days: 42
        },
        {
            data: new Date("10/30/2017"),
            refinancing_rate: 0.0825,
            days: 49
        },
        {
            data: new Date("12/18/2017"),
            refinancing_rate: 0.0775,
            days: 56
        },
        {
            data: new Date("02/12/2018"),
            refinancing_rate: 0.075,
            days: 42
        },
        {
            data: new Date("03/26/2018"),
            refinancing_rate: 0.0725,
            days: 175
        },
        {
            data: new Date("09/17/2018"),
            refinancing_rate: 0.075,
            days: 91
        },
        {
            data: new Date("12/17/2018"),
            refinancing_rate: 0.0775,
            days: 182
        },
        {
            data: new Date("06/17/2019"),
            refinancing_rate: 0.075,
            days: 42
        },
        {
            data: new Date("07/29/2019"),
            refinancing_rate: 0.0725,
            days: 42
        },
        {
            data: new Date("09/09/2019"),
            refinancing_rate: 0.07,
            days: 49
        },
        {
            data: new Date("10/28/2019"),
            refinancing_rate: 0.065,
            days: 431
        }
    ];
}

function getFirstPeriodDays(issueData) {
    var result = undefined;
    getRefinancingRateHistory().reduce(function (previos, item) {
        if (previos < issueData && issueData <= item.data) {
            result = Math.ceil((item.data - issueData) / (1000 * 3600 * 24));
        }
        return item.data;
    }, null);
    return result;
    // TODO: обратить внимание в конечном рассчете если дата выпуска ДТ позже чем дата последнего измеенния ставки.
    // TODO: сейчас функция выдает undefined
}

function getLastPeriodDays(filingDate) {
    var refinancingRateHistory = getRefinancingRateHistory();
    return Math.ceil((filingDate - refinancingRateHistory[refinancingRateHistory.length - 1].data) / (1000 * 3600 * 24));
}

function getFirstPeriodDays_alternate(issueData) {
    var refinancingRateHistory = getRefinancingRateHistory();
    var result = undefined;
    for (var i = 0; i < refinancingRateHistory.length - 1; i++) {
        result = Math.ceil((refinancingRateHistory[i].data - issueData) / (1000 * 3600 * 24));
        if (result > 0) {
            return result;
        }
    }
}

alert(getFirstPeriodDays_alternate(new Date("11/26/2009")));
















