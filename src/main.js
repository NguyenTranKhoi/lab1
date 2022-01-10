import Navigo from "navigo";
import footer from "./components/footer";
import header from "./components/header";
import About from "./pages/about";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/products";

const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
    document.querySelector("#header").innerHTML = header.print();
    document.querySelector("#app").innerHTML = content.print();
    document.querySelector("#footer").innerHTML = footer.print();
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
