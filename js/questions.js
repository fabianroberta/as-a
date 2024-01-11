window.questions = {
  hardware: [
    {
      question: 'Which statement is true about the primary memory?',
      options: [
        'Can be accessed directly from the CPU.',
        'It contains removable devices.',
        'Allows the processor to access permanent data.',
      ],
      answer: 'Can be accessed directly from the CPU.',
      type: 'radio',
    },
    {
      question: 'Which statement is true about RAM?',
      options: [
        'Can be written to or read from.',
        'Stores data, part of applications or part of the operating system that are currently in use.',
        'It is volatile.',
        'All statements are true.',
      ],
      answer: 'All statements are true.',
      type: 'radio',
    },
    {
      question: 'Access time is faster in RAM than in secondary devices.',
      options: ['True', 'False'],
      answer: 'True',
      type: 'radio',
    },
    {
      question:
        'One way to improve the performance of a computer is to increase RAM capacity. Why?',
      options: [
        'It allows more applications to reside in the memory at the same time.',
        'It reduces the number of times secondary storage devices need to be accessed.',
        'All statements are true.',
      ],
      answer: 'All statements are true.',
      type: 'radio',
    },
    {
      question: 'The two types of RAM are:',
      options: [
        'Static RAM, Dynamic RAM',
        'System RAM, Driver RAM',
        'Source RAM, Data RAM',
      ],
      answer: 'Static RAM, Dynamic RAM',
      type: 'radio',
    },
    {
      question: 'Select the characteristics of DRAM:',
      options: [
        ['consists of a number of transistors and capacitors', true],
        ['needs to be constantly refreshed', true],
        ['is the most common type of RAM', true],
        ['is more expensive than SRAM', false],
        ['does not need to be constantly refreshed', false],
        ['makes use of flip-flops', false],
      ],
      type: 'checkbox',
    },
    {
      question: 'Select the characteristics of SRAM:',
      options: [
        ['consists of a number of transistors and capacitors', false],
        ['needs to be constantly refreshed', false],
        ['has faster data access time than DRAM', true],
        ['does not need to be constantly refreshed', true],
        ['makes use of flip-flops', true],
        ['memory cache makes use of SRAM', true],
      ],
      type: 'checkbox',
    },
    {
      question: 'DRAM has higher memory capacity than SRAM.',
      options: ['True', 'False'],
      answer: 'True',
      type: 'radio',
    },
    {
      question: 'Select the properties of ROM:',
      options: [
        ['non-volatile', true],
        ['volatile', false],
        ['data stored cannot be altered', true],
        ['used to store BIOS and other data needed at start up', true],
        ['temporary memory device', false],
      ],
      type: 'checkbox',
    },
    {
      question:
        'Which type of ROM is made up of a matrix of fuses and can be programmed (written) only once by burning fuses?',
      options: ['PROM', 'EPROM', 'EEPROM'],
      answer: 'PROM',
      type: 'radio',
    },
    {
      question:
        'Which type of ROM is used in the programming of new game consoles?',
      options: ['PROM', 'EPROM', 'EEPROM'],
      answer: 'EPROM',
      type: 'radio',
    },
    {
      question: 'Select the advantages of using embedded systems:',
      options: [
        ['small in size, easy to fit into devices', true],
        ['usually dedicated to one task', true],
        ['interfaces look simple, but can be confusing', false],
        ['troubleshooting faults is a specialist task', false],
        [
          'if they are accessible over the internet, they are also open to hackers and viruses',
          false,
        ],
      ],
      type: 'checkbox',
    },
    {
      question: 'Secondary storage devices are volatile.',
      options: ['True', 'False'],
      answer: 'False',
      type: 'radio',
    },
    {
      question:
        'All applications, the operating system, device drivers and general files (documents, photos, music, etc.) are stored on secondary storage.',
      options: ['True', 'False'],
      answer: 'True',
      type: 'radio',
    },
    {
      question: 'How is data access time in secondary storage compared to RAM?',
      options: ['Slower', 'Faster'],
      answer: 'Slower',
      type: 'radio',
    },
    {
      question:
        'Because of the cost implications, he majority of solid state drives use:',
      options: ['NAND technology', 'NOR technology'],
      answer: 'NAND technology',
      type: 'radio',
    },
    {
      question:
        'EEPROM technology allows data to be read or erased in single bytes at a time.',
      options: ['True', 'False'],
      answer: 'True',
      type: 'radio',
    },
    {
      question: 'The main drawback of SSD is:',
      options: ['unknown longevity', 'no moving parts', 'they are very thin'],
      answer: 'unknown longevity',
      type: 'radio',
    },
    {
      question: 'Select the benefits of using an SSD rather than an HDD:',
      options: [
        [
          'SSDs are more reliable because they have no moving parts that can go wrong',
          true,
        ],
        ['SSDs have lower power consumption', true],
        ['SSDs are lighter and run much cooler than HDDs', true],
        ['SSDs last longer', false],
        ['in SSDs data is accessed faster', true],
      ],
      type: 'checkbox',
    },
  ],
  processor: [
    {
      question:
        'Which component of the processor ensures synchronisation of data flow and program instructions throught the computer?',
      options: ['CU (Control Unit)', 'System clock', 'Data bus'],
      answer: 'CU (Control Unit)',
      type: 'radio',
    },
    {
      question: 'The timing signals are produced by the system clock on the:',
      options: ['Control bus', 'Data bus', 'Address bus', 'Signal bus'],
      answer: 'Control bus',
      type: 'radio',
    },
    {
      question:
        'The CPU takes data and programs held in backing store and puts them into IAS (Immediate Access Store) temporarily',
      options: ['True', 'False'],
      answer: 'True',
      type: 'radio',
    },
    {
      question: 'The IAS is another name for primary (RAM) memory.',
      options: ['True', 'False'],
      answer: 'True',
      type: 'radio',
    },
    {
      question: 'Which one is a good example of a general purpose register?',
      options: ['Accumulator', 'Index register', 'Program counter'],
      answer: 'Accumulator',
      type: 'radio',
    },
    {
      question: 'Special purpose registers hold the program state.',
      options: ['True', 'False'],
      answer: 'True',
      type: 'radio',
    },
    {
      question:
        'A status register contains bits that can be set or cleared depending on the operation. Each bit is known as a flag. What does the flag named N represent?',
      options: ['Negative flag', 'Carry flag', 'Overflow flag', 'Zero flag'],
      answer: 'Negative flag',
      type: 'radio',
    },
    {
      question: 'What is an example of the use of the overflow flag?',
      options: [
        'it is set to 1 if an arithmetic operation results in an overflow',
        'it is set to 0 if an arithmetic operation results in an overflow',
        'it is set to 1 if an arithmetic operation has a carry',
      ],
      answer:
        'it is set to 1 if an arithmetic operation results in an overflow',
      type: 'radio',
    },
    {
      question:
        'Select the common busses used in the Von Neumann architecture:',
      options: [
        ['Address bus', true],
        ['Data bus', true],
        ['Control bus', true],
        ['Input bus', false],
        ['Write bus', false],
        ['Transmission bus', false],
      ],
      type: 'checkbox',
    },
    {
      question: 'The address bus is:',
      options: ['Bidiresctional', 'Unidirectional'],
      answer: 'Unidirectional',
      type: 'radio',
    },
    {
      question:
        'True or false: The wider the bus, the more memory locations can be directly addressed at any given time.',
      options: ['True', 'False'],
      answer: 'True',
      type: 'radio',
    },
    {
      question: 'Select the bidirectional busses:',
      options: [
        ['Address bus', false],
        ['Data bus', true],
        ['Control bus', true],
      ],
      type: 'checkbox',
    },
    {
      question: 'Identify types of signals that the control bus can transfer:',
      options: [
        ['Interrupt', true],
        ['Timing', true],
        ['Read', true],
        ['Write', true],
      ],
      type: 'checkbox',
    },
    {
      question: 'Unsynchronised operations and overheating can be caused by:',
      options: ['overclocking', 'underclocking', 'bus width too wide'],
      answer: 'overclocking',
      type: 'radio',
    },
    {
      question:
        'When a processor reads memory, it first checks out ........... and then moves on to .................... if the required data is not there.',
      options: [
        'cache, main memory',
        'main memory, cache',
        'main memory, secondary storage',
      ],
      answer: 'cache, main memory',
      type: 'radio',
    },
  ],
  data: [
    {
      question: 'What is the tallest mountain in the world?',
      options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
      answer: 'Mount Everest',
      type: 'radio',
    },
    {
      question: 'What is the capital of France?',
      options: [
        ['op1', true],
        ['op2', true],
        ['op3', false],
      ],
      type: 'checkbox',
    },
  ],
};
