import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="footer-content">
      <div>
        <ul className="social-media">
          <li className="a"><p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p></li>
          <li><a  className="a"href="#">Facebook</a></li>
          <li><a className="a"href="#">Instagram</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

