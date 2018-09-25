 var meslen = 8;  // will not work with anything but 8
 var rollIM = new RollMsg(document.slideshowt[meslen],TEXT_SECONDS * 1000); //declare a rollIM object
 
 for (i=0; i < meslen; i++){
	rollIM.addline(MESSAGE_TEXT[i]);
}
rollIM.slidemessage();
  
 function addline(lineTxt)
 {
 this.line[this.line.length]=lineTxt;	
 return;	
 }

 function slidemessage()
 {
 if (this.curmsg<this.line.length-1)
  this.curmsg++
 else
  this.curmsg=0
 this.name.value=this.line[this.curmsg]
 setTimeout("rollIM.slidemessage()",this.delay);
 }

 function RollMsg(name,delay)
 {
 this.delay = delay;
 this.name = name;
 this.crmsg=-1;
 this.line=new Array();
 this.slidemessage = slidemessage;
 this.addline = addline;
 }
