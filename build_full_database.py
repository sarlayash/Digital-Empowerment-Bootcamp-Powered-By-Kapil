# build_full_database.py
import json

def generate_questions():
    # Day 1: 100 Questions (Evolution of IT, IT Foundations, Computer Org, Components, OS, MS-Word, Basics of C)
    day1 = []
    
    # 1. Evolution of IT (15)
    evo_it = [
        ("Which device is universally recognized as the earliest mechanical counting instrument?", ["Abacus", "Pascaline", "Analytical Engine", "Slide Rule"], 0, "The Abacus is considered the earliest recorded counting and calculating instrument."),
        ("Who is honored as the 'Father of the Computer' for designing the Analytical Engine?", ["Alan Turing", "Charles Babbage", "John von Neumann", "Blaise Pascal"], 1, "Charles Babbage conceptualized the Analytical Engine in 1837."),
        ("Who is historically recognized as the world's first computer programmer?", ["Grace Hopper", "Ada Lovelace", "Margaret Hamilton", "Katherine Johnson"], 1, "Ada Lovelace created the first algorithm intended for Charles Babbage's Analytical Engine."),
        ("What primary electronic component characterized First-Generation computers (e.g., ENIAC)?", ["Transistors", "Integrated Circuits", "Vacuum Tubes", "Microprocessors"], 2, "First-generation computers (1940-1956) relied on vacuum tubes for electronic switching."),
        ("Which invention replaced vacuum tubes in Second-Generation computers?", ["Transistors", "Silicon Wafers", "Relays", "Punched Cards"], 0, "The transistor, invented at Bell Labs, ushered in the second generation of computers."),
        ("Third-Generation computers made a massive leap due to which technology?", ["VLSI", "Integrated Circuits (ICs)", "Fiber Optics", "Magnetic Core Storage"], 1, "Integrated Circuits (ICs) allowed thousands of transistors on one silicon wafer."),
        ("Fourth-Generation computers are characterized primarily by which component?", ["Quantum Qubits", "Microprocessors (VLSI/ULSI)", "Mercury Delay Lines", "Vacuum Tubes"], 1, "Fourth-generation computers use microprocessors containing millions/billions of transistors."),
        ("What is the primary technological frontier of Fifth-Generation computing?", ["Mechanical Cams", "Parallel Processing, AI & Quantum Technologies", "Germanium Diodes", "Magnetic Tapes"], 1, "Fifth-generation centers on Artificial Intelligence and quantum logic."),
        ("What does 'Moore's Law' predict?", ["Computer prices double every 2 years", "Transistor count on microchips roughly doubles every 18-24 months", "Software errors double every decade", "Internet speed quadruples annually"], 1, "Gordon Moore predicted transistor density roughly doubles every 2 years."),
        ("Which was the first general-purpose electronic digital computer in the US?", ["UNIVAC I", "ENIAC", "EDVAC", "Altair 8800"], 1, "ENIAC (1945) was the first general-purpose electronic digital computer."),
        ("Herman Hollerith developed punched card tabulating machines for which landmark project?", ["1890 US Census", "World War I Codebreaking", "Apollo Moon Landing", "First Commercial Banking"], 0, "Hollerith's tabulating machine automated the 1890 US Census, leading to IBM."),
        ("What early mechanical calculator was invented by Blaise Pascal in 1642?", ["Pascaline", "Difference Engine", "Curta", "Step Reckoner"], 0, "The Pascaline was an early mechanical adding machine using geared wheels."),
        ("Which computer famously predicted the 1952 US Presidential Election on live TV?", ["IBM 7090", "UNIVAC I", "Apple I", "Commodore 64"], 1, "UNIVAC I correctly predicted Eisenhower's victory in 1952."),
        ("What was the Altair 8800 (1975) famous for sparking?", ["The mainframe era", "The microcomputer/PC revolution", "The creation of ARPANET", "The punch card era"], 1, "Altair 8800 ignited the personal computer revolution."),
        ("Which scientist formalized the theoretical mathematical model of modern computation in 1936?", ["Alan Turing", "Claude Shannon", "Tim Berners-Lee", "Niklaus Wirth"], 0, "Alan Turing proposed the Turing Machine, defining modern computability.")
    ]
    for q, opts, ans, exp in evo_it:
        day1.append({"q": q, "opts": opts, "ans": ans, "exp": exp, "topic": "Evolution of IT"})

    # 2. Informational Technology (15)
    it_found = [
        ("What is the fundamental difference between 'Data' and 'Information'?", ["Data is encrypted, Information is plain", "Data is raw unorganized facts; Information is data organized with context and meaning", "Data is numbers only, Information is text only", "No difference"], 1, "Data is raw unorganized facts; information is processed with context."),
        ("In the DIKW pyramid, what do the letters represent?", ["Data, Information, Knowledge, Wisdom", "Digital, Internal, Kinetic, Wireless", "Disk, Interface, Kernel, Windows", "Dynamic, Input, Key, Workflow"], 0, "DIKW stands for Data, Information, Knowledge, and Wisdom."),
        ("What are the four primary steps in the Information Processing Cycle?", ["Download, Install, Run, Delete", "Input, Processing, Output, Storage", "Compile, Assemble, Link, Execute", "Power On, Boot, Login, Shutdown"], 1, "The core cycle is Input, Processing, Output, and Storage (IPOS)."),
        ("A single byte is composed of exactly how many bits?", ["4 bits", "8 bits", "16 bits", "32 bits"], 1, "One Byte = 8 binary bits. A 4-bit unit is a nibble."),
        ("How many bytes are in one Kilobyte (KB) in standard binary computing?", ["1,000 bytes", "1,024 bytes", "512 bytes", "2,048 bytes"], 1, "1 KB = 2^10 = 1,024 Bytes."),
        ("Arrange storage units in ascending order:", ["KB < GB < MB < TB", "KB < MB < GB < TB", "MB < KB < GB < TB", "TB < GB < MB < KB"], 1, "Order: KB < MB < GB < TB < PB."),
        ("What does the cloud computing acronym 'SaaS' stand for?", ["Storage as a Service", "Software as a Service", "System and Architecture Suite", "Secure Application and Server"], 1, "SaaS = Software as a Service (e.g. Google Docs, Gmail)."),
        ("Which cloud model provides virtualized hardware on demand?", ["SaaS", "PaaS", "IaaS (Infrastructure as a Service)", "DaaS"], 2, "IaaS provides raw infrastructure like virtual machines and storage."),
        ("What is 'Bandwidth' in networking?", ["The physical weight of cables", "The maximum rate of data transfer across a network path in a given time", "Number of connected PCs", "Storage of the host PC"], 1, "Bandwidth is maximum network transmission capacity over time."),
        ("What does the acronym 'URL' stand for?", ["Universal Resource Link", "Uniform Resource Locator", "Unified Routing Location", "User Request Link"], 1, "URL = Uniform Resource Locator."),
        ("Which protocol is the global foundation for secure, encrypted web communication?", ["FTP", "HTTP", "HTTPS", "SMTP"], 2, "HTTPS encrypts web traffic using TLS/SSL."),
        ("What is the primary function of a DNS server?", ["Store user passwords", "Translate human-friendly domain names into IP addresses", "Compress video", "Clean viruses"], 1, "DNS translates domain names like google.com into numerical IP addresses."),
        ("What does 'Open Source Software' primarily mean?", ["Software with no owner", "Software whose source code is freely available for inspection and modification", "Software without an OS", "Software requiring no power"], 1, "Open Source provides freely available, modifiable source code."),
        ("What does 'Latency' mean in computer network communication?", ["Storage size of an email", "The time delay taken for data to travel from source to destination", "Wi-Fi frequency", "Number of users online"], 1, "Latency is the round-trip or transit delay across a network."),
        ("Which of the following is considered a 'Lossless' compression format?", ["MP3", "JPEG", "ZIP / PNG", "MPEG-4"], 2, "ZIP and PNG preserve original data bit-for-bit without loss.")
    ]
    for q, opts, ans, exp in it_found:
        day1.append({"q": q, "opts": opts, "ans": ans, "exp": exp, "topic": "Informational Technology"})

    # 3. Basic Computer Organization (15)
    comp_org = [
        ("Which computer architecture model features shared memory for both programs and data?", ["Harvard Architecture", "Von Neumann Architecture", "Turing Architecture", "Babbage Organization"], 1, "Von Neumann uses shared physical memory for code and data."),
        ("What are the two primary functional units inside the Central Processing Unit (CPU)?", ["ALU and Control Unit (CU)", "RAM and ROM", "Hard Drive and Cache", "GPU and BIOS"], 0, "ALU and Control Unit are the core CPU processing engines."),
        ("What is the main role of the Control Unit (CU) inside a CPU?", ["Performing additions", "Directing data flow and decoding instructions to coordinate CPU operations", "Permanent OS storage", "Cooling the chip"], 1, "Control Unit coordinates data flow and decodes instructions."),
        ("Which CPU register holds the memory address of the next instruction to execute?", ["Accumulator (ACC)", "Program Counter (PC)", "Instruction Register (IR)", "Memory Data Register (MDR)"], 1, "Program Counter (PC) stores the address of the next instruction."),
        ("Which memory type operates at the highest speed with lowest latency in a computer?", ["L3 Cache", "RAM", "CPU Registers", "NVMe SSD"], 2, "CPU Registers reside inside the processor core for sub-nanosecond access."),
        ("What are the three distinct physical buses that constitute the System Bus?", ["Address Bus, Data Bus, Control Bus", "Power Bus, Clock Bus, Memory Bus", "Serial Bus, Parallel Bus, USB", "Input Bus, Output Bus, Logic Bus"], 0, "The system bus contains Address, Data, and Control buses."),
        ("The width of the Address Bus directly dictates what capability?", ["Clock speed of CPU", "Maximum physical memory (RAM) directly addressable by CPU", "Network card speed", "Monitor screen resolution"], 1, "Address bus width (e.g. 32-bit = 4GB) limits addressable RAM."),
        ("What sequence describes the fundamental cycle of processor instruction execution?", ["Load, Store, Clear, Halt", "Fetch, Decode, Execute, Store", "Read, Write, Erase, Verify", "Power, Boot, Run, Terminate"], 1, "The machine cycle: Fetch, Decode, Execute, and Store."),
        ("What is the primary role of Cache memory between CPU and RAM?", ["Back up files", "Store frequently accessed instructions to bridge the CPU-RAM speed gap", "Execute 3D graphics", "Store BIOS settings"], 1, "Cache provides ultra-fast SRAM to feed data swiftly to the CPU."),
        ("What unit is used to measure processor clock frequency?", ["Megabytes (MB)", "Gigahertz (GHz)", "Bits per second (bps)", "Dots per inch (DPI)"], 1, "CPU clock speed is measured in Gigahertz (GHz)."),
        ("What is an Accumulator in computer organization?", ["Battery for motherboard clock", "A register that temporarily holds intermediate results of ALU operations", "Cooling fan", "USB connection"], 1, "The Accumulator stores intermediate arithmetic/logical outputs."),
        ("Which component coordinates CPU timing by emitting electrical pulses?", ["System Clock", "BIOS Chip", "Capacitor Array", "ALU"], 0, "The system clock synchronizes digital operations across components."),
        ("What is the Harvard Architecture known for compared to Von Neumann?", ["Separate physical memory and buses for instructions and data", "Having no CPU", "Using optical lasers", "Having only one register"], 0, "Harvard architecture physically isolates instruction memory from data memory."),
        ("In a 64-bit CPU architecture, what does '64-bit' specifically denote?", ["Monitor has 64 colors", "Registers and processing pipelines are 64 bits wide", "Hard disk has 64 GB", "Clock ticks 64 times/min"], 1, "64-bit CPUs handle 64-bit integers and memory pointers in single operations."),
        ("Which register holds the actual instruction currently being decoded?", ["Memory Buffer Register (MBR)", "Instruction Register (IR)", "Program Counter (PC)", "Stack Pointer (SP)"], 1, "Instruction Register (IR) holds the opcode being decoded.")
    ]
    for q, opts, ans, exp in comp_org:
        day1.append({"q": q, "opts": opts, "ans": ans, "exp": exp, "topic": "Basic Computer Organization"})

    # 4. Functions & Components of Computer (15)
    comp_comp = [
        ("Which of the following is strictly an Input device?", ["Monitor", "Laser Printer", "Optical Scanner", "Audio Speaker"], 2, "An optical scanner converts physical imagery into digital data."),
        ("Which technology is used by banks on cheques for automated reading?", ["OMR", "MICR (Magnetic Ink Character Recognition)", "OCR", "Barcode Reader"], 1, "MICR reads magnetized characters at the bottom of bank cheques."),
        ("Which type of memory holds the permanent startup firmware (BIOS / UEFI)?", ["DRAM", "ROM (Read-Only Memory)", "SRAM", "Virtual Memory"], 1, "ROM preserves boot firmware non-volatilely."),
        ("What distinguishes EEPROM from standard PROM memory?", ["Can be electrically erased and reprogrammed", "Loses data when turned off", "Holds only 1 bit", "Built with vacuum tubes"], 0, "EEPROM is electrically erasable and reprogrammable."),
        ("Which printer category does a modern Laser Printer belong to?", ["Impact Printer", "Non-Impact Printer", "Dot Matrix Printer", "Daisy Wheel Printer"], 1, "Laser printers are non-impact devices using electrostatic toner."),
        ("What metric measures printer resolution quality?", ["BPS", "DPI (Dots per inch)", "PPM", "FLOPs"], 1, "DPI measures dots per inch of printed output."),
        ("What is the primary advantage of an SSD over an HDD?", ["Has moving platters", "Zero moving mechanical parts, much higher speed and shock resistance", "Requires internet", "Strictly read-only"], 1, "SSDs use flash memory with no mechanical latencies."),
        ("Which interface connects modern M.2 NVMe SSDs directly to PCIe lanes?", ["SATA I", "NVMe (Non-Volatile Memory Express)", "IDE / PATA", "SCSI"], 1, "NVMe links high-speed storage directly over PCIe lanes."),
        ("What is the primary role of the Motherboard?", ["Display graphics", "Main printed circuit board connecting all hardware components", "Generate power", "Compile source code"], 1, "The motherboard connects CPU, RAM, storage, and expansion cards."),
        ("Which device converts AC wall power to regulated low-voltage DC for PC components?", ["UPS", "Power Supply Unit (PSU)", "Inverter", "CMOS Battery"], 1, "The PSU rectifies AC to clean DC voltages (+12V, +5V, +3.3V)."),
        ("What is the function of the CMOS button-cell battery on the motherboard?", ["Power CPU during blackout", "Preserve Real-Time Clock and BIOS hardware settings when unplugged", "Spin cooling fans", "Recharge the SSD"], 1, "The CMOS battery keeps the hardware clock and volatile BIOS settings active."),
        ("Which display technology does NOT require a backlight because pixels emit light?", ["Standard LCD", "CCFL Display", "OLED (Organic Light Emitting Diode)", "TFT-LCD"], 2, "OLED pixels emit light individually, enabling deep true blacks."),
        ("Which optical medium has the largest capacity per layer?", ["CD", "DVD", "Blu-ray Disc (BD)", "MiniDisc"], 2, "Blu-ray discs store 25 GB per layer using violet lasers."),
        ("Which port standard provides universal high-speed video, data, and power over a reversible 24-pin connector?", ["VGA", "USB Type-C", "PS/2", "Parallel Port"], 1, "USB Type-C supports universal high-speed power and data transfer."),
        ("Which device forwards data packets between distinct IP networks?", ["Network Hub", "Network Router", "Modem", "Unmanaged Switch"], 1, "Routers route packets between IP subnets using Layer 3 headers.")
    ]
    for q, opts, ans, exp in comp_comp:
        day1.append({"q": q, "opts": opts, "ans": ans, "exp": exp, "topic": "Functions & Components"})

    # 5. Operating System (15)
    comp_os = [
        ("What is the core of an OS that remains in memory and controls hardware?", ["Shell", "Kernel", "Compiler", "File Explorer"], 1, "The Kernel is the core program managing system resources."),
        ("What is the primary difference between CLI and GUI?", ["CLI is faster than hardware", "CLI uses text commands, GUI uses visual windows, icons, and mouse pointer", "CLI is Linux only", "CLI needs touch screen"], 1, "CLI takes typed commands; GUI provides visual graphical interaction."),
        ("What is 'Virtual Memory'?", ["Memory in the cloud", "Using secondary disk storage to simulate extra RAM when physical RAM is full", "USB RAM", "Monitor RAM"], 1, "Virtual memory uses secondary storage paging space to extend addressable RAM."),
        ("What is a 'Deadlock' in process management?", ["Normal program exit", "Processes permanently stuck because each holds resources needed by the other", "Virus locking mouse", "Network disconnect"], 1, "Deadlock is a circular wait condition where processes block indefinitely."),
        ("Which CPU scheduling algorithm gives each process a fixed time slice cyclically?", ["FCFS", "Round Robin (RR)", "Shortest Job First", "Priority Scheduling"], 1, "Round Robin assigns equal time quantums cyclically."),
        ("What is the role of a 'Device Driver'?", ["Clean PC dust", "Translator allowing the OS to communicate with specific hardware peripherals", "Drive robot cars", "Speed up internet"], 1, "Device drivers bridge OS syscalls with specific device hardware registers."),
        ("Which OS is designed to guarantee deterministic responses within microsecond limits?", ["Batch OS", "Real-Time Operating System (RTOS)", "Time-Sharing OS", "Desktop OS"], 1, "An RTOS enforces strict real-time deadline guarantees."),
        ("What is a 'Thread' in an Operating System?", ["Physical wire", "Smallest unit of scheduled execution within a process sharing memory", "Password file", "Network cable"], 1, "A thread is a lightweight execution stream sharing process memory."),
        ("Who created the initial Linux kernel in 1991?", ["Dennis Ritchie", "Linus Torvalds", "Richard Stallman", "Ken Thompson"], 1, "Linus Torvalds released the Linux kernel in 1991."),
        ("What does 'Thrashing' mean in OS memory management?", ["Case vibrating", "OS spending more time swapping pages to/from disk than running user programs", "Fan broken", "Deleted file"], 1, "Thrashing happens when excessive page faulting overwhelms I/O."),
        ("What is the role of an OS File System (e.g. NTFS, ext4)?", ["Control monitor brightness", "Structure, store, retrieve, and secure files on secondary storage", "Compile Python", "Block keyloggers"], 1, "File systems organize files, directories, and storage blocks."),
        ("What command in PowerShell lists files in the current folder?", ["cd", "Get-ChildItem (or ls / dir)", "mkdir", "cat"], 1, "Get-ChildItem displays folder contents in PowerShell."),
        ("What is a 'System Call' (syscall)?", ["VoIP phone call", "Programmatic interface to request privileged services from the OS kernel", "Crash error", "Reboot command"], 1, "System calls let user software invoke kernel-level operations."),
        ("What is 'Spooling' in printer management?", ["Spinning disk", "Buffering print jobs in a storage queue so CPU is not delayed by slow printers", "Winding wire", "Clearing cache"], 1, "SPOOLing queues document data for slower output devices."),
        ("Which mechanism immediately alerts the CPU to handle an asynchronous hardware event?", ["Polling", "Interrupt", "Syskey", "Defragmenter"], 1, "Hardware interrupts trigger immediate Interrupt Service Routines (ISRs).")
    ]
    for q, opts, ans, exp in comp_os:
        day1.append({"q": q, "opts": opts, "ans": ans, "exp": exp, "topic": "Operating System"})

    # 6. MS-Word (10)
    ms_word = [
        ("In MS-Word, what is the shortcut to insert a hyperlink?", ["Ctrl + H", "Ctrl + K", "Ctrl + L", "Ctrl + P"], 1, "Ctrl + K inserts hyperlinks."),
        ("Which feature merges template documents with a list of contacts to generate bulk letters?", ["Track Changes", "Mail Merge", "Macro", "AutoCorrect"], 1, "Mail Merge merges data sources with template documents."),
        ("What is the difference between a Page Break and a Section Break?", ["Identical", "Page Break just starts next page; Section Break allows different headers, margins, and layouts in document parts", "Section Break erases text", "Page Break changes colors"], 1, "Section breaks allow independent formatting zones in a document."),
        ("Which feature tracks and highlights every edit, insertion, and deletion for approval?", ["Mail Merge", "Track Changes", "Watermark", "Word Count"], 1, "Track Changes records editorial alterations."),
        ("What font category features decorative small finishing strokes at character ends?", ["Sans-Serif", "Serif", "Monospace", "Script"], 1, "Serif fonts have small finishing feet (e.g., Times New Roman)."),
        ("Which shortcut opens Find and Replace directly with the Replace tab?", ["Ctrl + F", "Ctrl + H", "Ctrl + R", "Ctrl + G"], 1, "Ctrl + H opens Replace dialog directly."),
        ("How does MS-Word automatically generate an accurate Table of Contents?", ["Scans bold text", "Scans text marked with built-in Heading Styles (H1, H2, H3)", "Guesses size", "Counts words"], 1, "Word builds automated Tables of Contents from Heading Styles."),
        ("What is a 'Drop Cap' in typography?", ["Deleting first letter", "Large decorative capital letter dropped down across multiple lines at start of paragraph", "Underline", "Bullet style"], 1, "A Drop Cap is a large initial letter dropping down across paragraph lines."),
        ("What is the default file extension for modern Microsoft Word documents?", [".doc", ".docx", ".txt", ".rtf"], 1, "Modern Word uses Office Open XML `.docx` format."),
        ("Which feature automatically fixes common typing errors as you type?", ["AutoCorrect", "AutoSave", "SmartArt", "WordArt"], 0, "AutoCorrect instantly corrects predefined typos as typed.")
    ]
    for q, opts, ans, exp in ms_word:
        day1.append({"q": q, "opts": opts, "ans": ans, "exp": exp, "topic": "MS-Word"})

    # 7. Basics of C Programming Language (15)
    c_basics = [
        ("Who created the C programming language at AT&T Bell Labs in 1972?", ["Bjarne Stroustrup", "Dennis Ritchie", "Ken Thompson", "James Gosling"], 1, "Dennis Ritchie created C to implement Unix."),
        ("What is the role of the C Preprocessor (directives starting with '#')?", ["Runs binary", "Performs macro replacement and file inclusion before compilation", "Prints output", "Links libraries"], 1, "Preprocessors handle text replacement and header inclusion prior to compilation."),
        ("What does `#include <stdio.h>` provide to a C program?", ["Graphics functions", "Standard Input/Output function declarations (printf, scanf)", "Math functions", "String allocation"], 1, "<stdio.h> declares standard I/O functions."),
        ("What is the mandatory entry function where every C program begins?", ["start()", "main()", "run()", "_init()"], 1, "Execution begins strictly at main()."),
        ("What is the size of standard `char` data type in C?", ["1 Byte", "2 Bytes", "4 Bytes", "8 Bytes"], 0, "sizeof(char) is defined by C standards to be exactly 1 byte."),
        ("Which format specifier outputs a signed 32-bit integer in decimal form in C?", ["%f", "%d (or %i)", "%c", "%s"], 1, "%d prints signed decimal integers."),
        ("Which format specifier outputs a single-precision float in C?", ["%f", "%d", "%c", "%lf"], 0, "%f prints single-precision floating point numbers."),
        ("Why is the address operator `&` required in `scanf(\"%d\", &x);`?", ["Encrypts variable", "Passes variable memory address so scanf can store the input value directly", "Forces positive value", "Multiplies by 10"], 1, "scanf requires memory pointers to store input."),
        ("Which of the following is an INVALID variable name in C?", ["_score", "score2", "2score", "myScore"], 2, "Identifiers cannot start with a numeric digit in C."),
        ("What escape sequence moves output cursor to a new line in C?", ["\\t", "\\n", "\\r", "\\b"], 1, "\\n prints a newline character."),
        ("What is the result of `7 / 2` in C integer arithmetic?", ["3.5", "3", "4", "Error"], 1, "Integer division truncates decimals, resulting in 3."),
        ("Which operator yields the integer remainder of division in C?", ["/", "% (Modulo operator)", "#", "&"], 1, "% is the remainder/modulo operator."),
        ("What character terminates every executable statement in C?", [":", "; (Semicolon)", ".", "}"], 1, "Statements must end with semicolons in C."),
        ("Which logical operator represents Boolean AND in C?", ["&", "&&", "|", "||"], 1, "&& evaluates logical AND operations."),
        ("What does `return 0;` from `main()` indicate to the OS?", ["Program failed", "Program executed and completed successfully", "Shutdown PC", "Clear memory"], 1, "Returning 0 indicates clean, successful termination.")
    ]
    for q, opts, ans, exp in c_basics:
        day1.append({"q": q, "opts": opts, "ans": ans, "exp": exp, "topic": "Basics of C"})

    # Day 2: 100 Questions (Functions in C (25), Recursion in C (25), RDBMS & SQL (25), MS-Excel (25))
    day2 = []
    
    # 1. Function-Oriented in C (25)
    for i in range(1, 26):
        if i == 1:
            q = ("What is the primary benefit of modular, function-oriented programming in C?", ["Makes code execute slower", "Breaks large programs into reusable, testable, and maintainable subroutines", "Eliminates need for compilers", "Increases file size unnecessarily"], 1, "Functions enhance reusability, readability, and testing.")
        elif i == 2:
            q = ("What is a 'Function Prototype' (Declaration) in C?", ["The compiled binary of a function", "A statement telling the compiler the function name, return type, and parameters before definition", "The variable containing input", "A comment"], 1, "Prototypes declare signatures before function usage.")
        elif i == 3:
            q = ("What happens when a function in C has a return type of `void`?", ["It returns 0", "It cannot return any value to the caller", "It causes an error", "It runs forever"], 1, "void functions return no values.")
        elif i == 4:
            q = ("What is the difference between 'Formal Parameters' and 'Actual Arguments' in C?", ["Identical", "Formal parameters are variables in the function definition header; Actual arguments are values passed in the function call", "Formal parameters are numbers only", "Actual arguments are always global"], 1, "Formal parameters receive values; Actual arguments are passed in.")
        elif i == 5:
            q = ("By default, how are fundamental primitive arguments passed to functions in C?", ["Pass by Reference", "Pass by Value", "Pass by Pointer", "Pass by Name"], 1, "C passes primitives strictly by value (copying values).")
        elif i == 6:
            q = ("In 'Pass by Value', what happens to the caller's variable if modified inside the called function?", ["Caller variable changes", "Caller variable remains completely unmodified", "Program crashes", "Variable is deleted"], 1, "Pass by value operates on a separate copy in the activation frame.")
        elif i == 7:
            q = ("What data structure is used by the system runtime to manage function call frames and local variables?", ["Queue", "Call Stack", "Binary Tree", "Linked List"], 1, "Function activations are managed via the LIFO Call Stack.")
        elif i == 8:
            q = ("What is the scope of a standard variable declared inside a C function block?", ["Global scope", "Local scope (visible only inside that function block)", "File scope", "Universal scope"], 1, "Local variables exist only within their enclosing block.")
        elif i == 9:
            q = ("What keyword in C allows a local variable to retain its value between successive function calls?", ["extern", "static", "register", "volatile"], 1, "static local variables persist in data segment across calls.")
        elif i == 10:
            q = ("What does the `extern` keyword specify in C variable declarations?", ["Variable is stored on SSD", "Variable is defined in another translation unit or outside current block", "Variable is constant", "Variable cannot be read"], 1, "extern references variables defined in other files/scopes.")
        elif i == 11:
            q = ("What keyword suggests to the compiler to store a variable in a high-speed CPU register for fast access?", ["auto", "register", "fast", "volatile"], 1, "The register keyword hints to use CPU registers.")
        elif i == 12:
            q = ("What does the `inline` keyword suggest to a C compiler regarding a small function?", ["Run function on GPU", "Replace the function call with the actual function code to eliminate call overhead", "Make function recursive", "Execute in background"], 1, "inlining expands function bodies at call sites.")
        elif i == 13:
            q = ("Can a function in C return multiple distinct values directly via a single `return` statement?", ["Yes, using commas", "No, return can only send back at most one single value or pointer/struct", "Yes, up to 10 values", "Yes, using arrays directly"], 1, "return yields at most one value; structs or pointers are needed for multiple.")
        elif i == 14:
            q = ("What happens if a non-void function reaches its closing brace without executing a `return` statement in C?", ["Returns 1 automatically", "Yields undefined behavior if the caller uses the returned value", "Halts processor", "Restarts program"], 1, "Reaching end of non-void function without return is undefined behavior.")
        elif i == 15:
            q = ("Where in memory are local variables inside a function created during execution?", ["Heap", "Stack Frame (Activation Record)", "Code Segment", "BSS segment"], 1, "Local automatic variables are allocated in the function's stack frame.")
        elif i == 16:
            q = ("What header file provides standard mathematical functions like `sqrt()`, `pow()`, and `sin()` in C?", ["<stdio.h>", "<math.h>", "<stdlib.h>", "<string.h>"], 1, "<math.h> defines standard math routines.")
        elif i == 17:
            q = ("What happens when you pass an array to a function in C?", ["Whole array is copied byte-by-byte", "Decays into a pointer to its first element", "Error", "Only last element is passed"], 1, "Arrays decay to pointers when passed as function arguments.")
        elif i == 18:
            q = ("Which storage class is the default for local variables declared inside a C function?", ["static", "auto", "extern", "register"], 1, "auto is the implicit default storage class for local variables.")
        elif i == 19:
            q = ("What is a 'Pure Function' concept in programming?", ["Function written without comments", "Function with no side effects whose return value depends strictly on its arguments", "Function returning void", "Function that prints text"], 1, "Pure functions have zero side effects and deterministic outputs.")
        elif i == 20:
            q = ("What error occurs if two functions in the same C file have the exact same name and signature?", ["Function Overloading", "Redefinition / Conflicting Types Compilation Error", "Function Recursion", "Warning only"], 1, "C does not support function overloading; identical names cause redefinition errors.")
        elif i == 21:
            q = ("What is the lifetime of a global variable in a C program?", ["Only during main()", "Entire duration of program execution", "Until first function exits", "10 seconds"], 1, "Global variables persist from program launch until termination.")
        elif i == 22:
            q = ("What does `const` in a parameter declaration `void printScore(const int s)` guarantee?", ["s can be changed anywhere", "Function cannot modify parameter s inside its body", "s becomes zero", "s is deleted"], 1, "const parameters cannot be mutated inside the function.")
        elif i == 23:
            q = ("What does the `exit()` function from `<stdlib.h>` do when invoked inside a nested function?", ["Returns to caller function", "Terminates the entire program immediately and returns status to OS", "Pauses for 1 second", "Restarts CPU"], 1, "exit() halts entire program execution immediately.")
        elif i == 24:
            q = ("How do you pass a pointer to a variable into a function to achieve Pass-by-Reference in C?", ["Pass by name", "Pass address using & and declare parameter as pointer with *", "Use array brackets", "Not possible in C"], 1, "Passing memory addresses (&) to pointer parameters simulates pass-by-reference.")
        else:
            q = ("What is an 'Activation Record' on the C call stack?", ["File on disk", "Stack frame containing function parameters, return address, and local variables", "Audio recording", "Compiler log"], 1, "Activation records store local state, parameters, and return addresses.")
        day2.append({"q": q[0], "opts": q[1], "ans": q[2], "exp": q[3], "topic": "Functions in C"})

    # 2. Recursive Functions in C (25)
    for i in range(1, 26):
        if i == 1:
            q = ("What is a Recursive Function in programming?", ["A function with no parameters", "A function that calls itself directly or indirectly to solve a smaller subproblem", "A function that never ends", "A function in BIOS"], 1, "Recursion occurs when a function invokes itself.")
        elif i == 2:
            q = ("What is the 'Base Case' in a recursive function?", ["The first line of main()", "The condition that stops recursion and prevents infinite calls", "The largest number", "An error message"], 1, "The base case provides termination condition for recursion.")
        elif i == 3:
            q = ("What critical runtime error occurs if a recursive function lacks a base case?", ["Divide by Zero", "Stack Overflow", "Syntax Error", "Null Pointer"], 1, "Infinite recursive calls exhaust stack memory, triggering Stack Overflow.")
        elif i == 4:
            q = ("What is the base case for calculating factorial of n recursively `fact(n)`?", ["n == 10", "n <= 1 (returns 1)", "n == 0 (returns 0)", "n < 0 (returns infinity)"], 1, "0! and 1! are defined as 1, forming the base case.")
        elif i == 5:
            q = ("What is 'Tail Recursion' in C?", ["Recursion with no base case", "Recursive call is the very last operation performed in the function", "Function calling two other functions", "Recursion inside loops"], 1, "Tail recursion has the recursive call as its final statement.")
        elif i == 6:
            q = ("Why do compilers prefer Tail Recursive functions for optimization?", ["They look simpler", "Compiler can reuse the current stack frame, reducing memory usage to O(1)", "They run on GPU", "They avoid variables"], 1, "Tail-call optimization avoids growing the call stack.")
        elif i == 7:
            q = ("In recursive Fibonacci `fib(n) = fib(n-1) + fib(n-2)`, how many recursive calls branch at each non-base step?", ["1 call", "2 calls (Binary Tree recursion)", "3 calls", "0 calls"], 1, "Naive Fibonacci branches into two recursive sub-calls.")
        elif i == 8:
            q = ("What is the mathematical time complexity of naive recursive Fibonacci without memoization?", ["O(1)", "O(n)", "O(2^n) Exponential", "O(log n)"], 2, "Naive recursive Fibonacci has exponential O(2^n) time complexity.")
        elif i == 9:
            q = ("What is 'Indirect Recursion' in C?", ["Function calling itself", "Function A calls Function B, which in turn calls Function A", "Loop calling function", "Compiler calling main"], 1, "Indirect recursion occurs when functions call each other cyclically.")
        elif i == 10:
            q = ("Which classic algorithmic puzzle is famously solved recursively in 2^n - 1 moves?", ["Sudoku", "Tower of Hanoi", "Tic Tac Toe", "Chess"], 1, "Tower of Hanoi is solved recursively in minimal 2^n - 1 moves.")
        elif i == 11:
            q = ("When a recursive function finishes its base case, how does it resolve previous calls?", ["Clears all RAM", "Unwinds the call stack in reverse order (LIFO)", "Restarts from main()", "Outputs directly to printer"], 1, "The call stack unwinds from bottom to top returning values.")
        elif i == 12:
            q = ("What is the trade-off of recursion compared to iterative loops?", ["Recursion is always faster", "Recursion offers cleaner logical code for tree structures, but incurs stack memory overhead and call latency", "Recursion uses no RAM", "Iteration cannot do math"], 1, "Recursion simplifies branching logic at the cost of stack memory.")
        elif i == 13:
            q = ("What happens to local variables across multiple active recursive invocations?", ["They overwrite each other", "Each invocation maintains its own distinct copy inside its separate stack frame", "They turn into globals", "They become zero"], 1, "Every stack frame isolates distinct copies of local variables.")
        elif i == 14:
            q = ("What is the recursive definition of calculating sum of first n natural numbers?", ["sum(n) = n * sum(n-1)", "sum(n) = n + sum(n-1) with base case sum(0) = 0", "sum(n) = n - sum(n-1)", "sum(n) = sum(n)"], 1, "sum(n) = n + sum(n-1), with sum(0) = 0.")
        elif i == 15:
            q = ("What is 'Head Recursion'?", ["Recursion inside main()", "The recursive call occurs before any other processing in the function", "Recursion on first line of file", "Recursion without base case"], 1, "Head recursion calls itself before doing local work.")
        elif i == 16:
            q = ("Can every recursive problem theoretically be rewritten using iteration and a stack?", ["No, never", "Yes, any recursive algorithm can be converted to an iterative version", "Only in Python", "Only for math"], 1, "Recursion and iteration with an explicit stack are computationally equivalent.")
        elif i == 17:
            q = ("What is the base case when recursively searching an element in a Binary Search?", ["Target found OR search range start > end", "Array size == 100", "When target is negative", "Always at index 0"], 0, "Binary search terminates if target is found or bounds cross.")
        elif i == 18:
            q = ("What causes 'Infinite Recursion'?", ["Missing or unreachable base condition", "Variable named x", "Printing to console", "Using floats"], 0, "A missing, unreachable, or incorrect base case causes infinite recursion.")
        elif i == 19:
            q = ("What is the space complexity of calculating `factorial(n)` using standard linear recursion?", ["O(1)", "O(n) auxiliary stack space", "O(n^2)", "O(log n)"], 1, "Depth of call stack reaches n frames, requiring O(n) space.")
        elif i == 20:
            q = ("Which sorting algorithm naturally employs the Divide-and-Conquer recursive paradigm?", ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"], 1, "Merge Sort recursively splits arrays into halves and merges them.")
        elif i == 21:
            q = ("What does the recursive call `power(base, exp)` reduce to when exp > 0?", ["base + power(base, exp - 1)", "base * power(base, exp - 1)", "exp * power(base, exp)", "base / exp"], 1, "base^exp = base * base^(exp-1).")
        elif i == 22:
            q = ("What is the value of `power(5, 0)` in a standard recursive exponent function?", ["0", "1", "5", "Undefined"], 1, "Any non-zero number to power 0 equals 1 (base case).")
        elif i == 23:
            q = ("In recursion, what is 'Memoization' used for?", ["Printing memory addresses", "Caching results of expensive recursive calls to avoid redundant computations", "Erasing stack", "Compiling code"], 1, "Memoization stores intermediate results to convert O(2^n) to O(n).")
        elif i == 24:
            q = ("Which of the following functions is strictly Tail Recursive?", ["int f(int n) { if(n<=0) return 0; return n + f(n-1); }", "int f(int n, int a) { if(n<=0) return a; return f(n-1, a+n); }", "int f(int n) { if(n<=0) return 1; return n * f(n-1); }", "None"], 1, "Option 2 performs the recursive call as the direct return with no pending arithmetic.")
        else:
            q = ("What is the maximum recursion depth limit in most default systems before stack overflow?", ["Exactly 10 calls", "Dependent on OS stack size (typically several thousand frames)", "Infinite", "100 calls"], 1, "Stack limits depend on OS allocation (typically 1MB - 8MB).")
        day2.append({"q": q[0], "opts": q[1], "ans": q[2], "exp": q[3], "topic": "Recursion in C"})

    # 3. RDBMS (25)
    for i in range(1, 26):
        if i == 1:
            q = ("Who introduced the Relational Model for Database Management in 1970 at IBM?", ["Alan Turing", "E. F. Codd", "Dennis Ritchie", "Bill Gates"], 1, "Edgar F. Codd published the relational model foundation in 1970.")
        elif i == 2:
            q = ("In relational database terminology, what corresponds to a 'Tuple'?", ["A column", "A row / record", "A table", "A database name"], 1, "In relational algebra, a tuple represents a row or record.")
        elif i == 3:
            q = ("In relational database terminology, what corresponds to an 'Attribute'?", ["A row", "A column / field", "A foreign key", "A password"], 1, "An attribute represents a column or property in a relation.")
        elif i == 4:
            q = ("What is the primary characteristic of a 'Primary Key' in a database table?", ["Can contain NULL values", "Must uniquely identify each row and cannot contain NULL values", "Must be text only", "Can have duplicate entries"], 1, "Primary Keys guarantee unique, non-null row identification.")
        elif i == 5:
            q = ("What is a 'Foreign Key'?", ["A key stored in another country", "A column whose values match the Primary Key of another table, establishing a relationship", "A key that is never used", "A password for database admins"], 1, "Foreign keys reference primary keys in parent tables.")
        elif i == 6:
            q = ("What does the 'Referential Integrity' constraint enforce?", ["All numbers must be positive", "Foreign key values must correspond to valid, existing primary key values in the referenced table", "Passwords must have 8 characters", "No text in tables"], 1, "Referential integrity prevents orphaned child records.")
        elif i == 7:
            q = ("What do the letters in 'ACID' properties stand for in transaction processing?", ["Access, Control, Index, Data", "Atomicity, Consistency, Isolation, Durability", "Action, Code, Input, Display", "Array, Column, Integer, Double"], 1, "ACID: Atomicity, Consistency, Isolation, Durability.")
        elif i == 8:
            q = ("What does 'Atomicity' in ACID transactions guarantee?", ["Transactions are radioactive", "All operations in a transaction succeed completely, or none are applied (all-or-nothing)", "Transactions run in parallel", "Data is saved forever"], 1, "Atomicity ensures all-or-nothing completion.")
        elif i == 9:
            q = ("What SQL sublanguage category do commands like `CREATE`, `ALTER`, and `DROP` belong to?", ["DML (Data Manipulation Language)", "DDL (Data Definition Language)", "DCL (Data Control Language)", "TCL (Transaction Control Language)"], 1, "DDL defines and modifies database schema structures.")
        elif i == 10:
            q = ("What SQL sublanguage category do commands like `SELECT`, `INSERT`, `UPDATE`, and `DELETE` belong to?", ["DDL", "DML (Data Manipulation Language)", "DCL", "TCL"], 1, "DML queries and manipulates row data.")
        elif i == 11:
            q = ("Which SQL statement is used to extract records from a database table?", ["EXTRACT", "SELECT", "FETCH", "OPEN"], 1, "SELECT retrieves data rows from tables.")
        elif i == 12:
            q = ("Which SQL clause filters records based on specific logical conditions?", ["GROUP BY", "WHERE", "ORDER BY", "HAVING"], 1, "WHERE filters rows before aggregation.")
        elif i == 13:
            q = ("Which SQL clause sorts the resulting query records in ascending or descending order?", ["SORT BY", "ORDER BY", "ARRANGE BY", "GROUP BY"], 1, "ORDER BY sorts query result sets.")
        elif i == 14:
            q = ("Which SQL command deletes all rows from a table while preserving the table schema structure quickly?", ["DELETE DATABASE", "TRUNCATE TABLE", "DROP TABLE", "REMOVE ALL"], 1, "TRUNCATE removes all rows quickly without logging individual row deletes.")
        elif i == 15:
            q = ("What is the difference between `DROP TABLE` and `DELETE FROM TABLE`?", ["Identical", "DROP removes table structure and data entirely; DELETE removes rows but keeps the table structure", "DELETE removes the database", "DROP keeps rows"], 1, "DROP deletes the table schema; DELETE removes row contents.")
        elif i == 16:
            q = ("What SQL keyword eliminates duplicate rows from query results?", ["UNIQUE", "DISTINCT", "DIFFERENT", "ISOLATE"], 1, "SELECT DISTINCT returns only unique values.")
        elif i == 17:
            q = ("Which SQL function calculates the arithmetic mean of numeric column values?", ["SUM()", "AVG()", "MEAN()", "COUNT()"], 1, "AVG() calculates numerical averages.")
        elif i == 18:
            q = ("What clause is used to filter groups AFTER aggregation by `GROUP BY`?", ["WHERE", "HAVING", "FILTER", "LIMIT"], 1, "HAVING filters aggregated groups.")
        elif i == 19:
            q = ("What type of JOIN returns only records that have matching values in both joined tables?", ["LEFT JOIN", "INNER JOIN", "FULL OUTER JOIN", "RIGHT JOIN"], 1, "INNER JOIN returns records with matching keys in both tables.")
        elif i == 20:
            q = ("What does 1NF (First Normal Form) require in relational database design?", ["No foreign keys", "Every column must contain atomic (indivisible) values, and no repeating groups", "All text must be uppercase", "Table must have 10 columns"], 1, "1NF mandates atomic attribute values and no repeating groups.")
        elif i == 21:
            q = ("What does 2NF (Second Normal Form) eliminate?", ["Primary keys", "Partial functional dependencies on a composite primary key", "Foreign keys", "Integer columns"], 1, "2NF requires 1NF and no partial dependencies on composite keys.")
        elif i == 22:
            q = ("What does 3NF (Third Normal Form) eliminate?", ["Transitive dependencies (non-key attribute depending on another non-key attribute)", "Primary keys", "All tables", "NULL values"], 0, "3NF requires 2NF and eliminates transitive functional dependencies.")
        elif i == 23:
            q = ("What is a 'Candidate Key'?", ["A key nominated by users", "A minimal super key that could qualify to serve as the Primary Key", "A foreign key", "A password"], 1, "Candidate keys are minimal superkeys eligible to become primary keys.")
        elif i == 24:
            q = ("What does SQL stand for?", ["Structured Query Language", "Standard Question Logic", "Sequential Query Library", "Simple Query Layout"], 0, "SQL = Structured Query Language.")
        else:
            q = ("What in-memory lightweight relational database engine is embedded inside web browsers and mobile apps?", ["Oracle Exadata", "SQLite", "IBM DB2", "Teradata"], 1, "SQLite is the world's most widely deployed embedded relational database engine.")
        day2.append({"q": q[0], "opts": q[1], "ans": q[2], "exp": q[3], "topic": "RDBMS & SQL"})

    # 4. MS-Excel (25)
    for i in range(1, 26):
        if i == 1:
            q = ("In MS-Excel, what character MUST start every formula or function?", ["#", "= (Equals sign)", "@", "+"], 1, "All Excel formulas must begin with an equals sign `=`.")
        elif i == 2:
            q = ("What is the intersection of a row and a column called in Excel?", ["Intersection Point", "Cell", "Block", "Grid Box"], 1, "A Cell is the intersection of a column and row.")
        elif i == 3:
            q = ("What does the cell reference `$A$1` represent in Excel?", ["Relative Reference", "Absolute Reference (locked column and row when copied)", "Mixed Reference", "Invalid Reference"], 1, "Dollar signs `$A$1` lock row and column absolutely.")
        elif i == 4:
            q = ("If you copy formula `=A1+B1` down one row, what does it become under Relative Referencing?", ["=A1+B1", "=A2+B2", "=$A$1+$B$1", "=B1+C1"], 1, "Relative references shift coordinates by row offset.")
        elif i == 5:
            q = ("Which Excel function adds all numbers in a specified range of cells?", ["ADD()", "SUM()", "TOTAL()", "PLUS()"], 1, "=SUM(range) adds numbers.")
        elif i == 6:
            q = ("Which function counts only cells containing numeric values in a range?", ["COUNTA()", "COUNT()", "COUNTIF()", "COUNTBLANK()"], 1, "COUNT() counts cells with numbers; COUNTA() counts non-empty cells.")
        elif i == 7:
            q = ("What does the function `=COUNTA(A1:A10)` count?", ["Only blank cells", "All non-empty cells containing numbers, text, or errors", "Only numbers", "Only capital letters"], 1, "COUNTA counts all non-empty cells.")
        elif i == 8:
            q = ("What is the syntax of the Excel `=IF()` logical function?", ["=IF(value, true, false)", "=IF(logical_test, value_if_true, value_if_false)", "=IF(condition, formula)", "=IF(case1, case2)"], 1, "=IF(condition, if_true, if_false).")
        elif i == 9:
            q = ("What error code is displayed in Excel when a number is divided by zero?", ["#VALUE!", "#DIV/0!", "#NAME?", "#N/A"], 1, "#DIV/0! signifies division by zero.")
        elif i == 10:
            q = ("What error code is displayed when Excel cannot find the lookup value in a VLOOKUP search?", ["#REF!", "#N/A", "#NULL!", "#NUM!"], 1, "#N/A indicates value not available.")
        elif i == 11:
            q = ("In `=VLOOKUP(lookup_value, table_array, col_index, [range_lookup])`, what does FALSE for range_lookup specify?", ["Approximate Match", "Exact Match", "Ignore errors", "Sort descending"], 1, "FALSE (or 0) demands an exact match in VLOOKUP.")
        elif i == 12:
            q = ("Which modern Excel function replaces both VLOOKUP and HLOOKUP, searching in any direction without column index counting?", ["XLOOKUP", "LOOKUP_PRO", "SEARCH()", "INDEX_MATCH"], 0, "XLOOKUP searches in any direction without table column index constraints.")
        elif i == 13:
            q = ("Which Excel tool automatically formats cells with colors/bars based on cell values exceeding thresholds?", ["Cell Styles", "Conditional Formatting", "AutoFormat", "Data Validation"], 1, "Conditional Formatting changes appearance dynamically based on values.")
        elif i == 14:
            q = ("What feature restricts cell entries to specific choices from a dropdown list?", ["Data Validation", "Text to Columns", "Consolidate", "Solver"], 0, "Data Validation restricts user inputs to valid ranges or dropdown lists.")
        elif i == 15:
            q = ("What Excel tool rapidly summarizes, groups, slices, and aggregates massive tabular datasets without formulas?", ["Data Table", "Pivot Table", "Scenario Manager", "Goal Seek"], 1, "Pivot Tables dynamically aggregate, group, and summarize tabular data.")
        elif i == 16:
            q = ("Which chart type is best suited for showing parts of a whole proportional percentage?", ["Line Chart", "Pie Chart", "Scatter Plot", "Radar Chart"], 1, "Pie charts display proportional parts of a single whole.")
        elif i == 17:
            q = ("Which chart type is best suited to display trends over chronological time?", ["Pie Chart", "Line Chart", "Donut Chart", "Bubble Chart"], 1, "Line charts display continuous data trends over time.")
        elif i == 18:
            q = ("What keyboard shortcut in Excel triggers the 'AutoSum' function for adjacent numbers?", ["Alt + =", "Ctrl + S", "Shift + F3", "Ctrl + Alt + A"], 0, "Alt + = automatically inserts the SUM formula.")
        elif i == 19:
            q = ("What does the `$` sign in `$A1` lock when copied across columns?", ["Locks row 1", "Locks column A while allowing row number to adjust (Mixed reference)", "Locks entire sheet", "Locks font"], 1, "$A1 locks column A while allowing relative row adjustments.")
        elif i == 20:
            q = ("Which function concatenates or joins two or more text strings together in Excel?", ["CONCATENATE() / CONCAT()", "MERGE()", "COMBINE()", "ATTACH()"], 0, "CONCAT or CONCATENATE joins text strings.")
        elif i == 21:
            q = ("What does the `=TODAY()` function return in Excel?", ["Current time with seconds", "Current system date without time", "Day of the week", "Year only"], 1, "=TODAY() returns the current volatile system date.")
        elif i == 22:
            q = ("What does the `=NOW()` function return?", ["Current date only", "Current system date and time", "Seconds only", "Boot time"], 1, "=NOW() returns both date and time.")
        elif i == 23:
            q = ("What feature 'freezes' top rows or left columns so they stay visible when scrolling down huge spreadsheets?", ["Lock Cells", "Freeze Panes", "Pin Grid", "Split View"], 1, "Freeze Panes locks rows/columns in place during scrolling.")
        elif i == 24:
            q = ("What tool splits data in a single column (e.g. 'John Doe') into multiple columns ('John' and 'Doe')?", ["Flash Fill / Text to Columns", "Data Filter", "Consolidate", "Group"], 0, "Text to Columns or Flash Fill parses delimited text strings.")
        else:
            q = ("What is the maximum number of rows supported in a modern Excel .xlsx worksheet?", ["65,536 rows", "1,048,576 rows", "100,000 rows", "Unlimited"], 1, "Excel .xlsx sheets support up to 1,048,576 rows by 16,384 columns.")
        day2.append({"q": q[0], "opts": q[1], "ans": q[2], "exp": q[3], "topic": "MS-Excel"})

    # Day 3: 100 Questions (HTML Text Formatting (30), CSS Colors (30), JS Variables (30), Synthesis (10))
    day3 = []

    # 1. HTML Text Formatting (30)
    for i in range(1, 31):
        if i == 1:
            q = ("Who invented HTML and the World Wide Web in 1989 at CERN?", ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Brendan Eich"], 1, "Sir Tim Berners-Lee invented HTML and the World Wide Web.")
        elif i == 2:
            q = ("What does HTML stand for?", ["HyperText Markup Language", "High-Tech Machine Language", "Home Tool Markup Language", "Hyperlink Textual Model Language"], 0, "HTML = HyperText Markup Language.")
        elif i == 3:
            q = ("What declaration MUST appear at the very first line of an HTML5 document?", ["<html 5>", "<!DOCTYPE html>", "<doctype html5>", "<header>"], 1, "<!DOCTYPE html> declares modern HTML5 standards mode.")
        elif i == 4:
            q = ("Which HTML tag is used for the largest, most significant page heading?", ["<h6>", "<h1>", "<heading>", "<head>"], 1, "<h1> represents top-level headings.")
        elif i == 5:
            q = ("How many levels of standard section headings exist in HTML?", ["3 levels", "6 levels (h1 through h6)", "10 levels", "Unlimited"], 1, "HTML defines six levels of headings from h1 to h6.")
        elif i == 6:
            q = ("Which HTML tag defines a paragraph of text?", ["<para>", "<p>", "<text>", "<pg>"], 1, "<p> defines paragraphs.")
        elif i == 7:
            q = ("Which self-closing tag produces a single line break without starting a new paragraph?", ["<lb>", "<br>", "<break>", "<hr>"], 1, "<br> creates a line break.")
        elif i == 8:
            q = ("Which HTML tag draws a thematic thematic horizontal rule line across the page?", ["<line>", "<hr>", "<border>", "<divider>"], 1, "<hr> represents a thematic break / horizontal rule.")
        elif i == 9:
            q = ("What is the difference between `<strong>` and `<b>` in modern semantic HTML?", ["Identical", "`<strong>` conveys important semantic emphasis for screen readers; `<b>` is purely visual bold styling", "`<b>` is faster", "`<strong>` is italic"], 1, "<strong> carries semantic weight; <b> is purely typographic bold.")
        elif i == 10:
            q = ("What is the difference between `<em>` and `<i>`?", ["Identical", "`<em>` represents semantic stress emphasis; `<i>` represents stylistic alternate voice/italic text", "`<i>` is invalid in HTML5", "`<em>` underlines text"], 1, "<em> indicates semantic emphasis; <i> is stylistic italicization.")
        elif i == 11:
            q = ("Which HTML tag displays preformatted text preserving all spaces and line breaks exactly as typed?", ["<code>", "<pre>", "<format>", "<samp>"], 1, "<pre> renders text preserving whitespace and line breaks.")
        elif i == 12:
            q = ("Which HTML tag marks text with a yellow background highlighter effect?", ["<highlight>", "<mark>", "<yellow>", "<bg>"], 1, "<mark> highlights text with browser-default yellow background.")
        elif i == 13:
            q = ("Which tag displays text with a strikethrough line to represent deleted or outdated content?", ["<del>", "<strike>", "<remove>", "<cut>"], 0, "<del> semantically denotes deleted text.")
        elif i == 14:
            q = ("Which tag displays text as a Subscript (e.g., the '2' in H₂O)?", ["<sup>", "<sub>", "<down>", "<small>"], 1, "<sub> positions text as subscript.")
        elif i == 15:
            q = ("Which tag displays text as a Superscript (e.g., the '2' in x²)?", ["<sup>", "<sub>", "<up>", "<power>"], 0, "<sup> positions text as superscript.")
        elif i == 16:
            q = ("Which HTML tag specifies inline computer code snippets?", ["<script>", "<code>", "<cmd>", "<c>"], 1, "<code> defines a fragment of computer code.")
        elif i == 17:
            q = ("Which tag defines a section quoted from an external source rendered as an indented block?", ["<quote>", "<blockquote>", "<q>", "<cite>"], 1, "<blockquote> represents extended quoted sections.")
        elif i == 18:
            q = ("Which tag defines short inline quotations surrounded by quotation marks automatically?", ["<q>", "<quote>", "<blockquote>", "<cite>"], 0, "<q> denotes short inline quotations.")
        elif i == 19:
            q = ("Which tag represents keyboard input to be entered by the user?", ["<key>", "<kbd>", "<input>", "<type>"], 1, "<kbd> denotes user keyboard input.")
        elif i == 20:
            q = ("Which tag represents smaller side-comments or legal disclaimers?", ["<tiny>", "<small>", "<subtext>", "<legal>"], 1, "<small> denotes fine print or disclaimers.")
        elif i == 21:
            q = ("What is the correct HTML entity to display the copyright symbol ©?", ["&copy;", "&copyright;", "#copy;", "$copy;"], 0, "&copy; renders the copyright symbol.")
        elif i == 22:
            q = ("What HTML entity represents the less-than symbol `<` in text to prevent tag confusion?", ["&less;", "&lt;", "&l;", "<"], 1, "&lt; represents the less-than symbol.")
        elif i == 23:
            q = ("What HTML entity represents the greater-than symbol `>`?", ["&gt;", "&great;", "&g;", ">"], 0, "&gt; represents the greater-than symbol.")
        elif i == 24:
            q = ("What HTML entity generates a non-breaking space that prevents automatic word wrapping?", ["&space;", "&nbsp;", "&blank;", "&gap;"], 1, "&nbsp; inserts a non-breaking space.")
        elif i == 25:
            q = ("Where does the `<title>` tag reside in an HTML document?", ["Inside <body>", "Inside <head>", "Inside <footer>", "Outside <html>"], 1, "<title> must be placed inside the <head> element.")
        elif i == 26:
            q = ("Which attribute provides alternative descriptive text for images for accessibility and screen readers?", ["title", "alt", "src", "desc"], 1, "alt text describes images for screen readers.")
        elif i == 27:
            q = ("Which tag creates an ordered (numbered) list?", ["<ul>", "<ol>", "<li>", "<dl>"], 1, "<ol> creates numbered ordered lists.")
        elif i == 28:
            q = ("Which tag creates an unordered (bulleted) list?", ["<ul>", "<ol>", "<li>", "<list>"], 0, "<ul> creates bulleted lists.")
        elif i == 29:
            q = ("Which tag defines individual list items inside `<ol>` or `<ul>`?", ["<item>", "<li>", "<dl>", "<ul>"], 1, "<li> defines list items.")
        else:
            q = ("Which tag indicates an abbreviation and can display its full title on hover?", ["<abbr>", "<acronym>", "<short>", "<word>"], 0, "<abbr title='...'> defines abbreviations with tooltips.")
        day3.append({"q": q[0], "opts": q[1], "ans": q[2], "exp": q[3], "topic": "HTML Text Formatting"})

    # 2. CSS Colors (30)
    for i in range(1, 31):
        if i == 1:
            q = ("What does CSS stand for?", ["Computer Style Sheets", "Cascading Style Sheets", "Creative Styling System", "Colorful Style Standards"], 1, "CSS = Cascading Style Sheets.")
        elif i == 2:
            q = ("Which CSS property changes the color of text inside an element?", ["text-color", "color", "font-color", "text-style"], 1, "The `color` property sets foreground text color.")
        elif i == 3:
            q = ("Which CSS property sets the background color of an element?", ["bg-color", "background-color", "color-background", "backdrop"], 1, "`background-color` defines element backdrops.")
        elif i == 4:
            q = ("How many standard named colors are recognized natively by all modern web browsers?", ["16", "140", "256", "Unlimited"], 1, "All modern browsers support 140 standard named colors.")
        elif i == 5:
            q = ("What does the Hexadecimal color code `#FFFFFF` represent?", ["Pure Black", "Pure White", "Bright Red", "Transparent"], 1, "#FFFFFF represents pure white (max red, green, blue).")
        elif i == 6:
            q = ("What does `#000000` represent in Hexadecimal color?", ["Pure White", "Pure Black", "Navy Blue", "Gray"], 1, "#000000 represents pure black (0 red, 0 green, 0 blue).")
        elif i == 7:
            q = ("In Hexadecimal color `#RRGGBB`, how many bits represent each color channel?", ["4 bits", "8 bits (values 00 to FF = 0 to 255)", "16 bits", "32 bits"], 1, "Each channel uses 2 hex digits = 8 bits (0-255).")
        elif i == 8:
            q = ("What is the shorthand Hex equivalent for `#FF0000` (Pure Red)?", ["#F00", "#FF0", "#F0", "#RED"], 0, "#F00 expands to #FF0000.")
        elif i == 9:
            q = ("What RGB values represent pure primary green in CSS?", ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)"], 1, "rgb(0, 255, 0) is pure green.")
        elif i == 10:
            q = ("In the RGBA color model `rgba(r, g, b, a)`, what does the 'a' parameter represent?", ["Altitude", "Alpha channel (Opacity / Transparency from 0.0 to 1.0)", "Accuracy", "Ambient light"], 1, "Alpha denotes opacity between 0.0 (transparent) and 1.0 (opaque).")
        elif i == 11:
            q = ("What does the HSL color model stand for?", ["Hue, Saturation, Lightness", "Hex, Style, Layout", "Header, Size, Length", "High, Soft, Low"], 0, "HSL stands for Hue, Saturation, and Lightness.")
        elif i == 12:
            q = ("In HSL color, what is 'Hue' represented as?", ["A percentage (0% to 100%)", "A degree on the color wheel (0 to 360 degrees)", "A byte from 0 to 255", "A hex character"], 1, "Hue is expressed as an angle from 0° to 360° on the color wheel.")
        elif i == 13:
            q = ("On the HSL color wheel, which angle represents pure Red?", ["0 (or 360) degrees", "120 degrees", "240 degrees", "180 degrees"], 0, "0° is red, 120° is green, 240° is blue.")
        elif i == 14:
            q = ("In HSL, what does 0% Lightness produce, regardless of Hue?", ["Pure White", "Pure Black", "Pure Gray", "Transparent"], 1, "0% lightness produces pure black.")
        elif i == 15:
            q = ("In HSL, what does 100% Lightness produce?", ["Pure Black", "Pure White", "Pure Red", "Pure Yellow"], 1, "100% lightness produces pure white.")
        elif i == 16:
            q = ("What CSS function produces a smooth color transition between two or more colors along a straight line?", ["radial-gradient()", "linear-gradient()", "color-blend()", "conic-gradient()"], 1, "linear-gradient() creates smooth linear color transitions.")
        elif i == 17:
            q = ("What CSS property controls the overall transparency of an element and all its children?", ["alpha", "opacity", "transparent", "filter-fade"], 1, "`opacity` sets transparency for an element and its children.")
        elif i == 18:
            q = ("What is the difference between setting `opacity: 0.5` vs `background-color: rgba(0,0,0,0.5)`?", ["Identical", "`opacity` affects the entire element including child text; `rgba` affects ONLY the background color leaving child text opaque", "`rgba` affects fonts only", "No difference"], 1, "rgba styles only the background while preserving crisp foreground text.")
        elif i == 19:
            q = ("What CSS keyword represents a completely see-through color?", ["none", "transparent", "clear", "invisible"], 1, "`transparent` represents rgba(0, 0, 0, 0).")
        elif i == 20:
            q = ("What CSS keyword adopts the current text color of the parent element for borders or backgrounds?", ["currentColor", "inheritColor", "parentColor", "thisColor"], 0, "`currentColor` reflects the computed value of the element's text color.")
        elif i == 21:
            q = ("What CSS property adds a drop-shadow glow or shade behind an element box?", ["text-shadow", "box-shadow", "border-shadow", "glow"], 1, "`box-shadow` casts shadows behind element boxes.")
        elif i == 22:
            q = ("What CSS property adds a shadow directly behind text characters?", ["box-shadow", "text-shadow", "font-shadow", "char-shadow"], 1, "`text-shadow` adds shadows behind individual characters.")
        elif i == 23:
            q = ("According to WCAG accessibility guidelines, what is the minimum contrast ratio required for standard body text?", ["1:1", "4.5:1", "10:1", "2:1"], 1, "WCAG AA requires at least 4.5:1 contrast for normal body text.")
        elif i == 24:
            q = ("What does the CSS property `border-color` specify?", ["Thickness of border", "Color of element borders", "Shape of borders", "Shadow color"], 1, "`border-color` sets the border color.")
        elif i == 25:
            q = ("Can you specify different colors for the top, right, bottom, and left borders in CSS?", ["No", "Yes, using border-color with 4 values or individual border-*-color properties", "Only 2 colors", "Only top and bottom"], 1, "CSS supports 4 distinct border colors.")
        elif i == 26:
            q = ("What color is represented by `rgb(128, 128, 128)`?", ["Pure White", "Medium Gray", "Navy Blue", "Pure Black"], 1, "Equal mid-range RGB values produce neutral gray.")
        elif i == 27:
            q = ("In Hex color `#0000FF`, which color component is fully saturated?", ["Red", "Blue", "Green", "Alpha"], 1, "The last two digits FF maximize the blue channel.")
        elif i == 28:
            q = ("What CSS color keyword resets an element's color to its browser default?", ["initial", "none", "clear", "reset"], 0, "`initial` restores property values to CSS initial defaults.")
        elif i == 29:
            q = ("How do you define CSS custom color variables for consistent theming?", ["$primary: #000;", "--primary-color: #3b82f6; (accessed via var(--primary-color))", "@color: blue;", "color-var = red;"], 1, "CSS custom properties use `--name` and `var(--name)`.")
        else:
            q = ("What color space in modern CSS offers wider, more vibrant gamuts for HDR screens than standard sRGB?", ["display-p3 / oklch", "cmyk", "vga-16", "mono-8"], 0, "oklch and display-p3 support modern wide-gamut displays.")
        day3.append({"q": q[0], "opts": q[1], "ans": q[2], "exp": q[3], "topic": "CSS Colors"})

    # 3. JavaScript Variables (30)
    for i in range(1, 31):
        if i == 1:
            q = ("Who created JavaScript at Netscape in 1995 in just 10 days?", ["James Gosling", "Brendan Eich", "Guido van Rossum", "Bjarne Stroustrup"], 1, "Brendan Eich developed JavaScript in 1995.")
        elif i == 2:
            q = ("Is JavaScript the same programming language as Java?", ["Yes, identical", "No, they are completely distinct languages with different architectures and paradigms", "JavaScript is just compiled Java", "Java is a subset of JS"], 1, "Java and JavaScript are entirely separate languages.")
        elif i == 3:
            q = ("Which HTML tag is used to embed or reference client-side JavaScript code?", ["<javascript>", "<script>", "<js>", "<code>"], 1, "<script> embeds or loads JavaScript.")
        elif i == 4:
            q = ("What are the three keywords used to declare variables in modern JavaScript?", ["dim, static, var", "var, let, const", "def, val, int", "string, number, bool"], 1, "var, let, and const declare variables in JavaScript.")
        elif i == 5:
            q = ("What is the primary characteristic of a variable declared with `const`?", ["Can be reassigned anytime", "Cannot be reassigned after initial initialization", "Can only hold numbers", "Deletes itself in 1 second"], 1, "`const` variables cannot be reassigned.")
        elif i == 6:
            q = ("What scoping rules govern variables declared with `let` and `const`?", ["Function scoped", "Block scoped (confined to enclosing `{}` braces)", "Global only", "File scoped"], 1, "`let` and `const` are block-scoped.")
        elif i == 7:
            q = ("What scoping rules govern legacy variables declared with `var`?", ["Block scoped", "Function scoped (or globally scoped if declared outside functions)", "Module scoped only", "Constant"], 1, "`var` declarations are function-scoped.")
        elif i == 8:
            q = ("What happens if you attempt to reassign a `const` variable `const x = 10; x = 20;`?", ["x becomes 20", "TypeError: Assignment to constant variable", "Warning only", "x becomes 0"], 1, "Reassigning a const variable throws a TypeError.")
        elif i == 9:
            q = ("What is 'Hoisting' in JavaScript?", ["Moving files to server", "JavaScript moving variable and function declarations to top of their scope during compilation", "Compressing code", "Deleting unused RAM"], 1, "Hoisting lifts declarations to scope tops.")
        elif i == 10:
            q = ("What value does an uninitialized variable declared with `let x;` hold?", ["null", "undefined", "0", "false"], 1, "Uninitialized variables evaluate to `undefined`.")
        elif i == 11:
            q = ("Which JavaScript operator checks the data type of a variable or value?", ["type()", "typeof", "instanceof", "checkType()"], 1, "`typeof` returns a string describing data type.")
        elif i == 12:
            q = ("What is the result of `typeof 42` in JavaScript?", ["'number'", "'int'", "'integer'", "'float'"], 0, "JavaScript groups integers and floats under 'number'.")
        elif i == 13:
            q = ("What is the result of `typeof 'Kapil'`?", ["'text'", "'string'", "'char'", "'array'"], 1, "Text strings return 'string'.")
        elif i == 14:
            q = ("What is the famous historical quirk of `typeof null` in JavaScript?", ["'null'", "'object'", "'undefined'", "'boolean'"], 1, "Due to legacy binary type tag representations, `typeof null` returns 'object'.")
        elif i == 15:
            q = ("What is the difference between `==` (loose equality) and `===` (strict equality)?", ["Identical", "`==` converts types before comparing; `===` checks both value and data type without coercion", "`===` is faster", "`==` is deprecated"], 1, "`===` compares both value and type without coercion.")
        elif i == 16:
            q = ("What does `'5' == 5` evaluate to in JavaScript?", ["false", "true", "TypeError", "NaN"], 1, "Loose equality coerces string '5' to number 5, yielding true.")
        elif i == 17:
            q = ("What does `'5' === 5` evaluate to in JavaScript?", ["true", "false", "undefined", "NaN"], 1, "Strict equality checks types; String does not equal Number, yielding false.")
        elif i == 18:
            q = ("Which primitive data type represents true or false values?", ["Number", "Boolean", "String", "Symbol"], 1, "Boolean represents logical true or false.")
        elif i == 19:
            q = ("What does `NaN` represent in JavaScript?", ["Not a Null", "Not a Number (result of an invalid mathematical calculation)", "New Array Node", "Negative Number"], 1, "NaN represents unrepresentable mathematical results.")
        elif i == 20:
            q = ("What built-in console method prints debug messages to the browser developer tools?", ["print()", "console.log()", "document.write()", "terminal.out()"], 1, "console.log() writes output to browser dev tools.")
        elif i == 21:
            q = ("Which built-in function displays a modal dialog popup box with an OK button to the user?", ["popup()", "alert()", "modal()", "message()"], 1, "alert() presents an alert modal dialog.")
        elif i == 22:
            q = ("What symbol initiates a single-line comment in JavaScript?", ["#", "//", "<!--", "/*"], 1, "// denotes single-line comments.")
        elif i == 23:
            q = ("What delimiters enclose multi-line comments in JavaScript?", ["<!-- -->", "/* */", "{{ }}", "## ##"], 1, "/* and */ enclose multi-line comments.")
        elif i == 24:
            q = ("Which template literal syntax allows string interpolation in modern JavaScript?", ["'Score: ' + s", "`Score is: ${s}`", "\"Score: %s\"", "[Score: s]"], 1, "Backticks `` and `${variable}` support string interpolation.")
        elif i == 25:
            q = ("Which method selects an HTML element by its unique ID attribute?", ["document.selectId()", "document.getElementById()", "document.find()", "window.query()"], 1, "document.getElementById() retrieves elements by ID.")
        elif i == 26:
            q = ("What property changes the plain text content inside an HTML DOM element?", ["innerHTML", "innerText (or textContent)", "value", "content"], 1, "innerText or textContent updates textual contents.")
        elif i == 27:
            q = ("Is JavaScript a statically-typed or dynamically-typed language?", ["Statically typed", "Dynamically typed (variables hold values of any type without strict type declarations)", "Non-typed", "Strongly compiled"], 1, "JS is dynamically typed; variable types adapt to assigned values.")
        elif i == 28:
            q = ("What is the Temporal Dead Zone (TDZ) for `let` and `const` variables?", ["Time before server boot", "Period between entering scope and variable declaration where accessing it throws ReferenceError", "Garbage collection cycle", "Browser sleep mode"], 1, "Accessing let/const variables before declaration throws ReferenceError due to TDZ.")
        elif i == 29:
            q = ("Can you add new properties to an object declared with `const person = { name: 'Kapil' };`?", ["No, const freezes everything", "Yes, const prevents reassigning the variable pointer, but object contents can still be mutated", "Throws SyntaxError", "Deletes object"], 1, "const prevents variable reassignment, but object mutations are permitted.")
        else:
            q = ("What method prevents mutations to an object in JavaScript?", ["Object.seal()", "Object.freeze()", "Object.lock()", "const"], 1, "Object.freeze() makes objects shallowly immutable.")
        day3.append({"q": q[0], "opts": q[1], "ans": q[2], "exp": q[3], "topic": "JavaScript Variables"})

    # 4. Full Stack Synthesis & Grand Review (10)
    for i in range(1, 11):
        if i == 1:
            q = ("In full-stack web architecture, what role does HTML fulfill?", ["Logic and calculation", "Structural skeleton and document content", "Database persistence", "Color and animations"], 1, "HTML forms the structural content foundation.")
        elif i == 2:
            q = ("In full-stack architecture, what role does CSS fulfill?", ["Visual presentation, typography, and responsive layout styling", "Calculations", "SQL queries", "Operating system kernel"], 0, "CSS styles presentation, fonts, and responsiveness.")
        elif i == 3:
            q = ("In client-side web development, what role does JavaScript fulfill?", ["Static layout", "Dynamic behavior, user event handling, and interactivity", "Data cabling", "Display resolution"], 1, "JavaScript controls interactivity and DOM dynamics.")
        elif i == 4:
            q = ("How does a web front-end communicate with a back-end C or Python service and SQL database?", ["Through CPU registers", "Via HTTP/HTTPS network API requests (REST / WebSockets)", "Through MS-Word Mail Merge", "Via printer cables"], 1, "APIs over HTTP/HTTPS link front-ends with back-end databases.")
        elif i == 5:
            q = ("Why is understanding low-level C programming beneficial for modern web developers?", ["It makes HTML obsolete", "It provides direct insight into memory management, CPU architecture, and how browser rendering engines are built", "It increases download speed", "It replaces CSS"], 1, "C fundamentals illuminate memory management and browser engine architectures.")
        elif i == 6:
            q = ("What is a Progressive Web App (PWA)?", ["An app that only works in games", "A web app using modern APIs to deliver native app-like capabilities, installability, and offline execution on phones and desktops", "An app written in C", "A spreadsheet macro"], 1, "PWAs provide installable, offline-capable app experiences across devices.")
        elif i == 7:
            q = ("Which file gives a PWA its app name, icons, and standalone mobile display mode on phones?", ["style.css", "manifest.json", "index.c", "package.lock"], 1, "manifest.json configures PWA installability.")
        elif i == 8:
            q = ("Which background web worker enables PWAs to work offline and cache web resources?", ["CPU Thread", "Service Worker", "Database Engine", "Compiler"], 1, "Service Workers handle offline caching and background sync.")
        elif i == 9:
            q = ("What does 'Responsive Web Design' mean in modern web engineering?", ["Websites that answer voice commands", "Web layouts that automatically adapt and look great on any screen size (mobile, tablet, desktop)", "Websites that load in 0.1ms", "Websites without images"], 1, "Responsive design ensures seamless layouts across all display form factors.")
        else:
            q = ("What is the ultimate goal of the Digital Empowerment Bootcamp Powered By Kapil?", ["To memorize definitions", "To empower learners from Zero to Infinity with fundamental computational literacy, coding logic, and real-world tools", "To sell software licenses", "To pass one exam only"], 1, "The bootcamp empowers learners with lasting computational capability from zero to infinity.")
        day3.append({"q": q[0], "opts": q[1], "ans": q[2], "exp": q[3], "topic": "Bootcamp Synthesis"})

    print(f"Total Day 1 Questions: {len(day1)}")
    print(f"Total Day 2 Questions: {len(day2)}")
    print(f"Total Day 3 Questions: {len(day3)}")
    assert len(day1) == 100, f"Day 1 count is {len(day1)}"
    assert len(day2) == 100, f"Day 2 count is {len(day2)}"
    assert len(day3) == 100, f"Day 3 count is {len(day3)}"

    full_data = {
        "1": day1,
        "2": day2,
        "3": day3
    }

    js_content = f"// Automated Master Question Bank for Digital Empowerment Bootcamp Powered By Kapil\n// Total 300 Curated Assessment Questions (100 per day)\nconst BOOTCAMP_QUESTION_BANK = {json.dumps(full_data, indent=2)};\n\nif (typeof module !== 'undefined') {{ module.exports = BOOTCAMP_QUESTION_BANK; }}\n"
    
    with open("js/questions-data.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    print("Successfully wrote js/questions-data.js with all 300 questions!")

if __name__ == "__main__":
    generate_questions()
