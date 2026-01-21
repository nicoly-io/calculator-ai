import sys
import json
from sympy import sympify, simplify, latex

def solve():
    try:
        expr_input = sys.argv[1]
        res = simplify(sympify(expr_input))
        print(json.dumps({"success": True, "result": str(res), "latex": latex(res)}))
    except Exception as e:
        print(json.dumps({"success": False, "error": str(e)}))

if __name__ == "__main__":
    solve()