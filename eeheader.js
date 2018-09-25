/*********************************************************//*   Javascript for cslaee.com index.html page           *//*       Mike Obermeyer March 3, 2012                    *//*       June 7, 2012 Added links to header              *//*********************************************************/
Date.prototype.julianDate=function(){return parseInt(this.getTime()/86400000,10);};
function EEHeader (classesBegin, finalsBegin, recessBegin, campusClosed){	dateObj = new Date();	var Txt = getTodaysText(dateObj, classesBegin, finalsBegin, recessBegin, campusClosed);	document.write("<table width=\"98%\"><tr><td><font size=\"4\">Cal State LA EE Lab Support</font></td>");		document.write("<td><font size=\"3\">"+Txt[0]+"</font>");		
	if(Txt[1] != "")		document.write("<br><font size=\"2\">"+Txt[1]+"</font>");
	if(Txt[4] != "")		document.write("<br><font size=\"2\">"+Txt[4]+"</font>");
	document.write("</td>");		
	if(Txt[2] != "" || Txt[3] != ""){		document.write("<td><font size=\"1\">");				if(Txt[2] != "")			document.write(Txt[2]);		if(Txt[3] != "")			document.write("</br>"+Txt[3]);		document.write("</font></td>");		}
	document.write("<td><a title=\"Video and pictures from the Solar Eagle\" target=\"_blank\" href=\"http://se.cslaee.com\">");			document.write("<img src=\"http://www.calstatela.edu/academic/ecst/solareagle/Images/Thumbs/seLink.gif\" border=\"0\"></a></td>");	document.write("<td>"+Txt[5]+"</td>");			document.write("</tr></table>");		}


