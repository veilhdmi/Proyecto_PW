import './estilosReq.css'
const Req19 = () =>{
    return  <div className='backgc w-100 h-100 py-5 txt'>
                <div className="container align-items-center w-50 mt-5">
                        <div className="mb-4 text-center text-light border-bottom border-light">
                            <h3>Submit a Request</h3>
                        </div>    
                        <div className="mb-3">
                            <input className='form-control rounded-0 border border-light' type="text" id="name" placeholder="Your Name" required/>
                        </div>    
                        <div className="mb-3">
                            <input className='form-control rounded-0 border border-light' type="email" id="email" placeholder="Email" required/>
                        </div>    
                        <div className="mb-3">
                            <input className='form-control rounded-0 border border-light' type="text" id="number" placeholder="Phone Number" required/>
                        </div>
                        <div className="mb-3">
                            <input className='form-control rounded-0 border border-light' type="text" id="subject" placeholder="Subject" required/>
                        </div>
                        <div className="mb-3">   
                            <textarea className='form-control w-100 rounded-0 border border-light' rows="6" id="description" placeholder="Description" required></textarea>
                        </div>
                        <div className="d-flex justify-content-center rounded-0">
                            <button className='btn' type="submit">Submit</button>
                        </div>
                </div>
            </div> 
}
//dasdasd
export default Req19;