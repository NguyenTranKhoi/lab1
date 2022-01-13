import adDashboard from "../../components/admin/adDashboard";

const adminDashboard = {
    print() {
        return /* html */ `
            <div>
                ${adDashboard.print()}
            </div>
        `;
    },
};

export default adminDashboard;
