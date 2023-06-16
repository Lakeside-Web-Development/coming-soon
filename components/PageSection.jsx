import Header from "./Header";
import Footer from "./Footer";

export default function PageSection({ section }) {
	if (section.__typename === "ComingSoonHeaderRecord") {
		return <Header details={section} />;
	} else if (section.__typename === "FooterRecord") {
		return <Footer details={section} />;
	}
	<></>;
}
