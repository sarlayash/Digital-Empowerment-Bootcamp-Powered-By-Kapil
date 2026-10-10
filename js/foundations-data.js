// ========================================================
// DIGITAL EMPOWERMENT BOOTCAMP • FOUNDATIONS & EVOLUTION
// 5 Core Knowledge Modules with 100 Hardware Devices & 25 MCQs
// Navratri Festive Edition • Powered by Kapil
// ========================================================

window.FOUNDATIONS_MODULES = [
  {
    id: "hardware_devices",
    title: "1. 100 Computing Hardware Devices: Input, Output, Processing & Storage",
    subtitle: "25 Input • 25 Output • 25 Processing • 25 Storage Hardware Components",
    badge: "Hardware Architecture",
    icon: "fa-solid fa-server",
    color: "from-amber-500 via-orange-500 to-rose-500",
    overview: "Hardware constitutes the tangible physical machinery that performs digital computation. Every digital computing system is structured into four cardinal subsystems: Input (capturing real-world data), Processing (transforming and computing), Storage (persistent & volatile data retention), and Output (presenting results to humans or systems). Here is the comprehensive breakdown of exactly 25 devices across each category.",
    categories: [
      {
        name: "25 Essential Input Devices",
        badge: "Data Acquisition",
        icon: "fa-solid fa-keyboard",
        items: [
          { name: "1. Standard QWERTY / Mechanical Keyboard", desc: "Alphanumeric electromechanical key matrix that sends scancodes to the OS kernel." },
          { name: "2. Optical Computer Mouse", desc: "Uses an LED/photodiode sensor to track surface displacement in 2D DPI coordinates." },
          { name: "3. Trackball Mouse", desc: "Stationary housing with an exposed sphere manipulated directly by thumb or palm." },
          { name: "4. Multi-touch Touchpad / Trackpad", desc: "Capacitive surface detecting finger capacitance and multi-touch gestures." },
          { name: "5. Graphics Tablet & Digitizer Stylus", desc: "Electromagnetic resonance (EMR) pad mapping stylus pressure levels and tilt." },
          { name: "6. Linear 1D Barcode Scanner", desc: "Reflectance laser/red LED reading variable-width black lines (UPC, EAN, Code 128)." },
          { name: "7. 2D Matrix QR Code Imager", desc: "CMOS camera sensor decoding 2D square matrix data with Reed-Solomon error correction." },
          { name: "8. Optical Character Recognition (OCR) Scanner", desc: "High-resolution camera/sensor paired with pattern-matching software to digitize printed text." },
          { name: "9. Optical Mark Recognition (OMR) Reader", desc: "Light-transmittance device detecting pencil/pen graphite marks on standardized test sheets." },
          { name: "10. Magnetic Ink Character Reader (MICR)", desc: "Magnetizes and decodes iron oxide ink printed on bank cheques (E-13B and CMC-7 fonts)." },
          { name: "11. Biometric Capacitive / Optical Fingerprint Scanner", desc: "Captures epidermal ridge and valley minutiae for cryptographic identity verification." },
          { name: "12. Biometric Iris Scanner", desc: "Near-infrared illumination camera imaging unique trabecular meshwork patterns of the human iris." },
          { name: "13. High-Definition Digital Webcam", desc: "CMOS/CCD imaging sensor converting photonic light through Bayer filter into video frames." },
          { name: "14. Studio Microphone (Condenser / Dynamic)", desc: "Acoustic-to-electric transducer converting air pressure waves into analog audio signals." },
          { name: "15. MIDI Keyboard Controller", desc: "Musical instrument keyboard emitting serial digital MIDI event messages (pitch, velocity, duration)." },
          { name: "16. Dual-Analog Gamepad & Flight Joystick", desc: "Potentiometer/Hall-effect thumbsticks and tactile buttons reporting precise 3D vector coordinates." },
          { name: "17. Flatbed Document Scanner", desc: "Contact Image Sensor (CIS) or CCD array traversing glass bed to capture paper sheets at 600-4800 DPI." },
          { name: "18. Structured-Light 3D Scanner", desc: "Projects calibrated light patterns onto 3D objects to triangulate geometric mesh point clouds." },
          { name: "19. Light Pen", desc: "Photodiode-tipped wand that detects CRT beam raster refreshes to pinpoint screen coordinates." },
          { name: "20. Projected Capacitive Touchscreen Digitizer", desc: "Layered glass grid detecting electrostatic field distortion upon human fingertip proximity." },
          { name: "21. Magnetic Stripe Card Reader (MSR)", desc: "Magnetic read head capturing encoded flux reversals on Tracks 1, 2, and 3 of debit/ID cards." },
          { name: "22. RFID & NFC Transceiver Reader", desc: "13.56 MHz / UHF induction coil energizing passive tags to read contactless transponder IDs." },
          { name: "23. 6-DOF VR Motion Tracking Controllers", desc: "Integrated IMU (accelerometer + gyroscope) tracked by infrared constellations for 6-axis VR immersion." },
          { name: "24. Foot Pedal Transcription Switch", desc: "Hands-free foot-operated microswitches for industrial, medical transcription, or gaming input." },
          { name: "25. Assistive Sip-and-Puff Device", desc: "Pneumatic pressure sensor detecting oral inhalation and exhalation pulses for motor-impaired users." }
        ]
      },
      {
        name: "25 Essential Output Devices",
        badge: "Information Display & Actuation",
        icon: "fa-solid fa-desktop",
        items: [
          { name: "1. IPS / VA LED-Backlit LCD Monitor", desc: "Liquid crystal matrix with white LED backlights delivering wide viewing angles and color fidelity." },
          { name: "2. Self-Emissive OLED / QD-OLED Display", desc: "Organic light-emitting diodes that emit independent light per pixel for infinite contrast ratio." },
          { name: "3. Historic Cathode Ray Tube (CRT) Display", desc: "Electron gun firing modulated beams through magnetic deflection coils onto a phosphorescent screen." },
          { name: "4. Electrophoretic E-Ink Paper Display", desc: "Microcapsules containing charged black and white pigment particles suspended in transparent fluid." },
          { name: "5. Thermal / Piezoelectric Inkjet Printer", desc: "Micron-sized nozzles vaporizing microscopic ink droplets (1-2 picoliters) directly onto paper." },
          { name: "6. Electrophotographic Laser Printer", desc: "Laser diode discharging electrostatic drum to attract toner powder, fused by heated fuser rollers." },
          { name: "7. Direct Thermal Receipt Printer", desc: "Heated thermal pins that activate chemical leuko dyes on heat-sensitive roll paper." },
          { name: "8. Fused Deposition Modeling (FDM) 3D Printer", desc: "Stepper-driven hotend extruding melted PLA/ABS thermoplastic filament layer-by-layer (additive)." },
          { name: "9. Large-Format Vector Drum Plotter", desc: "Continuous pen/knife carriage drawing infinite architectural vector schematics and blueprints." },
          { name: "10. Dye-Sublimation Photo Printer", desc: "Heat transfer ribbon sublimating solid dyes into gas, fusing into photographic polymer coating." },
          { name: "11. Refreshable Braille Embosser", desc: "Solenoid-actuated mechanical pins that punch raised Braille dot patterns onto heavy cardstock." },
          { name: "12. Stereo Reference Studio Monitors", desc: "Electromagnetic voice coil driving treated paper/kevlar cone to reproduce acoustic frequencies." },
          { name: "13. Over-Ear Planar Magnetic Headphones", desc: "Ultra-thin diaphragm suspended between magnetic arrays for low-distortion personal sound." },
          { name: "14. Bone Conduction Acoustic Earphones", desc: "Electromechanical transducers transmitting sound vibrations through user cheekbones to the cochlea." },
          { name: "15. Powered Low-Frequency Subwoofer", desc: "Dedicated high-excursion driver reproducing deep low-frequency sound effects (20 Hz - 120 Hz)." },
          { name: "16. 3LCD / DLP Digital Multimedia Projector", desc: "Digital micromirror device (DMD) matrix projecting magnified optical images onto large screens." },
          { name: "17. Volumetric Holographic Laser Projector", desc: "Rapid optical phase modulation producing 3D aerial light fields perceived without 3D glasses." },
          { name: "18. Haptic Feedback Motor (LRA / ERM)", desc: "Linear Resonant Actuator delivering tactile vibrotactile feedback in gamepads and smartphones." },
          { name: "19. Interactive Smart Classroom Whiteboard", desc: "Large-format optical or infrared sensor frame displaying interactive touch PC interfaces." },
          { name: "20. Ultra-Bright Commercial Digital Signage", desc: "High-nit commercial weatherproof displays built for 24/7 public information dissemination." },
          { name: "21. Hardware MIDI Sound Synthesizer Module", desc: "Digital Signal Processing rack generating complex acoustic waveforms from incoming MIDI streams." },
          { name: "22. Dynamic Refreshable Braille Terminal", desc: "Piezoelectric reed pins that dynamically rise and fall to display real-time computer text as Braille." },
          { name: "23. Heads-Up Display (HUD) Collimator", desc: "Optical combiner projecting flight and navigation telemetry directly into the pilot's line of sight." },
          { name: "24. Virtual Reality Near-Eye Optics Display", desc: "Pancake/Fresnel lenses magnifying dual high-PPI micro-OLED panels for binocular stereoscopic vision." },
          { name: "25. Industrial LED Andon Tower & Strobe Indicator", desc: "Multi-tiered red/amber/green signal columns communicating factory automation and machine states." }
        ]
      },
      {
        name: "25 Essential Processing Devices & Components",
        badge: "Computation Core",
        icon: "fa-solid fa-microchip",
        items: [
          { name: "1. Central Processing Unit (CPU)", desc: "The primary silicon microprocessor executing instructions via Fetch-Decode-Execute instruction cycles." },
          { name: "2. Arithmetic Logic Unit (ALU)", desc: "Sub-circuit within the CPU executing integer arithmetic (ADD, SUB) and logical operations (AND, OR, NOT, XOR)." },
          { name: "3. Control Unit (CU)", desc: "FSM circuit directing instruction sequencing, micro-operations, and coordinating datapath flows." },
          { name: "4. CPU Architectural Register File", desc: "Ultra-fast on-die flip-flops (EAX, EBX, R0-R31, PC, SP) providing single-cycle operand storage." },
          { name: "5. Level 1 (L1) On-Die SRAM Cache", desc: "Smallest (32-64 KB per core), lowest latency (1 ns / 3-4 clock cycles) split instruction and data cache." },
          { name: "6. Level 2 (L2) Dedicated Cache", desc: "Mid-tier cache (512 KB - 2 MB per core) bridging high-speed L1 cache and shared last-level cache." },
          { name: "7. Level 3 (L3) Shared Last-Level Cache (LLC)", desc: "Large (16 MB - 128 MB+) high-density SRAM pool shared across all CPU cores on modern dies." },
          { name: "8. Dedicated Graphics Processing Unit (GPU)", desc: "Highly parallel SIMD/SIMT architecture with thousands of stream cores optimized for vector mathematics." },
          { name: "9. Neural Processing Unit (NPU)", desc: "Dedicated silicon matrix-multiplication accelerator for low-power edge neural network inference." },
          { name: "10. Tensor Processing Unit (TPU)", desc: "Google-designed ASIC utilizing bfloat16 systolic arrays specifically for deep learning workloads." },
          { name: "11. Vision Processing Unit (VPU)", desc: "Energy-efficient processor tailored for real-time computer vision, object detection, and SLAM tracking." },
          { name: "12. Digital Signal Processor (DSP)", desc: "Specialized microprocessor optimized for high-throughput continuous mathematical processing (audio/RF)." },
          { name: "13. Data Processing Unit (DPU / SmartNIC)", desc: "Programmable System-on-Chip offloading network encapsulation, storage virtualization, and encryption." },
          { name: "14. Memory Controller Hub (MCH / Northbridge)", desc: "High-speed controller arbitrating high-bandwidth DDR memory and primary PCIe lane transactions." },
          { name: "15. Platform Controller Hub (PCH / Southbridge)", desc: "Chipset managing lower-speed peripheral buses: SATA, USB, SPI, Audio codec, and LPC legacy." },
          { name: "16. System on a Chip (SoC)", desc: "Integrated die packaging CPU, GPU, NPU, RAM controller, Modem, and ISP on a single silicon substrate." },
          { name: "17. Field-Programmable Gate Array (FPGA)", desc: "Reconfigurable matrix of Configurable Logic Blocks (CLBs) wired via Hardware Description Languages." },
          { name: "18. Application-Specific Integrated Circuit (ASIC)", desc: "Custom non-reconfigurable silicon etched for maximum performance/watt on a single dedicated task." },
          { name: "19. Floating-Point Unit (FPU / Math Coprocessor)", desc: "Hardware coprocessor adhering to IEEE 754 standards for double-precision real-number calculations." },
          { name: "20. Microcontroller Unit (MCU)", desc: "Compact self-contained chip (e.g. STM32, ESP32, ATmega) integrating CPU, Flash, RAM, and GPIO on-die." },
          { name: "21. Cryptographic Coprocessor / TPM 2.0 Module", desc: "Secure cryptographic micro-engine generating and shielding RSA/ECC encryption keys and boot measurements." },
          { name: "22. Hardware Video Codec Engine (NVENC / QuickSync)", desc: "Dedicated ASIC blocks offloading real-time H.264, HEVC, and AV1 video encoding/decoding without CPU load." },
          { name: "23. Dedicated Audio DSP / Audio Codec DAC", desc: "High-resolution digital-to-analog and 3D spatial HRTF audio processing DSP." },
          { name: "24. Baseband Cellular Modem Processor", desc: "Dedicated RF processor handling 5G/LTE signaling protocols, modulation, and carrier aggregation." },
          { name: "25. Quantum Processing Unit (QPU)", desc: "Cryogenic superconducting or ion-trap processor manipulating qubits using quantum superposition and entanglement." }
        ]
      },
      {
        name: "25 Essential Storage Devices & Media",
        badge: "Data Retention",
        icon: "fa-solid fa-hard-drive",
        items: [
          { name: "1. Internal NVMe PCIe 4.0/5.0 M.2 SSD", desc: "Solid-state drive utilizing 3D TLC/QLC NAND Flash with direct PCIe lanes reaching 7,000-14,000 MB/s." },
          { name: "2. SATA III 2.5-inch Solid-State Drive", desc: "Legacy flash SSD limited by SATA III AHCI interface bottleneck at 550-600 MB/s transfer speeds." },
          { name: "3. Magnetic Hard Disk Drive (HDD)", desc: "Mechanical spinning platters (5400-7200 RPM) with voice-coil magnetic read/write actuator arms." },
          { name: "4. LTO Ultrium Magnetic Tape Cartridge", desc: "High-density linear magnetic tape holding up to 18-45 TB per cartridge for 30+ year archival cold storage." },
          { name: "5. DDR5 Synchronous Dynamic RAM (SDRAM)", desc: "Primary volatile system memory offering on-die ECC, dual 32-bit subchannels, and 4800-8400 MT/s bandwidth." },
          { name: "6. Error-Correcting Code (ECC) Server RAM", desc: "Memory modules containing extra parity bits to detect and automatically correct single-bit memory corruptions." },
          { name: "7. Read-Only Memory (Mask ROM)", desc: "Non-volatile memory where bit patterns are physically etched at factory photolithography." },
          { name: "8. Programmable Read-Only Memory (PROM)", desc: "Blank memory written once by selectively blowing microscopic fusible links with a PROM programmer." },
          { name: "9. Erasable PROM (UV-EPROM)", desc: "Quartz-windowed chip erased by exposure to intense ultraviolet light, allowing rewriting cycles." },
          { name: "10. Electrically Erasable PROM (EEPROM)", desc: "Byte-erasable non-volatile memory rewritten electrically; common in motherboard BIOS chips." },
          { name: "11. NOR Flash Memory", desc: "Fast random-read execute-in-place (XIP) flash used for cellular basebands and embedded firmware." },
          { name: "12. 3D NAND Flash Memory", desc: "Vertically stacked charge-trap floating gate cells powering high-capacity consumer SSDs and phones." },
          { name: "13. USB 3.2 Gen 2x2 Flash Drive", desc: "Compact portable flash memory thumbdrive communicating over Universal Serial Bus up to 20 Gbps." },
          { name: "14. MicroSDXC / SD Express Memory Card", desc: "Miniaturized removable flash memory card compliant with UHS-II / PCIe bus for cameras and drones." },
          { name: "15. CFexpress Type B Card", desc: "Heavy-duty cinema camera memory card leveraging NVMe protocol over two PCIe lanes (up to 1,750 MB/s)." },
          { name: "16. External Thunderbolt 4 Portable SSD", desc: "Bus-powered rugged external NVMe enclosure streaming uncompressed 4K/8K video at 40 Gbps." },
          { name: "17. Triple-Layer BD-XL Blu-ray Optical Disc", desc: "Optical disc read with 405 nm blue-violet laser, storing 100-128 GB of archival data." },
          { name: "18. Dual-Layer DVD-R/RW Optical Disc", desc: "650 nm red laser optical medium storing 4.7 GB (single) or 8.5 GB (dual-layer) of media." },
          { name: "19. Compact Disc (CD-ROM / CD-R)", desc: "Historic 780 nm infrared laser optical disc storing up to 700 MB / 80 minutes of digital audio." },
          { name: "20. Enterprise Network-Attached Storage (NAS)", desc: "Dedicated file-level storage server equipped with RAID redundant arrays over 10GbE network." },
          { name: "21. Storage Area Network (SAN) Fiber Channel LUN", desc: "Block-level storage cluster interconnected by high-speed Fibre Channel switches for enterprise DBs." },
          { name: "22. Historic 3.5-inch Floppy Diskette", desc: "Magnetic mylar disk inside a rigid plastic shell holding 1.44 MB of data (standard 1980s-90s medium)." },
          { name: "23. Iomega Zip Diskette", desc: "High-capacity floppy alternative from the mid-1990s storing 100 MB, 250 MB, or 750 MB per disk." },
          { name: "24. Magneto-Optical (MO) Disc", desc: "Hybrid rewritable disc heated by laser and written magnetically; highly stable across decades." },
          { name: "25. Hollerith Punched Card & Punched Paper Tape", desc: "Early 20th-century paper card storage with presence or absence of holes representing binary bit digits." }
        ]
      }
    ],
    knowledgeCheck: [
      {
        q: "Which of the following devices is classified strictly as an INPUT device utilizing electromagnetic resonance (EMR) without requiring internal batteries?",
        options: ["Capacitive Touchscreen", "Graphics Digitizer Tablet & Stylus", "Laser Barcode Scanner", "Biometric Iris Camera"],
        ans: 1,
        exp: "Graphics tablets (such as Wacom digitizers) use Electromagnetic Resonance (EMR), where the pad emits RF energy that powers the coil in the stylus, allowing precise coordinate, pressure, and tilt input without batteries."
      },
      {
        q: "What is the primary physical mechanism that enables an OLED display to achieve true, infinite contrast ratios compared to traditional LCDs?",
        options: ["Higher refresh rates up to 240 Hz", "Organic pixels that are self-emissive and can be turned completely off", "Dual polarized filter sheets with anti-glare etching", "High-power white LED edge backlights"],
        ans: 1,
        exp: "OLED (Organic Light Emitting Diode) pixels are self-emissive. To produce black, individual pixels are completely powered down (0 nits), creating absolute zero black level and infinite contrast ratio."
      },
      {
        q: "In modern computer processors, which cache tier is typically shared across ALL CPU cores on a multi-core silicon die?",
        options: ["Level 1 (L1) Instruction Cache", "Level 1 (L1) Data Cache", "Level 2 (L2) Core Cache", "Level 3 (L3) Last-Level Cache (LLC)"],
        ans: 3,
        exp: "Level 1 and Level 2 caches are dedicated to individual CPU cores for low-latency operation, whereas Level 3 (Last-Level Cache) is unified and shared across all cores on the die."
      },
      {
        q: "Why does a 1 Terabyte (1 TB) storage drive report approximately 931 GiB of usable capacity in Windows Operating System?",
        options: ["Manufacturers secretly reserve 70 GB for firmware recovery", "Hard drive platters degrade during factory initialization", "Manufacturers use Decimal SI units (10^12 bytes) while Windows displays Binary IEC GiB (2^40 bytes)", "NTFS file system metadata requires exactly 69 GB of overhead"],
        ans: 2,
        exp: "Drive makers calculate 1 TB = 1,000,000,000,000 bytes (Base 10 SI). Windows measures memory in binary mebibytes/gibibytes: 1,000,000,000,000 / (1024^3) ≈ 931.32 GiB, although Windows labels it 'GB'."
      },
      {
        q: "Which processing component is specifically architected with systolic matrix multiplication arrays to accelerate Deep Learning neural network tensor calculations?",
        options: ["Arithmetic Logic Unit (ALU)", "Tensor Processing Unit (TPU) / NPU", "Southbridge / Platform Controller Hub", "Control Unit (CU)"],
        ans: 1,
        exp: "TPUs (Tensor Processing Units) and NPUs use 2D systolic arrays optimized for high-throughput matrix dot-product mathematics, dramatically outperforming general-purpose ALUs in deep learning tensor computations."
      }
    ]
  },
  {
    id: "bits_bytes_conversions",
    title: "2. Bits, Bytes, Units & Number System Conversions",
    subtitle: "Binary Arithmetic • IEEE vs SI Storage Standards • 2's Complement • Hexadecimal Conversions",
    badge: "Information Theory",
    icon: "fa-solid fa-calculator",
    color: "from-sky-500 via-indigo-500 to-purple-600",
    overview: "Every digital artifact in computing—from images and audio to operating systems and machine code—is fundamentally structured out of binary digits (bits). Understanding binary representations, storage unit hierarchies (SI vs IEC), and base conversions is mandatory for computational mastery.",
    categories: [
      {
        name: "Fundamental Units of Digital Storage",
        badge: "Bit to Yottabyte",
        icon: "fa-solid fa-layer-group",
        items: [
          { name: "Bit (b)", desc: "The atomic unit of data representing a single binary state: 0 (low voltage) or 1 (high voltage)." },
          { name: "Nibble (Half-Byte)", desc: "A group of 4 bits (e.g. 1010). Exactly one hexadecimal character (0x0 to 0xF)." },
          { name: "Byte (B)", desc: "A group of 8 bits. Capable of encoding 2^8 = 256 distinct values (0 to 255 unsigned, or -128 to +127 signed)." },
          { name: "Kilobyte (KB vs KiB)", desc: "Decimal SI: 1 KB = 10^3 = 1,000 Bytes. Binary IEC: 1 KiB = 2^10 = 1,024 Bytes." },
          { name: "Megabyte (MB vs MiB)", desc: "Decimal SI: 1 MB = 10^6 = 1,000,000 Bytes. Binary IEC: 1 MiB = 2^20 = 1,048,576 Bytes." },
          { name: "Gigabyte (GB vs GiB)", desc: "Decimal SI: 1 GB = 10^9 = 1,000,000,000 Bytes. Binary IEC: 1 GiB = 2^30 = 1,073,741,824 Bytes." },
          { name: "Terabyte (TB vs TiB)", desc: "Decimal SI: 1 TB = 10^12 Bytes. Binary IEC: 1 TiB = 2^40 = 1,099,511,627,776 Bytes." },
          { name: "Petabyte (PB vs PiB)", desc: "Decimal SI: 1 PB = 10^15 Bytes. Binary IEC: 1 PiB = 2^50 = 1,125,899,906,842,624 Bytes." },
          { name: "Exabyte (EB vs EiB)", desc: "Decimal SI: 1 EB = 10^18 Bytes. Binary IEC: 1 EiB = 2^60 = 1,152,921,504,606,846,976 Bytes." },
          { name: "Zettabyte (ZB vs ZiB)", desc: "Decimal SI: 1 ZB = 10^21 Bytes. Binary IEC: 1 ZiB = 2^70 Bytes. Global global data scale." },
          { name: "Yottabyte (YB vs YiB)", desc: "Decimal SI: 1 YB = 10^24 Bytes. Binary IEC: 1 YiB = 2^80 Bytes. Highest standard prefix." }
        ]
      },
      {
        name: "Number System Radix & Conversion Algorithms",
        badge: "Base 2, 8, 10, 16",
        icon: "fa-solid fa-code-branch",
        items: [
          { name: "Binary (Base 2)", desc: "Digits: {0, 1}. Positional weights: 2^0=1, 2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=32, 2^6=64, 2^7=128." },
          { name: "Octal (Base 8)", desc: "Digits: {0, 1, 2, 3, 4, 5, 6, 7}. Exactly 3 binary bits map to 1 octal digit (2^3 = 8). Example: 111_2 = 7_8." },
          { name: "Decimal (Base 10)", desc: "Digits: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}. Human positional standard based on fingers." },
          { name: "Hexadecimal (Base 16)", desc: "Digits: {0-9, A=10, B=11, C=12, D=13, E=14, F=15}. Exactly 4 binary bits map to 1 hex digit (2^4 = 16)." },
          { name: "Decimal to Binary Algorithm", desc: "Successive division by 2, recording remainders from bottom-to-top (LSB to MSB)." },
          { name: "Binary to Hexadecimal Algorithm", desc: "Group bits into nibbles (4 bits) from right to left (pad with leading zeros), convert each to hex." },
          { name: "Two's Complement (Signed Integers)", desc: "To negate a binary number: Invert all bits (1's complement), then add 1. Enables addition circuits to do subtraction." },
          { name: "Bitwise Operators", desc: "AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<: multiplies by 2^n), Right Shift (>>: divides by 2^n)." }
        ]
      }
    ],
    knowledgeCheck: [
      {
        q: "What is the 8-bit Two's Complement representation of the decimal integer -19?",
        options: ["11101101", "11101100", "00010011", "10010011"],
        ans: 0,
        exp: "1) Decimal +19 in 8-bit binary is 00010011. 2) Invert all bits (One's complement): 11101100. 3) Add 1: 11101100 + 1 = 11101101."
      },
      {
        q: "Convert the Hexadecimal value 0x2E into its Decimal equivalent.",
        options: ["44", "46", "38", "52"],
        ans: 1,
        exp: "In base 16: (2 * 16^1) + (E * 16^0) = (2 * 16) + (14 * 1) = 32 + 14 = 46."
      },
      {
        q: "How many distinct binary patterns can be represented by a single Nibble (4 bits)?",
        options: ["8", "16", "32", "64"],
        ans: 1,
        exp: "A nibble is 4 bits. 2^4 = 16 distinct patterns (ranging from 0000_2 to 1111_2, or 0 to 15 in decimal, 0x0 to 0xF in hex)."
      },
      {
        q: "Performing a bitwise Left Shift by 3 positions (`x << 3`) on any positive integer `x` is mathematically equivalent to:",
        options: ["Multiplying x by 6", "Multiplying x by 8", "Adding 8 to x", "Dividing x by 8"],
        ans: 1,
        exp: "Each left shift multiplies the value by 2. Shifting left by 3 positions multiplies x by 2^3 = 8."
      },
      {
        q: "Under official IEC binary standards, how many exact bytes are contained in 1 Mebibyte (MiB)?",
        options: ["1,000,000 bytes", "1,048,576 bytes", "1,024,000 bytes", "1,073,741,824 bytes"],
        ans: 1,
        exp: "1 KiB = 1024 Bytes. 1 MiB = 1024 * 1024 = 1,048,576 Bytes (2^20 bytes). Decimal Megabyte (MB) is 1,000,000 bytes."
      }
    ]
  },
  {
    id: "computer_generations",
    title: "3. History of Computers & Computer Generations",
    subtitle: "From Abacus & Babbage to Vacuum Tubes, Silicon Chips & Quantum Supercomputers",
    badge: "Computer History",
    icon: "fa-solid fa-timeline",
    color: "from-emerald-500 via-teal-500 to-cyan-600",
    overview: "Computer science did not begin with microchips; it began with mechanical mathematics and conceptual logic. From Charles Babbage's steam-driven Analytical Engine to modern quantum processors, the evolution spans five distinct technology generations driven by physical switching advancements.",
    categories: [
      {
        name: "Pioneers & Mechanical Foundations",
        badge: "Pre-Electronic Era",
        icon: "fa-solid fa-monument",
        items: [
          { name: "Abacus (~2400 BC)", desc: "Oldest recorded calculation aid utilizing bead matrices on rods." },
          { name: "Pascaline (1642, Blaise Pascal)", desc: "First mechanical gear-driven calculator capable of integer addition and subtraction." },
          { name: "Stepped Reckoner (1671, Gottfried Leibniz)", desc: "Stepped gear drum calculator that introduced mechanical multiplication, division, and binary philosophy." },
          { name: "Jacquard Loom (1804, Joseph Marie Jacquard)", desc: "Automated textile weaving using punch cards; first demonstration of programmable control." },
          { name: "Difference & Analytical Engine (1822-1837, Charles Babbage)", desc: "Babbage conceived the 'Analytical Engine' containing an Arithmetic Store, Mill (CPU), and punch-card memory. Father of Computing." },
          { name: "Ada Lovelace (1843)", desc: "Wrote the first algorithm (calculating Bernoulli numbers) for Babbage's engine. Recognized as the First Computer Programmer." },
          { name: "Alan Turing & Turing Machine (1936)", desc: "Introduced the universal mathematical model of computation and the concept of stored programs; broke Enigma cipher (Bombe)." },
          { name: "John von Neumann Architecture (1945)", desc: "Pioneered the architecture where both program instructions and data reside in the same physical memory space." }
        ]
      },
      {
        name: "The 5 Generations of Electronic Computers",
        badge: "1940s to 2026+",
        icon: "fa-solid fa-microchip",
        items: [
          { name: "1st Generation (1940–1956): Vacuum Tubes", desc: "Core Tech: Thermionic vacuum valves. Memory: Magnetic drums. Language: Pure binary Machine Code. Characteristics: Massive size (30 tons), high heat, frequent filament burnout. Examples: ENIAC, EDVAC, UNIVAC I, IBM 701." },
          { name: "2nd Generation (1956–1963): Transistors", desc: "Core Tech: Bipolar junction transistors (invented at Bell Labs 1947 by Bardeen, Brattain, Shockley). Memory: Magnetic core. Language: Assembly & early high-level (FORTRAN, COBOL). Characteristics: 10x smaller, faster, reliable. Examples: IBM 1401, IBM 7090, CDC 1604." },
          { name: "3rd Generation (1964–1971): Integrated Circuits (IC)", desc: "Core Tech: Silicon planar Integrated Circuits (Jack Kilby & Robert Noyce) combining dozens of transistors on one wafer (SSI/MSI). Memory: Semiconductor RAM. Language: Operating Systems, Time-sharing, BASIC, C. Examples: IBM System/360, PDP-8." },
          { name: "4th Generation (1971–Present): Microprocessors (VLSI/ULSI)", desc: "Core Tech: Single-chip Central Processing Units (Intel 4004 in 1971, 8086, x86, ARM). VLSI/ULSI packaging millions/billions of transistors. Emergence of Personal Computers (Apple II, IBM PC), Internet, Graphical User Interfaces (GUI)." },
          { name: "5th Generation (Present & 2026+): Artificial Intelligence & Quantum", desc: "Core Tech: Massively parallel GPUs, NPUs, Neuromorphic chips, Quantum Processing Units (Superconducting Qubits). Natural language processing, voice recognition, autonomous agentic cognition, and quantum computational supremacy." }
        ]
      }
    ],
    knowledgeCheck: [
      {
        q: "Who is widely acknowledged in computer science history as the world's first computer programmer for developing an algorithm to compute Bernoulli numbers on Charles Babbage's Analytical Engine?",
        options: ["Alan Turing", "Grace Hopper", "Ada Lovelace", "Margaret Hamilton"],
        ans: 2,
        exp: "Ada Lovelace translated Luigi Menabrea's sketch of Babbage's engine and appended 'Note G', which contained the first published computer algorithm (for Bernoulli numbers), making her the world's first programmer."
      },
      {
        q: "What fundamental physical switching technology defined First-Generation electronic computers (1940–1956)?",
        options: ["Silicon Transistors", "Thermionic Vacuum Tubes", "Integrated Circuits (ICs)", "Microprocessors"],
        ans: 1,
        exp: "First-generation computers (like ENIAC and UNIVAC I) used glass thermionic vacuum tubes as switches and amplifiers, generating immense heat and requiring constant bulb replacements."
      },
      {
        q: "What defines the foundational John von Neumann architecture published in 1945?",
        options: ["Separating program memory and data memory into physically isolated buses", "Storing both software program instructions and operational data in the same unified memory space", "Running instructions purely on analog vacuum tubes without clock cycles", "Executing only fixed, non-programmable arithmetic formulas"],
        ans: 1,
        exp: "The hallmark of the von Neumann architecture is the 'stored-program' concept, where CPU instructions and operand data are held together in the same sequential read-write memory space."
      },
      {
        q: "Which silicon breakthrough officially inaugurated the Third Generation of computing (1964–1971)?",
        options: ["Invention of the Integrated Circuit (IC)", "Invention of the Discrete Transistor", "Release of the Intel 4004 Microprocessor", "Creation of the Optical Laser Disc"],
        ans: 0,
        exp: "The 3rd generation began when Jack Kilby and Robert Noyce invented the Integrated Circuit (IC), placing multiple transistors, diodes, and resistors on a single miniature silicon chip."
      },
      {
        q: "What primary hardware and paradigm shift characterizes the Fifth Generation of computing (Present & Future)?",
        options: ["Punched Cards and Paper Tapes", "Magnetic Core Memory and Assembly Code", "Artificial Intelligence, Neural Processing Units (NPUs), and Quantum Computing", "8-bit microprocessors operating under MS-DOS"],
        ans: 2,
        exp: "The Fifth Generation is characterized by Artificial Intelligence, parallel Neuromorphic/Tensor processors, natural language understanding, and Quantum Processing Units (QPUs)."
      }
    ]
  },
  {
    id: "prog_languages_evolution",
    title: "4. Evolution of Programming Languages (1950s to 2026)",
    subtitle: "From Machine Code & Assembly to Fortran, C, Java, Python, Rust & AI Agentic Code Synthesis",
    badge: "Language Paradigms",
    icon: "fa-solid fa-code-commit",
    color: "from-rose-500 via-pink-500 to-amber-500",
    overview: "Computer programming has evolved across seven decades from tedious binary wire patching and assembly opcodes to structured procedural code, object-oriented systems, and modern memory-safe languages—culminating in 2026 with autonomous agentic code generation and natural-language orchestration.",
    categories: [
      {
        name: "Timeline of Computing Languages",
        badge: "1950 - 2026",
        icon: "fa-solid fa-clock-rotate-left",
        items: [
          { name: "1940s: Machine Code & Short Code", desc: "Writing raw hex/binary instructions directly to CPU instruction registers (01001011)." },
          { name: "1950s: Assembly Language", desc: "Mnemonic human-readable opcodes (MOV, ADD, JMP) assembled into binary by an assembler." },
          { name: "1957: FORTRAN (Formula Translation, John Backus at IBM)", desc: "First widely accepted high-level language; revolutionized scientific and numeric computation." },
          { name: "1958: LISP (List Processing, John McCarthy at MIT)", desc: "Pioneered functional programming, recursive data structures, and symbolic AI." },
          { name: "1959: COBOL (Common Business-Oriented Language, Grace Hopper)", desc: "English-like language designed for banking, enterprise accounting, and payroll systems." },
          { name: "1964: BASIC (Kemeny & Kurtz at Dartmouth)", desc: "Simplified interactive language designed for education; later popularized by Bill Gates on the Altair 8800." },
          { name: "1972: C Language (Dennis Ritchie at Bell Labs)", desc: "Mother of modern systems languages. Created to rewrite Unix OS. Close-to-hardware efficiency with structured syntax." },
          { name: "1974: SQL (Structured Query Language, IBM)", desc: "Declarative relational database manipulation language based on Edgar Codd's relational algebra." },
          { name: "1983: C++ (Bjarne Stroustrup at Bell Labs)", desc: "'C with Classes'. Added Object-Oriented Programming (OOP), operator overloading, templates, and RAII." },
          { name: "1991: Python (Guido van Rossum)", desc: "Emphasized code readability with clean indentation; dynamic typing, massive standard library, now dominant in AI." },
          { name: "1995: Java (James Gosling at Sun Microsystems)", desc: "'Write Once, Run Anywhere' (WORA) via the Java Virtual Machine (JVM). Strongly typed OOP enterprise titan." },
          { name: "1995: JavaScript (Brendan Eich at Netscape)", desc: "Created in 10 days for dynamic web browser scripting; now runs everywhere via Node.js, V8, and modern frameworks." },
          { name: "2000: C# (.NET, Anders Hejlsberg at Microsoft)", desc: "Modern type-safe, object-oriented language for enterprise Windows and cross-platform cloud workloads." },
          { name: "2009: Go / Golang (Robert Griesemer, Rob Pike, Ken Thompson at Google)", desc: "Simplicity, built-in concurrency with goroutines, fast compile times, cloud-native backend standard (Docker, Kubernetes)." },
          { name: "2010: Rust (Graydon Hoare at Mozilla)", desc: "Guarantees memory safety and fearless concurrency without a garbage collector through its compile-time Borrow Checker." },
          { name: "2012: TypeScript (Anders Hejlsberg at Microsoft)", desc: "Statically typed superset of JavaScript compiling to clean JS; dominant language of modern web development." },
          { name: "2014: Swift (Apple) & Kotlin (JetBrains)", desc: "Modern concise languages modernizing iOS and Android application ecosystems with null-safety." },
          { name: "2023-2026: The Agentic & AI-Native Paradigm", desc: "Mojo (hardware-accelerated Python for AI), prompt-compiled code, declarative agent workflows, and AI pair-programming assistants generating production systems." }
        ]
      },
      {
        name: "Generations of Programming Paradigms",
        badge: "Paradigm Spectrum",
        icon: "fa-solid fa-cubes",
        items: [
          { name: "1GL (First Generation)", desc: "Machine language (1s and 0s) tied directly to machine microarchitecture." },
          { name: "2GL (Second Generation)", desc: "Assembly language using mnemonics requiring machine-specific assemblers." },
          { name: "3GL (Third Generation)", desc: "High-level imperative & procedural languages (C, Fortran, Java, C++, Python) with compilers/interpreters." },
          { name: "4GL (Fourth Generation)", desc: "Declarative domain-specific query/report languages (SQL, MATLAB, R) expressing *what* to do rather than *how*." },
          { name: "5GL (Fifth Generation)", desc: "Constraint-based and AI-driven declarative problem-solving without explicit programmer step algorithms (Prolog, AI Prompt Logic)." }
        ]
      }
    ],
    knowledgeCheck: [
      {
        q: "Which revolutionary programming language was developed in 1972 by Dennis Ritchie at Bell Labs to rewrite the Unix operating system?",
        options: ["Pascal", "C", "Fortran", "Assembly"],
        ans: 1,
        exp: "Dennis Ritchie developed the C language at AT&T Bell Laboratories between 1972 and 1973 specifically to rewrite the Unix operating system with cross-hardware portability."
      },
      {
        q: "What revolutionary core philosophy did Sun Microsystems introduce with the Java programming language in 1995?",
        options: ["Compile directly to machine assembly for specific x86 silicon", "Write Once, Run Anywhere (WORA) via the bytecode and JVM runtime", "Eliminate all data types in favor of dynamic duck typing", "Mandatory memory pointers without garbage collection"],
        ans: 1,
        exp: "Java introduced 'Write Once, Run Anywhere' (WORA) by compiling source code to intermediate bytecode executed by the Java Virtual Machine (JVM) across any OS."
      },
      {
        q: "How does the modern systems language Rust guarantee memory safety and eliminate null pointer dereferences without using a Garbage Collector?",
        options: ["Through a compile-time Ownership and Borrow Checker system", "By running an automatic background memory compaction thread", "By requiring all memory to be allocated strictly on the stack", "By converting all pointers to strings"],
        ans: 0,
        exp: "Rust enforces memory safety, prevents data races, and eliminates memory leaks at compile time using its strict Ownership, Borrowing, and Lifetimes system without any garbage collection runtime overhead."
      },
      {
        q: "Which pioneer led the development of COBOL in 1959 and was famously instrumental in coining the computing term 'debugging' after finding a moth in the Mark II computer?",
        options: ["Ada Lovelace", "Rear Admiral Grace Hopper", "Margaret Hamilton", "Frances Allen"],
        ans: 1,
        exp: "Rear Admiral Grace Hopper was a pioneer in computing who developed the first compiler (A-0) and championed machine-independent business languages, leading to COBOL in 1959."
      },
      {
        q: "What defines modern TypeScript created by Anders Hejlsberg at Microsoft in 2012?",
        options: ["A proprietary replacement for HTML and CSS", "A statically typed superset of JavaScript that compiles directly to clean JavaScript", "A server-only binary language incompatible with browsers", "An interpreted dialect of C# designed for microcontrollers"],
        ans: 1,
        exp: "TypeScript is a typed superset of JavaScript that introduces static types, interfaces, and compile-time error checking, which transpiles down into standard ECMAScript compatible with all browsers and Node.js."
      }
    ]
  },
  {
    id: "genai_agentic_ai",
    title: "5. Prompt Engineering, Generative AI & Agentic AI (2026)",
    subtitle: "In-Context Learning • Transformers & RAG • Autonomous Reasoning Loops • Model Context Protocol (MCP)",
    badge: "Artificial Intelligence",
    icon: "fa-solid fa-brain",
    color: "from-purple-600 via-indigo-600 to-emerald-500",
    overview: "Artificial Intelligence has transitioned from deterministic rule-based algorithms to deep neural networks, transformer-based Large Language Models (LLMs), and autonomous Agentic Systems capable of proactive tool calling, self-reflection, and multi-agent coordination.",
    categories: [
      {
        name: "Prompt Engineering Science & Techniques",
        badge: "Instruction Design",
        icon: "fa-solid fa-terminal",
        items: [
          { name: "Zero-Shot Prompting", desc: "Asking the model to perform a task directly without giving any reference input/output examples." },
          { name: "Few-Shot In-Context Learning", desc: "Providing 2-5 high-quality input-output exemplar pairs within the prompt context before the query." },
          { name: "Chain-of-Thought (CoT) Prompting", desc: "Instructing the model: 'Think step by step before answering.' Drastically reduces arithmetic and reasoning hallucinations." },
          { name: "ReAct (Reason + Act) Framework", desc: "Interleaving reasoning traces ('Thought'), action invocations ('Action: search_web'), and tool observation parsing ('Observation')." },
          { name: "System Instructions / Persona Prompting", desc: "Setting foundational constraints, boundary guardrails, tone, and deterministic output schema before the user conversation begins." },
          { name: "Structured JSON Output Forcing", desc: "Enforcing strict JSON Schema / Pydantic compliance so model responses can be parsed deterministically by downstream software." }
        ]
      },
      {
        name: "Generative AI Foundations & Architecture",
        badge: "LLMs & Transformers",
        icon: "fa-solid fa-network-wired",
        items: [
          { name: "The Transformer Architecture (2017, 'Attention Is All You Need')", desc: "Replaced recurrent networks (RNNs) with multi-head Self-Attention, processing entire sequences in parallel." },
          { name: "Tokens & Tokenization", desc: "The sub-word atomic units of LLMs (e.g., Byte-Pair Encoding BPE). 1,000 tokens ≈ 750 English words." },
          { name: "Temperature & Top-p (Nucleus Sampling)", desc: "Hyperparameters controlling randomness: Temp=0.0 is deterministic and greedy; Temp=0.8 is creative and divergent." },
          { name: "Hallucination & Grounding", desc: "When models generate plausible but factually erroneous assertions; mitigated by grounding in retrieved source documents." },
          { name: "Retrieval-Augmented Generation (RAG)", desc: "Semantic retrieval pipeline: User query -> Vector Embedding -> Vector DB similarity search -> Context injected into prompt." }
        ]
      },
      {
        name: "Agentic AI & Multi-Agent Systems (2026 State-of-the-Art)",
        badge: "Autonomous Agents",
        icon: "fa-solid fa-robot",
        items: [
          { name: "What Separates an Agent from a Chatbot?", desc: "A chatbot responds once to a user prompt. An Agent possesses perception, persistent state, goals, tool calling, and iterative autonomous loops." },
          { name: "The Autonomous Agent Loop", desc: "Perceive Environment -> Deliberate & Plan -> Call Tools -> Inspect Output -> Self-Correct & Iterate until Goal is achieved." },
          { name: "Tool Calling & Function Calling", desc: "The model outputs machine-readable JSON function signatures; the agent runtime executes real code/APIs and feeds results back." },
          { name: "Model Context Protocol (MCP)", desc: "The open standard developed in 2024-2026 enabling AI models to securely connect to external data sources, IDEs, and tools." },
          { name: "Multi-Agent Orchestration", desc: "Hierarchical or swarm networks where a planner agent decomposes problems and delegates to specialized subagents (Researcher, Coder, Reviewer)." },
          { name: "Self-Reflection & Critique (Self-Refine)", desc: "Autonomous post-generation passes where an agent reviews its own draft code/output against test cases and repairs bugs proactively." }
        ]
      }
    ],
    knowledgeCheck: [
      {
        q: "Which prompt engineering technique explicitly instructs a Large Language Model to 'think step by step' to decompose complex multi-step reasoning problems?",
        options: ["Zero-Shot Inversion", "Chain-of-Thought (CoT) Prompting", "Greedy Decoding", "One-Word Constraint Prompting"],
        ans: 1,
        exp: "Chain-of-Thought (CoT) prompting prompts the model to generate intermediate reasoning steps before arriving at a final answer, drastically improving performance in mathematical, logical, and symbolic reasoning."
      },
      {
        q: "In Generative AI system design, what does the architectural acronym RAG stand for?",
        options: ["Rapid Automated Generation", "Retrieval-Augmented Generation", "Recursive Agent Graph", "Randomized Attention Grading"],
        ans: 1,
        exp: "RAG stands for Retrieval-Augmented Generation. It queries external knowledge sources (like Vector Databases) to inject factual context into the prompt, reducing hallucinations."
      },
      {
        q: "What core architectural mechanism, published by Google researchers in 2017 ('Attention Is All You Need'), replaced RNNs and enabled modern LLMs?",
        options: ["Convolutional Kernels", "Multi-Head Self-Attention", "Quantum Annealing", "Markov Decision Chains"],
        ans: 1,
        exp: "The Transformer architecture relies on the Self-Attention mechanism, which computes mathematical relationships between all words in a sequence simultaneously in parallel."
      },
      {
        q: "What fundamentally distinguishes an Autonomous AI Agent from a traditional conversational chatbot?",
        options: ["Agents always use more memory parameters than chatbots", "Agents operate in an iterative loop: setting sub-goals, invoking external tools/APIs, observing results, and self-correcting", "Chatbots can write code while agents only read text", "Agents do not use transformer models"],
        ans: 1,
        exp: "An Agent possesses autonomy: it operates in an iterative action-observation loop, leverages tool/API calling, maintains persistent state, and adapts its plan dynamically until a task goal is reached."
      },
      {
        q: "What is the primary purpose of the Model Context Protocol (MCP) in modern 2026 AI systems?",
        options: ["To encrypt user passwords in browser storage", "To provide an open, standardized protocol for AI models to securely discover, inspect, and invoke external tools and data sources", "To replace SQL databases with plain text files", "To compile Python scripts into binary assembly"],
        ans: 1,
        exp: "The Model Context Protocol (MCP) is an open industry standard that enables AI models and agent runtimes to seamlessly and securely interface with tools, file systems, GitHub, databases, and APIs."
      }
    ]
  }
];
