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
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            // call api login
            const { data } = await signin({
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
            // lưu dữ liệu vào localStorage
            localStorage.setItem("user", JSON.stringify(data.user));
            // kiểm tra quyền dựa trên id
            if (data.user.id === 1) {
                document.location.href = "/#/admin/news";
            } else {
                document.location.href = "/#/";
            }
        });
    },
};

export default Signin;
