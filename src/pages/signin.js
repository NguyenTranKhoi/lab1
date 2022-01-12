import signinList from "../components/signinList";

const signin = {
    print() {
        return /* html */`
        <div class="sign-in">
            ${signinList.print()}
        </div>
        `;
    },
};

export default signin;
