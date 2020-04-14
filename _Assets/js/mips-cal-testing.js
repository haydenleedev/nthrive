function RefreshCPS(type) {
    var _aci_type = '';
    if ($("#CEHRT").val() == "2014") {
        _aci_type = "T";
    }

    switch (type) {
        case "best":
            BestCase(_aci_type);
            break;
        case "worst":
            WorstCase(_aci_type);
            break;
        case "neutral":
            NeutralCase(_aci_type);
            break;
    }
}

function RefreshResourceUse(score) {
    $("#costPerformanceScore").val(score);
    calculateCostScore(1, false);
}

function RefreshQuality(score) {
    for (var x = 1; x < 9; x++) { //Inlcuding global measures
        $("#qm" + x + "Performance").val(score);
        calculateQualityScore(x, true);
    }

    if ($("#practiceSize").val() == "10") {
        $("#qm9Performance").val(score);
        calculateQualityScore(x, false);
    }
    else {
        $("#qm9Performance").val(0);
        calculateQualityScore(x, false);
    }
}

function RefreshACI(score, type) {
    $(".aci" + type).each(function (i, elem) {
        calc = $(elem).attr("calc");
        name = $(elem).attr("id");
        value = $(elem).val();

        switch (calc) {
            case "N": //Numerator
                $(elem).val(1);
                break;
            case "D": //Denominator
                $(elem).val(score);
                calculateACIScoreD(name.replace('Denom', ''), score, type, true);
                break;
            case "Y": //Yes/No
                var id = parseInt(name.replace("aciM", "").replace("YN" + type, ""));
                if (id > 11) {
                    if (score > 1) {
                        $(elem).val("0");
                    }
                    else {
                        $(elem).val("1");
                    }
                    calculateACIScoreYN(name, $(elem).val(), type, true);
                }
            default:
                break;
        }
    });

    updateAdvancingCareScore(type, false);
}

function RefreshCPIA(score) {
    $(".cpiaM").each(function (i, elem) {
        $(elem).val("0");
    });

    for (var x = 10; x <= score; x += 10) {
        $("#cpiaM" + (x / 10)).val("10");
    }

    calculateAllPracticeImprovementScores(false);
}

function BestCase(aci_type) {
    RefreshQuality(100);
    RefreshResourceUse(100);
    RefreshACI(1, aci_type);
    RefreshCPIA(40);
}

function WorstCase(aci_type) {
    RefreshQuality(10);
    RefreshResourceUse(10);
    RefreshACI(100, aci_type);
    RefreshCPIA(10);
}

function NeutralCase(aci_type) {
    RefreshQuality(30);
    RefreshResourceUse(50);
    RefreshACI(2, aci_type);
    RefreshCPIA(20);
}