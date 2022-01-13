import productAdd from "../../components/admin/productAdd";

const AdminProductAdd = {
    print() {
        return /* html */ `
            <form>
                ${productAdd.print()}
            </form>
        `;
    },
};

export default AdminProductAdd;
