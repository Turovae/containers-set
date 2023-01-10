import Team from '../team';

class Character {
  constructor(type) {
    this.type = type;
  }
}

const pikeman = new Character('Pikeman');
const halberdier = new Character('Halberdier');
const archer = new Character('Archer');
const marksman = new Character('Marksman');
const griffin = new Character('Griffin');

const team1 = new Team();

test.each([
  [1, pikeman, [{ type: 'Pikeman' }]],
  [2, halberdier, [{ type: 'Pikeman' }, { type: 'Halberdier' }]],
  [3, archer, [{ type: 'Pikeman' }, { type: 'Halberdier' }, { type: 'Archer' }]],
  [4, marksman, [{ type: 'Pikeman' }, { type: 'Halberdier' }, { type: 'Archer' }, { type: 'Marksman' }]],
  [5, griffin, [{ type: 'Pikeman' }, { type: 'Halberdier' }, { type: 'Archer' }, { type: 'Marksman' }, { type: 'Griffin' }]],
])(
  'Test %d team.add',
  (_, character, expected) => {
    team1.add(character);
    expect(team1.toArray()).toEqual(expected);
  },
);

test('Test team.add with already existing character', () => {
  expect(() => { team1.add(pikeman); }).toThrow('Error! Adding an existing character');
});

test('Test team.addAll', () => {
  const team = new Team();
  team.addAll(pikeman, halberdier, archer, marksman, griffin, archer);
  expect(
    team.toArray(),
  ).toEqual([
    { type: 'Pikeman' },
    { type: 'Halberdier' },
    { type: 'Archer' },
    { type: 'Marksman' },
    { type: 'Griffin' },
  ]);
});

test('Test team.addAll with existing character', () => {
  const team = new Team();
  team.add(pikeman);
  team.addAll(pikeman, halberdier, archer, marksman, griffin, archer);
  expect(
    team.toArray(),
  ).toEqual([
    { type: 'Pikeman' },
    { type: 'Halberdier' },
    { type: 'Archer' },
    { type: 'Marksman' },
    { type: 'Griffin' },
  ]);
});
