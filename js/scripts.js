var warningSigns = [ ];
var healthSymptoms = [ ];
var copingMethods = [ ];

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=warning-signs]:checked").each(function(){
      warningSigns.push($(this).val());
    });
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      healthSymptoms.push($(this).val());
    });
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      copingMethods.push($(this).val());
    });
    if (warningSigns.length || healthSymptoms.length || copingMethods.length >= 4){
      $("div#results1").show();
    } else if (warningSigns.length || healthSymptoms.length || copingMethods.length < 3){
      $("#results2").show();
    } else if (warningSigns.length || healthSymptoms.length || copingMethods.length < 2){
      $("#results3").show();
    } else;

  });
});
