/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2014 OA Wu Design
 */
$(function(){var t=0,e=new Array,n=$("#pictures"),a=$(window),i=new Masonry("#pictures",{itemSelector:".picture",columnWidth:1,transitionDuration:"0.3s",visibleStyle:{opacity:1,transform:"none"}}),o=function(t){return e.length&&-1!=$.inArray(t.data("id"),e)?null:(e.push(t.data("id")),t.find(".avatar").imgLiquid({verticalAlign:"top"}),t.find(".user, .fb-like, .detail").click(function(t){t.stopPropagation(),t.preventDefault(),$(this).is("div.user")?window.open($(this).data("url")):$(this).is("div.detail")&&window.open($(this).data("url"))}),"undefined"!=typeof FB&&FB.XFBML.parse(t.find(".like").get(0)),t)},d=function(){a.scroll(function(){1==n.data("scroll_enable")&&n.data("next_id")>-1&&parseFloat($(this).scrollTop())+50>=parseFloat($(document).height())-parseFloat($(this).height())?3>t&&$.ajax({url:$("#get_pictures_url").val()+"/"+n.data("next_id"),data:{next_id:n.data("next_id")},async:!0,cache:!1,dataType:"json",type:"POST",beforeSend:function(){$("#more_area").hide(),$("#loading").show(),n.data("scroll_enable",0)}}).done(function(e){if(t++,e.status&&void 0!==e.contents&&void 0!==e.next_id&&e.contents.length>0){for(var a=0;a<e.contents.length;a++){var d=o($(e.contents[a]));null!=d&&i.appended(d.appendTo(n).get(0))}n.data("next_id",e.next_id),n.data("scroll_enable",e.next_id>0?1:0).data("next_id",e.next_id)}}).fail(function(t){ajaxError(t)}).complete(function(){n.data("scroll_enable")?($("#loading").hide(),$("#more_area").show()):$("#loading").text("已經沒有照片囉!"),d()}):event.stopPropagation()}).scroll()};d(),$("#more").click(function(){t--,d()})});