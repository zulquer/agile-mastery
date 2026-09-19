# 🏃 Agile, Scrum & Kanban: Metodologías de Entrega para Tech Leads y Staff Engineers

Guía técnica y estratégica de **Metodologías Ágiles, Marcos de Trabajo y Métricas de Flujo**. Un ingeniero Senior o Staff no solo escribe código excelente; optimiza el sistema sociotécnico de entrega, elimina cuellos de botella organizacionales y maximiza el valor entregado al usuario final.

---

## 🏛️ Organización del Track

```
agile-methodologies/
├── 01-agile-manifesto-and-principles/   # Manifiesto Ágil, 12 Principios, Framework Cynefin (Complejidad)
├── 02-scrum-framework-in-depth/         # Roles, Artefactos, Eventos, DoD vs DoR, Story Points vs NoEstimates
├── 03-kanban-and-flow-metrics/          # Principios Kanban, Límites WIP, Lead Time vs Cycle Time, Ley de Little
├── 04-xp-and-engineering-practices/     # Extreme Programming: TDD, Pair Programming, Trunk-Based Development
└── 05-simulations-and-tools/            # Laboratorios y simuladores ejecutables en TypeScript
    └── 01-littles-law-and-wip-limits.ts # [Simulador: Ley de Little, Límites WIP y Coste de Context Switching]
```

---

## 🧠 Matriz de Diferenciación por Seniority

| Dimensión | Junior | Intermediate | Senior / Staff / Tech Lead |
|---|---|---|---|
| **Adopción Ágil** | Ver Scrum como una serie de reuniones obligatorias impuestas por management. | Participar activamente en ceremonias y estimar en Story Points. | **Mentalidad Sistémica**: Comprender que la agilidad es adaptación empírica ante la incertidumbre. Usar el **Framework Cynefin** para elegir el proceso adecuado (Scrum para dominios complejos, Kanban para flujos continuos). |
| **Gestión de Tareas** | Tomar 4 tareas a la vez para "avanzar en todo". | Mover tarjetas en Jira y actualizar estados. | **Stop Starting, Start Finishing**: Aplicar **Límites de Trabajo en Curso (WIP Limits)**. Demostrar matemáticamente mediante la **Ley de Little** que reducir el WIP disminuye drásticamente el Cycle Time y acelera la entrega. |
| **Estimaciones y Métricas** | Estimar en horas exactas y frustrarse cuando varían. | Usar la secuencia Fibonacci en Planning Poker y calcular la velocidad media. | Comprender la falacia de las estimaciones fijas en software. Usar **Pronósticos Probabilísticos (Simulaciones Monte Carlo)** basadas en Throughput histórico en lugar de Story Points. |
| **Calidad y Entrega** | Probar manualmente antes del final del Sprint. | Escribir tests al terminar la feature. | **Extreme Programming (XP) como ADN**: TDD, Trunk-Based Development con feature flags, Integración Continua real (múltiples merges diarios al main) y Definition of Done automatizada en el pipeline. |

---

## 🔬 Simulador Ejecutable de Flujo (`05-simulations-and-tools/`)

- **`01-littles-law-and-wip-limits.ts`**:
  - Simulación matemática de dos equipos de desarrollo:
    - **Equipo A (Caos Multitarea)**: Sin límite de WIP (12 tareas abiertas en paralelo, penalización severa por cambio de contexto).
    - **Equipo B (Flujo Kanban Lean)**: Límite estricto de WIP = 3 con sistema Pull.
  - Cálculo en tiempo real de **Lead Time**, **Cycle Time**, **Throughput** y aplicación de la **Ley de Little** ($\text{Cycle Time} = \frac{\text{WIP}}{\text{Throughput}}$).

---

## ⚡ Comandos Rápidos de Ejecución

```bash
# Ejecutar el simulador de flujo Kanban y Ley de Little:
npm run agile:sim:01
```
