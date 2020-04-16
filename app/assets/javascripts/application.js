// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery

//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .



$(document).on('turbolinks:load', function() {

// This is the javascipt function 

$('.images').on('click', function(event){
    var id = $(this).attr('id');
    // alert("Images clicked" + id );
    // alert(event.target.classList);
    var classType = event.target.classList[1];
    
    if(classType == 'one'){
        $('.selected_two').css("display", "none");
        $('.or').css("display", "none");
        $('.second').css("display","none");
        $('.selected_one').css("display", "inline");
        // location.reload(true);
    }else{
        $('.selected_one').css("display", "none");
        $('.or').css("display", "none");
        $('.one').css("display","none");
        $('.selected_two').css("display", "inline");
    }

    

    
  
})


$(document).ready(function(){
    var idNumber = $("textfield");

    idNumber.on('change', function(){
        alert(idNumber.val());
    })
})



})

