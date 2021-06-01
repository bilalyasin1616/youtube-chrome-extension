$(document).ready(function(){
	chrome.storage.local.get(['noOfSubs'], function(obj) {
		$("input[name='subscriber']").val(obj.noOfSubs);
    });
	
	$("input[name='subscriber']").change(function(){
		var noOfSubs=$(this).val();
		chrome.storage.local.set({ noOfSubs });
	});
});