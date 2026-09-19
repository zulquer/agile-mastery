# 🏃 Agile Level 03: Kanban y Métricas de Flujo (Flow Metrics)

El método Kanban, la limitación de trabajo en curso (WIP Limits), la Ley de Little y el diagnóstico con Diagramas de Flujo Acumulado (CFD).

---

## 📋 1. Las 6 Prácticas Centrales de Kanban

A diferencia de Scrum (que prescribe roles y eventos con sprints de tiempo fijo), Kanban es un método evolutivo enfocado en optimizar el **flujo continuo de valor**:

1. **Visualizar el Flujo de Trabajo**: Hacer visibles todos los estados del trabajo en un tablero físico o digital.
2. **Limitar el Trabajo en Curso (WIP - Work In Progress)**: Restringir la cantidad de tarjetas activas permitidas simultáneamente en cada columna.
3. **Gestionar el Flujo**: Facilitar el movimiento continuo de las tareas, eliminando bloqueos y tiempos muertos de espera.
4. **Hacer las Políticas Explícitas**: Definir claramente las reglas del juego (ej. qué significa exactamente que un ítem esté "Listo para QA").
5. **Implementar Bucles de Feedback**: Revisiones periódicas del servicio y operaciones.
6. **Mejorar Colaborativamente y Evolucionar Experimentalmente**: Basarse en métricas científicas y el método científico (hipótesis, medición, validación).

---

## 📐 2. La Ley de Little (Little's Law)

Descubierta por el matemático John Little en 1961 para la teoría de colas, es la fórmula matemática más importante que todo Staff Engineer y Engineering Manager debe dominar:

$$\text{Cycle Time (Tiempo de Ciclo)} = \frac{\text{Work In Progress (WIP)}}{\text{Throughput (Rendimiento)}}$$

### Implicación Práctica Inmediata:
- Si tu equipo completa una media de **5 tareas por semana** (Throughput constante), y el equipo tiene **20 tareas abiertas simultáneamente en progreso (WIP = 20)**:
  $$\text{Cycle Time} = \frac{20}{5} = 4 \text{ semanas}$$
  Cada tarea tardará un promedio de **1 mes entero** en terminarse desde que se empieza.
- Si reduces el límite de WIP a **5 tareas simultáneas (WIP = 5)**:
  $$\text{Cycle Time} = \frac{5}{5} = 1 \text{ semana}$$
  ¡El tiempo que tarda una tarea en completarse se reduce a **1 semana (4 veces más rápido)** con exactamente el mismo equipo y sin trabajar horas extra!

> [!TIP]
> **El Lema de Kanban**: *"Stop starting, start finishing"* (Deja de empezar cosas nuevas, empieza a terminar lo que ya tienes abierto).

---

## 📊 3. Métricas Clave de Flujo: Lead Time vs Cycle Time

```
       [ Idea / Ticket Creado ] ─────────────────────────┐
                   │                                     │
                   ▼                                     │ LEAD TIME
       [ En Progreso / In Dev ] ────────┐                │ (Perspectiva del Cliente)
                   │                    │ CYCLE TIME     │
                   ▼                    │ (Perspectiva   │
       [ Desplegado en Producción ] <───┴ del Dev Team) <┘
```

- **Lead Time**: Tiempo transcurrido desde que el usuario/cliente solicita una funcionalidad hasta que la tiene disponible en sus manos.
- **Cycle Time**: Tiempo transcurrido desde que un desarrollador empieza activamente a escribir código hasta que la tarea se despliega en producción.
- **Throughput**: Número de ítems de trabajo entregados por unidad de tiempo (ej. 12 tareas por semana).
- **Work Item Age**: Cuántos días lleva abierta una tarea activa en el tablero. Es el indicador temprano más potente para detectar retrasos antes de que ocurran.

---

## 📈 4. El Diagrama de Flujo Acumulado (CFD - Cumulative Flow Diagram)

El CFD representa el número acumulado de tareas en cada estado a lo largo del tiempo:

- **Bandas Paralelas**: Flujo equilibrado y predecible. La tasa de llegada de trabajo coincide con la tasa de salida.
- **Banda que se Ensancha hacia Arriba**: Señal inequívoca de un **Cuello de Botella (Bottleneck)**. El inventario de trabajo se está acumulando en esa fase (ej. tareas acumuladas esperando Code Review o QA).
- **Distancia Horizontal**: Representa el Cycle Time promedio.
- **Distancia Vertical**: Representa el WIP total en ese instante de tiempo.
