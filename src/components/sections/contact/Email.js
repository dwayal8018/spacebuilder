// import React from 'react';
// import emailjs from "emailjs-com";




// const Mailer =() =>{


// function sendEmail(e) {
//     e.preventDefault();


//     emailjs.sendForm(
    // 'service_2q9zbth',
    // 'template_bm8rxmy',
    // e.target,
    // "user_jcZ6galSrCY7TeBIFZunC"
//         ).then (res =>{
//         console.log (res);
//         }).catch(err=> console.log(err));
// }


//     return (
//         <div className = "container border"
//             style ={{marginTop:"50px",
//             width:"50%",
//             }}>

//             <h1 style={{marginTop: "25px"}}> Contact Form</h1>

//             <form className = "row" 
//             style= {{margin:"25px 85px 75px 100px"}}
//             onSubmit={sendEmail}
//             > 

//                 <label> Name</label>
//                 <input type = "text"
//                 name= "name" 
//                 className = "form-control" 
//                 />

//                 <label> Email</label>
//                 <input type ="email"
//                  name =" user-email" 
//                  className = "form-control"
//                  />

//                 <label> message</label>
//                 <textarea name ="massage"
//                  rows="4"
//                   className = "form-control"/>
//                 <input
//                  type ="submit" 
//                  value= "send" 
//                  className = "form-control btn btn-primary"
//                 style={{marginTop:"30px"}}
//                 />
//                 </form>
//         </div>
//     );
// }
// export default  Mailer;

// import emailjs from "emailjs-com";


// //start of emain

// //start of emain
// const Contact =() =>{
// function sendEmail(e) {
// e.preventDefault();


// emailjs.sendForm(
//     'service_2q9zbth',
//     'template_bm8rxmy',
//     e.target,
//     "user_jcZ6galSrCY7TeBIFZunC"
//    ).then (res =>{
//    console.log (res);
//    }).catch(err=> console.log(err));
// }



// return (
// <div className="col-lg-6">
//                <div className="section-title-wrap section-header">
//                    <h5 className="custom-primary">Contact Us</h5>
//                    <h2 className="title">Got Any Questions?</h2>
//                </div>
//                <div className="comment-form">
//                    <form
//                      onSubmit={sendEmail}
//                    >
//                        <div className="row">
//                            <div className="col-md-6 form-group">
//                                <label>Full Name</label>
//                                <input type="text" className="form-control" placeholder="Full Name" name="fname" />
//                            </div>
//                            <div className="col-md-6 form-group">
//                                <label>Subject</label>
//                                <input type="text" className="form-control" placeholder="Subject" name="subject" />
//                            </div>
//                            <div className="col-md-6 form-group">
//                                <label>Phone Number</label>
//                                <input type="text" className="form-control" placeholder="Phone Number" name="phone" />
//                            </div>
//                            <div className="col-md-6 form-group">
//                                <label>Email Address</label>
//                                <input type="email" className="form-control" placeholder="Email Address" name="email" />
//                            </div>
//                            <div className="col-md-12 form-group">
//                                <label>Your Message</label>
//                                <textarea className="form-control" placeholder="Type your message..." name="comment" rows={7} />
//                            </div>
//                        </div>
//                        <button type="submit"  value= "send"  className="btn-custom primary">Send Message</button>
//                    </form>
//                </div>
//            </div>
              
//           );
//       };
//       export default  Contact;




{/*const Contact =() =>{
   function sendEmail(e) {
       e.preventDefault();
   
   
       emailjs.sendForm(
            'service_2q9zbth',
      'template_bm8rxmy',
      e.target,
      "user_jcZ6galSrCY7TeBIFZunC"
           ).then (res =>{
           console.log (res);
           }).catch(err=> console.log(err));
   }

  



    
return (

   
               
<div className="col-lg-6">

<div className="section-title-wrap section-header">
 <h5 className="custom-primary">Contact Us</h5>
 <h2 className="title">Got Any Questions?</h2>
</div>
<div className="comment-form">
 <form  action="" method="" onSubmit={this.handleRegister} Validate autoComplete="off" onSubmit={sendEmail}>
<div className="row">
  <div className="col-md-6 form-group">
      <label>Full Name</label>
      <input type="text" className="form-control" placeholder="Full Name" name="fname" />
  </div>
<div className="col-md-6 form-group">
 <label>Subject</label>
 <input type="text" className="form-control" placeholder="Subject" name="subject" />
</div>

<div className="col-md-6 form-group">
   <label>Phone Number</label>
   <input type="text" className="form-control" placeholder="Phone Number" name="phone" />
</div>
<div className="col-md-6 form-group">
 <label>Email Address</label>
 <input type="email" className="form-control" placeholder="Email Address" name="email" />
</div>
<div className="col-md-12 form-group">
<label>Your Message</label>
<textarea className="form-control" placeholder="Type your message..." name="comment" rows={7} />
</div>

</div>

<button type="submit"  value= "send"  className="btn-custom primary">Send Message</button>


</form>                      

</div>


              );
          };
          

       export default Contact; */}