import React from 'react'
import style from "../../assets/css/components/footer.module.css"
import { Logo } from '../logo/Logo'

export const Footer = () => {
    return (
        <div className={style.footer_con}>
            <div className="container">

                <div className="row">
                    <div className="col-3">
                        <Logo />
                        <br />
                        <div>Did you come here for something in particular or just general Riker</div>
                    </div>
                    <div className="col-2">
                        <b>Blogs</b>
                        <div>Travel</div>
                        <div>Technology</div>
                        <div>Lifestyle</div>
                        <div>Fashion</div>
                    </div>
                    <div className="col-2">
                        <b>Quick Links</b>
                        <div>FAQ</div>
                        <div>Terms and condition</div>
                        <div>Support</div>
                        <div>Privacy Policy</div>
                    </div>
                    <div className="col-5">
                        <div>Subscribe for newsletter</div>
                        <b>Follow us</b>
                    </div>
                </div>
            </div>
        </div>
    )
}
