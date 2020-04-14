var std;
var mips_cps_scores = [98, 22, 95, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80,
    90, 40, 95, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80, 40, 45, 50, 55, 60, 65, 70, 75, 80,
    40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60, 40, 50, 60,
    70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60, 70, 50, 60,
    70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60, 70, 70, 60,
    90, 90, 90, 90, 90, 90, 80, 80, 80, 80, 80, 70, 70, 70, 70, 90, 43, 77];

var qualityMeasureTypes = [];
qualityMeasureTypes[qualityMeasureTypes.length] = ["0", "Process"];
qualityMeasureTypes[qualityMeasureTypes.length] = ["1", "Appropriate Use"];
qualityMeasureTypes[qualityMeasureTypes.length] = ["1", "Care Coordination"];
qualityMeasureTypes[qualityMeasureTypes.length] = ["1", "Efficiency"];
qualityMeasureTypes[qualityMeasureTypes.length] = ["1", "Outcome"];
qualityMeasureTypes[qualityMeasureTypes.length] = ["1", "Patient Experience"];
qualityMeasureTypes[qualityMeasureTypes.length] = ["1", "Patient Safety"];

var qualitySubmissionTypes = [];
qualitySubmissionTypes[qualitySubmissionTypes.length] = ["0", "Registry"];
qualitySubmissionTypes[qualitySubmissionTypes.length] = ["1", "EHR"];

var cpiaMeasureTypes = [];
cpiaMeasureTypes[cpiaMeasureTypes.length] = ["Expanded Practice Access", "Expanded Practice Access"];
cpiaMeasureTypes[cpiaMeasureTypes.length] = ["Population Management", "Population Management"];
cpiaMeasureTypes[cpiaMeasureTypes.length] = ["Care Coordination", "Care Coordination"];
cpiaMeasureTypes[cpiaMeasureTypes.length] = ["Beneficiary Engagement", "Beneficiary Engagement"];
cpiaMeasureTypes[cpiaMeasureTypes.length] = ["Patient Safety & Practice Assessment", "Patient Safety & Practice Assessment"];
cpiaMeasureTypes[cpiaMeasureTypes.length] = ["APM/Medical Home", "APM/Medical Home"];

var cpiaMeasureValues = [];
cpiaMeasureValues[cpiaMeasureValues.length] = ["10", "Medium"];
cpiaMeasureValues[cpiaMeasureValues.length] = ["20", "High"];
cpiaMeasureValues[cpiaMeasureValues.length] = ["0", "N/A"];

function calculateAllQualityScores(skipUpdate) {
    calculateQualityScore('1', true);
    calculateQualityScore('2', true);
    calculateQualityScore('3', true);
    calculateQualityScore('4', true);
    calculateQualityScore('5', true);
    calculateQualityScore('6', true);
    calculateQualityScore('7', true);
    calculateQualityScore('8', true);

    if ($("#practiceSize").val() == "10") {
        $("#qualityDenominator").html("90");
        calculateQualityScore('9', true);
    }
    else {
        $("#qualityDenominator").html("80");

        $("#qm9PerformancePoints").html("-");
        $("#qm9BonusPoints").html("-");
        $("#qm9TotalPoints").html("-");
    }

    updateQualityScore(skipUpdate);
}

function calculateQualityScore(measure_id, skipUpdate) {
    var qmScore = 0;
    var qmSubmissionBonus = parseInt("0" + $("#qm" + measure_id + "SubmissionType").val());
    var qmTypeBonus = parseInt($("#qm" + measure_id + "TypeBonus").val());
    var qmPerformance = $("#qm" + measure_id + "Performance").val() / $("#qm" + measure_id + "threshold").val();
    if (qmPerformance > 1) {
        qmScore = 10;
    } else {
        qmScore = qmPerformance * 10;
        qmScore = Math.round(qmScore * 100) / 100;
    }
    $("#qm" + measure_id + "PerformancePoints").html(qmScore);

    var qmTypePoints = 0;
    $(".qTypes").each(function () {
        qmTypePoints += parseInt("0" + $(this).val());
    });

    var qmTotalBonus = 0;
    //If one or fewer high priority measures are included then 0 bonus points are awarded for type.
    if (qmTypePoints <= 1) {
        qmTypeBonus = 0;
        qmTotalBonus = qmSubmissionBonus + qmTypeBonus;

        $("#qm" + i + "TypeBonus").val(qmTypeBonus);
        $("#qm" + i + "BonusPoints").html(qmTotalBonus);
    } else {
        var qmTypeBonusPoints = 0;
        $(".qTypeBonuses").each(function () {
            qmTypeBonusPoints += parseInt("0" + $(this).val());
        });

        qmTotalBonus = qmSubmissionBonus + qmTypeBonus;

        if (qmTypePoints <= qmTypeBonusPoints && qmTypeBonus == 0) {
            $("#qm" + measure_id + "TypeBonus").val(qmTypeBonus);
            $("#qm" + measure_id + "BonusPoints").html(qmTotalBonus);

            for (var i = 1; i < 7; i++) {
                if ($("#qm" + i + "TypeBonus").val() == "1") {
                    $("#qm" + i + "TypeBonus").val(qmTypeBonus);
                    $("#qm" + i + "BonusPoints").html(qmTotalBonus);
                    $("#qm" + i + "TotalPoints").html(qmScore + qmTotalBonus);
                    break;
                }
            }
        }
    }

    $("#qm" + measure_id + "BonusPoints").html(qmTotalBonus);
    $("#qm" + measure_id + "TotalPoints").html(qmScore + qmTotalBonus);

    if (skipUpdate == true) return;

    updateQualityScore();
}