function getTodaysText(inputDateObj, classesBegin, finalsBegin, recessBegin, campusClosed){	var quarter = Array("Winter","Spring","Summer","Fall","Winter","Error"); 	var mnth = Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"); 	var dateText = Array("","","","","",""); 
	//var inputDateObj = new Date(inputDateTxt);		var inputDateJulian = inputDateObj.julianDate();	var quarterStartTxt = classesBegin[findIndex(classesBegin,inputDateObj,0)-1];	var quarterStartObj = new Date(quarterStartTxt);	var quarterStartJulian = quarterStartObj.julianDate();	var quarterEndTxt = classesBegin[findIndex(classesBegin,inputDateObj,0)];
	if (!quarterEndTxt){		return dateText;		}
	var quarterEndObj = new Date(quarterEndTxt);	var quarterEndJulian = quarterEndObj.julianDate();
	// Find the final	var finalStartTxt = finalsBegin[findIndex(finalsBegin,inputDateObj,0)];	var finalStartObj = new Date(finalStartTxt);	var finalStartJulian = finalStartObj.julianDate();
	if (finalStartJulian > quarterEndJulian){		var finalStartTxt = finalsBegin[findIndex(finalsBegin,inputDateObj,0)-1];		var finalStartObj = new Date(finalStartTxt);		var finalStartJulian = finalStartObj.julianDate();		}

	//Find the break	var recessStartTxt = recessBegin[findIndex(recessBegin,inputDateObj,0)];	var recessStartObj = new Date(recessStartTxt);	var recessStartJulian = recessStartObj.julianDate();	if (recessStartJulian > quarterEndJulian){		var recessStartTxt = recessBegin[findIndex(recessBegin,inputDateObj,0)-1];		var recessStartObj = new Date(recessStartTxt);		var recessStartJulian = recessStartObj.julianDate();		}
	//Find the next time campus is closed	var campusClosedTxt = campusClosed[findIndex(campusClosed,inputDateObj,-1)];	var campusClosedObj = new Date(campusClosedTxt);	var campusClosedInDays = campusClosedObj.julianDate()-inputDateJulian;	var qtr = 5;
	switch(quarterStartObj.getMonth()) //What quarter are we in?	{		case 0:			qtr = 0;		break;		case 3:			qtr = 1;		break;		case 5:			qtr = 2;		break;		case 8:			qtr = 3;		break;		default:			qtr = 5;	}
 	if (inputDateJulian < finalStartJulian){//		dateText[0]="Week " + (Math.floor((inputDateJulian - quarterStartJulian)/7) +1) + " of "+quarter[qtr]+" Quarter"; 		dateText[0]="<a href=\"http://www.calstatela.edu/univ/ppa/acadcal.htm\">Week "+			(Math.floor((inputDateJulian - quarterStartJulian)/7) +1) + " of "+quarter[qtr]+" Quarter</a>";		if((finalStartJulian - inputDateJulian) < 8)
//			dateText[1]="Finals begin "+ formatMonth((finalStartJulian - inputDateJulian),finalStartTxt,finalStartObj)+//			". <a href=\"http://www.calstatela.edu/academic/registrar/finals.htm\">Schedule</a><br>";			dateText[1]="<a href=\"http://www.calstatela.edu/academic/registrar/finals.htm\">Finals begin "+			formatMonth((finalStartJulian - inputDateJulian),finalStartTxt,finalStartObj)+"</a><br>";		}	else if (inputDateJulian < recessStartJulian){//		dateText[0]="Finals Week. "+"Day "+(inputDateJulian - finalStartJulian + 1)+//			". <a href=\"http://www.calstatela.edu/academic/registrar/finals.htm\">Schedule</a><br>";		dateText[0]="<a href=\"http://www.calstatela.edu/academic/registrar/finals.htm\">Finals Week. Day"+			(inputDateJulian - finalStartJulian + 1)+"</a><br>";			//		dateText[2]=quarter[qtr+1]+" Break begins "+ formatMonth((recessStartJulian - inputDateJulian),recessStartTxt,recessStartObj)+"."; 		dateText[2]="<a href=\"http://www.calstatela.edu/univ/ppa/acadcal.htm\">"+			quarter[qtr+1]+" Break begins "+ formatMonth((recessStartJulian - inputDateJulian),recessStartTxt,recessStartObj)+".</a>"; //		dateText[3]=quarter[qtr+1]+" Quarter begins "+ formatMonth((quarterEndJulian - inputDateJulian), quarterEndTxt, quarterEndObj)+"."; 		dateText[3]="<a href=\"http://www.calstatela.edu/univ/ppa/acadcal.htm\">"+			quarter[qtr+1]+" Quarter begins "+ formatMonth((quarterEndJulian - inputDateJulian), quarterEndTxt, quarterEndObj)+".</a>"; 		}	else{//		dateText[0]=quarter[qtr+1]+" Break";		dateText[0]="<a href=\"http://www.calstatela.edu/univ/ppa/acadcal.htm\">"+			quarter[qtr+1]+" Break</a>";//		dateText[3]=quarter[qtr+1]+" Quarter begins " + formatMonth((quarterEndJulian - inputDateJulian), quarterEndTxt, quarterEndObj);		dateText[3]="<a href=\"http://www.calstatela.edu/univ/ppa/acadcal.htm\">"+			quarter[qtr+1]+" Quarter begins " + formatMonth((quarterEndJulian - inputDateJulian), quarterEndTxt, quarterEndObj)+"</a>";		}
	if(campusClosedInDays < 7)		//dateText[4]="The campus is CLOSED "+ formatMonth((campusClosedInDays),campusClosedTxt,campusClosedObj)+".";		dateText[4]="<a href=\"http://www.calstatela.edu/univ/ppa/acadcal.htm\">"+			"The campus is CLOSED "+ formatMonth((campusClosedInDays),campusClosedTxt,campusClosedObj)+".</a>";			//	dateText[5] = mnth[inputDateObj.getMonth()]+ " " + inputDateObj.getDate();		dateText[5] ="<a href=\"http://www.timeanddate.com/worldclock/fullscreen.html?n=137\">"+			mnth[inputDateObj.getMonth()]+ " " + inputDateObj.getDate()+"</a>";		return dateText;}

function findIndex(inputArray,inputDate,dayTest){for (i=0; i < inputArray.length; i++)	{	numDays = dayBetween(new Date(inputArray[i]).getTime(), inputDate);	if (numDays > dayTest)		break;	}	return i;}

function dayBetween(dateOne,dateTwo){	return Math.floor((dateOne - dateTwo) / 86400000);}

function formatWeek(d){		return 	"Week " + (Math.floor(d/7) +1);}

function formatMonth(d,dateInput,dateInputB){var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];	if (d==0){		return "today";}	else if (d == 1){		return "tomorrow";}	else if (d < 7){		return 	"this "+weekday[dateInputB.getDay()]+", "+dateInput.substr(0,dateInput.lastIndexOf(","));}	else if (d < 12){		return 	"next "+weekday[dateInputB.getDay()]+", "+dateInput.substr(0,dateInput.lastIndexOf(","));}	else{		return 	"in "+ d + " days, "+weekday[dateInputB.getDay()]+", "+dateInput.substr(0,dateInput.lastIndexOf(","));}}