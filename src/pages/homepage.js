import banner from "../components/banner";
import footer from "../components/footer";
import newList from "../components/news";

const HomePage = {
    print() {
        return /* html */ `
        <div class="banner">
        ${banner.print()}
        </div>
        <div class="news">
        ${newList.print()}
        </div>
        <div class="footer">
        ${footer.print()}
        </div>
        `;
    },
};

export default HomePage;
