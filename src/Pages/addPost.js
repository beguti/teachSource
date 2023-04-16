import { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { auth, storage } from "../Config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";
import { NavBar } from "../Components/navbar";
import PostDataService from "../Services/postServices";
import "../Style/addPost.css";
import { Footer } from "../Components/footer";

const AddPost = () => {
  const [user] = useAuthState(auth);

  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [lesson, setLesson] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !explanation) {
      alert("Lütfen bilgilerinizi girdiğinizden emin olunuz.");
      return;
    }
    const newPost = {
      title: title,
      explanation: explanation,
      lesson: lesson,
      file: file,
      createBy: user?.displayName,
    };

    try {
      await PostDataService.addPost(newPost);
      alertify.success("İşleminiz başarıyla gerçekleştirildi.", 2);

      navigate("/");
    } catch {
      console.log(e);
      alertify.error("İşleminiz başarısız oldu.");
    }
  };

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
      <div className="materyalOlustur">
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
          Materyal Oluştur
        </h3>
        <hr style={{ border: "dashed #FB5607" }} />
        <br />

        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label for="postTitle" sm={3}>
              Başlık:
            </Label>
            <Col sm={9}>
              <Input
                id="postTitle"
                name="title"
                placeholder="Materyalinizin başlığını giriniz... "
                type="text"
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="postExplanation" sm={3}>
              Açıklama:
            </Label>
            <Col sm={9}>
              <Input
                id="postExplanation"
                name="explanation"
                placeholder="Materyalinizin açıklamasını giriniz..."
                type="textarea"
                value={explanation}
                onChange={(e) => setExplanation(e.currentTarget.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="postLesson">Ders:</Label>
            <Input
              id="postLesson"
              name="lesson"
              type="select"
              value={lesson}
              onChange={(e) => setLesson(e.currentTarget.value)}
            >
              <option>Matematik</option>
              <option>Kimya</option>
              <option>Biyoloji</option>
              <option>Türkçe</option>
              <option>Bilişim Teknolojileri</option>
              <option>Edebiyat</option>
              <option>Sosyal Bilgiler</option>
              <option>Fizik</option>
              <option>Geometri</option>
              <option>Coğrafya</option>
              <option>Diğer</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="postFile">Dosya:</Label>
            <Input
              id="postFile"
              name="file"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <FormText>
              Dosyanızın formatı; .jpg, .png, .gif, .doc, .xml, .pdf .zip, .rar
              vb. olmalıdır.
            </FormText>
          </FormGroup>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button type="submit" className=" me-md-2 buton">
              Paylaş
            </button>
          </div>
        </Form>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};
export default AddPost;
