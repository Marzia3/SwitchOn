const blmAnimationContainer = document.getElementById('blm-animation');

const animItem = bodymovin.loadAnimation({
  wrapper: blmAnimationContainer,
  animType: 'svg',
  loop: true,
  path: '../../data/observe.json',
});