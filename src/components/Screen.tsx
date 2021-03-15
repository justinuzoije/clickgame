import { useRecoilState, useSetRecoilState } from "recoil";
import { locationState } from '../recoil/atoms';

   interface Props {
    
}




export const Screen: React.FC = () => {
    const [location, setLocation] = useRecoilState(locationState); //gets both
    //const location = useRecoilValue(locationState); // to just get the location
    //const setLocation = useSetRecoilState(locationState); // to just set the location
    
    const move = (e: React.MouseEvent) => {
        console.log("Walking...");
        setLocation('forest.jpg');
    }

   return (
       <div onClick={move}>
        <img style={ {width: 'calc(100vh * 1.497)', height: '100vh'} } src={location}/>
       </div>

   )
}

// function locationState(locationState: any): [any, any] {
//     throw new Error("Function not implemented.");
// }
