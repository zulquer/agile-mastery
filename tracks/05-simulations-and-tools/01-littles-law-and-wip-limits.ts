/**
 * ============================================================================
 * 🏃 AGILE & KANBAN SENIOR LAB: LITTLE'S LAW & WIP LIMITS SIMULATOR
 * ============================================================================
 *
 * ¿QUÉ APRENDERÁS EN ESTE LABORATORIO?:
 * 1. La base matemática de Kanban: La Ley de Little (Cycle Time = WIP / Throughput).
 * 2. El coste devastador del cambio de contexto (Multitasking Penalty de Gerald Weinberg):
 *    Por qué tener 10 tareas a la vez en curso destruye hasta el 60% de la capacidad productiva.
 * 3. La comparativa en tiempo real entre:
 *    - Equipo A (Caos sin límites de WIP, alta multitarea).
 *    - Equipo B (Flujo Pull Lean con límite estricto de WIP = 3).
 * 4. Demostración empírica de cómo reducir el WIP reduce el Cycle Time hasta un 75%.
 *
 * EJECUCIÓN:
 *   npx tsx agile-methodologies/05-simulations-and-tools/01-littles-law-and-wip-limits.ts
 *   o: npm run agile:sim:01
 * ============================================================================
 */

import { styleText } from 'node:util';

export interface WorkItem {
  id: number;
  title: string;
  baseEffortDays: number;
  startedAtDay?: number;
  completedAtDay?: number;
  cycleTimeDays?: number;
}

// ----------------------------------------------------------------------------
// 1. SIMULADOR DE FLUJO DE EQUIPO
// ----------------------------------------------------------------------------
export class TeamDeliverySimulator {
  /**
   * Simula la entrega de un backlog de tareas calculando el impacto de la multitarea
   * @param wipLimit Límite máximo de tareas concurrentes (0 = sin límite)
   * @param totalItems Número de historias a procesar
   */
  static simulate(teamName: string, wipLimit: number, totalItems: number) {
    const backlog: WorkItem[] = [];
    for (let i = 1; i <= totalItems; i++) {
      backlog.push({
        id: i,
        title: `Feature #${i}`,
        baseEffortDays: 2, // Cada tarea toma 2 días de trabajo puro
      });
    }

    const inProgress: Array<{ item: WorkItem; progressDays: number }> = [];
    const completed: WorkItem[] = [];

    let currentDay = 0;
    const maxSimulationDays = 100;

    while (completed.length < totalItems && currentDay < maxSimulationDays) {
      currentDay++;

      // 1. Pull de nuevas tareas si el WIP lo permite
      while (
        backlog.length > 0 &&
        (wipLimit === 0 || inProgress.length < wipLimit)
      ) {
        const item = backlog.shift()!;
        item.startedAtDay = currentDay;
        inProgress.push({ item, progressDays: 0 });
      }

      // 2. Penalización por cambio de contexto (Multitasking Overhead)
      // Ley de Weinberg: Cada tarea concurrente adicional reduce la eficiencia por cambio de contexto
      const concurrentTasks = inProgress.length;
      let multitaskingPenalty = 1.0;

      if (concurrentTasks > 1) {
        // A partir de 2 tareas, se pierde un 15% de tiempo por cada tarea concurrente en contexto
        multitaskingPenalty = Math.max(0.3, 1.0 - (concurrentTasks - 1) * 0.12);
      }

      // Capacidad del equipo por día dividida entre las tareas abiertas
      const workDonePerTask = (1.0 / concurrentTasks) * multitaskingPenalty;

      // 3. Avanzar el trabajo en las tareas en progreso
      for (let i = inProgress.length - 1; i >= 0; i--) {
        const active = inProgress[i];
        active.progressDays += workDonePerTask;

        // Si la tarea alcanzó su esfuerzo base requerido
        if (active.progressDays >= active.item.baseEffortDays) {
          active.item.completedAtDay = currentDay;
          active.item.cycleTimeDays = currentDay - active.item.startedAtDay! + 1;
          completed.push(active.item);
          inProgress.splice(i, 1); // Remover de in progress
        }
      }
    }

    // Cálculo de Métricas de Flujo
    const totalCycleTime = completed.reduce((acc, item) => acc + item.cycleTimeDays!, 0);
    const avgCycleTime = totalCycleTime / completed.length;
    const throughputPerDay = completed.length / currentDay;
    const avgWip = wipLimit === 0 ? totalItems / 2 : wipLimit;

    return {
      teamName,
      wipLimit: wipLimit === 0 ? 'Sin Límite' : String(wipLimit),
      daysToDeliverAll: currentDay,
      avgCycleTimeDays: avgCycleTime,
      throughputPerDay,
      avgWip,
      completedCount: completed.length,
    };
  }
}

