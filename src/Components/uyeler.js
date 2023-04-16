import { ListGroup, ListGroupItem, Row } from "reactstrap";
import { useEffect, useState } from "react";
import UserDataService from "../Services/userServices";
import "../Style/profileInformation.css";

export const Uyeler = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await UserDataService.getAllUsers();
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div>
      <h5 style={{ color: "#FF006E" }}>Üyeler</h5>
      <hr style={{ border: "dashed #FF006E" }} />

      <ListGroup>
        {users.map((kullanici) => {
          return (
            <ListGroupItem key={kullanici.id} action href="#">
              <Row className="uyeler">
                <div class="col-md-3">
                  <img
                    src={kullanici.avatar || "https://i.pravatar.cc/300"}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <p className="card-text">{kullanici.name}</p>
                  </div>
                </div>
              </Row>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};
