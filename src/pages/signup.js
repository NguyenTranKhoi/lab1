import signupList from "../components/signupList";

const signup = {
    print() {
        return /* html */ `
        <div class="sign-up">
        ${signupList.print()}
        </div>
        `;
    },
};

export default signup;
