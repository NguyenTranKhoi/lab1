import { data } from "../data";

const DetailPage = {
    print(id) {
        const result = data.find((post) => post.id === id);
        return /* html */ `
        <div>
        <img src="${result.img}" alt="" class="w-full">
        <h3 class="pt-2"><a href="" class="text-lg text-orange-700 font-bold">${result.title}</a></h3>
        <p class="pt-2 text-sm">${result.desc}</p>
        <a href="/admin/product/${result.id}/edit" class="bg-slate-900 text-white border-solid border border-white">Sửa</a>
        </div>
        `;
    },
};

export default DetailPage;
