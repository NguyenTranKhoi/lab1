import banner from "../components/banner";
import header from "../components/header";

const ProductPage = {
    print() {
        return /* html */ `
        <header>
            ${header.print()}
        </header>
        ${banner.print()}
        <h1>Products Page</h1>
        `;
    },
};
export default ProductPage;
