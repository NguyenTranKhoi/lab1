import { signin } from "../api/user";
import header from "../components/header";
import signinList from "../components/signinList";

const Signin = {
    print() {
        return /* html */`
        <header>
            ${header.print()}
        </header>
        <div class="sign-in">
            ${signinList.print()}
        </div>
        `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", (e) => {
            e.preventDefault();
            signin({
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
        });
    },
};

export default Signin;
