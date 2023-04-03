import styled from "styled-components";
import "./Login.css"
const Login = (props) =>{
    return (
        <section class="Container">
            <div class="Content">
                <div class="CTA">
                    <img class="CTALogoOne" src="/images/cta-logo-one.svg" alt="logo-one" />
                    <a class="SignUp">GET ALL THERE</a>
                    <p class="Description">
                    Get Premier Access to Raya and the Last Dragon for an additional fee
                    with a Disney+ subscription. As of 03/26/21, the price of Disney+
                    and The Disney Bundle will increase by $1.
                    </p>
                    <img class="CTALogoTwo" src="/images/cta-logo-two.png" alt="logo-two" />
                </div>
                <div class="BgImage"/>
            </div>
        </section>
    )
};

export default Login