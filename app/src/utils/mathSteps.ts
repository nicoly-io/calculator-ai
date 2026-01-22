export const generateSteps = (expr: string): string[] => {
  const steps = ["Analyse de l'expression initiale..."];
  if (expr.includes('+')) steps.push("Repérage de l'addition : calcul des termes.");
  if (expr.includes('*')) steps.push("Priorité à la multiplication détectée.");
  steps.push("Application des règles arithmétiques.");
  steps.push("Simplification finale du résultat.");
  return steps;
};
