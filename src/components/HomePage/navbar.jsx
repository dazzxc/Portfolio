import logo from '../../assets/lp.png';
import styles from './navbar.module.css';

const Navbar = ({ menuItems, activeSection }) => {

const menuList = menuItems.map((item) => {

const sectionId = item.href.substring(1);

      return (
            <li key={item.id}>
               <a
                  href={item.href}className={activeSection === sectionId?styles.active: ''}>
                     {item.title}
               </a>
            </li>
      );
   });
   return (
      <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
               <img
                  className={styles.logo}
                  src={logo}
                  alt="logo"
               />
            </div>
            <ul className={styles.navbarMenu}>
               {menuList}
            </ul>
            <div className={styles.navbarSpacer} />
      </nav>
   );
};

export default Navbar;