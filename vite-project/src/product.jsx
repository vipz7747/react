

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

function Product(props){

    return(




        <div class ="product-item">
        <img src = {props.ProductImg}/>
        <p class = "product-title"> {props.ProductTitle} </p>
        <p> ${props.ProductPrice} </p>
        <Button as="a" variant="success">
        View Product
        </Button>
        <p class = "prpduct-description" >{props.ProductDetails} </p>
    </div>
    
    )
}


export default Product