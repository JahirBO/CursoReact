import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="container py-5">
                <div className="row">
                    <hr />
                    <div className="col-md-6">
                    <img src={"/images/Icon.png"} alt={"Icon of Pokemon Center"} width={300}/>
                    </div>
                    <div className="col-md-6 text-end">
                    <a href={"https://www.facebook.com/PokemonOficialLatAm/?brand_redir=230809307041021"} target={"_blank"} className="me-3" rel="noreferrer"> 
                    <img src={"/images/facebook.svg"} alt={"facebook"} width={50}/></a>
                    <a href={"https://twitter.com/Pokemon"} target={"_blank"} className="me-3" rel="noreferrer"> 
                    <img src={"/images/twitter.svg"} alt={"twitter"} width={50}/></a>
                    <a href={"https://www.youtube.com/user/pokemon"} target={"_blank"} className="me-3" rel="noreferrer">
                    <img src={"/images/youtube.svg"} alt={"youtube"} width={50}/></a>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer;