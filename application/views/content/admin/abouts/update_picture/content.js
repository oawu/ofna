/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2014 OA Wu Design
 */
$(function(){$("#update_form").submit(function(){return""==$("#title").val()?(alert("有欄位沒填!"),!1):""==$("#picture").val()&&""==$("#img").attr("src")?(alert("有欄位沒填!"),!1):!0})});