import { get } from "../api/posts";

const DetailPage = {
    async print(id) {
        const { data } = await get(id);
        return /* html */ `
        <div>
        <img src="${data.img}" alt="" class="w-full">
        <h3 class="pt-2"><a href="" class="text-lg text-orange-700 font-bold">${data.title}</a></h3>
        <p class="pt-2 text-sm">${data.desc}</p>
        </div>
        `;
    },
};

export default DetailPage;
