import { orderByPeriod } from '../js/sort';
import { specialCharacters } from '../js/destructuring';

test('test sort', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const test = orderByPeriod(obj, ['name', 'level']);
  expect(test).toEqual(
    [
      { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами
      { key: 'level', value: 2 }, // порядок взят из массива с ключами
      { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
      { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
      { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
    ],
  );
});

test('test sort two', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const test = orderByPeriod(obj, ['attack', 'level', 'name']);
  expect(test).toEqual(
    [
      { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
      { key: 'level', value: 2 }, // порядок взят из массива с ключами
      { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами
      { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
      { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
    ],
  );
});

test('test dectruction', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };
  const test = specialCharacters(character);
  expect(test).toEqual(
    [{
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    }],
  );
});
