export const Footer = () => {
  return (
    <div
      style={{
        clear: "both",
        width: "100%",
        padding: "10px",
        backgroundColor: "mintcream",
        marginTop: "20px",
      }}
    >
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top light">
        <p class="col-md-4 mb-0 text-body-secondary">
          &copy; 2023 TeachSource
          <p>By Begüm İbrişim</p>
        </p>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a href="/" class="nav-link px-2 text-body-secondary">
              Anasayfa
            </a>
          </li>
          <li class="nav-item">
            <a href="/addPost" class="nav-link px-2 text-body-secondary">
              Materyal Ekleme
            </a>
          </li>
          <li class="nav-item">
            <a href="/profile" class="nav-link px-2 text-body-secondary">
              Profilim
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
