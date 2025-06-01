```js
function iniciarSesion() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if(user === 'jeckson' && pass === '1234') {
    alert('¡Bienvenido, Jeckson!');
    mostrarTareas();
  } else {
    alert('Usuario o contraseña incorrectos');
  }
}

function mostrarTareas() {
  const tareas = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
  const lista = document.getElementById('tareas');
  lista.innerHTML = '';
  tareas.forEach(tarea => {
    const li = document.createElement('li');
    li.textContent = tarea;
    lista.appendChild(li);
  });
}
```
