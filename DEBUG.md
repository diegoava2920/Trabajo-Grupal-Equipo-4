# Bitácora de debugging
| Bug | Síntoma observado | Herramienta usada | Línea | Causa | Corrección |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | Con 50 inscritos aparece "No hay cupos suficientes" aunque la inscripción es válida | Breakpoint en el `if` de `registrarInscripcion`, Step over / Step into (`mostrarResumen`) / Step out / Resume, panel Scope | `js/debug.js` línea 23 | Con 50 inscritos `cuposDisponibles` vale 0 en Scope; la condición `cuposDisponibles > 0` es falsa cuando queda exactamente 0 cupos | Cambiar a `cuposDisponibles >= 0`. Con 50 muestra "Inscripción exitosa. Cupos disponibles: 0" y con 51 "No hay cupos suficientes". Evidencias: `evidencias/evidencia3.1.png`, `evidencias/evidencia3.1.png` 
## Responsable de cada bug
- Bugs 1 y 2: Estudiante B
- Bug 3: Estudiante A 