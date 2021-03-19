import { useRecoilState, useSetRecoilState } from "recoil";
import { locationState } from '../recoil/atoms';
import { textState } from '../recoil/atoms';
import { Location } from '../enums/Location.enum';

   interface Props {
    
}

// A big set of switch statemnts each with a different description. That dpeends on the location
// what they will show in the Text Box area. And then a function that chooses which one to select, and 
// that is what's displayed here (instead of <p>hi</p>)

export const Menu: React.FC = () => {
    const [location, setLocation] = useRecoilState(locationState);

   return (
    //    <div onClick={clickText}>
       <div>
        <button>Move</button><button>Move</button>
       </div>

   )
}

// function locationState(locationState: any): [any, any] {
//     throw new Error("Function not implemented.");
// }
