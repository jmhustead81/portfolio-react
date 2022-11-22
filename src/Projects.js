import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <Container fixed id="nav-projects">
        <h1>Projects</h1>
        <Card>
          <CardContent>
            <LightGallery
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
              mode="lg-fade"
            >
              <a
                href="javascript()"
                data-lg-size="1263-736"
                className="gallery-item"
                data-src="/images/projects/web-advent.jpg"
                data-sub-html="<h4>Advent.com</h4><p>Advent.com website</p>"
              >
                <img
                  className="img-responsive"
                  alt=""
                  src="/images/projects/web-advent_tn.jpg"
                />
              </a>
              <a
                href="javascript()"
                data-lg-size="1263-736"
                className="gallery-item"
                data-src="/images/projects/web-adventcommunity.jpg"
                data-sub-html="<h4>Advent Community</h4><p>Advent Community website</p>"
              >
                <img
                  className="img-responsive"
                  alt=""
                  src="/images/projects/web-adventcommunity_tn.jpg"
                />
              </a>
              <a
                href="javascript()"
                data-lg-size="1263-736"
                className="gallery-item"
                data-src="/images/projects/web-adventgate.jpg"
                data-sub-html="<h4>Advent.com</h4><p>Advent.com website</p>"
              >
                <img
                  className="img-responsive"
                  alt=""
                  src="/images/projects/web-adventgate_tn.jpg"
                />
              </a>
              <a
                href="javascript()"
                data-lg-size="1263-736"
                className="gallery-item"
                data-src="/images/projects/web-adventgate-reskin.jpg"
                data-sub-html="<h4>Advent.com</h4><p>Advent.com website</p>"
              >
                <img
                  className="img-responsive"
                  alt=""
                  src="/images/projects/web-adventgate-reskin_tn.jpg"
                />
              </a>
              <a
                href="javascript()"
                data-lg-size="1263-736"
                className="gallery-item"
                data-src="/images/projects/web-optimumhit.jpg"
                data-sub-html="<h4>Advent.com</h4><p>Advent.com website</p>"
              >
                <img
                  className="img-responsive"
                  alt=""
                  src="/images/projects/web-optimumhit_tn.jpg"
                />
              </a>
              <a
                href="javascript()"
                data-lg-size="1263-736"
                className="gallery-item"
                data-src="/images/projects/web-optimumhit-portal.jpg"
                data-sub-html="<h4>Advent.com</h4><p>Advent.com website</p>"
              >
                <img
                  className="img-responsive"
                  alt=""
                  src="/images/projects/web-optimumhit-portal_tn.jpg"
                />
              </a>
              <a
                href="javascript()"
                data-lg-size="1263-736"
                className="gallery-item"
                data-src="/images/projects/web-portfoliodata.png"
                data-sub-html="<h4>Portfolio Data</h4><p>Portfolio Data website</p>"
              >
                <img
                  className="img-responsive"
                  alt=""
                  src="/images/projects/web-portfoliodata_tn.jpg"
                />
              </a>
              <a
                href="javascript()"
                data-lg-size="1263-736"
                className="gallery-item"
                data-src="/images/projects/web-skillmarket.jpg"
                data-sub-html="<h4>Advent.com</h4><p>Advent.com website</p>"
              >
                <img
                  className="img-responsive"
                  alt=""
                  src="/images/projects/web-skillmarket_tn.jpg"
                />
              </a>
              <a
                href="javascript()"
                data-lg-size="1263-736"
                className="gallery-item"
                data-src="/images/projects/web-skillmarket-consultants.jpg"
                data-sub-html="<h4>Advent.com</h4><p>Advent.com website</p>"
              >
                <img
                  className="img-responsive"
                  alt=""
                  src="/images/projects/web-skillmarket-consultants_tn.jpg"
                />
              </a>
              <a
                href="javascript()"
                data-lg-size="1263-736"
                className="gallery-item"
                data-src="/images/projects/web-statuspage.jpg"
                data-sub-html="<h4>Advent.com</h4><p>Advent.com website</p>"
              >
                <img
                  className="img-responsive"
                  alt=""
                  src="/images/projects/web-statuspage_tn.jpg"
                />
              </a>
              <a
                href="javascript()"
                data-lg-size="1263-736"
                className="gallery-item"
                data-src="/images/projects/web-uahn.jpg"
                data-sub-html="<h4>Advent.com</h4><p>Advent.com website</p>"
              >
                <img
                  className="img-responsive"
                  alt=""
                  src="/images/projects/web-uahn_tn.jpg"
                />
              </a>
              <a
                href="javascript()"
                data-lg-size="1263-736"
                className="gallery-item"
                data-src="/images/projects/web-uci.jpg"
                data-sub-html="<h4>Advent.com</h4><p>Advent.com website</p>"
              >
                <img
                  className="img-responsive"
                  alt=""
                  src="/images/projects/web-uci_tn.jpg"
                />
              </a>
            </LightGallery>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Projects;
