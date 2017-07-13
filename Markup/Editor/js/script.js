/*
~   Copyright (c) WSO2 Inc. (http://wso2.com) All Rights Reserved.
~
~   Licensed under the Apache License, Version 2.0 (the "License");
~   you may not use this file except in compliance with the License.
~   You may obtain a copy of the License at
~
~        http://www.apache.org/licenses/LICENSE-2.0
~
~   Unless required by applicable law or agreed to in writing, software
~   distributed under the License is distributed on an "AS IS" BASIS,
~   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
~   See the License for the specific language governing permissions and
~   limitations under the License.
*/

$(function() {

    $('#add-sub-tab').click(function(){
        var addBtn  = $(this);
        var elLength = $( "ul#sub-tab-nav li" ).length ;

        addBtn.siblings().removeClass("active");
        $("<li class='active' role='presentation'><a href='#single"+elLength+"' aria-controls='single' role='tab' data-toggle='tab'>S <button type='button' class='close' aria-label='Close'><span aria-hidden='true'>×</span></button></a></li>").insertBefore(addBtn);
        $("#sub-tab").find(".tab-pane").removeClass("active");
        $("#sub-tab").append("<div role='tabpanel' class='tab-pane active' id='single"+elLength+"'><div class='content'>detail "+elLength+"</div></div>")
    })

    $("ul.nav-tabs").on( "click", 'li button.close', function(){
        var closeBtn = $(this);
        var x = closeBtn.parents("a").attr("href");

        closeBtn.parents('li').prev().addClass('active');
        $('#sub-tab ' + x).prev().addClass('active');
        $('#sub-tab ' + x).remove();
        closeBtn.parents("li").remove();
        
    })

    $(".nano").nanoScroller();

});

