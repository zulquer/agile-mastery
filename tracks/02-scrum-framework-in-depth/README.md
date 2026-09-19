# 🏃 Agile Level 02: El Marco Scrum en Profundidad

Análisis riguroso de la Guía de Scrum: los 3 pilares empíricos, compromisos de artefactos, ceremonias y estimaciones relativas.

---

## 🏛️ 1. Los 3 Pilares del Empirismo en Scrum

Scrum se basa en el empirismo (el conocimiento proviene de la experiencia y la toma de decisiones basada en lo observado):

1. **Transparencia**: El estado real del trabajo debe ser visible tanto para quienes lo realizan como para quienes lo reciben (cero "progreso oculto").
2. **Inspección**: Los artefactos y el progreso hacia los objetivos deben inspeccionarse con frecuencia para detectar variaciones no deseadas.
3. **Adaptación**: Si un proceso se desvía de los límites aceptables, el proceso o el material que se está produciendo debe ajustarse inmediatamente.

---

## 👥 2. Las 3 Responsabilidades (Roles)

En la versión actual de la Guía de Scrum, no existen jerarquías dentro del equipo:

1. **Product Owner (PO)**:
   - Responsable de maximizar el valor del producto resultante del trabajo del equipo.
   - Gestiona de forma exclusiva el **Product Backlog** (ordenación, claridad y priorización).
2. **Scrum Master (SM)**:
   - Líder servicial responsable de la efectividad del equipo y de promover la adopción de Scrum.
   - Elimina impedimentos organizacionales que bloquean el avance de los desarrolladores.
3. **Developers (Equipo de Desarrollo)**:
   - Los profesionales comprometidos a crear cualquier aspecto de un **Incremento utilizable** en cada Sprint.
   - Tienen plena autonomía técnica sobre **CÓMO** se construye la solución.

---

## 📦 3. Los 3 Artefactos y sus 3 Compromisos Sagrados

Cada artefacto contiene un compromiso obligatorio que garantiza la transparencia y el enfoque:

| Artefacto | Compromiso Obligatorio | Descripción |
|---|---|---|
| **Product Backlog** | **Product Goal** | El objetivo a largo plazo del producto. El equipo debe cumplir o abandonar un objetivo antes de asumir el siguiente. |
| **Sprint Backlog** | **Sprint Goal** | El único propósito unificado del Sprint. Si el trabajo resulta ser diferente a lo esperado, los Developers negocian el alcance con el PO sin alterar el Sprint Goal. |
| **Increment** | **Definition of Done (DoD)** | El estado formal en el que el trabajo cumple con las medidas de calidad requeridas para ser potencialmente desplegado a producción. |

> [!IMPORTANT]
> **Definition of Ready (DoR) vs Definition of Done (DoD)**:
> - **DoR**: Criterios de entrada para que una historia pueda entrar al Sprint (requisitos claros, dependencias identificadas). *Precaución*: un DoR demasiado estricto puede convertirse en un mini-waterfall encubierto.
> - **DoD**: Criterios de salida obligatorios (código revisado por PR, tests unitarios pasando, linter en verde, documentación actualizada, desplegado en staging). Si un ítem no cumple el DoD, **NO se puede presentar en la Review ni contar en la velocidad**.

---

## 📅 4. Las 5 Ceremonias de Scrum

1. **Sprint Planning**: Se responde: ¿Por qué es valioso este Sprint (Sprint Goal)?, ¿Qué se puede hacer (Items del Backlog)?, y ¿Cómo se realizará el trabajo elegido?
2. **Daily Scrum**: Reunión de 15 minutos para que los Developers inspeccionen el progreso hacia el Sprint Goal y adapten el plan para las siguientes 24 horas.
3. **Sprint Review**: Inspección del incremento funcional junto con stakeholders de negocio para recopilar feedback real de mercado y adaptar el Product Backlog.
4. **Sprint Retrospective**: El equipo inspecciona cómo fue la interacción humana, los procesos y las herramientas, y define al menos una mejora concreta para el siguiente Sprint.
5. **Backlog Refinement (Refinamiento)**: Actividad continua (típicamente 5-10% del tiempo del Sprint) para descomponer ítems grandes en historias pequeñas y añadir criterios de aceptación.

---

## 🔢 5. Story Points vs Horas: La Perspectiva Senior

### Por qué Estimar en Horas es un Antipatrón:
- 1 hora de un ingeniero Senior no equivale a 1 hora de un Junior.
- Las horas generan una falsa sensación de precisión y convierten las estimaciones en "fechas límite contractuales" punitivas.

### Story Points (Secuencia Fibonacci: 1, 2, 3, 5, 8, 13):
- Miden **complejidad relativa, esfuerzo y nivel de incertidumbre**, no tiempo de reloj.
- Si una historia es un 13, significa que es demasiado grande o ambigua y debe dividirse antes de entrar al Sprint.

### El Movimiento #NoEstimates:
Los equipos de alto rendimiento con historias pequeñas y uniformes descubren que contar simplemente el **número de historias completadas (Throughput)** produce pronósticos más precisos (mediante simulaciones estadísticas de Monte Carlo) que pasar horas discutiendo si una tarea es un 3 o un 5.