function updateQualityScore(skipUpdate) {
    var totalPoints = 0.0;
    for (var i = 1; i < 10; i++) {
        var currentPoints = parseFloat("0" + $("#qm" + i + "TotalPoints").html());
        if (!isNaN(currentPoints)) {
            totalPoints += currentPoints;
        }
    }

    $("#totalQualityPoints").html(Math.round(totalPoints));

    var denominator = parseInt($("#qualityDenominator").html());
    var mips_category_score = totalPoints / denominator;
    mips_category_score = Math.round(mips_category_score * 100);

    $("#totalQualityScore").html(mips_category_score);
    $("#qCPSMIPS").html(mips_category_score);


    $("#qCPS2017").html(Math.round(mips_category_score * .6));
    $("#qCPS2018").html(Math.round(mips_category_score * .50));
    $("#qCPS2019").html(Math.round(mips_category_score * .3));

    if (skipUpdate == true) return;

    updateCPS('updateQualityScore');
}


function calculateAllAdvancingCareScores(type, skipUpdate) {
    var name = "";
    var num = 0;
    var denom = 0;
    var calc = "";
    var value = 0;

    $(".aci").each(function (i, elem) {
        calc = $(elem).attr("calc");
        name = $(elem).attr("id");
        value = $(elem).val();

        switch (calc) {
            case "N": //Numerator
                num = parseInt(value);
                break;
            case "D": //Denominator
                denom = parseInt(value);

                calculateACIScoreND(name.replace("Denom", ""), num, denom, type, skipUpdate);
                break;
            case "Y": //Yes/No
                calculateACIScoreYN(name, value, type, skipUpdate);
                break;
        }
    });

    updateAdvancingCareScore(type, skipUpdate);
}

function calculateACIScoreYN(elem, value, type, skipUpdate) {
    $("#" + elem + "Points" + type).html(value);
    $("#" + elem + "Total" + type).html(value);

    updateAdvancingCareScore(type, skipUpdate);
}

function calculateACIScoreN(elem, value, type, skipUpdate) {
    var denom = $("#" + elem + "Denom" + type).val();
    calculateACIScoreND(elem, value, denom, type, skipUpdate);
}

function calculateACIScoreD(elem, value, type, skipUpdate) {
    var numerator = $("#" + elem + "Num" + type).val();
    calculateACIScoreND(elem, numerator, value, type, skipUpdate);
}

function calculateACIScoreND(elem, num, denom, type, skipUpdate) {
    var score = Math.round((num / denom) * 100);
    if (score > 100) { score = 0; }
    var points = score / 10;
    $("#" + elem + "Score" + type).html(score);
    $("#" + elem + "Points" + type).html(points);
    $("#" + elem + "Total" + type).html(points);

    updateAdvancingCareScore(type, skipUpdate);
}

