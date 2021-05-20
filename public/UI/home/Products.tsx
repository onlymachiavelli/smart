import {Shop} from '../icons'
const Products = () =>{
    const ImageSource = {
        "Prod1" : "../../img/smartred.jpg",
        "Prod2" : "../../img/yel.jpg",
        "Prod3" : "../../img/blue.jpg",
        "Prod4" : "../../img/images.jpg",
        "Prod5" : "../../img/grey.jpg",
        "Prod6" : "../../img/1.jpg",
    }
    const OrderColor = {
        "btn1" : "#740a04",
        "btn2" : "#cb7210",
        "btn3" : "#03304d",
        "btn4" : "#6a6a6c",
        "btn5" : "#2f241f",
        "btn6" : "#232428",
        
    }
    return(
        
        <div className="prod_container">
            <div className="prod_serie">
            <div className="prod">
                    <img src={ImageSource["Prod1"]} />
                    <button className="order_button" style={{background:OrderColor["btn1"]}}>Commander</button> 
                    <button className="Add_card"><Shop/></button>
                </div>


                <div className="prod">
                    <img src={ImageSource["Prod2"]} />
                    <button className="order_button" style={{background:OrderColor["btn2"]}}>Commander</button> 
                    <button className="Add_card"><Shop/></button>
                </div>



                <div className="prod">
                    <img src={ImageSource["Prod3"]} />
                    <button className="order_button" style={{background:OrderColor["btn3"]}}>Commander</button> 
                    <button className="Add_card"><Shop/></button>
                </div>

                

            </div>





            <div className="prod_serie">
            <div className="prod">
                    <img src={ImageSource["Prod4"]} />
                    <button className="order_button" style={{background:OrderColor["btn4"]}}>Commander</button> 
                    <button className="Add_card"><Shop/></button>
                </div>


                <div className="prod">
                    <img src={ImageSource["Prod5"]} />
                    <button className="order_button"  style={{background:OrderColor["btn5"]}}>Commander</button> 
                    <button className="Add_card"><Shop/></button>
                </div>



                <div className="prod">
                    <img src={ImageSource["Prod6"]} />
                    <button className="order_button"  style={{background:OrderColor["btn6"]}}>Commander</button> 
                    <button className="Add_card"><Shop/></button>
                </div>

            </div>
        </div>
    )
}
export default Products