import Navigo from "navigo";
import About from "./pages/about";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/products";

const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
    document.querySelector("#app").innerHTML = content.print();
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
});

router.resolve();
