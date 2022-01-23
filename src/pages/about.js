import banner from "../components/banner";
import header from "../components/header";

const About = {
    print() {
        return /* html */ `
        <header>
            ${header.print()}
        </header>
        ${banner.print()}
        <h1>About Page</h1>
        `;
    },
};
export default About;
