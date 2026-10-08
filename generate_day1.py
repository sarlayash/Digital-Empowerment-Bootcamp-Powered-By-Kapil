# generate_questions.py
import json
import os

day1_questions = [
    # Evolution of IT (15 Qs)
    {
        "q": "Which device is universally recognized as the earliest mechanical counting instrument?",
        "opts": ["Abacus", "Pascaline", "Analytical Engine", "Slide Rule"],
        "ans": 0,
        "topic": "Evolution of IT",
        "exp": "The Abacus (dating back to ancient Mesopotamia and China) is considered the earliest recorded counting and calculating instrument."
    },
    {
        "q": "Who is honored as the 'Father of the Computer' for designing the Analytical Engine?",
        "opts": ["Alan Turing", "Charles Babbage", "John von Neumann", "Blaise Pascal"],
        "ans": 1,
        "topic": "Evolution of IT",
        "exp": "Charles Babbage conceptualized the Analytical Engine in 1837, which incorporated an ALU, basic control flow, and memory."
    },
    {
        "q": "Who is historically recognized as the world's first computer programmer?",
        "opts": ["Grace Hopper", "Ada Lovelace", "Margaret Hamilton", "Katherine Johnson"],
        "ans": 1,
        "topic": "Evolution of IT",
        "exp": "Ada Lovelace wrote the first algorithm intended for Charles Babbage's Analytical Engine."
    },
    {
        "q": "What primary electronic component characterized First-Generation computers (e.g., ENIAC)?",
        "opts": ["Transistors", "Integrated Circuits", "Vacuum Tubes", "Microprocessors"],
        "ans": 2,
        "topic": "Evolution of IT",
        "exp": "First-generation computers (1940-1956) relied on thermal vacuum tubes for electronic switching and amplification."
    },
    {
        "q": "Which revolutionary invention replaced vacuum tubes in Second-Generation computers, dramatically reducing heat and size?",
        "opts": ["Transistors", "Silicon Wafers", "Relays", "Punched Cards"],
        "ans": 0,
        "topic": "Evolution of IT",
        "exp": "The transistor, invented at Bell Labs in 1947, ushered in the second generation of computers (1956-1963)."
    },
    {
        "q": "Third-Generation computers (1964-1971) made a massive leap in speed and efficiency due to which technology?",
        "opts": ["VLSI", "Integrated Circuits (ICs)", "Fiber Optics", "Magnetic Core Storage"],
        "ans": 1,
        "topic": "Evolution of IT",
        "exp": "Jack Kilby and Robert Noyce invented the Integrated Circuit (IC), allowing thousands of transistors on one silicon wafer."
    },
    {
        "q": "Fourth-Generation computers are characterized primarily by the development of which component?",
        "opts": ["Quantum Qubits", "Microprocessors (VLSI/ULSI)", "Mercury Delay Lines", "Vacuum Tubes"],
        "ans": 1,
        "topic": "Evolution of IT",
        "exp": "Fourth-generation computers (1971-present) use microprocessors containing millions or billions of transistors on a single chip."
    },
    {
        "q": "What is the primary technological frontier of Fifth-Generation computing?",
        "opts": ["Mechanical Cams", "Parallel Processing, AI & Quantum Technologies", "Germanium Diodes", "Magnetic Tapes"],
        "ans": 1,
        "topic": "Evolution of IT",
        "exp": "Fifth-generation computing centers on Artificial Intelligence, ultra-large parallel computing, and quantum logic."
    },
    {
        "q": "What does 'Moore's Law' historically predict?",
        "opts": ["Computer prices double every 2 years", "The number of transistors on a microchip doubles roughly every 18-24 months", "Software errors double every decade", "Internet speed quadruples annually"],
        "ans": 1,
        "topic": "Evolution of IT",
        "exp": "Gordon Moore predicted in 1965 that transistor density on integrated circuits roughly doubles every two years."
    },
    {
        "q": "Which was the first general-purpose electronic digital computer built in the United States?",
        "opts": ["UNIVAC I", "ENIAC", "EDVAC", "Altair 8800"],
        "ans": 1,
        "topic": "Evolution of IT",
        "exp": "ENIAC (Electronic Numerical Integrator and Computer), finished in 1945 at Univ. of Pennsylvania, was the first general-purpose electronic digital computer."
    },
    {
        "q": "Herman Hollerith developed punched card tabulating machines for which landmark project?",
        "opts": ["1890 US Census", "World War I Codebreaking", "The Apollo Moon Landing", "First Commercial Banking"],
        "ans": 0,
        "topic": "Evolution of IT",
        "exp": "Hollerith's tabulating machine automated the 1890 US Census, leading to the foundation of the company that became IBM."
    },
    {
        "q": "What early mechanical calculator was invented by Blaise Pascal in 1642?",
        "opts": ["Pascaline", "Difference Engine", "Curta", "Step Reckoner"],
        "ans": 0,
        "topic": "Evolution of IT",
        "exp": "The Pascaline was an early mechanical adding machine using geared wheels created by Blaise Pascal."
    },
    {
        "q": "Which commercial computer in 1951 correctly predicted the US Presidential Election outcome?",
        "opts": ["IBM 7090", "UNIVAC I", "Apple I", "Commodore 64"],
        "ans": 1,
        "topic": "Evolution of IT",
        "exp": "UNIVAC I became famous for predicting Eisenhower's landslide presidential victory in 1952 on live CBS television."
    },
    {
        "q": "What was the Altair 8800 (1975) famous for sparking?",
        "opts": ["The mainframe era", "The personal computer (microcomputer) revolution", "The creation of ARPANET", "The punch card era"],
        "ans": 1,
        "topic": "Evolution of IT",
        "exp": "The Altair 8800 is recognized as the spark that ignited the microcomputer/PC hobbyist revolution."
    },
    {
        "q": "Which scientist formalized the theoretical mathematical model of modern general-purpose computation in 1936?",
        "opts": ["Alan Turing", "Claude Shannon", "Tim Berners-Lee", "Niklaus Wirth"],
        "ans": 0,
        "topic": "Evolution of IT",
        "exp": "Alan Turing proposed the Turing Machine, defining the mathematical foundations of computability and computer science."
    },

    # Informational Technology (15 Qs)
    {
        "q": "What is the fundamental difference between 'Data' and 'Information'?",
        "opts": ["Data is encrypted, Information is plain text", "Data is raw unorganized facts; Information is data organized with context and meaning", "Data is numerical only, Information is words only", "Data exists only on disk, Information exists only in RAM"],
        "ans": 1,
        "topic": "Informational Technology",
        "exp": "Data represents raw, unprocessed facts, while information is structured and processed data that carries meaning and decision value."
    },
    {
        "q": "In the DIKW pyramid, what do the letters represent?",
        "opts": ["Data, Information, Knowledge, Wisdom", "Digital, Internal, Kinetic, Wireless", "Disk, Interface, Kernel, Windows", "Dynamic, Input, Key, Workflow"],
        "ans": 0,
        "topic": "Informational Technology",
        "exp": "The DIKW hierarchy stands for Data, Information, Knowledge, and Wisdom."
    },
    {
        "q": "What are the four primary steps in the Information Processing Cycle of any computer?",
        "opts": ["Download, Install, Run, Delete", "Input, Processing, Output, Storage", "Compile, Assemble, Link, Execute", "Power On, Boot, Login, Shutdown"],
        "ans": 1,
        "topic": "Informational Technology",
        "exp": "The core Information Processing Cycle consists of Input, Processing, Output, and Storage (IPOS)."
    },
    {
        "q": "A single byte is composed of exactly how many bits?",
        "opts": ["4 bits", "8 bits", "16 bits", "32 bits"],
        "ans": 1,
        "topic": "Informational Technology",
        "exp": "One Byte = 8 binary digits (bits). A 4-bit unit is called a nibble."
    },
    {
        "q": "How many bytes are in one Kilobyte (KB) in standard binary computing (base-2)?",
        "opts": ["1,000 bytes", "1,024 bytes", "512 bytes", "2,048 bytes"],
        "ans": 1,
        "topic": "Informational Technology",
        "exp": "In binary digital computing, 1 KB = 2^10 = 1,024 Bytes."
    },
    {
        "q": "Arrange the following storage units in ascending order: Terabyte (TB), Megabyte (MB), Gigabyte (GB), Kilobyte (KB).",
        "opts": ["KB < GB < MB < TB", "KB < MB < GB < TB", "MB < KB < GB < TB", "TB < GB < MB < KB"],
        "ans": 1,
        "topic": "Informational Technology",
        "exp": "Ascending order: Kilobyte (KB) < Megabyte (MB) < Gigabyte (GB) < Terabyte (TB) < Petabyte (PB)."
    },
    {
        "q": "What does the cloud computing acronym 'SaaS' stand for?",
        "opts": ["Storage as a Service", "Software as a Service", "System and Architecture Suite", "Secure Application and Server"],
        "ans": 1,
        "topic": "Informational Technology",
        "exp": "SaaS stands for Software as a Service (e.g., Google Docs, Gmail, Microsoft 365)."
    },
    {
        "q": "Which cloud computing model provides virtualized hardware (servers, storage, networks) on demand?",
        "opts": ["SaaS", "PaaS", "IaaS (Infrastructure as a Service)", "DaaS"],
        "ans": 2,
        "topic": "Informational Technology",
        "exp": "IaaS (Infrastructure as a Service, such as AWS EC2 or Google Compute Engine) provides raw computing infrastructure."
    },
    {
        "q": "What is 'Bandwidth' in networking and IT?",
        "opts": ["The physical weight of network cables", "The maximum rate of data transfer across a network path in a given time", "The number of computers connected to a router", "The storage capacity of the host computer"],
        "ans": 1,
        "topic": "Informational Technology",
        "exp": "Bandwidth is the maximum capacity of a wired or wireless communications link to transmit data over a network connection in a given time."
    },
    {
        "q": "What does the acronym 'URL' stand for in web technology?",
        "opts": ["Universal Resource Link", "Uniform Resource Locator", "Unified Routing Location", "User Request Link"],
        "ans": 1,
        "topic": "Informational Technology",
        "exp": "URL stands for Uniform Resource Locator, specifying the web address of a resource."
    },
    {
        "q": "Which protocol is the global foundation for secure, encrypted web communication?",
        "opts": ["FTP", "HTTP", "HTTPS", "SMTP"],
        "ans": 2,
        "topic": "Informational Technology",
        "exp": "HTTPS (Hypertext Transfer Protocol Secure) encrypts communication using TLS/SSL."
    },
    {
        "q": "What is the primary function of a DNS (Domain Name System) server?",
        "opts": ["To store user passwords securely", "To translate human-friendly domain names (e.g., google.com) into IP addresses", "To compress video files for streaming", "To clean viruses from hard drives"],
        "ans": 1,
        "topic": "Informational Technology",
        "exp": "DNS serves as the phonebook of the Internet, translating domain names into numerical IP addresses."
    },
    {
        "q": "What does 'Open Source Software' primarily mean?",
        "opts": ["Software that has no copyright owner", "Software whose source code is freely available for inspection, modification, and enhancement", "Software that operates without an Operating System", "Software that requires no electricity"],
        "ans": 1,
        "topic": "Informational Technology",
        "exp": "Open Source Software provides public access to its source code under licenses granting rights to study, change, and distribute it."
    },
    {
        "q": "What does 'Latency' mean in computer network communication?",
        "opts": ["The total storage size of an email", "The time delay taken for data to travel from source to destination", "The frequency of the Wi-Fi signal in Gigahertz", "The number of users logged into a website"],
        "ans": 1,
        "topic": "Informational Technology",
        "exp": "Latency refers to the time delay incurred in sending and receiving data packets across a network."
    },
    {
        "q": "Which of the following is considered a 'Lossless' data compression format?",
        "opts": ["MP3", "JPEG", "ZIP / PNG", "MPEG-4"],
        "ans": 2,
        "topic": "Informational Technology",
        "exp": "ZIP and PNG preserve every single bit of original uncompressed data without degradation, making them lossless."
    },

    # Basic Computer Organization (15 Qs)
    {
        "q": "Which classic computer architecture model features shared memory for both programs (instructions) and data?",
        "opts": ["Harvard Architecture", "Von Neumann Architecture", "Turing Architecture", "Babbage Organization"],
        "ans": 1,
        "topic": "Basic Computer Organization",
        "exp": "The Von Neumann architecture uses a unified physical memory space to hold both instructions and data."
    },
    {
        "q": "What are the two primary functional units inside the Central Processing Unit (CPU)?",
        "opts": ["ALU and Control Unit (CU)", "RAM and ROM", "Hard Drive and Cache", "GPU and BIOS"],
        "ans": 0,
        "topic": "Basic Computer Organization",
        "exp": "The CPU core is composed fundamentally of the Arithmetic Logic Unit (ALU) and the Control Unit (CU), backed by Registers."
    },
    {
        "q": "What is the main role of the Control Unit (CU) inside a CPU?",
        "opts": ["Performing additions and multiplications", "Directing data flow and decoding instructions to coordinate CPU operations", "Storing permanent operating system files", "Cooling the silicon substrate"],
        "ans": 1,
        "topic": "Basic Computer Organization",
        "exp": "The Control Unit decodes instructions and directs data movement between CPU components, memory, and I/O devices."
    },
    {
        "q": "Which CPU register specifically holds the memory address of the next instruction to be fetched and executed?",
        "opts": ["Accumulator (ACC)", "Program Counter (PC)", "Instruction Register (IR)", "Memory Data Register (MDR)"],
        "ans": 1,
        "topic": "Basic Computer Organization",
        "exp": "The Program Counter (PC) stores the address of the next sequential machine instruction to execute."
    },
    {
        "q": "Which memory type operates at the highest speed with the lowest latency in a computer system?",
        "opts": ["L3 Cache", "RAM", "CPU Registers", "NVMe SSD"],
        "ans": 2,
        "topic": "Basic Computer Organization",
        "exp": "CPU Registers are located directly inside the processor silicon core, operating within a fraction of a clock cycle."
    },
    {
        "q": "What are the three distinct physical buses that constitute the System Bus?",
        "opts": ["Address Bus, Data Bus, Control Bus", "Power Bus, Clock Bus, Memory Bus", "Serial Bus, Parallel Bus, USB", "Input Bus, Output Bus, Logic Bus"],
        "ans": 0,
        "topic": "Basic Computer Organization",
        "exp": "The system bus is divided into Address Bus (unidirectional), Data Bus (bidirectional), and Control Bus."
    },
    {
        "q": "The width of the Address Bus directly dictates what capability of the computer?",
        "opts": ["The clock speed of the processor", "The maximum amount of physical memory (RAM) the CPU can directly address", "The speed of the network adapter", "The monitor's maximum screen resolution"],
        "ans": 1,
        "topic": "Basic Computer Organization",
        "exp": "An n-bit address bus can address up to 2^n memory locations (e.g., 32-bit bus addresses 2^32 = 4 GB RAM)."
    },
    {
        "q": "What sequence describes the fundamental cycle of processor instruction execution?",
        "opts": ["Load, Store, Clear, Halt", "Fetch, Decode, Execute, Store", "Read, Write, Erase, Verify", "Power, Boot, Run, Terminate"],
        "ans": 1,
        "topic": "Basic Computer Organization",
        "exp": "The machine cycle consists of Fetching the instruction, Decoding it, Executing the operation, and Storing the result."
    },
    {
        "q": "What is the primary role of Cache memory located between the CPU and main RAM?",
        "opts": ["To back up files in case of power failure", "To store frequently accessed instructions and data to bridge the CPU-RAM speed gap", "To execute 3D graphics shading", "To store BIOS configuration settings"],
        "ans": 1,
        "topic": "Basic Computer Organization",
        "exp": "Cache memory (L1, L2, L3) uses high-speed SRAM to hold recently/frequently accessed data close to the CPU."
    },
    {
        "q": "What unit is typically used to measure the clock frequency of modern computer processors?",
        "opts": ["Megabytes (MB)", "Gigahertz (GHz)", "Bits per second (bps)", "Dots per inch (DPI)"],
        "ans": 1,
        "topic": "Basic Computer Organization",
        "exp": "Processor clock speed is measured in Gigahertz (GHz), representing billions of clock cycles per second."
    },
    {
        "q": "What is an Accumulator in computer organization?",
        "opts": ["A battery that powers the motherboard clock", "A dedicated register that temporarily holds intermediate results of ALU operations", "A cooling fan on top of the graphics card", "A bus that connects external USB devices"],
        "ans": 1,
        "topic": "Basic Computer Organization",
        "exp": "The Accumulator (ACC) is a central CPU register that stores results of arithmetic and logic computations."
    },
    {
        "q": "Which component coordinates the timing of all CPU operations by emitting electrical pulses at regular intervals?",
        "opts": ["System Clock", "BIOS Chip", "Capacitor Array", "ALU"],
        "ans": 0,
        "topic": "Basic Computer Organization",
        "exp": "The system quartz clock crystal produces pulses that synchronize instruction execution across the processor."
    },
    {
        "q": "What is the Harvard Architecture primarily known for, compared to Von Neumann?",
        "opts": ["Having physically separate memory and buses for instructions and data", "Having no CPU", "Using optical lasers instead of electrons", "Having only one register"],
        "ans": 0,
        "topic": "Basic Computer Organization",
        "exp": "The Harvard architecture maintains separate physical storage pathways for code instructions and data variables."
    },
    {
        "q": "In a 64-bit CPU architecture, what does '64-bit' specifically denote?",
        "opts": ["The monitor displays 64 colors", "The CPU registers and data processing pipelines are 64 bits wide", "The hard disk has 64 gigabytes", "The system clock ticks 64 times a minute"],
        "ans": 1,
        "topic": "Basic Computer Organization",
        "exp": "A 64-bit CPU features registers, memory addresses, and data buses capable of processing 64-bit chunks in a single cycle."
    },
    {
        "q": "Which register holds the actual instruction currently being decoded and executed?",
        "opts": ["Memory Buffer Register (MBR)", "Instruction Register (IR)", "Program Counter (PC)", "Stack Pointer (SP)"],
        "ans": 1,
        "topic": "Basic Computer Organization",
        "exp": "The Instruction Register (IR) holds the binary opcode currently being decoded by the Control Unit."
    },

    # Functions and Components of Computer (15 Qs)
    {
        "q": "Which of the following is strictly an Input device?",
        "opts": ["Monitor", "Laser Printer", "Optical Scanner", "Audio Speaker"],
        "ans": 2,
        "topic": "Functions and Components",
        "exp": "An optical scanner digitizes physical images/documents into binary data, acting as an input device."
    },
    {
        "q": "Which technology is used by banks on cheques for rapid automated reading of routing numbers?",
        "opts": ["OMR (Optical Mark Recognition)", "MICR (Magnetic Ink Character Recognition)", "OCR (Optical Character Recognition)", "Barcode Reader"],
        "ans": 1,
        "topic": "Functions and Components",
        "exp": "MICR utilizes magnetic ink containing iron oxide to allow bank sorting machines to read cheques reliably."
    },
    {
        "q": "Which type of memory holds the permanent startup firmware instructions (BIOS / UEFI)?",
        "opts": ["DRAM", "ROM (Read-Only Memory)", "SRAM", "Virtual Memory"],
        "ans": 1,
        "topic": "Functions and Components",
        "exp": "ROM retains firmware non-volatilely to initialize and test hardware during system boot-up."
    },
    {
        "q": "What distinguishes EEPROM from standard PROM memory?",
        "opts": ["It can be erased and rewritten electrically without UV light exposure", "It loses data when power is turned off", "It only holds 1 bit of data", "It is built with vacuum tubes"],
        "ans": 0,
        "topic": "Functions and Components",
        "exp": "EEPROM (Electrically Erasable Programmable Read-Only Memory) allows flashing firmware updates via electrical signals."
    },
    {
        "q": "Which printer category does a modern high-speed Laser Printer belong to?",
        "opts": ["Impact Printer", "Non-Impact Printer", "Dot Matrix Printer", "Daisy Wheel Printer"],
        "ans": 1,
        "topic": "Functions and Components",
        "exp": "Laser and inkjet printers are non-impact printers; they form characters without striking an inked ribbon against paper."
    },
    {
        "q": "What metric measures the print resolution quality of computer printers?",
        "opts": ["BPS (Bits per second)", "DPI (Dots per inch)", "PPM (Pages per minute)", "FLOPs (Floating Point Operations)"],
        "ans": 1,
        "topic": "Functions and Components",
        "exp": "DPI (Dots Per Inch) measures the spatial density of toner dots, indicating sharpness and resolution."
    },
    {
        "q": "What is the primary operational advantage of a Solid-State Drive (SSD) over a traditional Hard Disk Drive (HDD)?",
        "opts": ["SSDs have spinning magnetic platters for larger capacity", "SSDs have no mechanical moving parts, offering dramatically faster read/write speeds and shock resistance", "SSDs require constant internet access", "SSDs are strictly read-only"],
        "ans": 1,
        "topic": "Functions and Components",
        "exp": "SSDs use flash memory with zero mechanical moving parts, eliminating latency from mechanical spin-up and seek times."
    },
    {
        "q": "Which fast interface protocol connects modern M.2 NVMe SSDs directly to the processor's PCIe lanes?",
        "opts": ["SATA I", "NVMe (Non-Volatile Memory Express)", "IDE / PATA", "SCSI"],
        "ans": 1,
        "topic": "Functions and Components",
        "exp": "NVMe utilizes high-bandwidth PCI Express lanes directly to the CPU, delivering multi-gigabyte/sec throughput."
    },
    {
        "q": "What is the primary role of the Motherboard in a computer?",
        "opts": ["To display graphical output to the user", "To serve as the main printed circuit board connecting CPU, memory, storage, and peripherals", "To generate electric power from AC wall outlets", "To compile source code into machine code"],
        "ans": 1,
        "topic": "Functions and Components",
        "exp": "The motherboard holds the CPU socket, RAM slots, chipsets, and bus traces that link all system hardware together."
    },
    {
        "q": "Which device converts standard household AC alternating electric current to regulated low-voltage DC direct current for PC components?",
        "opts": ["UPS", "Power Supply Unit (PSU)", "Inverter", "CMOS Battery"],
        "ans": 1,
        "topic": "Functions and Components",
        "exp": "The Power Supply Unit (PSU) steps down mains AC voltage to regulated DC rails (+12V, +5V, +3.3V)."
    },
    {
        "q": "What is the function of the tiny button-cell CMOS battery on a computer motherboard?",
        "opts": ["To run the CPU during power outages", "To power the Real-Time Clock (RTC) chip and preserve BIOS hardware settings when the PC is unplugged", "To spin the cooling fans", "To recharge the SSD"],
        "ans": 1,
        "topic": "Functions and Components",
        "exp": "The CMOS coin battery keeps the system clock running and maintains volatile BIOS setup registers when mains power is cut."
    },
    {
        "q": "Which display technology does NOT require a backlight because every individual pixel produces its own light?",
        "opts": ["Standard LCD", "CCFL Display", "OLED (Organic Light Emitting Diode)", "TFT-LCD"],
        "ans": 2,
        "topic": "Functions and Components",
        "exp": "OLED panels are emissive; individual organic pixels emit light, enabling true blacks and infinite contrast ratios."
    },
    {
        "q": "Which optical storage medium has the largest standard storage capacity per layer?",
        "opts": ["Compact Disc (CD)", "Digital Versatile Disc (DVD)", "Blu-ray Disc (BD)", "MiniDisc"],
        "ans": 2,
        "topic": "Functions and Components",
        "exp": "Blu-ray discs use short-wavelength blue-violet lasers, storing 25 GB per layer (compared to 4.7 GB for DVD and 700 MB for CD)."
    },
    {
        "q": "Which port standard provides universal high-speed video, data, and power delivery via a reversible 24-pin connector?",
        "opts": ["VGA", "USB Type-C", "PS/2", "Parallel Port (LPT)"],
        "ans": 1,
        "topic": "Functions and Components",
        "exp": "USB Type-C is a reversible 24-pin industry connector supporting USB4, DisplayPort Alt Mode, and Power Delivery up to 240W."
    },
    {
        "q": "What device is used in computer networks to forward data packets between different IP networks?",
        "opts": ["Network Hub", "Network Router", "Modem", "Unmanaged Switch"],
        "ans": 1,
        "topic": "Functions and Components",
        "exp": "A router operates at Layer 3 (Network Layer), analyzing IP headers to route packets across distinct subnets."
    },

    # Operating System (15 Qs)
    {
        "q": "What is the core component of an Operating System that remains in memory and directly manages hardware resources?",
        "opts": ["Shell", "Kernel", "Compiler", "File Explorer"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "The Kernel is the fundamental core of an OS, controlling low-level CPU scheduling, memory, and hardware devices."
    },
    {
        "q": "What is the primary difference between a Command Line Interface (CLI) and a Graphical User Interface (GUI)?",
        "opts": ["CLI runs faster than the hardware", "CLI accepts typed text commands, while GUI provides visual icons, windows, and pointer interactions", "CLI only works on Linux; GUI only works on Windows", "CLI requires a touchscreen"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "A CLI interacts via text input commands in a terminal, while a GUI utilizes windows, icons, menus, and pointers (WIMP)."
    },
    {
        "q": "What is 'Virtual Memory' in modern operating systems?",
        "opts": ["Memory stored in the cloud", "A technique using secondary disk storage to simulate additional RAM when physical memory is exhausted", "Memory installed on a USB drive", "RAM dedicated exclusively to the monitor"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "Virtual memory maps addresses into physical storage (swap space/paging file) to run programs larger than physical RAM."
    },
    {
        "q": "In OS process management, what is a 'Deadlock'?",
        "opts": ["A situation where a program terminates normally", "A condition where two or more processes are permanently blocked because each is holding a resource the other needs", "A computer virus that locks the mouse", "An internet disconnection"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "Deadlock occurs when processes are unable to proceed because each holds a lock on resources awaited by the other (circular wait)."
    },
    {
        "q": "Which scheduling algorithm allocates the CPU to each ready process for a fixed time slice (quantum) in circular order?",
        "opts": ["First-Come, First-Served (FCFS)", "Round Robin (RR)", "Shortest Job First (SJF)", "Priority Scheduling"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "Round Robin scheduling assigns a fixed time quantum to each thread or process cyclically to ensure fair multi-tasking."
    },
    {
        "q": "What is the primary purpose of a 'Device Driver'?",
        "opts": ["To clean computer dust", "To act as a software translator allowing the OS to communicate with specific hardware peripherals", "To steer automated robotic cars", "To speed up the internet download speed"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "A device driver translates generic OS I/O system calls into device-specific hardware commands."
    },
    {
        "q": "Which operating system category is designed to guarantee response times within strict, deterministic microsecond limits?",
        "opts": ["Batch Processing OS", "Real-Time Operating System (RTOS)", "Time-Sharing OS", "Desktop OS"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "An RTOS (used in medical equipment, automotive braking, aviation) guarantees predictable execution within strict deadlines."
    },
    {
        "q": "What is a 'Thread' in modern operating systems?",
        "opts": ["A physical wire inside the computer cable", "The smallest sequence of programmed instructions that can be managed independently by an OS scheduler", "A password protected file", "A network protocol"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "A thread is a lightweight sub-process executing within the shared memory address space of a parent process."
    },
    {
        "q": "Which open-source operating system kernel was initially created by Linus Torvalds in 1991?",
        "opts": ["Unix", "Linux", "BSD", "Minix"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "Linus Torvalds created the Linux kernel in 1991 as an open-source, POSIX-compliant operating system kernel."
    },
    {
        "q": "What does 'Thrashing' mean in OS memory management?",
        "opts": ["When the computer case vibrates loudly", "When the OS spends more time swapping pages between RAM and disk than executing user instructions", "When the CPU fan fails", "When a file is permanently erased"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "Thrashing occurs when excessive page faults force the OS into continuous, high-latency disk paging loops."
    },
    {
        "q": "What is the role of an OS File System (e.g., NTFS, ext4, FAT32)?",
        "opts": ["To control monitor brightness", "To organize, name, store, retrieve, and secure files on secondary storage devices", "To compile Python scripts", "To protect the keyboard from keylogging"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "A file system provides directory structures, metadata, access control, and allocation tables to store data on physical media."
    },
    {
        "q": "What command-line tool is used in Windows PowerShell to list files and folders in the current directory?",
        "opts": ["cd", "Get-ChildItem (or ls / dir)", "mkdir", "cat"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "`Get-ChildItem` (aliased as `ls` or `dir`) displays directory contents in PowerShell."
    },
    {
        "q": "What is a 'System Call' (syscall)?",
        "opts": ["A phone call made via VoIP", "The programmatic mechanism by which a user program requests a privileged service from the OS kernel", "An error message when a program crashes", "A hardware reboot signal"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "System calls (such as `read`, `write`, `fork`) allow user-mode code to transition into kernel mode to perform privileged hardware actions."
    },
    {
        "q": "What is 'Spooling' in operating system I/O handling?",
        "opts": ["Spinning up a hard drive", "Simultaneous Peripheral Operations On-Line (buffering print jobs in a temporary queue)", "Winding network cables", "Deleting temporary browser cache"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "SPOOLing buffers I/O data (like print jobs) to disk so slower peripherals can process them without holding up the CPU."
    },
    {
        "q": "Which mechanism alerts the CPU immediately that an asynchronous hardware event has occurred requiring urgent attention?",
        "opts": ["Polling", "Interrupt", "Syskey", "Defragmentation"],
        "ans": 1,
        "topic": "Operating System",
        "exp": "A hardware interrupt halts the current instruction flow to execute an Interrupt Service Routine (ISR) for immediate handling."
    },

    # MS-Word (10 Qs)
    {
        "q": "In Microsoft Word, what is the keyboard shortcut to create a hyperlink from selected text?",
        "opts": ["Ctrl + H", "Ctrl + K", "Ctrl + L", "Ctrl + P"],
        "ans": 1,
        "topic": "MS-Word",
        "exp": "Ctrl + K is the standard universal shortcut across Office applications to insert a hyperlink."
    },
    {
        "q": "Which powerful MS-Word feature merges a template document with an external recipient database to print customized letters or envelopes?",
        "opts": ["Track Changes", "Mail Merge", "Macro Recorder", "AutoCorrect"],
        "ans": 1,
        "topic": "MS-Word",
        "exp": "Mail Merge automates mass generation of personalized documents by populating placeholders from a recipient data list."
    },
    {
        "q": "What is the difference between a 'Page Break' and a 'Section Break' in MS-Word?",
        "opts": ["They are completely identical", "A Page Break only pushes text to the next page; a Section Break allows different page numbering, margins, and headers/footers in different parts of the document", "A Section Break deletes the previous page", "A Page Break changes font colors"],
        "ans": 1,
        "topic": "MS-Word",
        "exp": "Section Breaks partition a document into discrete formatting zones, enabling custom headers, page orientations, and numbering."
    },
    {
        "q": "What feature allows multiple reviewers to annotate, edit, strike-through, and approve document changes collaboratively?",
        "opts": ["Mail Merge", "Track Changes", "Watermark", "Word Count"],
        "ans": 1,
        "topic": "MS-Word",
        "exp": "Track Changes highlights every insertion, deletion, and formatting edit for review and acceptance."
    },
    {
        "q": "What font category features decorative small finishing strokes ('feet') at the ends of character stems (e.g., Times New Roman)?",
        "opts": ["Sans-Serif", "Serif", "Monospace", "Script"],
        "ans": 1,
        "topic": "MS-Word",
        "exp": "Serif fonts feature small projections or strokes at the ends of character limbs (e.g., Times New Roman, Georgia)."
    },
    {
        "q": "Which keyboard shortcut in MS-Word opens the 'Find and Replace' dialog box directly to Replace?",
        "opts": ["Ctrl + F", "Ctrl + H", "Ctrl + R", "Ctrl + G"],
        "ans": 1,
        "topic": "MS-Word",
        "exp": "Ctrl + H launches Find and Replace directly with the Replace tab active."
    },
    {
        "q": "How does MS-Word automatically generate an accurate 'Table of Contents' with page numbers?",
        "opts": ["By reading all bold text", "By scanning text styled with built-in Heading Styles (Heading 1, Heading 2, Heading 3)", "By guessing based on font size", "By analyzing the length of every paragraph"],
        "ans": 1,
        "topic": "MS-Word",
        "exp": "Word scans built-in Heading styles (H1, H2, H3) to assemble a dynamic, page-referenced Table of Contents."
    },
    {
        "q": "What is a 'Drop Cap' in typography and word processing?",
        "opts": ["Deleting the first letter of a chapter", "A large decorative capital letter dropped down across two or more lines at the beginning of a paragraph", "An underline under headings", "A bullet point style"],
        "ans": 1,
        "topic": "MS-Word",
        "exp": "A Drop Cap is a large initial letter that drops down below the first line of text into following lines."
    },
    {
        "q": "What is the default file extension for documents saved in modern Microsoft Word (2007 and newer)?",
        "opts": [".doc", ".docx", ".txt", ".rtf"],
        "ans": 1,
        "topic": "MS-Word",
        "exp": "Modern Word files use the Office Open XML format, designated by the `.docx` file extension."
    },
    {
        "q": "What feature automatically formats, completes, or fixes misspelled words as you type?",
        "opts": ["AutoCorrect", "AutoSave", "SmartArt", "WordArt"],
        "ans": 0,
        "topic": "MS-Word",
        "exp": "AutoCorrect detects and replaces common typing errors and abbreviations instantaneously as words are keyed in."
    },

    # Basics of C Programming Language (15 Qs)
    {
        "q": "Who designed and implemented the C programming language at AT&T Bell Laboratories in 1972?",
        "opts": ["Bjarne Stroustrup", "Dennis Ritchie", "Ken Thompson", "James Gosling"],
        "ans": 1,
        "topic": "Basics of C",
        "exp": "Dennis Ritchie created C between 1969 and 1973 at Bell Labs to re-implement the Unix operating system."
    },
    {
        "q": "What is the role of the C Preprocessor (invoked by lines beginning with '#')?",
        "opts": ["To run the compiled binary", "To perform textual macro substitution and header file inclusion before actual compilation begins", "To execute print statements in the terminal", "To link external library functions"],
        "ans": 1,
        "topic": "Basics of C",
        "exp": "The preprocessor processes directives (like `#include`, `#define`) before passing source code to the compiler."
    },
    {
        "q": "What does `#include <stdio.h>` specifically provide to a C program?",
        "opts": ["Standard Graphics functions", "Standard Input/Output library declarations (like printf and scanf)", "Math equations like sin and cos", "String allocation routines"],
        "ans": 1,
        "topic": "Basics of C",
        "exp": "`<stdio.h>` defines standard input/output stream functions, macros, and types, notably `printf()` and `scanf()`."
    },
    {
        "q": "What is the mandatory entry-point function where execution of every standard C program begins?",
        "opts": ["start()", "main()", "run()", "_init()"],
        "ans": 1,
        "topic": "Basics of C",
        "exp": "The C standard dictates that user program execution begins at the function named `main()`."
    },
    {
        "q": "What is the typical memory size of a standard `char` data type in C?",
        "opts": ["1 Byte (8 bits)", "2 Bytes (16 bits)", "4 Bytes (32 bits)", "8 Bytes (64 bits)"],
        "ans": 0,
        "topic": "Basics of C",
        "exp": "In C, `sizeof(char)` is guaranteed by standard definition to equal exactly 1 byte."
    },
    {
        "q": "Which format specifier is used in `printf()` to output a standard signed 32-bit integer in decimal form?",
        "opts": ["%f", "%d (or %i)", "%c", "%s"],
        "ans": 1,
        "topic": "Basics of C",
        "exp": "`%d` or `%i` formats signed decimal integers for `printf` and `scanf`."
    },
    {
        "q": "Which format specifier is used to print a single-precision floating point number in C?",
        "opts": ["%f", "%d", "%c", "%lf"],
        "ans": 0,
        "topic": "Basics of C",
        "exp": "`%f` outputs standard `float` numbers, while `%lf` is used for `double` precision."
    },
    {
        "q": "Why is the address operator `&` necessary in `scanf(\"%d\", &num);`?",
        "opts": ["It tells C to encrypt the variable", "It passes the memory address of `num` so `scanf` can store the input directly into that variable's memory location", "It ensures positive numbers only", "It multiplies the number by 10"],
        "ans": 1,
        "topic": "Basics of C",
        "exp": "C passes arguments by value; `scanf` needs the memory address (`&num`) to write the user's input into that variable."
    },
    {
        "q": "Which of the following is an INVALID identifier (variable name) in C?",
        "opts": ["_learnerScore", "score_2026", "2ndScore", "totalScore"],
        "ans": 2,
        "topic": "Basics of C",
        "exp": "In C, variable names cannot begin with a numeric digit. They must start with an alphabet letter or an underscore `_`."
    },
    {
        "q": "What escape sequence outputs a new line break to the terminal in C?",
        "opts": ["\\t", "\\n", "\\r", "\\b"],
        "ans": 1,
        "topic": "Basics of C",
        "exp": "`\\n` is the newline escape character, moving the cursor to the beginning of the next line."
    },
    {
        "q": "What is the output of the integer division `printf(\"%d\", 7 / 2);` in C?",
        "opts": ["3.5", "3", "4", "Compilation Error"],
        "ans": 1,
        "topic": "Basics of C",
        "exp": "Dividing two integers in C performs integer truncation, discarding any fractional portion: 7 / 2 evaluates to 3."
    },
    {
        "q": "Which operator calculates the remainder of an integer division in C?",
        "opts": ["/", "% (Modulo operator)", "#", "&"],
        "ans": 1,
        "topic": "Basics of C",
        "exp": "The modulo operator `%` yields the integer remainder (e.g., `7 % 3` produces `1`)."
    },
    {
        "q": "What character MUST terminate every executable statement in C?",
        "opts": [": (Colon)", "; (Semicolon)", ". (Period)", "} (Closing Brace)"],
        "ans": 1,
        "topic": "Basics of C",
        "exp": "In C syntax, every statement must end with a semicolon `;` to denote statement completion."
    },
    {
        "q": "Which logical operator represents the Boolean 'AND' condition in C?",
        "opts": ["&", "&&", "|", "||"],
        "ans": 1,
        "topic": "Basics of C",
        "exp": "`&&` represents logical AND, evaluating to true only if both operands are non-zero."
    },
    {
        "q": "What does `return 0;` at the end of the `main()` function signify to the host Operating System?",
        "opts": ["The program failed with error code 0", "The program executed and terminated successfully without errors", "The computer should shut down immediately", "The memory should be cleared"],
        "ans": 1,
        "topic": "Basics of C",
        "exp": "A zero exit status returned from `main()` universally indicates normal, successful execution to the OS environment."
    }
]

# Write out python script to complete Days 2 & 3 as well
print(f"Generated Day 1 count: {len(day1_questions)}")
