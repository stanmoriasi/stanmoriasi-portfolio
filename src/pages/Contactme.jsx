import { useEffect} from "react";
function Contact() {
useEffect(()=> {
  document.title = "Stan Moriasi | Contact Me";
},[])

    return (
        <div className="contact-container" id="contactme">
            <h1 className="text-4xl font-bold text-white">Contact Me</h1>
            <div className="contact-info">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div></form>
                
                </div>
                </div>
    );
  }
  
  export default Contact;