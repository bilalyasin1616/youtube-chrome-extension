setInterval(function(){ 
	chrome.storage.local.get(['noOfSubs'], function(obj) {
		if(obj){
			$("yt-formatted-string#owner-sub-count").text(getCount(Number(obj.noOfSubs)) + " subscribers");
		}
    });
 }, 2000);

function getCount(noOfSubs){
	if(noOfSubs<1000)
		return noOfSubs;
	if(noOfSubs>=1000 && noOfSubs<1000000)
		return `${fixNumber(noOfSubs/1000)}K`;
	if(noOfSubs>=1000000 && noOfSubs<1000000000)
		return `${fixNumber(noOfSubs/1000000)}M`;
	if(noOfSubs>=1000000000)
		return `${fixNumber(noOfSubs/1000000000)}B`;
}

function fixNumber(number){
	return number.toFixed(2);
}