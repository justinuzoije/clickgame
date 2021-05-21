import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { locationState } from '../recoil/atoms';
import { monsterHealthState } from '../recoil/atoms';
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
  const monsterChance = destinations[location].dangerLevel / 100;
  const index = Math.random() < monsterChance ? Math.floor(Math.random() * availableMonsters.length) : -1;
  return destinations[location].monsters[index];
};

export const DestinationMonster: React.FC = () => {
  const location = useRecoilValue(locationState);

  const [isDamaged, setIsDamaged] = useState(false);
  const [monster, setMonster] = useState<Monster | undefined>();
  const [monsterHealth, setMonsterHealth] = useState<number | undefined>();

  useEffect(() => {
    setIsDamaged(false);
    const activeMonster = getActiveMonster(location);
    setMonster(activeMonster);
    if (activeMonster) {
      setMonsterHealth(monsters[activeMonster].hp);
    }
  }, [location]);

  const decrementHealth = (healthValue: number): number | undefined => {
    let newHealth = healthValue--;
    return newHealth;
  };

  return monster ? (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsDamaged(false);
        console.log('Hit...');
        // decrementHealth(monster);
        setTimeout(() => setIsDamaged(true), 50);
      }}
    >
      <img
        src={monsters[monster].image}
        style={{ position: 'absolute', bottom: '0' }}
        className={classNames({ [styles.redShaded]: isDamaged })}
        alt="monster"
      />
      <p>{monsters[monster].description}</p>
      <p>HP: {monsters[monster].hp}</p>
    </div>
  ) : (
    <React.Fragment />
  );
};

// Use JavaScript Music and sound API. Load them up as MP3s

/*

.colorRed,.colorBlue, .colorGreen {filter:grayscale(1);}

.colorRed img:hover {filter:hue-rotate(0deg);}

*/

// Next Assignment:  Give wolf like 5 hp, 10hp, for each click do 1dmg. Then death animation possibly with blur filter
// And wants the hp to be randomly 5 + or - a number between 1 and 3

// Baby steps would be to make the console say OUCH when you lcik on a monster
// Then give each monster a static hp
// Then make the console display the static HP on click
// Then make teh console subtract 1 from HP per click (goes into negative)

// css blurry filter, similar to red filters. Different kinds of blurs
