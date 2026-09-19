# 🏃 Agile Level 01: El Manifiesto Ágil y el Framework Cynefin

Fundamentos filosóficos de la agilidad, los 12 principios y la toma de decisiones contextuales según la complejidad del problema.

---

## 📜 1. Los 4 Valores del Manifiesto Ágil (2001)

Creado en Utah por 17 líderes de la industria (incluyendo a Martin Fowler, Robert C. Martin "Uncle Bob", y Kent Beck) para rescatar el desarrollo de software de la burocracia del modelo en Cascada (*Waterfall*):

> "Valoramos más los elementos de la izquierda que los de la derecha, sin desmerecer los de la derecha:"

1. **Individuos e interacciones** sobre procesos y herramientas.
2. **Software funcionando** sobre documentación exhaustiva.
3. **Colaboración con el cliente** sobre negociación contractual.
4. **Respuesta ante el cambio** sobre seguimiento de un plan fijo.

---

## 🎯 2. Los 12 Principios Clave para un Senior Engineer

1. **Satisfacción Temprana y Continua**: Entregar software con valor de forma frecuente (semanas, no meses).
2. **Aceptar Requisitos Cambiantes**: El cambio es una ventaja competitiva, no una molestia de ingeniería.
3. **Entrega Frecuente de Software Operativo**: Acortar el ciclo de feedback del mercado.
4. **Colaboración Diaria**: Negocio y desarrolladores trabajan juntos todos los días.
5. **Proyectos en Torno a Individuos Motivados**: Dar el entorno y soporte necesarios y confiar en ellos.
6. **Conversación Cara a Cara**: La forma más eficiente de transmitir información (evitar guerras de comentarios en tickets de Jira).
7. **Software Funcionando como Medida Primaria de Progreso**: De nada sirve tener "el 90% de las tareas avanzadas" si nada compila en producción.
8. **Ritmo Sostenible (Sustainable Pace)**: Promotores, desarrolladores y usuarios deben poder mantener un ritmo constante indefinidamente (erradicar la cultura del *crunch*).
9. **Atención Continua a la Excelencia Técnica**: El buen diseño y la calidad del código mejoran la agilidad; la deuda técnica descontrolada la destruye.
10. **Simplicidad**: El arte de **maximizar la cantidad de trabajo NO realizado**. (La mejor línea de código es la que no se escribe).
11. **Equipos Auto-organizados**: Las mejores arquitecturas, requisitos y diseños surgen de equipos empoderados.
12. **Reflexión y Ajuste Periódico**: El equipo reflexiona sobre cómo ser más eficaz y perfecciona su comportamiento en base a retrospectivas.

---

## 🧠 3. El Framework Cynefin (Dave Snowden)

Un Staff Engineer debe clasificar la naturaleza del problema antes de imponer una metodología:

```
    ┌───────────────────────────┬───────────────────────────┐
    │          COMPLEX          │        COMPLICATED        │
    │    (Probe - Sense - Respond)│  (Sense - Analyze - Respond)│
    │                           │                           │
    │   Dominio de la AGILIDAD  │    Dominio de EXPERTOS    │
    │    (Desarrollo de SW)     │   (Migración de Servidor) │
    ├───────────────────────────┼───────────────────────────┤
    │          CHAOTIC          │           CLEAR           │
    │     (Act - Sense - Respond)│ (Sense - Categorize - Respond)│
    │                           │                           │
    │   Gestión de INCIDENTES   │      Mejores Prácticas    │
    │      (P0 en Producción)   │      (Procedimientos SOP) │
    └───────────────────────────┴───────────────────────────┘
```

1. **Clear / Simple**: La relación causa-efecto es obvia. Existen "mejores prácticas" probadas.
2. **Complicated**: Requiere análisis experto. Hay múltiples soluciones correctas ("buenas prácticas").
3. **Complex (El Territorio de Scrum y Software)**: La relación causa-efecto solo se entiende en retrospectiva. No se puede predecir el futuro; se debe **probar, inspeccionar y adaptar empíricamente**.
4. **Chaotic**: No hay tiempo para planificar. Se actúa de inmediato para restablecer el orden (ej. caída de base de datos en producción).
