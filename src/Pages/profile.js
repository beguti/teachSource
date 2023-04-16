import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { auth } from "../Config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavBar } from "../Components/navbar";
import "../Style/profile.css";
import { Footer } from "../Components/footer";

const Profile = () => {
  const [user] = useAuthState(auth);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(212, 212, 212, 0.486",
      }}
    >
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />

      <div class="container emp-profile">
        <div className="menu ">
          <Breadcrumb listTag="div">
            <BreadcrumbItem href="/" tag="a">
              Anasayfa
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              Profilim
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <h3 style={{ textAlign: "center", color: "#FB5607" }}>
          Profilim
        </h3>
        <hr style={{ border: "dashed #FB5607" }} />
        <br />


        <form method="post">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img ">
                <img
                  className="shadow p-3 mb-5"
                  src={user?.photoURL}
                  alt="user"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                <h5>{user?.name}</h5>
                <h6>Normal Üye</h6>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Hakkımda
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-8">
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>Kullanıcı ID:</label>
                    </div>
                    <div class="col-md-6">
                      <p>{user?.uid}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>İsim Soyisim</label>
                    </div>
                    <div class="col-md-6">
                      <p>{user?.displayName}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>{user?.email}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div class="col-md-6">
                      <p>123 456 7890</p>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                ></div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <br />
      <br />
      <Footer />
    </div>
  );
};
export default Profile;
