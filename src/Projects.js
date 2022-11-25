import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <div id="nav-projects" className="menu-anchor"></div>
      <Container fixed>
        <h1>
          <DeveloperBoardIcon
            className="header-icon"
            sx={{ width: 32, height: 32 }}
          />
          Projects
        </h1>
        <LinearProgress color="secondary" aria-label="projects-decorative" />
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          mode="lg-fade"
          licenseKey="607EE3A0-C59349B4-B11314B6-4F98A9EF"
        >
          <a
            href="javascript()"
            aria-label="projects-view"
            data-lg-size="1263-736"
            className="gallery-item"
            data-src="/images/projects/web-statuspage.jpg"
            data-sub-html="<h4>Status Page</h4><strong>Site for SS&C Advent Clients to view system statuses.</strong><p>Made with .NET Core and AngularJS.</p>"
          >
            <img
              className="img-responsive"
              alt=""
              src="/images/projects/web-statuspage_tn.jpg"
              width="250"
              height="135"
            />
          </a>
          <a
            href="javascript()"
            aria-label="projects-view"
            data-lg-size="1263-736"
            className="gallery-item"
            data-src="/images/projects/web-adventcommunity.jpg"
            data-sub-html="<h4>Advent Community</h4><strong>Social, search, and documentation for SS&C Advent Clients.</strong><p>Made with .NET, jQuery, KendoUI, and AngularJS.</p>"
          >
            <img
              className="img-responsive"
              alt=""
              src="/images/projects/web-adventcommunity_tn.jpg"
              width="250"
              height="146"
            />
          </a>
          <a
            href="javascript()"
            aria-label="projects-view"
            data-lg-size="1263-736"
            className="gallery-item"
            data-src="/images/projects/web-adventgate.jpg"
            data-sub-html="<h4>Advent Gate</h4><strong>Internal site for SS&C Advent Employees.</strong><p>Made with .NET, jQuery, KendoUI, and Angular2.</p>"
          >
            <img
              className="img-responsive"
              alt=""
              src="/images/projects/web-adventgate_tn.jpg"
              width="250"
              height="123"
            />
          </a>
          <a
            href="javascript()"
            aria-label="projects-view"
            data-lg-size="1263-736"
            className="gallery-item"
            data-src="/images/projects/web-adventgate-reskin.jpg"
            data-sub-html="<h4>Advent Gate (Reskin)</h4><strong>Internal site for SS&C Advent Employees.</strong><p>Made with .NET, jQuery, KendoUI, and Angular2.</p>"
          >
            <img
              className="img-responsive"
              alt=""
              src="/images/projects/web-adventgate-reskin_tn.jpg"
              width="250"
              height="121"
            />
          </a>
          <a
            href="javascript()"
            aria-label="projects-view"
            data-lg-size="1263-736"
            className="gallery-item"
            data-src="/images/projects/web-portfoliodata.png"
            data-sub-html="<h4>Portfolio Data Admin</h4><strong>Data view, setup, and configuration for SS&C Advent Client Portfolios.</strong><p>Made with .NET, Bootstrap, and jQuery.</p>"
          >
            <img
              className="img-responsive"
              alt=""
              src="/images/projects/web-portfoliodata_tn.jpg"
              width="250"
              height="122"
            />
          </a>
          <a
            href="javascript()"
            aria-label="projects-view"
            data-lg-size="1263-736"
            className="gallery-item"
            data-src="/images/projects/web-advent.jpg"
            data-sub-html="<h4>Advent.com</h4><strong>Main brand site for Advent Software.</strong><p>Made with a custom implementation of Umbraco CMS.</p>"
          >
            <img
              className="img-responsive"
              alt=""
              src="/images/projects/web-advent_tn.jpg"
              width="250"
              height="147"
            />
          </a>
          <a
            href="javascript()"
            aria-label="projects-view"
            data-lg-size="1263-736"
            className="gallery-item"
            data-src="/images/projects/web-optimumhit.jpg"
            data-sub-html="<h4>Optimum Healthcare IT</h4><strong>Main brand site for Optimum HIT.</strong><p>Made with a heavily customized Wordpress template.</p>"
          >
            <img
              className="img-responsive"
              alt=""
              src="/images/projects/web-optimumhit_tn.jpg"
              width="250"
              height="120"
            />
          </a>
          <a
            href="javascript()"
            aria-label="projects-view"
            data-lg-size="1263-736"
            className="gallery-item"
            data-src="/images/projects/web-optimumhit-portal.jpg"
            data-sub-html="<h4>Optimum Healthcare IT Intranet</h4><strong>Internal site for employees of Optimum HIT.</strong><p>Made with a heavily customized Wordpress template.</p>"
          >
            <img
              className="img-responsive"
              alt=""
              src="/images/projects/web-optimumhit-portal_tn.jpg"
              width="250"
              height="121"
            />
          </a>
          <a
            href="javascript()"
            aria-label="projects-view"
            data-lg-size="1263-736"
            className="gallery-item"
            data-src="/images/projects/web-skillmarket.jpg"
            data-sub-html="<h4>SkillMarket</h4><strong>Main site for Optimum HIT's SkillMarket brand.</strong><p>Made with ReactJS and KendoUI.</p>"
          >
            <img
              className="img-responsive"
              alt=""
              src="/images/projects/web-skillmarket_tn.jpg"
              width="250"
              height="124"
            />
          </a>
          <a
            href="javascript()"
            aria-label="projects-view"
            data-lg-size="1263-736"
            className="gallery-item"
            data-src="/images/projects/web-skillmarket-consultants.jpg"
            data-sub-html="<h4>SkillMarket Consultants</h4><strong>Client view site for Optimum HIT's SkillMarket brand.</strong><p>Made with ReactJS and KendoUI.</p>"
          >
            <img
              className="img-responsive"
              alt=""
              src="/images/projects/web-skillmarket-consultants_tn.jpg"
              width="250"
              height="123"
            />
          </a>
          <a
            href="javascript()"
            aria-label="projects-view"
            data-lg-size="1263-736"
            className="gallery-item"
            data-src="/images/projects/web-uahn.jpg"
            data-sub-html="<h4>Clearsense UAHN</h4><strong>Data dashboard for University of Arizona Healthcare Network, a Clearsense prospective client.</strong><p>Made with jQuery and KendoUI.</p>"
          >
            <img
              className="img-responsive"
              alt=""
              src="/images/projects/web-uahn_tn.jpg"
              width="250"
              height="102"
            />
          </a>
          <a
            href="javascript()"
            aria-label="projects-view"
            data-lg-size="1263-736"
            className="gallery-item"
            data-src="/images/projects/web-uci.jpg"
            data-sub-html="<h4>Clearsense UAHN</h4><strong>Data dashboard for University of California Irvine, a Clearsense prospective client.</strong><p>Made with jQuery and KendoUI.</p>"
          >
            <img
              className="img-responsive"
              alt=""
              src="/images/projects/web-uci_tn.jpg"
              width="250"
              height="113"
            />
          </a>
        </LightGallery>
      </Container>
    </div>
  );
}

export default Projects;
