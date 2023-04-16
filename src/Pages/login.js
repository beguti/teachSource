import "../Style/login.css";
import { auth, provider, db } from "../Config/firebase";
import { signInWithPopup } from "firebase/auth";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";
import alertify from "alertifyjs";

export default function Login() {
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      alertify.success("Giriş yapıldı", 1);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
          avatar: user.photoURL,
        });
      }
    } catch (err) {
      console.error(err);
      alertify.error("Giriş yapılamadı", 1);
    }
  };

  return (
    <div className="loginPage">
      <h3>Google Hesabı ile Giriş </h3>
      <hr />
      <div className="logo">
        <img
        src="https://images.vexels.com/media/users/3/137615/isolated/preview/5af2a9cbd8cd93aa90889fbc05656cb5-cubo-de-logotipo-abstrato-geometrico.png"
        alt="Logo"
        class="d-inline-block "
      />
      <p>TeachSource</p>
      </div>
      
      <button className=" buton" onClick={signInWithGoogle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-google"
          viewBox="0 0 16 16"
        >
          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
        </svg>{" "}
        Google ile Giriş Yap
      </button>
    </div>
  );
}
