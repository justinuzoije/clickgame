import { useRecoilState, useSetRecoilState } from "recoil";
import { locationState } from '../recoil/atoms';
import { Location } from '../enums/Location.enum';
import { destinations } from '../data/destinations';
import { DestinationMonster } from "./DestinationMonster";

   interface Props {
    
}




export const Screen: React.FC = () => {
    const [location, setLocation] = useRecoilState(locationState); //gets both
    //const location = useRecoilValue(locationState); // to just get the location
    //const setLocation = useSetRecoilState(locationState); // to just set the location
    
    const move = (e: React.MouseEvent) => {
        //console.log("Walking...");
    }

   return (
       <div onClick={move}>
        <img style={ {width: 'calc(100vh * 1.497)', height: '100vh'} } src={destinations[location].image}/>
        <DestinationMonster />
       </div>

   )
}
