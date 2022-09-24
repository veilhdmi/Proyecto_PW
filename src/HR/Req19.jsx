const Req19 = () =>{
    return  <div>
                <link rel="stylesheet" href="./Req19.css"/>
                <div className="container">
                    <form>
                        <h3>Submit a Request</h3>
                        <input type="text" id="name" placeholder="Your Name" required/>
                        <input type="email" id="email" placeholder="Email" required/>
                        <input type="text" id="number" placeholder="Phone Number" required/>
                        <input type="text" id="subject" placeholder="Subject" required/>
                        <textarea rows="6" id="description" placeholder="Description" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div> 
}
//dasdasd
export default Req19;