import {Truck, Phone, Globe} from '../icons'
import Link from 'next/link'
import { CenterY} from '../stuffs'
const Card = () =>{
    return(
        <div className="cards_container">
            <div className="card">
                <div className="image_container">
                    <CenterY>
                        <Truck/>
                    </CenterY>
                </div>

                <p id="card_title">Livraison a travers la poste</p>
                <p id="card_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quam velit beatae, atque autem quo, animi iure asperiores voluptates, vero quas? Doloremque reprehenderit eius veniam ad modi quisquam accusantium corrupti.
                </p>
                <Link href="">
                    <a id="more">Voir Plus</a>
                </Link>
            </div>

            <div className="card">
                <div className="image_container">
                        <CenterY>
                            <Phone/>
                        </CenterY>
                    </div>
                    <p id="card_title">Contactez nous au 51 920 215</p>
                    <p id="card_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quam velit beatae, atque autem quo, animi iure asperiores voluptates, vero quas? Doloremque reprehenderit eius veniam ad modi quisquam accusantium corrupti.
                </p>
                <Link href="">
                    <a id="more">Voir Plus</a>
                </Link>
                </div>
            <div className="card">
                <div className="image_container">
                        <CenterY>
                            <Globe/>
                        </CenterY>
                    </div>
                    <p id="card_title">Livraison mondiale</p>
                    <p id="card_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quam velit beatae, atque autem quo, animi iure asperiores voluptates, vero quas? Doloremque reprehenderit eius veniam ad modi quisquam accusantium corrupti.
                </p>
                <Link href="">
                    <a id="more">Voir Plus</a>
                </Link>
                </div>
        </div>
    )
}
export default Card