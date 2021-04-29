import React from 'react';
import { useRecoilValue } from 'recoil';
import { locationState } from '../recoil/atoms';
import { destinations } from '../data/destinations';
import { Monster } from '../enums/Monster.enum';
import { Location } from '../enums/Location.enum';
import { monsters } from '../data/monsters';
import styles from './DestinationMonster.module.scss';
import classNames from 'classnames';

interface Props {}
//TODO add ES Lint file from honeylove
const getActiveMonster = (location: Location): Monster | undefined => {
  const availableMonsters = destinations[location].monsters;
  const monsterChance = 1 / destinations[location].safetyLevel;
  const index = Math.random() < monsterChance ? Math.floor(Math.random() * availableMonsters.length) : -1;
  return destinations[location].monsters[index];
};

export const DestinationMonster: React.FC = () => {
  const location = useRecoilValue(locationState);
  const monster = getActiveMonster(location);

  return monster ? (
    <div
      onClick={(e) => {
        e.stopPropagation();
        console.log('clicked!');
      }}
    >
      <img src={monsters[monster].image} style={{ position: 'absolute', bottom: '0' }} className={classNames({ [styles.redShaded]: true })} />
    </div>
  ) : (
    <React.Fragment />
  );
};

//Make the destinations have different chances of showing a monster. Associated with the Destination. Make it a percentage like 0.5 (between 0 and 1)
// This would be on line 16, 1/chance  * availableMonsters.length
// This is  the chance of a monster appearing on a particular DESTINATION

// CSS Image Filter when you click

// Use JavaScript Music and sound API. Load them up as MP3s

/*

.colorRed,.colorBlue, .colorGreen {filter:grayscale(1);}

.colorRed img:hover {filter:hue-rotate(0deg);}

*/
