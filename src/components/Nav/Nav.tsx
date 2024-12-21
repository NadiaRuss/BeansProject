import useDeviceDetect from './useDeviceDetect';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';


const Nav = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <div>
      {
        isMobile ? <MobileNav /> : <DesktopNav />
      }
    </div>
  );
};

export default Nav;