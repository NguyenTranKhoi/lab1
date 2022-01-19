import adDashboard from "../../../components/admin/adDashboard";
import AdminProductTable from "../../../components/admin/product";

const proAdmin = {
    print() {
        return /* html */ `
            ${adDashboard.print()}
            ${AdminProductTable.print()}
        `;
    },
};

export default proAdmin;