function updateAdvancingCareScore(type, skipUpdate) {
    var prefix = "";
    var baseScore = 1; //x50 in the display
    var bonusPoint = 0;

    var totalPoints = 0.0;
    $(".aciPoints" + type).each(function (i, elem) {
        calc = $(elem).attr("calc");
        name = $(elem).attr("id");
        var currentPoints = parseFloat($(elem).html());

        switch (calc) {
            case "R": //Required (base requirements)
                if (currentPoints == 0) {
                    alert(calc + " = " + currentPoints + ": " + name);
                    baseScore = 0;
                }
                break;
            case "P": //Performance
                totalPoints += currentPoints;
                if (currentPoints == 0) {
                    baseScore = 0;
                }
                break;
            case "O": //Optional reporting
                if (currentPoints == 1) {
                    bonusPoint = 1;
                }
                break;
        }
    });

    var denominator = 100;
    var aciScore = (totalPoints / denominator) * baseScore;
    aciScore = Math.round(aciScore * 100);

    var allPoints = (aciScore + (baseScore * 50) + bonusPoint) * baseScore;
    $("#totalACIPoints" + type).html(allPoints);

    if (allPoints > 100) { allPoints = 100; }
    $("#totalACIScore" + type).html(allPoints);
    $("#aciMIPS" + type).html(allPoints);

    $("#aciBaseScore" + type).html(baseScore * 50);
    $("#aciPerformanceScore" + type).html(aciScore * baseScore);
    $("#aciBonusPoint" + type).html(bonusPoint * baseScore);

    $("#aciCPS2017" + type).html(Math.round(allPoints * .25));
    $("#aciCPS2018" + type).html(Math.round(allPoints * .25));
    $("#aciCPS2019" + type).html(Math.round(allPoints * .25));

    if (type == 'T') { //Always update the primary data for CPS calculations
        $("#aciCPS2017").html(Math.round(allPoints * .25));
        $("#aciCPS2018").html(Math.round(allPoints * .25));
        $("#aciCPS2019").html(Math.round(allPoints * .25));
    }

    if (skipUpdate == true) return;

    updateCPS('updateAdvancingCareScore');
}

function calculateAllPracticeImprovementScores(skipUpdate) {
    calculatePracticeImprovementScore('1', true);
    calculatePracticeImprovementScore('2', true);
    calculatePracticeImprovementScore('3', true);
    calculatePracticeImprovementScore('4', true);
    //calculatePracticeImprovementScore('5', true);
    //calculatePracticeImprovementScore('6', true);

    updatePracticeImprovementScore(skipUpdate);
}

function calculatePracticeImprovementScore(measure_id, skipUpdate) {
    var cpiaScore = $("#cpiaM" + measure_id).val();

    $("#cpiaPoints" + measure_id).html(cpiaScore);
    $("#cpiaTotal" + measure_id).html(cpiaScore);

    if (skipUpdate == true) return;

    updatePracticeImprovementScore();
}

function updatePracticeImprovementScore(skipUpdate) {
    var totalPoints = 0.0;
    for (var i = 1; i < 5; i++) {
        var currentPoints = parseFloat($("#cpiaM" + i).val());
        totalPoints += currentPoints;
    }

    $("#totalCPIAPoints").html(Math.round(totalPoints));
    if (totalPoints > 40) { totalPoints = 40; }
    $("#totalCPIAScore").html(Math.round(totalPoints));

    var mips_category_score = Math.round((totalPoints / 40.0) * 100);
    $("#cpiaMIPS").html(mips_category_score);

    $("#cpiaCPS2017").html(Math.round(mips_category_score * .15));
    $("#cpiaCPS2018").html(Math.round(mips_category_score * .15));
    $("#cpiaCPS2019").html(Math.round(mips_category_score * .15));

    if (skipUpdate == true) return;

    updateCPS('updatePracticeImprovementScore');
}


function calculateAllCostScores(skipUpdate) {
    calculateCostScore('1', true);

    updateCostScore(skipUpdate);
}

function calculateCostScore(measure_id, skipUpdate) {
    updateCostScore(skipUpdate);
}

function updateCostScore(skipUpdate) {
    var costScore = parseFloat($("#costPerformanceScore").val());
    if (costScore > 100) { costScore = 100; }

    $("#costCPS2017").html(Math.round(costScore * 0));
    $("#costCPS2018").html(Math.round(costScore * .1));
    $("#costCPS2019").html(Math.round(costScore * .3));

    if (skipUpdate == true) return;

    updateCPS('updateCostScore');
}

