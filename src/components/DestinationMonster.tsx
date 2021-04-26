import React from "react";
import { useRecoilValue } from "recoil";
import { locationState } from '../recoil/atoms';
import { destinations } from '../data/destinations';
import { Monster } from "../enums/Monster.enum";
import { Location } from "../enums/Location.enum";
import { monsters } from '../data/monsters';


   interface Props {
    
}
//TODO add ES Lint file from honeylove
const getActiveMonster = (location: Location): Monster | undefined  => {
  const availableMonsters = destinations[location].monsters;
  const monsterChance = 1/(destinations[location].safetyLevel);
  console.log('monsterChance', monsterChance);
  const index = Math.floor(Math.random() * monsterChance * availableMonsters.length);
  // Math.floor takes a number and takes off the trailing number. Math.floor(5.5) is 5 or Math.floor (0.11) is 0
  // Math.random() produces a number between 0 and 1 (0.2939, 0.987)
  // anything.length gives 










  co
  console.log(index);
  return destinations[location].monsters[index];
}


// 0 - wolf
// 1 - bear
// 2 - nothing

export const DestinationMonster: React.FC = () => {
    const location = useRecoilValue(locationState);
    const monster = getActiveMonster(location);

   return monster ? (
      <div>
        <img src={monsters[monster].image} style={ {position: 'absolute', bottom: '0'}}/>
      </div>
    ) : <React.Fragment />;
}

//Make the destinations have different chances of showing a monster. Associated with the Destination. Make it a percentage like 0.5 (between 0 and 1)
// This would be on line 16, 1/chance  * availableMonsters.length
// This is  the chance of a monster appearing on a particular DESTINATION 

// CSS Image Filter when you click



// Use JavaScript Music and sound API. Load them up as MP3s