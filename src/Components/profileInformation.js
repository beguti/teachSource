import { auth } from "../Config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../Style/profileInformation.css";
import { Spinner } from "reactstrap";

export const ProfileInformation = () => {
  /*Kullanıcı hooks*/
  const [user, ] = useAuthState(auth);

  return (
    <div>
      <h5 style={{ textAlign: "right", color: "#3A86FF" }}>Profilim</h5>
      <hr style={{ border: "dashed #3A86FF" }} />
      <div class="d-flex justify-content-center align-items-center">
        <div class="card">
          <div class="upper">
            <img src="https://picsum.photos/300/100/?blur" class="img-fluid" />
          </div>

          <div class="user text-center">
            <div class="profile">
              <img
                src={
                  user?.photoURL ||
                  "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png"
                }
                class="rounded-circle"
                width="80"
              />
            </div>
          </div>

          <div class="mt-5 text-center">
            <h4 class="mb-0">{user?.displayName}</h4>
            <span class="text-muted d-block mb-2">{user?.email}</span>

            <div class="d-flex justify-content-between align-items-center mt-4 px-4">
              <div class="stats">
                <h6 class="mb-0">Takipçi</h6>
                <span>25</span>
              </div>

              <div class="stats">
                <h6 class="mb-0">Paylaşımlar</h6>
                <span>12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
