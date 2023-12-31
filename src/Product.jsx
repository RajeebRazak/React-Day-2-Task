import React from "react";
import { Link,  useNavigate} from "react-router-dom";

 function Product({details,handleAddtoCart}) {
    const navigate = useNavigate

    
    return (<>
    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src={details.image} alt="Product" />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                   
                                    <h5 className="fw-bolder">{details.planName}</h5>
                                  
                                    {details.price}
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={() => handleAddtoCart(details)}>Add to cart</ button></div>
                            </div>
                        </div>
                    </div>

    </>

    )
 }
 export default Product;