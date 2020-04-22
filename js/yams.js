$(document).ready(function() {
    
    $("#c1").click(function(){
        let c1t = $("#chance1").val();
        $("#chance1").parent().empty().append("<p>"+c1t+"</p>")
    });
    
    $("#c2").click(function(){
        let c2t = $("#chance2").val();
        $("#chance2").parent().empty().append("<p>"+c2t+"</p>")
    });
    
    $("#table-yams").on("click", "img", function() {

        let input = $(this).attr("alt");
        let des = $(this).parent().parent().attr('id');
        let value = $(this).parent().parent().attr('Value');
        $(this).parent().css('background-color', 'indianred');
        if ($.inArray(des, ['d-9', 'd-10', 'd-V', 'd-D', 'd-R', 'd-AS']) >= 0) {
            let caseFinal = value * input;
            $(this).parent().empty().append("<p>"+caseFinal+"</p>");
        }

        if ($.inArray(des, ['brelan']) >= 0) {
            if(input == "n"){
                $(this).parent().empty().append("<p>"+0+"</p>");
            }else{
                let caseFinal = parseInt(value) + parseInt(input);
                $(this).parent().empty().append("<p>"+caseFinal+"</p>");
            }
        }

        if ($.inArray(des, ['carre']) >= 0) {
            if(input == "n"){
                $(this).parent().empty().append("<p>"+0+"</p>");
            }else{
                let caseFinal = parseInt(value) + 2 * parseInt(input);
                $(this).parent().empty().append("<p>"+caseFinal+"</p>");
            }
        }

        if ($.inArray(des, ['full', 'ps', 'gs', 'yams']) >= 0) {
            if(input == "y"){
                $(this).parent().empty().append("<p>"+value+"</p>");
            }
            if(input == "n"){
                $(this).parent().empty().append("<p>"+0+"</p>");
            }
        }

    });


    $("#btnSubmit").click(function(){

        let j1 = parseInt($("#d-9").children().eq(1).text()) +
        parseInt($("#d-10").children().eq(1).text())+
        parseInt($("#d-V").children().eq(1).text())+
        parseInt($("#d-D").children().eq(1).text())+
        parseInt($("#d-R").children().eq(1).text())+
        parseInt($("#d-AS").children().eq(1).text());

        if (j1 >= 99){
            $("#BONUS").children().eq(1).empty().append("<p>35</p>");
            j1 += 35
        }else{
            $("#BONUS").children().eq(1).empty().append("<p>0</p>");
        }
        
        $("#SST").children().eq(1).empty().append("<p>"+j1+"</p>");
        $("#SST").children().eq(1).css('background-color', 'cornflowerblue');
        
        j1 += parseInt($("#brelan").children().eq(1).text()) +
            parseInt($("#full").children().eq(1).text())+
            parseInt($("#ps").children().eq(1).text())+
            parseInt($("#gs").children().eq(1).text())+
            parseInt($("#carre").children().eq(1).text())+
            parseInt($("#yams").children().eq(1).text()) +
            parseInt($("#chance").children().eq(1).text());
            
        $("#TT").children().eq(1).empty().append("<p>"+j1+"</p>");
        $("#TT").children().eq(1).css('background-color', 'cornflowerblue');
        
        
        
        // J2
        
        let j2 = parseInt($("#d-9").children().eq(2).text()) +
            parseInt($("#d-10").children().eq(2).text())+
            parseInt($("#d-V").children().eq(2).text())+
            parseInt($("#d-D").children().eq(2).text())+
            parseInt($("#d-R").children().eq(2).text())+
            parseInt($("#d-AS").children().eq(2).text());

        if (j2 >= 99){
            $("#BONUS").children().eq(2).empty().append("<p>35</p>");
            j2 += 35
        }else{
            $("#BONUS").children().eq(2).empty().append("<p>0</p>");
        }

        $("#SST").children().eq(2).empty().append("<p>"+j2+"</p>");
        $("#SST").children().eq(2).css('background-color', 'cornflowerblue');

        j2 += parseInt($("#brelan").children().eq(2).text()) +
            parseInt($("#full").children().eq(2).text())+
            parseInt($("#ps").children().eq(2).text())+
            parseInt($("#gs").children().eq(2).text())+
            parseInt($("#carre").children().eq(2).text())+
            parseInt($("#yams").children().eq(2).text()) +
            parseInt($("#chance").children().eq(2).text());

        $("#TT").children().eq(2).empty().append("<p>"+j2+"</p>");
        $("#TT").children().eq(2).css('background-color', 'cornflowerblue');
    });

});