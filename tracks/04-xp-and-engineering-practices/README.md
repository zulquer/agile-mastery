# 🏃 Agile Level 04: Extreme Programming (XP) y Prácticas Técnicas Senior

Por qué la gestión ágil sin excelencia técnica colapsa en "Flaccid Scrum" y cómo las prácticas de Extreme Programming sostienen la velocidad de entrega en el tiempo.

---

## ⚙️ 1. El Problema del "Flaccid Scrum" (Martin Fowler)

Muchos equipos adoptan Scrum a nivel de gestión (reuniones diarias, sprints de 2 semanas, tickets en Jira), pero descuidan por completo las prácticas de ingeniería de software.
- **Consecuencia**: Con cada sprint que pasa, la base de código se vuelve más frágil, la deuda técnica se dispara y la velocidad de entrega cae en picado.
- **La Solución**: Integrar **Extreme Programming (XP)**, la metodología ágil centrada en la disciplina técnica del código.

---

## 🛠️ 2. Las Prácticas Esenciales de XP para un Senior Engineer

```
                 ┌───────────────────────────────┐
                 │       Valores de Negocio      │
                 └──────────────┬────────────────┘
                                │
     ┌──────────────────────────┴──────────────────────────┐
     ▼                                                     ▼
[ Test-Driven Development (TDD) ]         [ Trunk-Based Development ]
[ Pair / Mob Programming ]                [ Continuous Refactoring ]
[ Collective Code Ownership ]             [ Sustainable Pace (40h) ]
```

### A. Test-Driven Development (TDD): Red -> Green -> Refactor
1. **Red**: Escribir una prueba unitaria pequeña que describe el comportamiento deseado y verla fallar.
2. **Green**: Escribir el código mínimo estrictamente necesario para que la prueba pase.
3. **Refactor**: Mejorar el diseño del código, eliminar duplicación y clarificar nombres, con la garantía absoluta de que los tests avisan si algo se rompe.

### B. Trunk-Based Development vs GitFlow:
- **El Antipatrón de GitFlow**: Ramas de larga duración (`feature/xyz`) que viven semanas abiertas, provocando "Merge Hell" traumático al intentar integrarlas.
- **Trunk-Based Development**:
  - Todos los desarrolladores fusionan (*merge*) pequeñas ramas a `main` al menos **una o varias veces al día**.
  - Si una funcionalidad está a medio desarrollar, se oculta detrás de un **Feature Flag (Feature Toggle)** en lugar de mantener la rama aislada.

### C. Pair Programming y Mob Programming (Ensemble):
- Dos o más ingenieros trabajando frente a la misma pantalla/código.
- Uno es el **Conductor (Driver)**: escribe el código y se enfoca en la sintaxis.
- El otro es el **Navegante (Navigator)**: piensa en el diseño global, casos límite y posibles fallos de arquitectura.
- **Beneficio Senior**: Es una revisión de código en tiempo real. Elimina los cuellos de botella de pull requests esperando horas o días para ser aprobados.

### D. Propiedad Colectiva del Código (Collective Code Ownership):
- Ningún archivo o módulo pertenece exclusivamente a un solo desarrollador.
- Cualquier miembro del equipo tiene la autoridad y la responsabilidad de corregir, refactorizar y mejorar cualquier parte del sistema.
- Neutraliza el "Factor Autobús" (*Bus Factor*).

---

## 💎 3. Las 4 Reglas del Diseño Simple (Kent Beck)

Un diseño de software es perfecto no cuando no hay nada más que añadir, sino cuando no hay nada más que quitar:

1. **Pasa todas las pruebas (Passes the tests)**: El sistema funciona de forma verificable.
2. **Revela la intención (Reveals intention)**: El código es auto-explicativo; los nombres de variables y funciones comunican el propósito del negocio.
3. **No contiene duplicación (No duplication / DRY)**: Cada pieza de lógica tiene una representación única y autorizada en el sistema.
4. **Tiene la menor cantidad de elementos posibles (Fewest elements)**: Sin sobre-ingeniería ni patrones abstractos innecesarios creados "por si acaso" (*YAGNI: You Aren't Gonna Need It*).
