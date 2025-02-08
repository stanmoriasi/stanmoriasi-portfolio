import { useEffect} from "react";
function Contact() {
useEffect(()=> {
  document.title = "Stan Moriasi | Contact Me";
},[])

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Contact Me</h1>
          <form className="mt-8 space-y-6 w-full max-w-md">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="Phone"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

        </div>
      </div>
    );
  }
  
  export default Contact;