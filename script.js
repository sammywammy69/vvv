// Cursor trail effect
const cursor = document.createElement('div');
cursor.style.position = 'absolute';
cursor.style.width = '8px';
cursor.style.height = '8px';
cursor.style.background = '#00ffff';
cursor.style.borderRadius = '50%';
cursor.style.pointerEvents = 'none';
cursor.style.transition = 'transform 0.05s linear';
document.body.appendChild(cursor);

window.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
