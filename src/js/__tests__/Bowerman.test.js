import Bowerman from '../Bowerman';
test('Получим объект Bowerman', () => {
  const description = new Bowerman('bowerman');
  const result = {
    name: 'bowerman', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(description).toEqual(result);
});