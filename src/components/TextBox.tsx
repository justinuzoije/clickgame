import { useRecoilState, useSetRecoilState } from "recoil";
import { locationState } from '../recoil/atoms';
import { destinationState } from '../recoil/atoms';
import { textState } from '../recoil/atoms';
import { Location } from '../enums/Location.enum';
import { destinations } from '../data/destinations';

   interface Props {
    
}

export const TextBox: React.FC = () => {
    const [location, setLocation] = useRecoilState(locationState);
    const [destination, setDestination] = useRecoilState(destinationState);

   return (
    //    <div onClick={clickText}>
       <div>
        <h2>{destinations[location].label}:</h2>
        <p>{destinations[location].description}</p> 
       </div>

   )
}
