import axios from "axios";
import { add } from "../../../api/posts";
import adDashboard from "../../../components/admin/adDashboard";

const AdminAdd = {
    print() {
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
                        Thêm mới
                        </h2>
                    </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/" class="sm:ml-3">
                            <button
                                type="button"
                                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Quay lại
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
                <form id="form-add-post">
                    <input type="text" class="border border-black" id="title-post" placeholder="Title"/><br />
                    <div class="w-3xl grid grid-cols-2 gap-8">
                    <div><input type="file" class="border border-black" id="img-post" /></div>
                    <div><img width="200" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/></div>
                    </div>
                    <textarea name="" cols="30" rows="10" class="border border-black" id="desc-post" placeholder="Description"></textarea><br />
                    <button>Thêm</button>
                </form>
                <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                </div>
                <!-- /End replace -->
            </div>
        </main>
        </div>
        `;
    },
    afterRender() {
        // console.log(document.querySelector('#form-add-post'));
        const formAdd = document.querySelector("#form-add-post");
        const imgPost = document.querySelector("#img-post");
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dqd4urvf6/image/upload";
        const CLOUDINARY_PRESET = "zmppimam";

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgPost.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call api cloudinary
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/x-www-form-endcoded",
                },
            });
            // call api thêm bài viết
            add({
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            });
        });

        // imgPost.addEventListener("change", (e) => {
        //     const file = e.target.files[0];
        //     console.log(file);
        //     const formData = new FormData();
        //     formData.append("file", file);
        //     formData.append("upload_preset", "zmppimam");
        //     axios({
        //         url: "https://api.cloudinary.com/v1_1/dqd4urvf6/image/upload",
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/x-www-form-endcoded",
        //         },
        //         data: formData,
        //     })
        //         .then((res) => {
        //             console.log(res.data.secure_url);
        //             imgPreview.src = res.data.secure_url;
        //             // eslint-disable-next-line no-shadow
        //             formAdd.addEventListener("submit", (e) => {
        //                 e.preventDefault();
        //                 add({
        //                     title: document.querySelector("#title-post").value,
        //                     img: res.data.secure_url,
        //                     desc: document.querySelector("#desc-post").value,
        //                 });
        //             });
        //         })
        //         .catch((error) => console.log(error));
        // });
    },
};

export default AdminAdd;
