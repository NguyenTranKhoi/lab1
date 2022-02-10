import { data1 } from "../data";

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
            <ul class="flex">
                <li><a  id="account-email" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white"></a></li>
            </ul>
        <div class="header-bottom__search p-3">
          <form action="">
            <input type="text" class="w-48" required>
            <button class="bg-slate-900 w-24 text-white border-solid border border-white">TÌM KIẾM</button>
          </form>
        </div>
        </div>
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        document.querySelector("#account-email").innerHTML = user.email;
    },
};

export default header;
