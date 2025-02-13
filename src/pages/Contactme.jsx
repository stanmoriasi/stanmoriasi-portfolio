function Contact() {

    return (
      <div className="flex flex-col items-center" id="contactme" >
      <h1 className="text-4xl font-bold text-white mb-8">Contact Me</h1>
      <div className="bg-white p-12 rounded-lg shadow-lg">
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="details" className="block text-gray-700 font-bold mb-2">Details</label>
            <textarea id="details" name="details" rows="6" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Submit</button>
        </form>
      </div>
    </div>
    );
  }
  
  export default Contact;