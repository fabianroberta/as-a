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
        'Because of the cost implications, the majority of solid state drives use:',
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
  management: [
    {
      question: 'Select the characteristics of a preemptive system:',
      options: [
        [
          'once the resources are allocated to a process, it retains them until it has completed its burst time or it has switched to a waiting state',
          false,
        ],
        ['the process can be interrupted while it is running', true],
        ['the process cannot be interrupted while it is running', false],
        [
          'there is a risk that low priority processes may be starved of resources',
          true,
        ],
      ],
      type: 'checkbox',
    },
    {
      question: 'Select the characteristics of a non-preemptive system:',
      options: [
        [
          'once the resources are allocated to a process, it retains them until it has completed its burst time or it has switched to a waiting state',
          true,
        ],
        ['the process can be interrupted while it is running', false],
        ['the process cannot be interrupted while it is running', true],
        [
          'there is a risk that processes with shorter burst time are starved of resources, if a process with long burst time is running',
          true,
        ],
      ],
      type: 'checkbox',
    },
    {
      question: 'The role of scheduling is:',
      options: [
        ['To maximize the system throughput', true],
        ['To ensure response time is acceptable', true],
        ['To ensure the systems remains stable at all times', true],
        ['To manage the memory needed for the current task', false],
      ],
      type: 'checkbox',
    },
    {
      question: 'Process priority depends on:',
      options: [
        'its category',
        'which resources does the process require and how many',
        'how much CPU time is needed',
        'All answers are true',
      ],
      answer: 'All answers are true',
      type: 'radio',
    },
    {
      question:
        'The Process Control Block (PCB) is a data structure which contains:',
      options: [
        'All answers are true',
        'Current process state (ready, running, blocked)',
        'Process privileges',
        'Register values (PC, MAR, MDR and ACC)',
        'Process priority',
        'Process ID',
        'CPU time needed',
      ],
      answer: 'All answers are true',
      type: 'radio',
    },
    {
      question: 'In which state is a process that is waiting for CPU time?',
      options: ['Running', 'Ready', 'Blocked'],
      answer: 'Ready',
      type: 'radio',
    },
    {
      question:
        'In which state is a process that is waiting for an event or I/O?',
      options: ['Running', 'Ready', 'Blocked'],
      answer: 'Blocked',
      type: 'radio',
    },
    {
      question:
        'Select the best scheduling routines for minimising the process waiting times:',
      options: [
        ['First Come First Served', false],
        ['Shortest Job First', true],
        ['Shortest Remaining Time First', true],
        ['Round Robin', false],
      ],
      type: 'checkbox',
    },
    {
      question:
        'Which scheduling routine has a fixed time slice for each process (or each process has the same priority)?',
      options: [
        'First Come First Served',
        'Shortest Job First',
        'Shortest Remaining Time First',
        'Round Robin',
      ],
      answer: 'Round Robin',
      type: 'radio',
    },
    {
      question: 'Shortest Job First is an example of:',
      options: ['preemptive scheduling', 'non-preemptive scheduling'],
      answer: 'non-preemptive scheduling',
      type: 'radio',
    },
    {
      question: 'Shortest Remaining Time First is an example of:',
      options: ['preemptive scheduling', 'non-preemptive scheduling'],
      answer: 'preemptive scheduling',
      type: 'radio',
    },
    {
      question:
        'Context switching is used to save the state of the preempted processes.',
      options: ['True', 'False'],
      answer: 'True',
      type: 'radio',
    },
    {
      question: 'Memory management: Memory is split into fixed-sized blocks:',
      options: ['Paging', 'Segmentation'],
      answer: 'Paging',
      type: 'radio',
    },
    {
      question: 'Internal fragmentation can be a consequence of:',
      options: ['Paging', 'Segmentation'],
      answer: 'Paging',
      type: 'radio',
    },
    {
      question:
        'Memory management: Memory is split into variable-sized blocks:',
      options: ['Paging', 'Segmentation'],
      answer: 'Segmentation',
      type: 'radio',
    },
    {
      question: 'Select the benefits of virtual memory:',
      options: [
        ['programs larger than physical memory can still be executed', true],
        ['no need to waste memory with data that is not being used', true],
        ['no need to buy and install more RAM', true],
        ['more pages are swapped', false],
      ],
      type: 'checkbox',
    },
    {
      question:
        "Which of the following page replacement algorithms suffer from Belady's anomaly?",
      options: [
        'FIFO page replacement',
        'clock page replacement',
        'least recently used page replacement',
        'optimal page replacement',
      ],
      answer: 'FIFO page replacement',
      type: 'radio',
    },
    {
      question: 'Complete the sentence: A page fault occurs when ...',
      options: [
        'an exception occurs',
        'a requested page is not yet in memory',
        'a requested page is already in memory',
        'the computer runs out of RAM',
        'a page has become corrupted',
      ],
      answer: 'a requested page is not yet in memory',
      type: 'radio',
    },
    {
      question:
        'Which of the following pages will the Optimal Page Replacement algorithm select?',
      options: [
        'the page that has been used the most number of times',
        'the page that will not be used for the longest time in the future',
        'the page that has been used the least number of times',
      ],
      answer:
        'the page that will not be used for the longest time in the future',
      type: 'radio',
    },
    {
      question:
        'A virtual memory system is using a FIFO page replacement algorithm. Increasing the number of page frames in main memory, will:',
      options: [
        'always decrease the number of page faults',
        'always increase the number of page faults',
        'never affect the number of page faults',
      ],
      answer: 'always increase the number of page faults',
      type: 'radio',
    },
    {
      question: 'What is the swap space on a hard disk used for?',
      options: [
        'storing device drivers',
        'saving interrupts',
        'saving process data',
      ],
      answer: 'saving process data',
      type: 'radio',
    },
    {
      question: 'Which of the following would cause disk thrashing?',
      options: [
        'when a number of interrupts occur',
        'frequent accessing of pages not in main memory',
        'when the processes are in a blocked state',
      ],
      answer: 'frequent accessing of pages not in main memory',
      type: 'radio',
    },
    {
      question: 'Which of the following is the main entry in a page table?',
      options: [
        'the virtual page number',
        'the page frame number',
        'the size of the page',
      ],
      answer: 'the page frame number',
      type: 'radio',
    },
  ],
  multimedia: [
    {
      question: 'The smallest picture element that makes up an image is:',
      options: ['Pixel', 'Bit', 'Byte'],
      answer: 'Pixel',
      type: 'radio',
    },
    {
      question: 'Number of bits used to represent the colors in a pixel:',
      options: ['Color depth', 'Image resolution', 'Pixel density'],
      answer: 'Color depth',
      type: 'radio',
    },
    {
      question: 'How many colors can be represented with 8 bit color depth?',
      options: ['256', '8', '255'],
      answer: '256',
      type: 'radio',
    },
    {
      question:
        'Bit depth - number of bits used to represent the smallest unit in a sound or image file.',
      options: [
        'The larger the bit depth, the better the quality of the sound or image.',
        'The larger the bit depth, the lower the quality of the sound or image.',
      ],
      answer:
        'The larger the bit depth, the better the quality of the sound or image.',
      type: 'radio',
    },
    {
      question: 'An increase in the size of a file has impact on:',
      options: [
        ['time for download', true],
        ['time for transferring from one device to another', true],
        ['screen resolution', false],
        ['nothing', false],
      ],
      type: 'checkbox',
    },
    {
      question:
        'If resolution is 1920 x 1080 pixels and bit depth is 24, how many megabytes does the file have?',
      options: ['6.222 MB', '50 000 MB', '5.933 MB'],
      answer: '6.222 MB',
      type: 'radio',
    },
    {
      question: 'Check the elements that appear in the header of a file:',
      options: [
        ['file type', true],
        ['file size', true],
        ['image resolution', true],
        ['compression information', true],
        ['username', false],
        ['category', false],
      ],
      type: 'checkbox',
    },
    {
      question:
        '_______ are images that use ______ to describe lines and curves which form _______',
      options: [
        'Vector graphics, 2D points, geometric shapes',
        'Bitmap, pixels, shapes',
        'Vector graphics',
        '3D points',
        'pixels',
      ],
      answer: 'Vector graphics, 2D points, geometric shapes',
      type: 'radio',
    },
    {
      question:
        'The file header of a vector graphic contains a drawing list made of:',
      options: [
        ['commands used for every object', true],
        ['attributes that make up each object', true],
        ['relative position of each object', true],
        ['dimensions of each object', false],
      ],
      type: 'checkbox',
    },
    {
      question: 'Select file formats for vector graphics:',
      options: [
        ['.svg', true],
        ['.cgm', true],
        ['.odg', true],
        ['.png', false],
        ['.bmp', false],
        ['.jpeg', false],
      ],
      type: 'checkbox',
    },
    {
      question:
        'Select the best type of image for the scenario: Image needs to be resized. ',
      options: ['Vector graphics', 'Bitmap'],
      answer: 'Vector graphics',
      type: 'radio',
    },
    {
      question:
        'Select the best type of image for the scenario: Design a logo for a company. ',
      options: ['Vector graphics', 'Bitmap'],
      answer: 'Vector graphics',
      type: 'radio',
    },
    {
      question:
        'Select the best type of image for the scenario: Image looks more realistic. ',
      options: ['Vector graphics', 'Bitmap'],
      answer: 'Bitmap',
      type: 'radio',
    },
    {
      question: 'Vector graphics do not require large file size.',
      options: ['True', 'False'],
      answer: 'True',
      type: 'radio',
    },
    {
      question: 'Number of bits used to represent sound amplitude: ',
      options: ['Sampling resolution', 'Sampling rate', 'Frame rate'],
      answer: 'Sampling resolution',
      type: 'radio',
    },
    {
      question:
        'File compression method where parts of the original file cannot be recovered during decompression:',
      options: ['Lossless', 'Lossy'],
      answer: 'Lossy',
      type: 'radio',
    },
    {
      question: 'RLE (Run Length Encoding) is a: ',
      options: [
        'lossless file compression technique',
        'lossy file compression technique',
      ],
      answer: 'lossless file compression technique',
      type: 'radio',
    },
    {
      question:
        'MP3 is a lossy compression technology that reduces the size of a file by about 90%.',
      options: ['True', 'False'],
      answer: 'True',
      type: 'radio',
    },
    {
      question: 'Select statements that describe perceptual music shaping:',
      options: [
        ['remove frequencies that are outside the human hearing range', true],
        [
          'if two sounds are played at the same time, only the louder one is kept',
          true,
        ],
        ['remove the sounds that are bad', false],
        ['remove duplicated sounds', false],
      ],
      type: 'checkbox',
    },
  ],
  // data: [
  //   {
  //     question: 'What is the tallest mountain in the world?',
  //     options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
  //     answer: 'Mount Everest',
  //     type: 'radio',
  //   },
  //   {
  //     question: 'What is the capital of France?',
  //     options: [
  //       ['op1', true],
  //       ['op2', true],
  //       ['op3', false],
  //     ],
  //     type: 'checkbox',
  //   },
  // ],
};