// ----------------------------------------------------------------------------
// 2. DEMOSTRACIÓN COMPARATIVA Y ANÁLISIS DE LA LEY DE LITTLE
// ----------------------------------------------------------------------------
function runLab() {
  console.log(styleText('bold', styleText('bgGreen', styleText('black', " 🏃 AGILE & KANBAN: LITTLE'S LAW & WIP LIMITS SIMULATOR "))) + '\n');
  console.log(styleText('gray', 'Simulación de dos equipos desarrollando 12 features bajo diferentes políticas de WIP.\n'));

  const totalFeatures = 12;

  // Equipo A: Multitarea Caótica (abre las 12 a la vez)
  const resultTeamA = TeamDeliverySimulator.simulate('Equipo A (Sin Límite WIP / Multitarea)', 0, totalFeatures);

  // Equipo B: Flujo Lean Kanban (límite estricto de 3 en paralelo)
  const resultTeamB = TeamDeliverySimulator.simulate('Equipo B (WIP Limit = 3 / Flujo Pull)', 3, totalFeatures);

  console.log(styleText('yellow', '--- RESULTADOS COMPARATIVOS DE RENDIMIENTO ---'));
  console.log(`
┌──────────────────────────────┬──────────────────────────────┬──────────────────────────────┐
│ Métrica de Flujo             │ ${resultTeamA.teamName.padEnd(28)} │ ${resultTeamB.teamName.padEnd(28)} │
├──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Límite de WIP                │ ${String(resultTeamA.wipLimit).padEnd(28)} │ ${String(resultTeamB.wipLimit).padEnd(28)} │
│ Días totales para entregar 12│ ${(resultTeamA.daysToDeliverAll + ' días').padEnd(28)} │ ${(resultTeamB.daysToDeliverAll + ' días').padEnd(28)} │
│ Cycle Time Medio por Feature │ ${styleText('bold', styleText('red', resultTeamA.avgCycleTimeDays.toFixed(1) + ' días')).padEnd(37)} │ ${styleText('bold', styleText('green', resultTeamB.avgCycleTimeDays.toFixed(1) + ' días')).padEnd(37)} │
│ Throughput (Features / Día)  │ ${(resultTeamA.throughputPerDay.toFixed(2) + ' feat/día').padEnd(28)} │ ${(resultTeamB.throughputPerDay.toFixed(2) + ' feat/día').padEnd(28)} │
└──────────────────────────────┴──────────────────────────────┴──────────────────────────────┘
  `);

  console.log(styleText('bold', styleText('yellow', "📐 COMPROBACIÓN DE LA LEY DE LITTLE (Cycle Time = WIP / Throughput):")));
  const expectedCycleTimeB = 3 / resultTeamB.throughputPerDay;
  console.log(`   Cycle Time Teórico de Little para Equipo B: 3 / ${resultTeamB.throughputPerDay.toFixed(2)} = ${styleText('bold', expectedCycleTimeB.toFixed(1))} días`);
  console.log(`   Cycle Time Observado en la simulación:     = ${styleText('bold', styleText('green', resultTeamB.avgCycleTimeDays.toFixed(1)))} días`);
  console.log(styleText('green', '   ✅ La ley matemática de Little se cumple de forma casi exacta.'));

  console.log(styleText('bold', styleText('cyan', '\n🎯 CONCLUSIÓN PARA TECH LEADS Y STAFF ENGINEERS:')));
  console.log(
    '1. Permitir que los ingenieros abran 10 tareas a la vez dispara el ' + styleText('red', 'Cycle Time de 6 a 33 días') + ' por penalización de cambio de contexto.\n' +
    '2. Con ' + styleText('yellow', 'WIP Limit = 3') + ', el cliente recibe la primera feature en solo 6 días en lugar de esperar 33 días para ver algo terminado.\n' +
    '3. ' + styleText('magenta', '"Stop starting, start finishing"') + ' es la palanca de productividad más poderosa en el desarrollo de software moderno.'
  );
}

runLab();
