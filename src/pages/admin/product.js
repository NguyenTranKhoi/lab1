import AdminProduct from "../../components/admin/product";

const AdminProductPage = {
    print() {
        return /* html */ `
        <h2>Quản lý Product</h2>
        ${AdminProduct.print()}
        `;
    },
};

export default AdminProductPage;
