import header from "../components/header";
import signupList from "../components/signupList";

const signup = {
    print() {
        return /* html */ `
        <header>
            ${header.print()}
        </header>
        <div class="sign-up">
        ${signupList.print()}
        </div>
        `;
    },
};

export default signup;
