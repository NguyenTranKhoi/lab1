import Navigo from "navigo";
import footer from "./components/footer";
import header from "./components/header";
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

const render = (content) => {
    document.querySelector("#header").innerHTML = header.print();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = footer.print();
};

router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/about": () => {
        render(About.print());
    },
    "/product": () => {
        render(ProductPage.print());
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        render(DetailPage.print(+id));
    },
    "/admin/product": () => {
        render(AdminProductPage.print());
    },
    "/admin/product/:id/edit": ({ data }) => {
        const { id } = data;
        render(AdminProductEdit.print(+id));
    },
    "/signin": () => {
        render(signin.print());
    },
    "/signup": () => {
        render(signup.print());
    },
    // "/admin/product/add": () => {
    //     render(AdminProductAdd.print());
    // },
    "/admin/dashboard": () => {
        render(adminDashboard.print());
    },
    "/admin/news/add": () => {
        render(AdminAdd.print());
    },
    "/admin/table": () => {
        render(proAdmin.print());
    },
});

router.resolve();
