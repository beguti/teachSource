import {
  CardColumns,
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody,
  CloseButton,
  CardImg,
} from "reactstrap";
import { useEffect, useState } from "react";
import PostDataService from "../Services/postServices";
import alertify from "alertifyjs";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../Config/firebase";

const Posts = ({}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
    getDownloadURL(ref(storage, "posts/image-name"));
  }, []);

  const getPosts = async () => {
    const data = await PostDataService.getAllPosts();
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await PostDataService.deletePost(id);
    alertify.error("Seçtiğiniz post silindi.", 5);
    getPosts();
  };

  const images = ["https://picsum.photos/seed/picsum/200/300","https://source.unsplash.com/random/800x800"];
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
        border: "0.5px solid #D9D8C7",
        boxShadow: "1px 1px 10px 1px #ffbe0b2d",
      }}
    >
      <CardColumns>
        {posts.map((doc) => {
          return (
            <Card
              key={doc.id}
              style={{
                width: "100%",
                backgroundColor: "#fff8f0",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "10px",
                border: "0.5px solid #D9D8C7",
              }}
            >
              <div className=" d-md-flex justify-content-md-end">
                <CloseButton onClick={(e) => deleteHandler(doc.id)} />
                Sil
              </div>

              <CardBody>
                <CardTitle tag="h5">{doc.title}</CardTitle>
                <hr />
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  <strong>Ders: </strong>
                  {doc.lesson}
                </CardSubtitle>
                <CardText>{doc.explanation}</CardText>
                <CardSubtitle
                  className="d-md-flex justify-content-md-end"
                  tag="h6"
                >
                  {doc.createBy}
                </CardSubtitle>
              </CardBody>
              <CardImg
                alt="Card image cap"
                src={selectedImage}
                style={{
                  height: 180,
                }}
                bot
                width="100%"
              />
            </Card>
          );
        })}
      </CardColumns>

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
