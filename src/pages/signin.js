import toastr from "toastr";
import { signin } from "../api/user";
import header from "../components/header";
import signinList from "../components/signinList";
import "toastr/build/toastr.min.css";

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
            try {
                // call API login
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                // lưu dữ liệu vào localStorage
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("Bạn đã đăng nhập thành công, chờ 3s để chuyển trang");
                setTimeout(() => {
                    // kiểm tra quyền dựa trên ID
                    if (data.user.id === 1) {
                        document.location.href = "/#/admin/dashboard";
                    } else {
                        document.location.href = "/#/";
                    }
                }, 3000);
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};

export default Signin;
