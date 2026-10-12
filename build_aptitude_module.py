"""
Combines tips, examples, and 300 MCQs into js/aptitude-data.js
"""

import json
from generate_tips import TIPS_DATA
from generate_examples import SOLVED_EXAMPLES
from build_full_300_mcqs import get_300_aptitude_mcqs

def main():
    print("Gathering Aptitude Data...")
    tips = TIPS_DATA
    examples = SOLVED_EXAMPLES
    mcqs = get_300_aptitude_mcqs()

    print(f"Tips: {len(tips)}")
    print(f"Examples: {len(examples)}")
    print(f"MCQs: {len(mcqs)}")

    assert len(tips) == 50, f"Expected 50 tips, got {len(tips)}"
    assert len(examples) == 100, f"Expected 100 examples, got {len(examples)}"
    assert len(mcqs) == 300, f"Expected 300 MCQs, got {len(mcqs)}"

    # Generate js/aptitude-data.js
    out_path = "js/aptitude-data.js"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("// ========================================================\n")
        f.write("// APTITUDE MASTERY DATA ENGINE\n")
        f.write("// 50 Tips & Tricks • 100 Solved Examples • 300-MCQ 120-Min Mock Exam\n")
        f.write("// Digital Empowerment Bootcamp Powered By Kapil\n")
        f.write("// ========================================================\n\n")

        f.write("window.APTITUDE_TIPS_DATA = ")
        json.dump(tips, f, indent=2, ensure_ascii=False)
        f.write(";\n\n")

        f.write("window.APTITUDE_SOLVED_EXAMPLES = ")
        json.dump(examples, f, indent=2, ensure_ascii=False)
        f.write(";\n\n")

        f.write("window.APTITUDE_300_MCQS = ")
        json.dump(mcqs, f, indent=2, ensure_ascii=False)
        f.write(";\n")

    print(f"Successfully generated {out_path}!")

if __name__ == "__main__":
    main()
