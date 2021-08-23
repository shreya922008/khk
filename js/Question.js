class Question {
  constructor(){
    this.ques1=createButton("COLD")
    this.ques2=createButton("COUGH")
    this.ques3=createButton("Difficulties while breathing")
    this.ques4=createButton("NONE OF THE FOLLOWING!!")
    this.ques=createElement("h2")

    this.next1=createButton("NEXT")
    this.next2=createButton("NEXT")
    this.next3=createButton("NEXT")

    this.q2=createElement("h2")
    this.q3=createButton("Diabetes")
    this.q4=createButton("Hypertension")
    this.q6=createButton("NONE OF THE FOLLOWING")
   this.q5=createButton("Lung disease ")

   this.qu1 = createElement("h2");
   this.qu2=createButton("Yes")
    this.qu3=createButton("No")

    this.qe1=createElement("h2")
    this.qe2=createButton("NO,NOT YET")
    this.qe3=createButton("YUP,DONE WITH MY 2 DOSES")

  
   
  }

display(){


 
 this.ques1.position(300,250)

 
 this.ques2.position(300,300)


 this.ques3.position(300,350)


 this.ques4.position(300,400)

 this.next1.position(780,500)

 this.next2.position(630,350)
 this.next3.position(600,350)

 this.ques.html("Are u experiencing any of the following symptoms ?")
 this.ques.position(300,170)
 this.q3.hide()

 this.q4.hide()
 
 this.q5.hide()
 this.q6.hide()
this.next2.hide();
this.next3.hide()
this.qu1.hide();
this.qu2.hide();
this.qu3.hide();

this.ques1.mousePressed(()=>{
 score++
 this.ques1.hide()
  
})

 this.ques4.mousePressed(()=>{
   console.log("working")
   this.ques1.hide()
   this.ques2.hide()
   this.ques3.hide()
   this.ques4.hide()
   this.ques.hide()
   //this.next1.hide();
   //this.next2.show();
   clear()
background(bg7)
 
 })

 this.next1.mousePressed(()=>{
  background(bg1)
 
  this.ques1.hide()
  this.ques2.hide()
  this.ques3.hide()
  this.ques4.hide()
  this.ques.hide()

 this.q3.show()
 this.q2.show();
  this.q4.show()
  this.next1.hide();
  this.next2.show();
this.q5.show()
this.q6.show()
this.q2.html("Have you ever had any one of the following?")
this.q2.position(100,10)
this.q3.position(250,130)
this.q4.position(250,170)
this.q5.position(250,215)
this.q6.position(250,260)
})


this.q5.mousePressed(()=>{
background(bg7)
this. q2.hide()
this.q3.hide()
this.q4.hide()
this.q5.hide()
this.q6.hide()
})

this.next2.mousePressed(()=>{
background(bg2)
 
this. q2.hide()
this.q3.hide()
this.q4.hide()
this.q5.hide()
this.q6.hide()

this.qu1.show();
this.qu2.show();
this.qu3.show();
this.qu1.html(" Have you travelled anywhere internationally in the last 14 days?");
this.qu1.position(100,0)
this.qu2.position(200,130)
this.qu3.position(250,130)
})

this.qu3.mousePressed(()=>{
background(bg7)
this.qu1.hide();
this.qu2.hide();
this.qu3.hide();
this.next2.hide()
this.next3.show()

})
  this.next3.mousePressed(()=>{
    background(bg3)
    textSize(35)
    this.qe1.html("HAVE U TAKEN YOUR 2 DOSES OF COVID VACCINATION ?")
    this.qe1.position(100,30)
    this.qe2.position(100,110)
    this.qe3.position(100,170)



  })
  this.qu2.mousePressed(()=>{
    background(bg8)
    this.qu1.hide();
this.qu2.hide();
this.qu3.hide();
this.next2.hide()
this.next3.show()
  })
  this.ques1.mousePressed(()=>{
    background(bg8)
    this.ques1.hide()
   this.ques2.hide()
   this.ques3.hide()
   this.ques4.hide()
   this.ques.hide()
   //this.next1.hide();
   //this.next2.show();

  })
  this.ques2.mousePressed(()=>{
    background(bg8)
    this.ques1.hide()
   this.ques2.hide()
   this.ques3.hide()
   this.ques4.hide()
   this.ques.hide()
   //this.next1.hide();
   //this.next2.show();

  })
  this.ques3.mousePressed(()=>{
    background(bg8)
    this.ques1.hide()
   this.ques2.hide()
   this.ques3.hide()
   this.ques4.hide()
   this.ques.hide()
   //this.next1.hide();
   //this.next2.show();

  })
  this.q3.mousePressed(()=>{
    background(bg8)
    this.q2.hide()
   this.q3.hide()
   this.q4.hide()
   this.q5.hide()
   this.q6.hide()
   this.next1.hide();
   this.next2.show();

  })
  this.q4.mousePressed(()=>{
    background(bg8)
    this.q2.hide()
   this.q3.hide()
   this.q4.hide()
   this.q5.hide()
   this.q6.hide()
   this.next1.hide();
   this.next2.show();
  })
  this.q5.mousePressed(()=>{
    background(bg8)
    this.q2.hide()
   this.q3.hide()
   this.q4.hide()
   this.q5.hide()
   this.q6.hide()
   this.next1.hide();
   this.next2.show();
  })
  this.q6.mousePressed(()=>{
    background(bg7)
    this.q2.hide()
   this.q3.hide()
   this.q4.hide()
   this.q5.hide()
   this.q6.hide()
   this.next1.hide();
   this.next2.show();
  })
  this.qe2.mousePressed(()=>{
    background(bg9)
    this.qe3.hide()
   this.qe1.hide()
   this.qe2.hide()
  // this.next2.hide();
  // this.next3.show();
  })
  this.qe3.mousePressed(()=>{
    background(bg10)
    this.qe2.hide()
   this.qe1.hide()
   this.qe3.hide()
   //this.next2.hide();
  // this.next3.show();
  })
}
}