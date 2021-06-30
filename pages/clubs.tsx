// components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Layout/Container";
import Club from "../components/Club";

// images
import foss from "../public/clubs/foss.png";
import mozilla from "../public/clubs/mozilla.png";
import ms from "../public/clubs/ms.png";
import sliit from "../public/clubs/sliit.png";
import wif from "../public/clubs/wif.png";

const ClubsPage = (): JSX.Element => {
  return (
    <Layout title="SLIIT RSVP | Clubs">
      <Navbar />
      <section
        style={{ backgroundImage: "url(/patterns/clubs.svg)" }}
        className="bg-no-repeat bg-right-top bg-cover py-10"
      >
        <Container>
          <div className="grid grid-cols-2 grid-rows-1 md:gap-8 sm:gap-6 gap-5 max-w-4xl mx-auto">

            <Club
              logo={foss}
              title="SLIIT FOSS Community"
            />
            <Club
              logo={mozilla}
              title="Mozilla Campus Club"
            />
            <Club
              logo={ms}
              title="MS Club of SLIIT"
            />
            <Club
              logo={wif}
              title="SLIIT Women in FOSS Community"
            />
            <Club
              logo={sliit}
              title="Other Societies"
            />
          </div>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default ClubsPage;
