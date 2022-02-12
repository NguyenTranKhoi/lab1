import toastr from "toastr";
import { data1 } from "../data";
import "toastr/build/toastr.min.css";
import { reRender } from "../ultils";

const header = {
    print() {
        return /* html */ `
        <div class="bg-slate-900 py-4">
        ${data1.map((post) => `
        <img src="${post.img}" alt="" class="mx-auto">
        `)}
        </div>
        <div class="header-bottom bg-orange-600 px-3 flex justify-between items-center">
            <nav class="">
            <ul class="flex">
                <li class="p-3 text-base text-white"><a href="/" class="hover:underline">Trang chủ</a></li>
                <li class="p-3 text-base text-white"><a href="/about" class="hover:underline">Tuyển sinh</a></li>
                <li class="p-3 text-base text-white"><a href="/product" class="hover:underline">Chương trình đào tạo</a>
                </li>
                <li class="p-3 text-base text-white"><a href="/admin/news" class="hover:underline">Admin</a></li>
                <li class="p-3 text-base text-white"><a href="/signin" class="hover:underline">Đăng nhập</a></li>
                <li class="p-3 text-base text-white"><a href="/signup" class="hover:underline">Đăng ký</a></li>
            </ul>
            </nav>
        <div class="header-bottom__search p-3">
          ${localStorage.getItem("user") ? `
            <ul class="flex">
                <li><a  id="account-email" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white"></a></li>
                <li><a  id="logout" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white cursor-pointer">Logout</a></li>
            </ul>
          ` : ""}
        </div>
        </div>
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const loguot = document.querySelector("#logout");
        document.querySelector("#account-email").innerHTML = user.email;
        // logout
        loguot.addEventListener("click", () => {
            toastr.success("logout thành công");
            localStorage.removeItem("user");
            reRender(header, "#header");
        });
    },
};

export default header;
