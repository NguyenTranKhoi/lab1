import Navigo from "navigo";
import About from "./pages/about";
import adminDashboard from "./pages/admin/dashboard";
import AdminAdd from "./pages/admin/news/adminAdd";
import proAdmin from "./pages/admin/news/projake";
import AdminProductPage from "./pages/admin/product";
import AdminProductEdit from "./pages/admin/productEdit";
import DetailPage from "./pages/detail";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/products";
import signin from "./pages/signin";
import signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const render = async (content) => {
    document.querySelector("#app").innerHTML = await content.print();
    if (content.afterRender) content.afterRender();
};

router.on({
    "/": () => {
        render(HomePage);
    },
    "/about": () => {
        render(About);
    },
    "/product": () => {
        render(ProductPage);
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        render(DetailPage.print(+id));
    },
    "/admin/product": () => {
        render(AdminProductPage);
    },
    "/admin/product/:id/edit": ({ data }) => {
        const { id } = data;
        render(AdminProductEdit.print(+id));
    },
    "/signin": () => {
        render(signin);
    },
    "/signup": () => {
        render(signup);
    },
    // "/admin/product/add": () => {
    //     render(AdminProductAdd.print());
    // },
    "/admin/dashboard": () => {
        render(adminDashboard);
    },
    "/admin/news/add": () => {
        render(AdminAdd);
    },
    "/admin/table": () => {
        render(proAdmin);
    },
});

router.resolve();
