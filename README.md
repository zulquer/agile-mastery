# 🏃 Agile, Lean & Delivery Engineering Mastery

Repositorio maestro de referencia técnica profunda para **Tech Leads, Staff Engineers, Scrum Masters y Engineering Managers** en **Metodologías Ágiles, Scrum Framework en Profundidad, Flujo Kanban, Métricas de Flujo (Ley de Little), Cynefin Framework y Prácticas de Ingeniería Extreme Programming (XP)**.

---

## 🎯 Preguntas de Entrevista Técnica

Para preparar entrevistas técnicas y de liderazgo de ingeniería (**Tech Lead, Staff Engineer, Scrum Master, Agile Coach y Engineering Manager**), este módulo incluye la guía:

👉 **[Las 100 Preguntas Más Comunes en Entrevistas Técnicas: Agile & Delivery](./INTERVIEW-QUESTIONS.md)** (Scrum Guide 2020, Kanban & Little's Law, XP, Cynefin, Team Topologies, con criterios 🚩 *Red Flags* vs 🟢 *Green Flags*).

---

## 🌐 The Mastery Suite (Ecosistema Modular)

| Repositorio | Especialidad Técnica | Enlace |
|---|---|---|
| **`nodejs-ecosystem-mastery`** | 🟢 **Node.js Core, V8, Libuv, Express, NestJS, Testing & TypeScript** | [Ver Repositorio](../nodejs-ecosystem-mastery/) |
| **`python-ecosystem-mastery`** | 🐍 **CPython Internals, GIL, FastAPI, Django, PySpark & Pytest** | [Ver Repositorio](../python-ecosystem-mastery/) |
| **`php-ecosystem-mastery`** | 🐘 **Zend Engine, OPcache, JIT, Laravel, Symfony, FrankenPHP & Pest** | [Ver Repositorio](../php-ecosystem-mastery/) |
| **`backend-mastery`** | 🌐 **REST APIs RFC 9110, SQL, NoSQL, Sistemas Distribuidos & Caché** | [Ver Repositorio](../backend-mastery/) |
| **`frontend-mastery`** | ⚛️ **React 19, Angular v2-v19+, Next.js App Router & Web Performance** | [Ver Repositorio](../frontend-mastery/) |
| **`cloud-mastery`** | ☁️ **Cloud Architecture (AWS, Azure, DigitalOcean), K8s, Terraform & FinOps** | [Ver Repositorio](../cloud-mastery/) |
| **`cicd-mastery`** | 🚀 **CI/CD Universal (GitHub Actions, Azure, GitLab), GitOps & Canary** | [Ver Repositorio](../cicd-mastery/) |
| **`agile-mastery`** | 🏃 **Scrum, Kanban, Ley de Little, XP (TDD/Trunk-Based) & Cynefin** | *Este repositorio* |

---

## 🏛️ Organización de los Tracks

```
agile-mastery/
├── tracks/
│   ├── 01-agile-manifesto-and-principles/ # Manifiesto Ágil, 12 Principios, Framework Cynefin
│   ├── 02-scrum-framework-in-depth/       # Roles, Eventos, Artefactos, DoD vs DoR, Story Points
│   ├── 03-kanban-and-flow-metrics/        # Principios Kanban, Límites WIP, Lead vs Cycle Time, Ley de Little
│   ├── 04-xp-and-engineering-practices/   # TDD, Pair Programming, Trunk-Based Development, Simple Design
│   └── 05-simulations-and-tools/          # Simulador de la Ley de Little y Coste de Multitarea
├── .gitignore
└── package.json
```

---

## 🧠 Matriz de Diferenciación por Seniority en Entrega Ágil

| Dimensión | Junior | Intermediate | Senior / Staff / Tech Lead |
|---|---|---|---|
| **Comprensión de Ágil** | "Ágil significa no hacer documentación y hacer reuniones de pie todos los días". | Seguir las ceremonias de Scrum de memoria usando Jira. | **Pensamiento Sistémico y Cynefin**: Discernir dominios Claros, Complicados, Complejos y Caóticos. Aplicar Lean para erradicar desperdicios (*Muda*), optimizar el flujo de entrega y fomentar autonomía con responsabilidad. |
| **Gestión del Trabajo (WIP)** | Empezar 5 tareas al mismo tiempo y saltar entre ellas según urgencias del chat. | Mover tarjetas en el tablero de Sprint. | **Ley de Little y Límites WIP**: Demostrar matemáticamente que limitar el trabajo en curso ($\text{WIP}$) reduce el **Cycle Time** y triplica el Throughput. *"Stop starting, start finishing"*. |
| **Estimación y Entrega** | Asumir que los Story Points son horas encubiertas. | Usar Planning Poker con la escala de Fibonacci. | **Previsibilidad Basada en Datos**: Abandonar la falacia de estimaciones subjetivas; emplear **Simulaciones de Monte Carlo** sobre el historial real de Throughput para responder con confianza probabilística cuándo estará listo un proyecto. |
| **Prácticas Técnicas (XP)** | Desarrollar en ramas individuales durante 3 semanas antes de hacer merge. | Hacer code reviews antes de integrar en `main`. | **Extreme Programming (XP) como Base de Calidad**: **Trunk-Based Development** con integraciones diarias, **TDD**, Pair Programming estratégico en componentes de alto riesgo y diseño evolutivo simple. |

---

## 🔬 Simulador Ejecutable

```bash
# Ejecutar simulador de la Ley de Little y penalización por multitarea:
npm run agile:sim:01
```
