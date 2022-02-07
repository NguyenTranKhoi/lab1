import Navigo from "navigo";
import About from "./pages/about";
import adminDashboard from "./pages/admin/dashboard";
import AdminAdd from "./pages/admin/news/adminAdd";
import adminEditPost from "./pages/admin/news/adminEdit";
import proAdmin from "./pages/admin/news/projake";
import AdminProductPage from "./pages/admin/product";
import AdminProductEdit from "./pages/admin/productEdit";
import DetailPage from "./pages/detail";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/products";
import signin from "./pages/signin";
import signup from "./pages/signup";
import AdminNews from "./pages/admin/news/index";

const router = new Navigo("/", { linksSelector: "a" });

const render = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.print(id);
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
        render(DetailPage, id);
    },
    "/admin/product": () => {
        render(AdminProductPage);
    },
    "/admin/product/:id/edit": ({ data }) => {
        const { id } = data;
        render(AdminProductEdit, id);
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
    "/admin/news/:id/edit": ({ data }) => render(adminEditPost, data.id),
    "/admin/news": () => {
        render(AdminNews);
    },
});

router.resolve();
