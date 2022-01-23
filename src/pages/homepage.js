import banner from "../components/banner";
import footer from "../components/footer";
import header from "../components/header";
import newList from "../components/news";

const HomePage = {
    async print() {
        return /* html */ `
        <div class=""container max-w-5xl mx-auto>
            <header>
                ${header.print()}
            </header>
            <div class="banner">
            ${banner.print()}
            </div>
            <div class="news">
            ${await newList.print()}
            </div>
            <div class="footer">
            ${footer.print()}
            </div>
        </div>
        `;
    },
};

export default HomePage;
