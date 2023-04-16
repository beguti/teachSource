import { ProfileInformation } from "../Components/profileInformation";
import { Uyeler } from "../Components/uyeler";
import { LeftNavBar } from "../Components/leftNav";
import Posts from "../Components/posts";
import { NavBar } from "../Components/navbar";
import { Footer } from "../Components/footer";
import "../Style/profileInformation.css";
import { Reklam } from "../Components/reklam";

export const Main = () => {
  return (
    <div
      style={{ width: "100%", backgroundColor: "rgba(212, 212, 212, 0.486" }}
    >
      <NavBar />
      <br />
      <div
        className="container-xl"
        style={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <div className="row justify-content-md-center">
          <div className="col-md-3 ">
            <div className="row-cols">
              <ProfileInformation id="top" />
            </div>
            <div className="row-cols">
              <LeftNavBar />
            </div>
          </div>
          <div className="col-md-6">
            <Posts />
          </div>
          <div className="col-md-3">
            <div className="row-cols">
              <Uyeler />
            </div>
            <div className="row-cols">
              <Reklam/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
