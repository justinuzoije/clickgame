import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { locationState } from '../recoil/atoms';
import { monsterHealthState } from '../recoil/atoms';
import { destinations } from '../data/destinations';
import { MonsterKey } from '../enums/MonsterKey.enum';
import { Location } from '../enums/Location.enum';
import { monsters, Monster } from '../data/monsters';
import styles from './DestinationMonster.module.scss';
import classNames from 'classnames';

interface Props {}

const getActiveMonsterKey = (location: Location): MonsterKey | undefined => {
  const availableMonsters = destinations[location].monsters;
  const monsterChance = destinations[location].dangerLevel / 100;
  const index = Math.random() < monsterChance ? Math.floor(Math.random() * availableMonsters.length) : -1;
  return destinations[location].monsters[index];
};

export const DestinationMonster: React.FC = () => {
  const location = useRecoilValue(locationState);

  const [animateDamaged, setAnimateDamaged] = useState(false);
  const [monster, setMonster] = useState<Monster | undefined>();
  const [monsterDamage, setMonsterDamage] = useState<number>(0);

  useEffect(() => {
    setAnimateDamaged(false);
    const activeMonsterKey = getActiveMonsterKey(location);
    setMonster(activeMonsterKey && monsters[activeMonsterKey]);
    setMonsterDamage(0);
  }, [location]);

  const getMonsterHealth = (): number | undefined => {
    return monster ? Math.max(monster.hp - monsterDamage, 0) : undefined;
  };

  const isMonsterDead = (): boolean => {
    const monsterHealth = getMonsterHealth();
    return (typeof(monsterHealth) === 'number' && monsterHealth < 1);
  }

  return monster ? (
    <div
      onClick={(e) => {
        const monsterHealth = getMonsterHealth();
        if (monsterHealth && monsterHealth > 0) {
          e.stopPropagation();
          setAnimateDamaged(false);
          setMonsterDamage(monsterDamage + 1);
          setTimeout(() => setAnimateDamaged(true), 50);
        }
      }}
    >
      <img src={monster.image} style={{ position: 'absolute', bottom: '0' }} className={classNames({ [styles.redShaded]: animateDamaged, [styles.dead]: isMonsterDead() })} alt="monster" />
      <p>{monster.description}</p>
      <p>HP: {getMonsterHealth()}</p>
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



// css blurry filter, similar to red filters. Different kinds of blurs

// Next task is to make monster have graphics as it goes away . Step 1 make it disappear. Step 2 add animation for when it does