function updateCPS(src) {
    var number_of_providers = $("#providers").val();
    var average_payments_pp = $("#ppp").val();
    var x_booster = $("#booster").val();
    var x_bonus = $("#bonus").val();
    var cps_mean = $("#qcpsThreshold").val(); //MIPS CPS Mean (for Standard Deviation)
    var cps_pop = 300000; //300,000 participants	

    $("#viewProviders").html(number_of_providers);
    $("#viewPayments").html('$' + parseFloat(average_payments_pp * number_of_providers, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    for (var y = 17; y < 20; y++) {
        $("#viewBooster" + y).html(x_booster);
        var max_adjustment = parseInt("0" + $("#viewMaxAdjustment" + y).html());

        var total_score = 0;
        var category_score = 0;

        category_score = parseFloat($("#qCPS20" + y).html());
        $("#viewQuality" + y).html(category_score);
        total_score += category_score;

        category_score = parseFloat($("#costCPS20" + y).html());
        $("#viewCost" + y).html(category_score);
        total_score += category_score;

        category_score = parseFloat($("#aciCPS20" + y).html());
        $("#viewACI" + y).html(category_score);
        total_score += category_score;

        category_score = parseFloat($("#cpiaCPS20" + y).html());
        $("#viewCPIA" + y).html(category_score);
        total_score += category_score;

        $("#viewCPS" + y).html(total_score);

        $("#viewMIPSCPS" + y).html(cps_mean);

        var numerator = total_score - cps_mean;
        var z_score = numerator / std.deviation;
        var decile = z_score / 10;

        var performance = total_score / 1.1;
        performance = (Math.round(performance * 100) / 100);

        var deviation = getDeviation(performance, max_adjustment) / max_adjustment;
        var adjustment = (performance / (100 / max_adjustment)) / 25.0;

        if (total_score > 90) {
            performance = total_score;
            adjustment = max_adjustment;
        } else if (total_score > std.mean) {
            adjustment = (5 / performance);
            if (adjustment < 1) {
                adjustment = 0;
            }

            adjustment = Math.round(adjustment * 1000) / 100; //100
        } else {
            if (performance < 25) {
                applied_adjustment = -4;
            } else {
                adjustment = -1 * (5 / performance);
            }
            adjustment = Math.round(adjustment * 1000) / 100; //100
        }

        $("#viewMIPSCPSPerformance" + y).html(performance);

        if (y == 17 && adjustment > 1.0) {
            adjustment = .5;
        }

        $("#viewAdjustment" + y).html(adjustment);

        var applied_adjustment = adjustment;
        if (performance < 25.0) {
            if (y == 17) {
                applied_adjustment = 0.0;
            } else {
                applied_adjustment = -1 * max_adjustment;
            }
        } else if (performance >= 50.0) {
            applied_adjustment = parseFloat(adjustment * x_booster);

            if (performance >= 75) {
                $("#viewPerformanceBonus" + y).html("YES");
                applied_adjustment += parseFloat(x_bonus);
            } else {
                $("#viewPerformanceBonus" + y).html("NO");
            }
        }

        $("#viewAdjustment" + y).html(adjustment);
        $("#viewAppliedAdjustment" + y).html(applied_adjustment);

        if (performance >= 60) {
            $("#viewPerformanceBonus" + y).html("YES");
            applied_adjustment = parseFloat(applied_adjustment) + parseFloat(x_bonus);
        } else {
            $("#viewPerformanceBonus" + y).html("NO");
        }

        $("#viewTotalAdjustment" + y).html(applied_adjustment);

        var impact = (applied_adjustment * number_of_providers * average_payments_pp) / 100;

        $("#viewImpact" + y).html('$' + parseFloat(impact, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    }
}

function withinStd(val, stdev) {
    var low = std.mean - (stdev * std.deviation);
    var hi = std.mean + (stdev * std.deviation);
    return (val > low) && (val < hi);
}

function getDeviation(val, max) {
    var negative_max = max * -1;
    var stdev = ((val - std.mean) / std.deviation) + 1; //Plus 1 because minim score is 1.0

    if (stdev > max) {
        stdev = max;
    } else if (stdev < negative_max) {
        stdev = negative_max;
    }

    return stdev.toFixed(2);
}

function calculateStandardDeviation() {
    outputResult = function (str) {
        var content = $('#results').html();
        $('#results').html(content + str);
    }

    average = function (a) {
        var r = { mean: 0, variance: 0, deviation: 0 }, t = a.length;
        for (var m, s = 0, l = t; l--; s += a[l]);
        for (m = r.mean = s / t, l = t, s = 0; l--; s += Math.pow(a[l] - m, 2));
        return r.deviation = Math.sqrt(r.variance = s / t), r;
    }

    //outputResult("Set = [" + mips_cps_scores.concat(',') + "]<br/><br/>");

    std = average(mips_cps_scores);
    outputResult(
        "mean      = " + std.mean + "<br />" +
        "deviation = " + std.deviation + "<br />" +
        "variance  = " + std.variance + "<br /><br />"
    );

    //var within_std_of = 2;

    //for (i = 0; i < mips_cps_scores.length; i++) {
    //    //if (withinStd(x.mean, mips_cps_scores[i], within_std_of) == false) {

    //    //}
    //    outputResult(mips_cps_scores[i] + " inside " + within_std_of + "std? <strong>" + withinStd(std.mean, mips_cps_scores[i], within_std_of) + "</strong> STD = " + getDeviation(std.mean, mips_cps_scores[i], 4) + "<br/>");
    //}
}