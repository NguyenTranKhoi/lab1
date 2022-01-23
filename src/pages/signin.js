import header from "../components/header";
import signinList from "../components/signinList";

const signin = {
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
};

export default signin;
