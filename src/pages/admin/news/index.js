import { remove, getAll } from "../../../api/posts";
import adDashboard from "../../../components/admin/adDashboard";

const AdminNews = {
    async print() {
        const { data } = await getAll();
        return /* html */ `
        <div class="min-h-full">
        ${adDashboard.print()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
                <h2
                class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                >
                Quản lý tin tức
                </h2>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <a href="/admin/news/add" class="sm:ml-3">
                    <button
                        type="button"
                        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Thêm mới
                    </button>
                </a>
            </div>
            </div>
        </div>
        </header>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="px-4 py-6 sm:px-0">
                <table>
                    <thead>
                        <tr>
                         <th>STT</th>
                         <th>Tiêu đề</th>
                         <th>Ảnh</th>
                         <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    ${data.map((post, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${post.title}</td>
                            <td><img src="${post.img}" width="50"/></td>
                            <td>
                                <a href="">Edit</a>
                                <button data-id="${post.id}" class="btn btn-remove">Xoá</button>
                            </td>
                        </tr>
                    `).join("")}
                    </tbody>
                </table>
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
            </div>
            <!-- /End replace -->
        </div>
        </main>
    </div>
        `;
    },
    afterRender() {
        // lấy danh sách buttun sau khi render
        const buttons = document.querySelectorAll(".btn");
        // tạo vòng lặp cho nodelist button
        buttons.forEach((btn) => {
            // lấy id từ thuộc tính data-id của button
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn xoá không");
                if (confirm) {
                    // gọi hàm delete trong folder API và bắn id vào hàm
                    remove(id).then(() => {
                        console.log("Đã xoá thành công");
                    });
                }
            });
        });
    },
};

export default AdminNews;
