function assessHealth(character) {
  const health = character.health;

  if (health >= 70) {
    return "healthy";
  }
  if (health >= 30) {
    return "wounded";
  } else {
    return "critical";
  }
}

function sortCharactersByHealth(characters) {
  return characters.sort((a, b) => b.health - a.health);
}

import fetchData from './http';

function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }
  return `Информация об уровне временно недоступна`;
}

export { assessHealth, sortCharactersByHealth, getLevel };