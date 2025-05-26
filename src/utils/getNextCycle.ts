export function getNextCycle(currentCycle: number) {
  return currentCycle + 1 === 8 ? 1 : currentCycle + 1;
}
