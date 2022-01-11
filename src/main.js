import Navigo from "navigo";
import footer from "./components/footer";
import header from "./components/header";
import About from "./pages/about";
import AdminProductPage from "./pages/admin/product";
import AdminProductEdit from "./pages/admin/productEdit";
import DetailPage from "./pages/detail";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/products";

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
});

router.resolve();
