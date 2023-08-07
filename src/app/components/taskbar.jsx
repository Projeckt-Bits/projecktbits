import Image from "next/image";
import Styles from "./taskbar.module.scss";
import Logo from "../../../public/assets/images/vectors/Projeckt Bits Logo.svg";

export default function taskbar() {
  return (
    <>
      <nav className={Styles.TaskBar}>
        <div className={Styles.LogoContainer}>
          <Image src={Logo} alt="" fill={true}/>
        </div>
      </nav>
    </>
  );
}
