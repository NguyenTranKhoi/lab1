import { data } from "../../data";

const AdminProductEdit = {
    print(id) {
        const result = data.find((post) => post.id === id);
        return /* html */ `
        <form>
            <input type="text" class="boder " value="${result.title}" placeholder="Tiêu đề bài viết" id="post-title" /><br/>
            <img src="${result.img}" alt="" />
            <input type="text" class="border" placeholder="Ảnh" id="post-img" /><br/>
            <textarea class="border" cols="30" rows="10" id="post-desc">${result.desc}</textarea><br/>
            <button class="btn">Cập nhật</button>
        </form>
        `;
    },
};

export default AdminProductEdit;
