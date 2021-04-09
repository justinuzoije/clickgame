import { useRecoilState, useSetRecoilState } from "recoil";
import { locationState } from '../recoil/atoms';
import { textState } from '../recoil/atoms';
import { Location } from '../enums/Location.enum';
import { MenuButton } from '../components/MenuButton';
import { destinationState } from '../recoil/atoms';
import { destinations } from '../data/destinations';

   interface Props {
    
}

// A big set of switch statemnts each with a different description. That dpeends on the location
// what they will show in the Text Box area. And then a function that chooses which one to select, and 
// that is what's displayed here (instead of <p>hi</p>)




export const Menu: React.FC = () => {
    const [location, setLocation] = useRecoilState(locationState);
    const locations = [
       { location: Location.Forest1, label: destinations[Location.Forest1].label },
       { location: Location.Forest2, label: destinations[Location.Forest2].label },
       { location: Location.Forest3, label: destinations[Location.Forest3].label },
       { location: Location.Forest4, label: destinations[Location.Forest4].label }
    ];

   return (
    //    <div onClick={clickText}>
       <div>
          {
          locations.map((l, index) => <MenuButton key={index} location={l.location}>{l.label}</MenuButton>)
}
       </div>

   )
}

// function locationState(locationState: any): [any, any] {
//     throw new Error("Function not implemented.");
// }
