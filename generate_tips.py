# 50 Aptitude Tips and Tricks Data Generator

TIPS_DATA = [
    {
        "id": 1,
        "category": "Mental Arithmetic & Speed Math",
        "title": "Squaring Numbers Ending in 5",
        "formula": "(10a + 5)² = [a × (a + 1)] × 100 + 25",
        "rule": "Multiply the tens digit (a) by its successor (a + 1), then suffix '25' to the result.",
        "example": "To find 75²: Multiply 7 by 8 = 56. Suffix 25 to get 5,625. For 115²: 11 × 12 = 132, suffix 25 to get 13,225.",
        "proTip": "This works for any multi-digit number ending in 5, saving 15-20 seconds per calculation."
    },
    {
        "id": 2,
        "category": "Mental Arithmetic & Speed Math",
        "title": "Lightning Multiplication by 11",
        "formula": "N × 11 = Keep ends, add adjacent digits with carry",
        "rule": "Write down the units digit. Move left, adding each digit to its neighbor. Carry over if the sum exceeds 9. Finally write the leftmost digit plus any carry.",
        "example": "Calculate 4,352 × 11: Ends are 4 and 2. Middle digits: 2+5=7, 5+3=8, 3+4=7. Result: 47,872.",
        "proTip": "For carries like 678 × 11: Unit is 8; 8+7=15 (write 5, carry 1); 7+6+1=14 (write 4, carry 1); 6+1=7. Result: 7,458."
    },
    {
        "id": 3,
        "category": "Mental Arithmetic & Speed Math",
        "title": "Vedic Base Multiplication (Near 100)",
        "formula": "(100 + a)(100 + b) = (100 + a + b) × 100 + (a × b)",
        "rule": "When multiplying two numbers close to 100, add the deviation of one to the other, then append the product of the deviations (2 digits).",
        "example": "Calculate 104 × 107: Deviations are +4 and +7. First part: 104 + 7 = 111. Second part: 4 × 7 = 28. Result: 11,128.",
        "proTip": "If both numbers are below 100 (e.g. 96 × 93): Deviations are -4 and -7. 96 - 7 = 89. (-4) × (-7) = 28. Result: 8,928."
    },
    {
        "id": 4,
        "category": "Mental Arithmetic & Speed Math",
        "title": "Fast Squaring of Numbers Near 50",
        "formula": "(50 ± x)² = (25 ± x) × 100 + x²",
        "rule": "For numbers near 50, compute the deviation x = N - 50. The first two digits are 25 + x, and the last two digits are x².",
        "example": "For 54²: x = +4. First part = 25 + 4 = 29. Second part = 4² = 16. Result: 2,916. For 47²: x = -3. First part = 25 - 3 = 22. Second part = (-3)² = 09. Result: 2,209.",
        "proTip": "Always ensure the x² part occupies two digit slots (e.g. 3² = 09, not 9)."
    },
    {
        "id": 5,
        "category": "Number Systems & Divisibility",
        "title": "Finding Unit Digit of High Powers (Cyclicity of 4)",
        "formula": "Unit digit of N^P = N^(P mod 4) [if P mod 4 == 0, use N^4]",
        "rule": "The unit digits of powers of all numbers repeat in cycles of at most 4 (2, 3, 7, 8 have cyclicity 4; 4 and 9 have cyclicity 2; 0, 1, 5, 6 have cyclicity 1).",
        "example": "Find unit digit of 7^95: Divide 95 by 4 -> remainder is 3. Unit digit of 7³ = 343, so the unit digit is 3.",
        "proTip": "Powers of 4: odd power ends in 4, even power ends in 6. Powers of 9: odd power ends in 9, even power ends in 1."
    },
    {
        "id": 6,
        "category": "Number Systems & Divisibility",
        "title": "Total Number of Divisors / Factors",
        "formula": "If N = p₁^a × p₂^b × p₃^c..., Total Divisors = (a + 1)(b + 1)(c + 1)...",
        "rule": "Express the number in its canonical prime factorization form. Add 1 to each prime exponent and multiply all resulting values.",
        "example": "Find total factors of 360: 360 = 2³ × 3² × 5¹. Factors = (3 + 1)(2 + 1)(1 + 1) = 4 × 3 × 2 = 24 factors.",
        "proTip": "To find number of odd factors, ignore the power of 2 entirely: (2 + 1)(1 + 1) = 6."
    },
    {
        "id": 7,
        "category": "Mental Arithmetic & Speed Math",
        "title": "Digital Root & Casting Out Nines",
        "formula": "Digital Root(N) = Sum of digits recursively until a single digit (mod 9 equivalence)",
        "rule": "In any valid addition or multiplication equation, Digital Root of LHS must equal Digital Root of RHS. Any '9' or sum equal to 9 can be discarded (cast out).",
        "example": "Verify 342 × 15 = 5,130: DR(342) = 3+4+2 = 9 (or 0). DR(15) = 1+5 = 6. LHS DR = 0 × 6 = 0. RHS DR(5130) = 5+1+3+0 = 9 -> 0. Both match!",
        "proTip": "Use Digital Roots to eliminate 3 out of 4 options in complex MCQ calculation options in under 5 seconds."
    },
    {
        "id": 8,
        "category": "Number Systems & Divisibility",
        "title": "Combined Divisibility Rule for 7, 11, and 13",
        "formula": "N is divisible by 7, 11, or 13 iff Alternating Sum of 3-Digit Blocks is divisible by it",
        "rule": "Group digits into 3-digit blocks from right to left. Subtract the sum of even-position blocks from odd-position blocks. Check divisibility of the remainder.",
        "example": "For 4,567,892: Blocks are 892, 567, 4. Alternating sum = (892 + 4) - 567 = 896 - 567 = 329. 329 ÷ 7 = 47 (divisible by 7!).",
        "proTip": "Since 7 × 11 × 13 = 1001, any 6-digit number of the form 'xyzxyz' is always divisible by 7, 11, and 13."
    },
    {
        "id": 9,
        "category": "Number Systems & Divisibility",
        "title": "Trailing Zeros in Factorial (Legendre's Formula)",
        "formula": "Trailing Zeros in n! = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + ...",
        "rule": "Zeros are formed by pairs of factors (2 × 5). In any factorial, 2s are abundant, so count the highest power of 5 dividing n!.",
        "example": "Find trailing zeros in 100!: ⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24 zeros.",
        "proTip": "For trailing zeros in 200!: 40 + 8 + 1 = 49 zeros. Stop dividing once the denominator exceeds n."
    },
    {
        "id": 10,
        "category": "Number Systems & Divisibility",
        "title": "Fermat's Little Theorem for Fast Remainders",
        "formula": "If p is prime and gcd(a, p) = 1, then a^(p-1) ≡ 1 (mod p)",
        "rule": "When dividing a large power a^N by a prime p, reduce the exponent N modulo (p - 1).",
        "example": "Find remainder of 2^100 divided by 101: 101 is prime. Exponent 100 = 101 - 1. By Fermat's theorem, 2^100 ≡ 1 (mod 101). Remainder is 1.",
        "proTip": "To find 3^42 mod 7: Exponent mod (7-1) = 42 mod 6 = 0. Therefore 3^42 ≡ 3^0 ≡ 1 (mod 7)."
    },
    {
        "id": 11,
        "category": "Percentages & Commercial Math",
        "title": "Fraction to Percentage Benchmark Table",
        "formula": "1/2=50%, 1/3=33.33%, 1/4=25%, 1/5=20%, 1/6=16.67%, 1/7=14.28%, 1/8=12.5%, 1/9=11.11%",
        "rule": "Memorizing standard fraction equivalents eliminates slow division. For 1/11 = 9.09%, 1/12 = 8.33%, 1/13 = 7.69%, 1/14 = 7.14%, 1/15 = 6.67%, 1/16 = 6.25%.",
        "example": "Find 37.5% of 640: Recognize 37.5% = 3 × 12.5% = 3/8. Multiply (3/8) × 640 = 3 × 80 = 240.",
        "proTip": "Notice the mirror symmetry: 1/9 = 11.11% (multiples of 11) while 1/11 = 9.09% (multiples of 9)."
    },
    {
        "id": 12,
        "category": "Percentages & Commercial Math",
        "title": "Successive Percentage Change Formula",
        "formula": "Net % Change = x + y + (x × y) / 100",
        "rule": "For two consecutive percentage changes of x% and y%, use the formula with proper signs (+ for increase, - for decrease/discount).",
        "example": "Successive discounts of 20% and 10%: Net = -20 - 10 + [(-20)(-10)]/100 = -30 + 2 = -28% (a single discount of 28%).",
        "proTip": "If a value increases by x% and then decreases by x%, there is ALWAYS a net decrease of (x²/100)%."
    },
    {
        "id": 13,
        "category": "Percentages & Commercial Math",
        "title": "Expenditure Inversion Rule (Product Constant)",
        "formula": "If Price increases by x%, Consumption must decrease by [x / (100 + x)] × 100%",
        "rule": "When Price × Consumption = Constant Expenditure, if Price increases by fraction a/b, Consumption decreases by a/(a + b).",
        "example": "If sugar price rises by 25% (1/4), consumption must decrease by 1/(4 + 1) = 1/5 = 20% to keep expenditure unchanged.",
        "proTip": "If price decreases by 20% (1/5), consumption can increase by 1/(5 - 1) = 1/4 = 25%."
    },
    {
        "id": 14,
        "category": "Percentages & Commercial Math",
        "title": "Marked Price to Cost Price Master Ratio",
        "formula": "MP / CP = (100 + Profit%) / (100 - Discount%)",
        "rule": "Connects Cost Price, Marked Price, Profit% and Discount% directly without finding Selling Price.",
        "example": "A trader gives 10% discount and still makes 20% profit. If CP = ₹600, find MP: MP/600 = (100+20)/(100-10) = 120/90 = 4/3. MP = 600 × 4/3 = ₹800.",
        "proTip": "If there is a loss of L%, replace (100 + P%) with (100 - L%)."
    },
    {
        "id": 15,
        "category": "Percentages & Commercial Math",
        "title": "Dishonest Dealer & False Weight Trick",
        "formula": "Gain % = [Error / (True Value - Error)] × 100%",
        "rule": "When a shopkeeper professes to sell at cost price but uses a lighter weight, the gain depends on the goods withheld.",
        "example": "A dealer sells 1 kg but uses a 900g weight. Error = 1000 - 900 = 100g. Gain % = [100 / (1000 - 100)] × 100 = 100/900 × 100 = 11.11%.",
        "proTip": "True Value - Error is simply the weight actually given to the customer."
    },
    {
        "id": 16,
        "category": "Percentages & Commercial Math",
        "title": "Two Articles Sold at Same SP (+x% and -x%)",
        "formula": "Always Loss % = (x / 10)² = x² / 100 %",
        "rule": "When two articles are sold for the exact same selling price, one at a profit of x% and the other at a loss of x%, the overall transaction always results in a loss.",
        "example": "Two bikes sold for ₹40,000 each; one gained 20% and the other lost 20%. Overall Loss % = 20² / 100 = 4% loss.",
        "proTip": "Total CP = SP_total / (1 - Loss/100). For the example, Total SP = 80,000, Total CP = 80,000 / 0.96 = 83,333.33."
    },
    {
        "id": 17,
        "category": "Simple & Compound Interest",
        "title": "Rule of 72 for Doubling Time",
        "formula": "Time to double (years) ≈ 72 / Rate%",
        "rule": "At compound interest with annual compounding, the approximate time required for an investment to double equals 72 divided by the interest rate.",
        "example": "At 8% p.a. compound interest, investment doubles in 72 / 8 = 9 years. At 6% p.a., it doubles in 72 / 6 = 12 years.",
        "proTip": "For Simple Interest, time to double is exact: t = 100 / R."
    },
    {
        "id": 18,
        "category": "Simple & Compound Interest",
        "title": "CI and SI Difference for 2 and 3 Years",
        "formula": "Diff₂ = P × (R / 100)² ; Diff₃ = P × (R / 100)² × (3 + R / 100)",
        "rule": "For a principal P at rate R% p.a., the difference between Compound Interest and Simple Interest for 2 years and 3 years can be found in one line.",
        "example": "If P = ₹10,000, R = 10%, 2-year difference = 10,000 × (10/100)² = 10,000 × 0.01 = ₹100.",
        "proTip": "Notice that Diff₃ / Diff₂ = 3 + R / 100 = (300 + R) / 100. This directly gives R if both differences are known!"
    },
    {
        "id": 19,
        "category": "Simple & Compound Interest",
        "title": "Effective Annual Rate for Compounding Periods",
        "formula": "Half-yearly: R' = R/2, T' = 2T ; Quarterly: R' = R/4, T' = 4T",
        "rule": "When interest is compounded k times per year, divide nominal annual rate by k and multiply the number of years by k.",
        "example": "Find effective annual rate of 12% p.a. compounded half-yearly: R' = 6%. Effective rate = 6 + 6 + (6×6)/100 = 12.36%.",
        "proTip": "Compounding more frequently always yields a strictly higher effective interest rate."
    },
    {
        "id": 20,
        "category": "Ratios, Mixtures & Alligations",
        "title": "Combining Ratios: Inverted 'N' Shortcut",
        "formula": "If A:B = x:y and B:C = p:q, then A:B:C = (x×p) : (y×p) : (y×q)",
        "rule": "Multiply the first terms downwards for A, cross-multiply for B, and multiply the second terms downwards for C.",
        "example": "If A:B = 2:3 and B:C = 4:5: A = 2×4 = 8, B = 3×4 = 12, C = 3×5 = 15. Hence A:B:C = 8:12:15.",
        "proTip": "For 4 terms A:B, B:C, C:D, extend the column alignment technique to avoid finding LCMs manually."
    },
    {
        "id": 21,
        "category": "Ratios, Mixtures & Alligations",
        "title": "The Alligation Cross Rule",
        "formula": "Quantity(Cheaper) / Quantity(Dearer) = (Price_Dearer - Mean) / (Mean - Price_Cheaper)",
        "rule": "Set up a cross diagram with Dearer and Cheaper rates on top, Mean rate in the center. Cross-subtract to get mixing ratios directly.",
        "example": "Rice at ₹40/kg mixed with rice at ₹60/kg to get a blend worth ₹48/kg: (60 - 48) : (48 - 40) = 12 : 8 = 3 : 2.",
        "proTip": "All values must be of the same unit and type (all Cost Prices, or all profit percentages on CP)."
    },
    {
        "id": 22,
        "category": "Ratios, Mixtures & Alligations",
        "title": "Repeated Dilution & Replacement Formula",
        "formula": "Pure Liquid Remaining = Initial Volume × [1 - (y / x)]^n",
        "rule": "When y liters are drawn from a container of x liters of pure liquid and replaced with water, and this operation is repeated n times.",
        "example": "A cask contains 80L pure milk. 8L are drawn and replaced with water, repeated twice (total 2 times): Milk left = 80 × (1 - 8/80)² = 80 × (0.9)² = 80 × 0.81 = 64.8L.",
        "proTip": "The ratio of milk to water left = 64.8 : (80 - 64.8) = 64.8 : 15.2 = 81 : 19."
    },
    {
        "id": 23,
        "category": "Ratios, Mixtures & Alligations",
        "title": "Partnership Capital-Time Profit Ratio",
        "formula": "Profit Ratio = (C₁ × T₁) : (C₂ × T₂) : (C₃ × T₃)",
        "rule": "Profits are always distributed in proportion to the product of investment capital and investment duration.",
        "example": "A invests ₹20,000 for 12 months, B invests ₹30,000 for 8 months. Profit ratio = (20,000 × 12) : (30,000 × 8) = 240,000 : 240,000 = 1 : 1 (equal split!).",
        "proTip": "If an active partner takes salary, subtract salary first before distributing the remaining profit."
    },
    {
        "id": 24,
        "category": "Ratios, Mixtures & Alligations",
        "title": "Assumed Mean Deviation for Fast Averages",
        "formula": "True Average = Assumed Average + [Σ(Deviations) / Total Count]",
        "rule": "Pick a convenient round number as assumed average. Calculate deviations (x - A), sum them up, divide by N, and add to the assumed average.",
        "example": "Average of 84, 88, 92, 96, 100: Pick Assumed = 90. Deviations: -6, -2, +2, +6, +10. Sum = +10. True Avg = 90 + 10/5 = 92.",
        "proTip": "For consecutive AP terms, Average is simply the middle term (or average of first and last terms)."
    },
    {
        "id": 25,
        "category": "Time & Work",
        "title": "LCM Method for Time & Work",
        "formula": "Total Units of Work = LCM(T₁, T₂, ...); Rate = Work / Time",
        "rule": "Avoid cumbersome fractions (1/A + 1/B). Set Total Work = LCM of individual times. Find daily units for each worker, then add units.",
        "example": "A completes work in 12 days, B in 15 days. Total Work = LCM(12, 15) = 60 units. A's rate = 60/12 = 5 units/day; B's rate = 60/15 = 4 units/day. Together = 9 units/day. Time = 60 / 9 = 6.67 days.",
        "proTip": "This method generalizes effortlessly to 3+ workers, negative work (leaks), and alternating shifts."
    },
    {
        "id": 26,
        "category": "Time & Work",
        "title": "MDH Formula for Proportional Work",
        "formula": "(M₁ × D₁ × H₁ × E₁) / W₁ = (M₂ × D₂ × H₂ × E₂) / W₂",
        "rule": "Men × Days × Hours per day × Efficiency divided by Work completed remains constant across both scenarios.",
        "example": "15 men working 8 hours/day complete 1 bridge in 20 days. How many days will 20 men working 6 hours/day take? (15 × 20 × 8) / 1 = (20 × D₂ × 6) / 1 -> 2400 = 120 D₂ -> D₂ = 20 days.",
        "proTip": "If work W is identical, the denominator cancels out: M₁D₁H₁ = M₂D₂H₂."
    },
    {
        "id": 27,
        "category": "Time & Work",
        "title": "Alternate Days Working Routine",
        "formula": "Cycle Units = Rate_A + Rate_B; Number of 2-day cycles = ⌊Total Work / Cycle Units⌋",
        "rule": "When workers take turns, group them into cycles. Compute whole cycles first, then assign the remaining fractional units to the starting person.",
        "example": "A takes 10 days (6 u/d), B takes 15 days (4 u/d), Total = 60 units. 2-day cycle = 6 + 4 = 10 units. 60 / 10 = 6 cycles = 12 days exact.",
        "proTip": "If 5 units remain after full cycles and A starts next, A takes 5/6th of that day."
    },
    {
        "id": 28,
        "category": "Time & Work",
        "title": "Pipes & Cisterns: Inlets vs Outlets",
        "formula": "Net Rate = Rate(Inlets) - Rate(Outlets)",
        "rule": "Treat filling pipes as positive work rates (+ units/hr) and emptying pipes or leaks as negative work rates (- units/hr).",
        "example": "Pipe A fills in 10h (+6 u/h on 60u tank). Leak B empties in 15h (-4 u/h). Both open: Net rate = 6 - 4 = +2 u/h. Time to fill = 60 / 2 = 30 hours.",
        "proTip": "If the cistern is already full and net rate is negative, it indicates time to empty."
    },
    {
        "id": 29,
        "category": "Time & Work",
        "title": "Men, Women, and Children Equivalence",
        "formula": "Convert all worker types to a single common baseline unit",
        "rule": "Given 'x Men or y Women can do a work', set x M = y W -> 1 M = (y/x) W. Substitute this conversion into the question statement.",
        "example": "3 Men = 5 Women. To find work of 6 Men + 5 Women: 6 Men = 10 Women. Total = 10 + 5 = 15 Women. Now apply M₁D₁ = M₂D₂ directly with Women.",
        "proTip": "Always verify whether the problem says 'AND' (addition) or 'OR' (equality)."
    },
    {
        "id": 30,
        "category": "Time & Work",
        "title": "Efficiency & Time Inverse Ratio Rule",
        "formula": "Efficiency Ratio E₁ : E₂ = Time Ratio T₂ : T₁ (when work is constant)",
        "rule": "A worker who is twice as efficient takes half the time. If efficiency of A is k% more than B, E_A / E_B = (100 + k) / 100.",
        "example": "A is 50% more efficient than B. E_A : E_B = 3 : 2. Therefore Time taken T_A : T_B = 2 : 3. If B takes 30 days, A takes 20 days.",
        "proTip": "Combined daily rate = 3 + 2 = 5 units. Total work = 30 × 2 = 60 units. Together they take 60/5 = 12 days."
    },
    {
        "id": 31,
        "category": "Time, Speed & Distance",
        "title": "Speed Conversion Multipliers",
        "formula": "km/h to m/s: Multiply by 5/18 ; m/s to km/h: Multiply by 18/5",
        "rule": "1 km/h = 1000m / 3600s = 5/18 m/s. Multiples of 18 km/h correspond to multiples of 5 m/s.",
        "example": "36 km/h = 2 × 18 km/h = 2 × 5 = 10 m/s. 72 km/h = 4 × 5 = 20 m/s. 90 km/h = 5 × 5 = 25 m/s.",
        "proTip": "Memorize the 18:5 ladder: 18km/h=5m/s, 36=10, 54=15, 72=20, 90=25, 108=30."
    },
    {
        "id": 32,
        "category": "Time, Speed & Distance",
        "title": "Average Speed for Equal Distances (Harmonic Mean)",
        "formula": "Average Speed = (2 × S₁ × S₂) / (S₁ + S₂)",
        "rule": "When an entity covers equal distances at speeds S₁ and S₂, the average speed is their harmonic mean, NEVER the arithmetic mean (S₁+S₂)/2.",
        "example": "A car travels from A to B at 60 km/h and returns at 40 km/h. Avg Speed = (2 × 60 × 40) / (60 + 40) = 4800 / 100 = 48 km/h.",
        "proTip": "For 3 equal distances: Avg Speed = (3 × S₁ × S₂ × S₃) / (S₁S₂ + S₂S₃ + S₃S₁)."
    },
    {
        "id": 33,
        "category": "Time, Speed & Distance",
        "title": "Relative Speed Fundamentals",
        "formula": "Opposite directions: S_rel = S₁ + S₂ ; Same direction: S_rel = |S₁ - S₂|",
        "rule": "When two bodies move towards or away from each other, their relative speed is the sum. When traveling in the same direction, it is their difference.",
        "example": "Two trains moving towards each other at 50 km/h and 70 km/h approach each other at 50 + 70 = 120 km/h. If 240 km apart, they meet in 240 / 120 = 2 hours.",
        "proTip": "In chasing problems (police & thief), Distance of separation / (S_police - S_thief) = Time to catch."
    },
    {
        "id": 34,
        "category": "Time, Speed & Distance",
        "title": "Train Passing Objects: Effective Distance Rules",
        "formula": "Pole / Person: D = Length_Train ; Platform / Bridge / Train: D = Length_Train + Length_Object",
        "rule": "A stationary pole or person has negligible length (distance = train length). A platform, tunnel, or second train adds its physical length to the total distance.",
        "example": "A 200m train at 72 km/h (20 m/s) crosses a 300m bridge. Total distance = 200 + 300 = 500m. Time = 500 / 20 = 25 seconds.",
        "proTip": "Always ensure units match before dividing (convert train speed from km/h to m/s)."
    },
    {
        "id": 35,
        "category": "Time, Speed & Distance",
        "title": "Boats & Streams Master Relations",
        "formula": "Downstream D = u + v ; Upstream U = u - v ; Boat Speed u = (D + U)/2 ; Stream Speed v = (D - U)/2",
        "rule": "Where u is speed of boat in still water and v is stream speed. Downstream aids motion; upstream opposes it.",
        "example": "Downstream speed = 18 km/h, Upstream speed = 10 km/h. Still water speed u = (18 + 10)/2 = 14 km/h. Current speed v = (18 - 10)/2 = 4 km/h.",
        "proTip": "If a boat takes n times as long upstream as downstream for the same distance: u / v = (n + 1) / (n - 1)."
    },
    {
        "id": 36,
        "category": "Time, Speed & Distance",
        "title": "Meeting Time Formula After Crossing",
        "formula": "S₁ / S₂ = √(T₂ / T₁)",
        "rule": "If two travelers start from A and B towards each other, meet on the way, and then take T₁ and T₂ hours respectively to reach destinations.",
        "example": "After meeting, train A takes 4 hours to reach B, and train B takes 9 hours to reach A. Speed ratio S_A / S_B = √(9 / 4) = 3 / 2.",
        "proTip": "If S_A is 60 km/h, S_B = 60 × 2/3 = 40 km/h."
    },
    {
        "id": 37,
        "category": "Time, Speed & Distance",
        "title": "Circular Track Meeting Points",
        "formula": "Number of distinct meeting points = (s₁ ± s₂) / gcd(s₁, s₂) [in lowest terms]",
        "rule": "For two runners with speeds in simplified ratio a : b, number of distinct meeting points on a circle is (a + b) in opposite directions, and |a - b| in the same direction.",
        "example": "Speeds 6 m/s and 4 m/s (ratio 3 : 2). Same direction: 3 - 2 = 1 distinct point. Opposite direction: 3 + 2 = 5 distinct meeting points.",
        "proTip": "They always meet for the first time at the starting point after LCM(Time per lap of A, Time per lap of B)."
    },
    {
        "id": 38,
        "category": "Logical Reasoning: Clocks & Calendars",
        "title": "Angle Between Clock Hands Formula",
        "formula": "θ = |30 × H - (11/2) × M| degrees",
        "rule": "The hour hand moves at 0.5° per minute (30°/hour). The minute hand moves at 6° per minute. Their relative separation rate is 5.5° per minute.",
        "example": "Find angle between hands at 4:20: θ = |30 × 4 - 5.5 × 20| = |120 - 110| = 10°.",
        "proTip": "If θ > 180°, the reflex angle is 360° - θ."
    },
    {
        "id": 39,
        "category": "Logical Reasoning: Clocks & Calendars",
        "title": "Clock Hands Coinciding Interval",
        "formula": "Hands coincide every (65 + 5/11) minutes",
        "rule": "In a 12-hour period, the minute and hour hands coincide exactly 11 times (not 12 times!), and 22 times in 24 hours.",
        "example": "Between 11 o'clock and 1 o'clock, the hands coincide only once — at exactly 12:00:00.",
        "proTip": "Hands are perpendicular (90°) 22 times in 12 hours, and 44 times in 24 hours."
    },
    {
        "id": 40,
        "category": "Logical Reasoning: Clocks & Calendars",
        "title": "Calendar Odd Days Counting Technique",
        "formula": "Odd Days = Total Days mod 7 (Ordinary Year = 1, Leap Year = 2)",
        "rule": "Every multiple of 7 days brings back the same day of the week. Century odd days: 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "example": "If Jan 1, 2024 is Monday, what is Jan 1, 2025? 2024 is a leap year (366 days = 2 odd days). Jan 1, 2025 = Monday + 2 = Wednesday.",
        "proTip": "The last day of a century cannot be Tuesday, Thursday, or Saturday."
    },
    {
        "id": 41,
        "category": "Algebra & Progressions",
        "title": "Sum of First n Natural Numbers, Squares and Cubes",
        "formula": "Σn = n(n+1)/2 ; Σn² = n(n+1)(2n+1)/6 ; Σn³ = [n(n+1)/2]²",
        "rule": "Notice that the sum of the first n cubes is the exact square of the sum of the first n natural numbers.",
        "example": "Sum of first 10 cubes = (10 × 11 / 2)² = 55² = 3,025.",
        "proTip": "Sum of first n odd numbers is always n² (e.g. 1 + 3 + 5 + 7 = 4² = 16)."
    },
    {
        "id": 42,
        "category": "Algebra & Progressions",
        "title": "Sum of Arithmetic Progression (AP)",
        "formula": "S_n = (n/2) × [2a + (n-1)d] = n × [(First + Last) / 2]",
        "rule": "The sum of an AP is always equal to the number of terms multiplied by the average of the first and last terms.",
        "example": "Sum of AP: 5, 9, 13, ..., 41 (10 terms): Sum = 10 × [(5 + 41) / 2] = 10 × 23 = 230.",
        "proTip": "The middle term of an odd number of AP terms is always the average of the whole series."
    },
    {
        "id": 43,
        "category": "Geometry & Mensuration",
        "title": "Primitive Pythagorean Triplets",
        "formula": "(3,4,5), (5,12,13), (7,24,25), (8,15,17), (9,40,41), (11,60,61), (12,35,37), (20,21,29)",
        "rule": "Memorizing these base right-triangle triplets and their multiples (e.g. 6-8-10, 15-20-25) computes hypotenuse and leg lengths without square roots.",
        "example": "A right triangle has legs 15 and 36. Recognize 3 × (5, 12, 13) -> Hypotenuse = 3 × 13 = 39.",
        "proTip": "Any odd number 2m+1 forms triplet: 2m+1, 2m(m+1), 2m(m+1)+1."
    },
    {
        "id": 44,
        "category": "Geometry & Mensuration",
        "title": "Equilateral Triangle Metric Formulas",
        "formula": "Area = (√3/4)a² ; Height = (√3/2)a ; Inradius r = a/(2√3) ; Circumradius R = a/√3",
        "rule": "Circumradius is always twice the inradius in an equilateral triangle: R = 2r.",
        "example": "If side a = 6 cm: Area = (√3/4) × 36 = 9√3 cm². Inradius r = 6/(2√3) = √3 cm. Circumradius R = 2√3 cm.",
        "proTip": "Ratio of area of incircle to circumcircle of an equilateral triangle is always 1 : 4."
    },
    {
        "id": 45,
        "category": "Geometry & Mensuration",
        "title": "Scaling Dimensions: Area and Volume Multipliers",
        "formula": "Linear × k ⟹ Area × k² ⟹ Volume × k³",
        "rule": "When all linear dimensions of any 2D/3D shape are multiplied by k, all areas scale by k² and volumes scale by k³.",
        "example": "If the radius of a sphere is doubled (k=2): Surface area increases by 2² = 4 times (+300%). Volume increases by 2³ = 8 times (+700%).",
        "proTip": "If radius increases by 10% (1.1x), volume becomes 1.1³ = 1.331x (33.1% increase)."
    },
    {
        "id": 46,
        "category": "Modern Math: P&C and Probability",
        "title": "Permutations of Words with Repeated Letters",
        "formula": "Total Arrangements = n! / (p₁! × p₂! × p₃!...)",
        "rule": "Divide total letters factorial by factorials of frequencies of repeating characters.",
        "example": "Arrangements of 'SUCCESS': Total 7 letters (S: 3, C: 2, U: 1, E: 1). Ways = 7! / (3! × 2!) = 5040 / (6 × 2) = 420 ways.",
        "proTip": "To keep specific letters together, tie them as a single super-letter, multiply internal permutations."
    },
    {
        "id": 47,
        "category": "Modern Math: P&C and Probability",
        "title": "Circular Permutations Formula",
        "formula": "Distinct objects around circle = (n - 1)! ; Beads on necklace/garland = (n - 1)! / 2",
        "rule": "Because circular rotation does not create new arrangements, fix one person to break circular symmetry, leaving (n-1) to arrange.",
        "example": "6 delegates seated at round conference table: Ways = (6 - 1)! = 5! = 120 ways. 6 beads on necklace = 120 / 2 = 60 ways.",
        "proTip": "Flip-symmetry (clockwise == counter-clockwise) applies to necklaces, bracelets, and garlands."
    },
    {
        "id": 48,
        "category": "Modern Math: P&C and Probability",
        "title": "Complementary Probability: 'At Least One' Trick",
        "formula": "P(At least 1 success) = 1 - P(Zero successes)",
        "rule": "Computing 'at least one' directly requires summing multiple cases. It is almost always 5x faster to calculate the probability of zero successes and subtract from 1.",
        "example": "A fair coin is tossed 4 times. Find P(at least 1 head): P(zero heads) = P(all tails) = (1/2)⁴ = 1/16. P(at least 1 head) = 1 - 1/16 = 15/16.",
        "proTip": "Same rule applies to rolling dice: P(at least one 6 in 3 rolls) = 1 - (5/6)³ = 1 - 125/216 = 91/216."
    },
    {
        "id": 49,
        "category": "Modern Math: P&C and Probability",
        "title": "Handshake & Match Tournaments Formula",
        "formula": "Total Handshakes / Matches = n(n - 1) / 2 = ⁿC₂",
        "rule": "Every pair of individuals creates exactly one handshake or one head-to-head match.",
        "example": "In a round-robin chess tournament with 12 players: Total matches = 12 × 11 / 2 = 66 matches.",
        "proTip": "If people exchange gifts or business cards (where A gives to B and B gives to A), total gifts = n(n - 1)."
    },
    {
        "id": 50,
        "category": "Logical Reasoning: Deduction",
        "title": "Syllogisms: Distribution & Negative Premise Rule",
        "formula": "Universal statements distribute Subject; Negative statements distribute Predicate",
        "rule": "1. Two negative premises yield NO valid conclusion. 2. If one premise is negative/particular, the conclusion MUST be negative/particular. 3. Middle term must be distributed at least once.",
        "example": "'All A are B' (A distributed). 'No B are C' (B and C distributed). Valid conclusion: 'No A are C' (both distributed).",
        "proTip": "If both premises are 'Some' (Particular), no definite conclusion can ever be drawn!"
    }
]

if __name__ == "__main__":
    print(f"Loaded {len(TIPS_DATA)} Aptitude Tips successfully.")
