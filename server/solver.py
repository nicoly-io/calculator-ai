import sys
import sympy

def solve_equation(equation):
    try:
        # Nettoyage et résolution via Sympy
        result = sympy.simplify(equation)
        return result
    except:
        return "Equation non résoluble"

if __name__ == "__main__":
    if len(sys.argv) > 1:
        print(solve_equation(sys.argv[1]))
