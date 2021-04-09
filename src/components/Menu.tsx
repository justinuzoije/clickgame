import { useRecoilState, useSetRecoilState } from "recoil";
import { locationState } from '../recoil/atoms';
import { textState } from '../recoil/atoms';
import { Location } from '../enums/Location.enum';
import { MenuButton } from '../components/MenuButton';
import { destinationState } from '../recoil/atoms';
import { destinations } from '../data/destinations';

   interface Props {
    
}

export const Menu: React.FC = () => {
    const [location, setLocation] = useRecoilState(locationState);
    const connections = destinations[location].connections;

   return (
    //    <div onClick={clickText}>
       <div>
          {
          connections.map((l, index) => <MenuButton key={index} location={l}>{destinations[l].label}</MenuButton>)
            }
       </div>

   )
}
