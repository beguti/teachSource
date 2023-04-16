import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import { useEffect, useState } from "react";
import PostDataService from "../Services/postServices";

export const LeftNavBar = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const data = await PostDataService.getAllPosts();
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div>
      <h5 style={{ textAlign: "right", color: "#8338EC" }}>Materyaller</h5>
      <hr style={{ border: "dashed #8338EC" }} />
      <ListGroup style={{ fontSize:"15px", }}
      >
        {posts.map((doc) => {
          return (
            <ListGroupItem key={doc.id} action tag="button">
              {doc.title}
              <Badge pill color="info">2</Badge>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};
