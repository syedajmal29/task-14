import "bootstrap-icons/font/bootstrap-icons.css";
function Header({addcount}){
    
    
    return <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">All Products</a></li>
            <li><a class="dropdown-item" href="#">Popular Items</a></li>
            <li><a class="dropdown-item" href="#">New Arrivals</a></li>
          </ul>
        </li>
      </ul>
      
           
      <form class="d-flex ms-auto">
                        <button class="btn btn-outline-dark">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{addcount}</span>
                        </button>
                    </form>
    </div>
  </div>
</nav>
    
}

export default Header