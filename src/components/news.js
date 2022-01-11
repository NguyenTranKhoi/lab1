import { data } from "../data";

const newList = {
    print() {
        return /* html */ `
        <h2 class="uppercase font-bold text-xl my-5 text-slate-900">Tin tức học tập</h2>
        <div class="grid md:grid-cols-3 gap-8">
        ${data.map((post) => `
        <div class="border-solid border border-slate-400 p-6">
        <img src="${post.img}" alt="">
        <h3 class="pt-2"><a href="/product/${post.id}" class="text-base text-orange-700 font-bold">${post.title}</a></h3>
        <p class="pt-2 text-sm">${post.desc}</p>
        </div>
        `).join("")}
        </div>
        <h2 class="uppercase font-bold text-xl my-5 text-slate-900">Hoạt động sinh viên</h2>
        <div class="grid md:grid-cols-3 gap-8">
        ${data.map((post) => `
        <div class="border-solid border border-slate-400 p-6">
        <img src="${post.img}" alt="">
        <h3 class="pt-2"><a href="/product/${post.id}" class="text-base text-orange-700 font-bold">${post.title}</a></h3>
        <p class="pt-2 text-sm">${post.desc}</p>
        </div>
        `).join("")}
        </div>
        `;
    },
};
export default newList;
