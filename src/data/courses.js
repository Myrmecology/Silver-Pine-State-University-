export const courses = [
  // ========== ORIGINAL 22 COURSES ==========
  {
    id: "CS101",
    title: "Introduction to Computer Science",
    description: "Fundamentals of programming, problem-solving, and computational thinking using Python. Perfect for beginners with no prior experience.",
    professor: "Dr. Sarah Mitchell",
    days: ["Monday", "Wednesday", "Friday"],
    time: "09:00 AM - 10:15 AM",
    building: "Tech Center",
    room: "101"
  },
  {
    id: "MATH201",
    title: "Calculus II",
    description: "Continuation of Calculus I covering integration techniques, applications of integration, sequences, and series.",
    professor: "Dr. James Rodriguez",
    days: ["Tuesday", "Thursday"],
    time: "10:30 AM - 12:00 PM",
    building: "Mathematics Hall",
    room: "305"
  },
  {
    id: "CHEM101",
    title: "General Chemistry I",
    description: "Introduction to fundamental concepts in chemistry including atomic structure, chemical bonding, and thermodynamics.",
    professor: "Dr. Elaine Griffin",
    days: ["Monday", "Wednesday", "Friday"],
    time: "01:00 PM - 02:15 PM",
    building: "Science Hall",
    room: "204"
  },
  {
    id: "ENG205",
    title: "American Literature",
    description: "Survey of American literature from colonial period to present, focusing on major authors and literary movements.",
    professor: "Prof. Michael Chen",
    days: ["Tuesday", "Thursday"],
    time: "02:00 PM - 03:30 PM",
    building: "Humanities Building",
    room: "412"
  },
  {
    id: "BIO150",
    title: "Introduction to Biology",
    description: "Comprehensive overview of biological principles including cell structure, genetics, evolution, and ecology.",
    professor: "Dr. Rebecca Thompson",
    days: ["Monday", "Wednesday"],
    time: "11:00 AM - 12:30 PM",
    building: "Life Sciences Center",
    room: "150"
  },
  {
    id: "PHYS201",
    title: "Physics I: Mechanics",
    description: "Classical mechanics covering kinematics, dynamics, energy, momentum, and rotational motion with laboratory component.",
    professor: "Dr. David Kumar",
    days: ["Tuesday", "Thursday"],
    time: "08:00 AM - 09:30 AM",
    building: "Science Hall",
    room: "301"
  },
  {
    id: "PSYCH101",
    title: "Introduction to Psychology",
    description: "Overview of psychological principles, theories, and research methods covering cognition, development, and behavior.",
    professor: "Dr. Amanda Williams",
    days: ["Monday", "Wednesday", "Friday"],
    time: "10:30 AM - 11:45 AM",
    building: "Social Sciences Building",
    room: "220"
  },
  {
    id: "HIST110",
    title: "World History I",
    description: "Exploration of world civilizations from ancient times through the Renaissance, examining cultural, political, and social developments.",
    professor: "Prof. Robert Martinez",
    days: ["Tuesday", "Thursday"],
    time: "01:00 PM - 02:30 PM",
    building: "Humanities Building",
    room: "308"
  },
  {
    id: "CS250",
    title: "Data Structures and Algorithms",
    description: "In-depth study of data structures, algorithm design, complexity analysis, and problem-solving techniques.",
    professor: "Dr. Lisa Patel",
    days: ["Monday", "Wednesday", "Friday"],
    time: "02:30 PM - 03:45 PM",
    building: "Tech Center",
    room: "215"
  },
  {
    id: "ECON101",
    title: "Principles of Microeconomics",
    description: "Introduction to microeconomic theory including supply and demand, market structures, and consumer behavior.",
    professor: "Prof. Thomas Anderson",
    days: ["Tuesday", "Thursday"],
    time: "09:30 AM - 11:00 AM",
    building: "Business Hall",
    room: "102"
  },
  {
    id: "ART101",
    title: "Introduction to Studio Art",
    description: "Hands-on exploration of various artistic media including drawing, painting, and sculpture with emphasis on creative expression.",
    professor: "Prof. Maria Gonzalez",
    days: ["Monday", "Wednesday"],
    time: "03:00 PM - 05:00 PM",
    building: "Fine Arts Center",
    room: "Studio A"
  },
  {
    id: "MUS120",
    title: "Music Theory I",
    description: "Fundamentals of music theory including notation, scales, intervals, chords, and basic harmonic analysis.",
    professor: "Dr. Jonathan Lee",
    days: ["Tuesday", "Thursday"],
    time: "11:00 AM - 12:30 PM",
    building: "Music Hall",
    room: "201"
  },
  {
    id: "BIO301",
    title: "Genetics",
    description: "Comprehensive study of heredity, gene expression, molecular genetics, and genetic engineering techniques.",
    professor: "Dr. Patricia Wilson",
    days: ["Monday", "Wednesday", "Friday"],
    time: "12:00 PM - 01:15 PM",
    building: "Life Sciences Center",
    room: "225"
  },
  {
    id: "PHIL201",
    title: "Introduction to Philosophy",
    description: "Examination of fundamental philosophical questions about knowledge, reality, ethics, and human existence.",
    professor: "Prof. Daniel Brown",
    days: ["Tuesday", "Thursday"],
    time: "03:30 PM - 05:00 PM",
    building: "Humanities Building",
    room: "115"
  },
  {
    id: "CHEM210",
    title: "Organic Chemistry I",
    description: "Study of carbon compounds including structure, nomenclature, reactions, and mechanisms with laboratory component.",
    professor: "Dr. Steven Park",
    days: ["Monday", "Wednesday", "Friday"],
    time: "08:00 AM - 09:15 AM",
    building: "Science Hall",
    room: "208"
  },
  {
    id: "STAT200",
    title: "Introduction to Statistics",
    description: "Statistical methods including probability, distributions, hypothesis testing, and regression analysis with real-world applications.",
    professor: "Dr. Michelle Taylor",
    days: ["Tuesday", "Thursday"],
    time: "12:30 PM - 02:00 PM",
    building: "Mathematics Hall",
    room: "210"
  },
  {
    id: "CS340",
    title: "Database Management Systems",
    description: "Design and implementation of database systems covering SQL, normalization, transactions, and database administration.",
    professor: "Prof. Kevin Zhang",
    days: ["Monday", "Wednesday"],
    time: "04:00 PM - 05:30 PM",
    building: "Tech Center",
    room: "320"
  },
  {
    id: "POLI110",
    title: "American Government",
    description: "Study of the structure, function, and processes of American political institutions and political behavior.",
    professor: "Dr. Jennifer Harris",
    days: ["Tuesday", "Thursday"],
    time: "08:00 AM - 09:30 AM",
    building: "Social Sciences Building",
    room: "305"
  },
  {
    id: "SPAN101",
    title: "Elementary Spanish I",
    description: "Introduction to Spanish language and culture with emphasis on speaking, listening, reading, and writing skills.",
    professor: "Prof. Carlos Ramirez",
    days: ["Monday", "Wednesday", "Friday"],
    time: "11:00 AM - 12:15 PM",
    building: "Language Center",
    room: "104"
  },
  {
    id: "BUS200",
    title: "Introduction to Business",
    description: "Overview of business fundamentals including management, marketing, finance, and entrepreneurship in modern organizations.",
    professor: "Prof. Angela Moore",
    days: ["Tuesday", "Thursday"],
    time: "01:00 PM - 02:30 PM",
    building: "Business Hall",
    room: "205"
  },
  {
    id: "PE115",
    title: "Fitness and Wellness",
    description: "Practical course focusing on physical fitness, nutrition, stress management, and lifelong wellness strategies.",
    professor: "Coach Ryan Mitchell",
    days: ["Monday", "Wednesday"],
    time: "07:00 AM - 08:30 AM",
    building: "Recreation Center",
    room: "Gym 1"
  },
  {
    id: "COMM150",
    title: "Public Speaking",
    description: "Development of effective oral communication skills including speech preparation, delivery techniques, and audience analysis.",
    professor: "Prof. Nicole Johnson",
    days: ["Tuesday", "Thursday"],
    time: "10:00 AM - 11:30 AM",
    building: "Communications Building",
    room: "110"
  },

  // ========== 40 ADVANCED IVY LEAGUE COURSES ==========
  
  {
    id: "MATH601",
    title: "Advanced Linear Algebra and Matrix Theory",
    description: "Rigorous treatment of vector spaces, linear transformations, eigenvalue problems, Jordan canonical forms, spectral theory, and advanced applications in quantum mechanics and data science.",
    professor: "Dr. Elena Vorontsova",
    days: ["Monday", "Wednesday"],
    time: "02:00 PM - 03:45 PM",
    building: "Mathematics Hall",
    room: "601"
  },
  {
    id: "CHEM701",
    title: "Organometallic Chemistry and Catalysis",
    description: "Advanced study of transition metal complexes, organometallic reaction mechanisms, homogeneous and heterogeneous catalysis, with applications in pharmaceutical synthesis and industrial processes.",
    professor: "Dr. Heinrich Schneider",
    days: ["Tuesday", "Thursday"],
    time: "01:00 PM - 03:00 PM",
    building: "Chemistry Research Center",
    room: "405"
  },
  {
    id: "PHYS801",
    title: "Advanced Quantum Mechanics: Many-Body Systems",
    description: "Quantum field theory, second quantization, Green's functions, Feynman diagrams, superconductivity, and quantum phase transitions in condensed matter systems.",
    professor: "Dr. Kenji Takahashi",
    days: ["Monday", "Wednesday", "Friday"],
    time: "10:00 AM - 11:30 AM",
    building: "Physics Building",
    room: "801"
  },
  {
    id: "CS801",
    title: "Quantum Computing and Quantum Algorithms",
    description: "Quantum gates, quantum entanglement, Shor's algorithm, Grover's search, quantum error correction, and implementation on superconducting qubits and ion traps.",
    professor: "Dr. Sophia Ramirez",
    days: ["Tuesday", "Thursday"],
    time: "03:00 PM - 05:00 PM",
    building: "Quantum Computing Lab",
    room: "102"
  },
  {
    id: "PHYS805",
    title: "General Relativity and Black Holes",
    description: "Einstein field equations, Schwarzschild and Kerr metrics, gravitational waves, black hole thermodynamics, and observational tests of general relativity including LIGO detections.",
    professor: "Dr. Marcus Whitfield",
    days: ["Monday", "Wednesday"],
    time: "11:00 AM - 12:45 PM",
    building: "Physics Building",
    room: "705"
  },
  {
    id: "CHEM705",
    title: "Physical Chemistry: Advanced Thermodynamics and Statistical Mechanics",
    description: "Ensemble theory, partition functions, phase transitions, non-equilibrium thermodynamics, molecular dynamics simulations, and applications to biological systems.",
    professor: "Dr. Anastasia Petrov",
    days: ["Tuesday", "Thursday"],
    time: "09:00 AM - 11:00 AM",
    building: "Chemistry Research Center",
    room: "302"
  },
  {
    id: "PHYS710",
    title: "Astrophysics: Stellar Evolution and Nucleosynthesis",
    description: "Stellar structure equations, nuclear fusion processes, supernovae dynamics, neutron stars, white dwarfs, and the chemical evolution of galaxies.",
    professor: "Dr. Rashid Al-Mansour",
    days: ["Monday", "Wednesday", "Friday"],
    time: "01:00 PM - 02:30 PM",
    building: "Observatory Complex",
    room: "201"
  },
  {
    id: "MATH605",
    title: "Differential Geometry and Topology",
    description: "Manifolds, tangent spaces, Riemannian geometry, curvature tensors, differential forms, de Rham cohomology, and applications to physics and data science.",
    professor: "Dr. Yuki Nakamura",
    days: ["Tuesday", "Thursday"],
    time: "02:00 PM - 03:45 PM",
    building: "Mathematics Hall",
    room: "505"
  },
  {
    id: "CS805",
    title: "Advanced Machine Learning: Deep Learning Theory",
    description: "Neural network architectures, backpropagation, convolutional and recurrent networks, transformers, generative adversarial networks, and theoretical foundations of deep learning.",
    professor: "Dr. Priya Sharma",
    days: ["Monday", "Wednesday"],
    time: "03:00 PM - 05:00 PM",
    building: "AI Research Institute",
    room: "301"
  },
  {
    id: "BIO701",
    title: "Systems Biology and Computational Genomics",
    description: "Network analysis of biological systems, gene regulatory networks, metabolic pathway modeling, next-generation sequencing analysis, and personalized medicine applications.",
    professor: "Dr. Laura Fernandez",
    days: ["Tuesday", "Thursday"],
    time: "10:00 AM - 12:00 PM",
    building: "Genomics Center",
    room: "203"
  },
  {
    id: "NEURO801",
    title: "Computational Neuroscience and Brain Dynamics",
    description: "Neural coding, integrate-and-fire models, synaptic plasticity, large-scale brain networks, and computational approaches to understanding consciousness and cognition.",
    professor: "Dr. Oliver Bennington",
    days: ["Monday", "Wednesday", "Friday"],
    time: "09:00 AM - 10:30 AM",
    building: "Neuroscience Institute",
    room: "401"
  },
  {
    id: "ENGR801",
    title: "Advanced Fluid Dynamics and Turbulence",
    description: "Navier-Stokes equations, boundary layer theory, turbulence modeling, computational fluid dynamics, and applications in aerospace and climate modeling.",
    professor: "Dr. Alessandro Moretti",
    days: ["Tuesday", "Thursday"],
    time: "01:00 PM - 03:00 PM",
    building: "Engineering Complex",
    room: "601"
  },
  {
    id: "MATH610",
    title: "Stochastic Calculus and Financial Mathematics",
    description: "Brownian motion, Itô calculus, martingales, Black-Scholes model, option pricing, risk-neutral valuation, and stochastic differential equations in quantitative finance.",
    professor: "Dr. Catherine Wei",
    days: ["Monday", "Wednesday"],
    time: "04:00 PM - 05:45 PM",
    building: "Mathematics Hall",
    room: "410"
  },
  {
    id: "PHYS815",
    title: "Quantum Field Theory and Particle Physics",
    description: "Relativistic quantum mechanics, Dirac equation, gauge theories, electroweak theory, quantum chromodynamics, and the Standard Model of particle physics.",
    professor: "Dr. Friedrich von Bergmann",
    days: ["Tuesday", "Thursday"],
    time: "10:00 AM - 12:00 PM",
    building: "Particle Physics Lab",
    room: "501"
  },
  {
    id: "CS810",
    title: "Advanced Cryptography and Information Security",
    description: "Post-quantum cryptography, zero-knowledge proofs, homomorphic encryption, blockchain technology, secure multi-party computation, and cryptanalysis techniques.",
    professor: "Dr. Dmitri Volkov",
    days: ["Monday", "Wednesday"],
    time: "01:00 PM - 03:00 PM",
    building: "Cybersecurity Institute",
    room: "205"
  },
  {
    id: "CHEM710",
    title: "Advanced Quantum Chemistry and Molecular Spectroscopy",
    description: "Ab initio methods, density functional theory, molecular orbital theory, electronic structure calculations, NMR, IR, and mass spectrometry at the research level.",
    professor: "Dr. Ingrid Svenson",
    days: ["Tuesday", "Thursday"],
    time: "11:00 AM - 01:00 PM",
    building: "Chemistry Research Center",
    room: "501"
  },
  {
    id: "MATH615",
    title: "Algebraic Topology and Homology Theory",
    description: "Fundamental groups, covering spaces, homology and cohomology groups, exact sequences, CW complexes, and applications to data analysis and robotics.",
    professor: "Dr. Rajesh Krishnamurthy",
    days: ["Monday", "Wednesday", "Friday"],
    time: "02:00 PM - 03:15 PM",
    building: "Mathematics Hall",
    room: "520"
  },
  {
    id: "BIO705",
    title: "Molecular Biophysics and Structural Biology",
    description: "X-ray crystallography, cryo-electron microscopy, NMR spectroscopy, protein folding dynamics, molecular machines, and drug design at atomic resolution.",
    professor: "Dr. Charlotte Beaumont",
    days: ["Tuesday", "Thursday"],
    time: "02:00 PM - 04:00 PM",
    building: "Structural Biology Center",
    room: "301"
  },
  {
    id: "ENGR805",
    title: "Nanotechnology and Quantum Materials",
    description: "Nanofabrication techniques, graphene and 2D materials, topological insulators, quantum dots, spintronics, and applications in next-generation electronics.",
    professor: "Dr. Jin-Ho Park",
    days: ["Monday", "Wednesday"],
    time: "10:00 AM - 12:00 PM",
    building: "Nanotechnology Institute",
    room: "102"
  },
  {
    id: "CS815",
    title: "Advanced Artificial Intelligence: Reinforcement Learning",
    description: "Markov decision processes, Q-learning, policy gradients, actor-critic methods, multi-agent systems, and applications in robotics and autonomous systems.",
    professor: "Dr. Ahmed El-Sayed",
    days: ["Tuesday", "Thursday"],
    time: "03:00 PM - 05:00 PM",
    building: "AI Research Institute",
    room: "402"
  },
  {
    id: "PHYS820",
    title: "Cosmology and the Early Universe",
    description: "Big Bang theory, inflation, cosmic microwave background, dark matter, dark energy, large-scale structure formation, and observational cosmology.",
    professor: "Dr. Natalia Ivanova",
    days: ["Monday", "Wednesday", "Friday"],
    time: "11:00 AM - 12:30 PM",
    building: "Observatory Complex",
    room: "305"
  },
  {
    id: "MATH620",
    title: "Nonlinear Dynamics and Chaos Theory",
    description: "Dynamical systems, bifurcations, strange attractors, Lyapunov exponents, fractals, and applications in physics, biology, and economics.",
    professor: "Dr. Sebastian Müller",
    days: ["Tuesday", "Thursday"],
    time: "01:00 PM - 02:45 PM",
    building: "Mathematics Hall",
    room: "415"
  },
  {
    id: "CHEM715",
    title: "Advanced Synthetic Chemistry and Total Synthesis",
    description: "Retrosynthetic analysis, asymmetric synthesis, protecting group strategies, natural product total synthesis, and modern coupling reactions.",
    professor: "Dr. Victoria Cambridge",
    days: ["Monday", "Wednesday"],
    time: "02:00 PM - 04:00 PM",
    building: "Chemistry Research Center",
    room: "605"
  },
  {
    id: "BIO710",
    title: "Immunology and Vaccine Development",
    description: "Adaptive and innate immunity, T and B cell biology, immunological memory, autoimmune diseases, cancer immunotherapy, and modern vaccine design strategies.",
    professor: "Dr. Samuel Okonkwo",
    days: ["Tuesday", "Thursday"],
    time: "09:00 AM - 11:00 AM",
    building: "Medical Sciences Building",
    room: "401"
  },
  {
    id: "ENGR810",
    title: "Advanced Robotics and Autonomous Systems",
    description: "Robot kinematics and dynamics, motion planning, computer vision, SLAM algorithms, deep reinforcement learning for robotics, and human-robot interaction.",
    professor: "Dr. Hiroshi Tanaka",
    days: ["Monday", "Wednesday", "Friday"],
    time: "03:00 PM - 04:30 PM",
    building: "Robotics Laboratory",
    room: "201"
  },
  {
    id: "CS820",
    title: "Distributed Systems and Cloud Computing Architecture",
    description: "Consensus algorithms, Byzantine fault tolerance, distributed databases, microservices, containerization, Kubernetes, and scalable system design.",
    professor: "Dr. Rebecca Goldstein",
    days: ["Tuesday", "Thursday"],
    time: "10:00 AM - 12:00 PM",
    building: "Tech Center",
    room: "801"
  },
  {
    id: "PHYS825",
    title: "Condensed Matter Physics: Superconductivity and Magnetism",
    description: "BCS theory, high-temperature superconductors, quantum Hall effect, topological phases of matter, and experimental techniques in low-temperature physics.",
    professor: "Dr. Pierre Dubois",
    days: ["Monday", "Wednesday"],
    time: "01:00 PM - 03:00 PM",
    building: "Physics Building",
    room: "605"
  },
  {
    id: "MATH625",
    title: "Partial Differential Equations and Applications",
    description: "Elliptic, parabolic, and hyperbolic PDEs, Green's functions, variational methods, finite element analysis, and applications in physics and engineering.",
    professor: "Dr. Irina Volkov",
    days: ["Tuesday", "Thursday"],
    time: "03:00 PM - 04:45 PM",
    building: "Mathematics Hall",
    room: "425"
  },
  {
    id: "BIO715",
    title: "Neuropharmacology and Drug Discovery",
    description: "Receptor pharmacology, neurotransmitter systems, drug-receptor interactions, high-throughput screening, medicinal chemistry, and clinical trial design.",
    professor: "Dr. Margaret O'Sullivan",
    days: ["Monday", "Wednesday", "Friday"],
    time: "10:00 AM - 11:30 AM",
    building: "Pharmaceutical Sciences",
    room: "302"
  },
  {
    id: "ENGR815",
    title: "Advanced Semiconductor Devices and VLSI Design",
    description: "MOSFET physics, FinFET technology, quantum tunneling devices, circuit design, CMOS technology, lithography, and next-generation computing architectures.",
    professor: "Dr. Wei-Ling Chen",
    days: ["Tuesday", "Thursday"],
    time: "02:00 PM - 04:00 PM",
    building: "Microelectronics Lab",
    room: "501"
  },
  {
    id: "CS825",
    title: "Advanced Computer Vision and Image Processing",
    description: "Convolutional neural networks, object detection, semantic segmentation, 3D reconstruction, SLAM, generative models, and real-time vision systems.",
    professor: "Dr. Alexander Novikov",
    days: ["Monday", "Wednesday"],
    time: "04:00 PM - 06:00 PM",
    building: "Computer Vision Lab",
    room: "303"
  },
  {
    id: "CHEM720",
    title: "Computational Chemistry and Molecular Modeling",
    description: "Molecular mechanics, quantum mechanical calculations, molecular dynamics, Monte Carlo simulations, drug docking, and protein-ligand interactions.",
    professor: "Dr. Carlos Mendoza",
    days: ["Tuesday", "Thursday"],
    time: "10:00 AM - 12:00 PM",
    building: "Computational Sciences",
    room: "405"
  },
  {
    id: "MATH630",
    title: "Functional Analysis and Operator Theory",
    description: "Banach and Hilbert spaces, bounded operators, spectral theory, compact operators, and applications to quantum mechanics and differential equations.",
    professor: "Dr. Thomas Blackwell",
    days: ["Monday", "Wednesday", "Friday"],
    time: "01:00 PM - 02:15 PM",
    building: "Mathematics Hall",
    room: "530"
  },
  {
    id: "PHYS830",
    title: "Plasma Physics and Nuclear Fusion",
    description: "Magnetohydrodynamics, plasma confinement, tokamak design, laser fusion, plasma diagnostics, and the path to commercial fusion energy.",
    professor: "Dr. Yolanda Martinez",
    days: ["Tuesday", "Thursday"],
    time: "11:00 AM - 01:00 PM",
    building: "Plasma Physics Center",
    room: "201"
  },
  {
    id: "BIO720",
    title: "Synthetic Biology and Metabolic Engineering",
    description: "Genetic circuit design, CRISPR technologies, genome editing, metabolic pathway optimization, biofuels, and engineered biological systems.",
    professor: "Dr. Jennifer Wong",
    days: ["Monday", "Wednesday"],
    time: "02:00 PM - 04:00 PM",
    building: "Synthetic Biology Lab",
    room: "401"
  },
  {
    id: "ENGR820",
    title: "Advanced Materials Science: Smart and Functional Materials",
    description: "Shape-memory alloys, piezoelectric materials, metamaterials, self-healing polymers, biomimetic materials, and 4D printing technologies.",
    professor: "Dr. Ananya Desai",
    days: ["Tuesday", "Thursday"],
    time: "01:00 PM - 03:00 PM",
    building: "Materials Science Lab",
    room: "302"
  },
  {
    id: "CS830",
    title: "Natural Language Processing and Large Language Models",
    description: "Transformer architectures, attention mechanisms, BERT, GPT models, fine-tuning, prompt engineering, and ethical considerations in AI language systems.",
    professor: "Dr. Marcus Thompson",
    days: ["Monday", "Wednesday", "Friday"],
    time: "02:00 PM - 03:30 PM",
    building: "AI Research Institute",
    room: "501"
  },
  {
    id: "MATH635",
    title: "Algebraic Number Theory and Cryptography",
    description: "Prime number theory, algebraic integers, class field theory, elliptic curves, and applications to modern cryptographic systems.",
    professor: "Dr. François Laurent",
    days: ["Tuesday", "Thursday"],
    time: "04:00 PM - 05:45 PM",
    building: "Mathematics Hall",
    room: "435"
  },
  {
    id: "PHYS835",
    title: "Advanced Optics and Quantum Photonics",
    description: "Nonlinear optics, quantum optics, laser physics, optical communication, quantum entanglement, and photonic quantum computing.",
    professor: "Dr. Sven Andersson",
    days: ["Monday", "Wednesday"],
    time: "09:00 AM - 11:00 AM",
    building: "Optics Research Center",
    room: "401"
  },
  {
    id: "CHEM725",
    title: "Advanced Biochemistry: Enzyme Mechanisms",
    description: "Enzyme kinetics, catalytic mechanisms, allosteric regulation, protein engineering, directed evolution, and industrial biocatalysis.",
    professor: "Dr. Isabella Romano",
    days: ["Tuesday", "Thursday"],
    time: "02:00 PM - 04:00 PM",
    building: "Biochemistry Building",
    room: "505"
  },
  {
    id: "BIO725",
    title: "Cancer Biology and Precision Medicine",
    description: "Oncogene signaling, tumor suppressor pathways, cancer genomics, immunotherapy, targeted therapies, and personalized treatment strategies.",
    professor: "Dr. Robert Hawkins",
    days: ["Monday", "Wednesday", "Friday"],
    time: "11:00 AM - 12:30 PM",
    building: "Cancer Research Institute",
    room: "301"
  },

  // ========== 25 NEW COURSES (Languages, Law, Specialized Fields) ==========
  
  {
    id: "ICE101",
    title: "Introduction to Icelandic",
    description: "Beginning Icelandic language focusing on pronunciation, basic grammar, essential vocabulary, and conversational skills. Explore Norse linguistic heritage and modern Icelandic culture.",
    professor: "Prof. Guðrún Sigurðardóttir",
    days: ["Monday", "Wednesday", "Friday"],
    time: "09:00 AM - 10:15 AM",
    building: "Language Center",
    room: "201"
  },
  {
    id: "ICE201",
    title: "Intermediate Icelandic",
    description: "Continued study of Icelandic grammar, expanded vocabulary, reading comprehension of contemporary texts, and intermediate conversation practice with native speakers.",
    professor: "Prof. Guðrún Sigurðardóttir",
    days: ["Monday", "Wednesday", "Friday"],
    time: "10:30 AM - 11:45 AM",
    building: "Language Center",
    room: "201"
  },
  {
    id: "ICE301",
    title: "Advanced Icelandic",
    description: "Advanced grammar structures, literary analysis of Icelandic sagas and modern literature, complex conversation topics, and written composition in Icelandic.",
    professor: "Dr. Björn Jónsson",
    days: ["Tuesday", "Thursday"],
    time: "01:00 PM - 02:30 PM",
    building: "Language Center",
    room: "305"
  },
  {
    id: "ICE401",
    title: "Expert Icelandic: Language and Culture",
    description: "Mastery-level Icelandic with focus on translation, advanced literary analysis, dialectal variations, Old Norse connections, and contemporary Icelandic media.",
    professor: "Dr. Björn Jónsson",
    days: ["Tuesday", "Thursday"],
    time: "03:00 PM - 04:30 PM",
    building: "Language Center",
    room: "305"
  },
  {
    id: "CS401",
    title: "Video Game Design and Development",
    description: "Game design principles, mechanics, narrative structures, level design, Unity/Unreal Engine development, playtesting methodologies, and the game production pipeline.",
    professor: "Prof. Nathan Drake",
    days: ["Monday", "Wednesday"],
    time: "02:00 PM - 04:00 PM",
    building: "Digital Media Lab",
    room: "105"
  },
  {
    id: "ARCH301",
    title: "Archaeology: Methods and Theory",
    description: "Archaeological field methods, excavation techniques, artifact analysis, dating methods, cultural heritage preservation, and interpretation of ancient civilizations.",
    professor: "Dr. Eleanor Hartley",
    days: ["Tuesday", "Thursday"],
    time: "10:00 AM - 12:00 PM",
    building: "Anthropology Building",
    room: "201"
  },
  {
    id: "ANTH201",
    title: "Cultural Anthropology",
    description: "Study of human cultures, social structures, kinship systems, ritual practices, ethnographic methods, and contemporary global cultural dynamics.",
    professor: "Dr. Amara Okafor",
    days: ["Monday", "Wednesday", "Friday"],
    time: "11:00 AM - 12:15 PM",
    building: "Social Sciences Building",
    room: "315"
  },
  {
    id: "ENGR301",
    title: "Electrical and Electronic Engineering",
    description: "Circuit analysis, semiconductor devices, digital electronics, microcontrollers, signal processing, power systems, and hands-on laboratory projects.",
    professor: "Dr. Vikram Patel",
    days: ["Tuesday", "Thursday"],
    time: "09:00 AM - 11:30 AM",
    building: "Engineering Complex",
    room: "405"
  },
  {
    id: "MUS301",
    title: "Musicology: History and Analysis",
    description: "Historical development of Western music, musical analysis techniques, composer studies, performance practice, and critical approaches to music scholarship.",
    professor: "Dr. Constance Verlaine",
    days: ["Monday", "Wednesday"],
    time: "01:00 PM - 02:30 PM",
    building: "Music Hall",
    room: "305"
  },
  {
    id: "LAW301",
    title: "Law with Politics",
    description: "Intersection of legal systems and political institutions, constitutional law, legislative processes, judicial politics, separation of powers, and policy-making frameworks.",
    professor: "Prof. Victoria Ashford",
    days: ["Tuesday", "Thursday"],
    time: "02:00 PM - 04:00 PM",
    building: "Law School",
    room: "201"
  },
  {
    id: "LAW401",
    title: "International Law",
    description: "Principles of public international law, treaties, state sovereignty, international organizations, human rights law, and dispute resolution mechanisms.",
    professor: "Dr. Hassan Al-Rashid",
    days: ["Monday", "Wednesday"],
    time: "10:00 AM - 12:00 PM",
    building: "Law School",
    room: "305"
  },
  {
    id: "LAW402",
    title: "Criminal Law and Procedure",
    description: "Elements of criminal offenses, defenses, constitutional protections, rules of evidence, trial procedures, sentencing, and contemporary criminal justice issues.",
    professor: "Prof. Margaret Sullivan",
    days: ["Tuesday", "Thursday"],
    time: "01:00 PM - 03:00 PM",
    building: "Law School",
    room: "401"
  },
  {
    id: "LAW403",
    title: "Public Law and Constitutional Theory",
    description: "Constitutional interpretation, administrative law, judicial review, separation of powers, federalism, civil liberties, and contemporary constitutional debates.",
    professor: "Dr. Richard Pembroke",
    days: ["Monday", "Wednesday", "Friday"],
    time: "09:00 AM - 10:30 AM",
    building: "Law School",
    room: "501"
  },
  {
    id: "EDU401",
    title: "Philosophy of Education",
    description: "Philosophical foundations of education, theories of learning, educational justice, critical pedagogy, and ethical dimensions of teaching and curriculum design.",
    professor: "Dr. Paulo Freire-Santos",
    days: ["Tuesday", "Thursday"],
    time: "03:00 PM - 04:30 PM",
    building: "Education Building",
    room: "205"
  },
  {
    id: "CHIN101",
    title: "Elementary Mandarin Chinese",
    description: "Introduction to Mandarin pronunciation, tones, basic characters, fundamental grammar, and essential conversational skills for everyday situations.",
    professor: "Prof. Li Wei",
    days: ["Monday", "Wednesday", "Friday"],
    time: "08:00 AM - 09:15 AM",
    building: "Language Center",
    room: "108"
  },
  {
    id: "FREN101",
    title: "Elementary French",
    description: "Beginning French language with emphasis on pronunciation, grammar fundamentals, vocabulary building, and conversational practice in French culture context.",
    professor: "Prof. Sophie Moreau",
    days: ["Tuesday", "Thursday"],
    time: "10:00 AM - 11:30 AM",
    building: "Language Center",
    room: "205"
  },
  {
    id: "POL101",
    title: "Elementary Polish",
    description: "Introduction to Polish language including alphabet, pronunciation, case system, basic grammar, and cultural insights into Polish-speaking communities.",
    professor: "Prof. Katarzyna Kowalski",
    days: ["Monday", "Wednesday"],
    time: "01:00 PM - 02:30 PM",
    building: "Language Center",
    room: "308"
  },
  {
    id: "GER101",
    title: "Elementary German",
    description: "Beginning German focusing on pronunciation, grammatical structures, essential vocabulary, and communicative competence in German-speaking contexts.",
    professor: "Prof. Hans Schmidt",
    days: ["Tuesday", "Thursday"],
    time: "11:00 AM - 12:30 PM",
    building: "Language Center",
    room: "210"
  },
  {
    id: "DUTCH101",
    title: "Elementary Dutch",
    description: "Introduction to Dutch language including pronunciation, basic grammar, vocabulary development, and cultural elements of the Netherlands and Belgium.",
    professor: "Prof. Anna van der Berg",
    days: ["Monday", "Wednesday", "Friday"],
    time: "02:00 PM - 03:15 PM",
    building: "Language Center",
    room: "315"
  },
  {
    id: "TURK101",
    title: "Elementary Turkish",
    description: "Beginning Turkish with focus on alphabet, vowel harmony, agglutinative grammar, essential vocabulary, and introduction to Turkish culture and society.",
    professor: "Prof. Ayşe Yılmaz",
    days: ["Tuesday", "Thursday"],
    time: "02:00 PM - 03:30 PM",
    building: "Language Center",
    room: "405"
  },
  {
    id: "MED701",
    title: "Clinical Medicine: Advanced Practice",
    description: "Clinical reasoning, diagnostic approaches, patient assessment, evidence-based medicine, treatment protocols, and ethical considerations in medical practice.",
    professor: "Dr. Elizabeth Montgomery",
    days: ["Monday", "Wednesday", "Friday"],
    time: "08:00 AM - 10:00 AM",
    building: "Medical Sciences Building",
    room: "501"
  },
  {
    id: "ENV301",
    title: "Sustainability Studies",
    description: "Environmental science, climate change, renewable energy systems, sustainable development, circular economy principles, and policy approaches to environmental challenges.",
    professor: "Dr. Marcus Green",
    days: ["Tuesday", "Thursday"],
    time: "01:00 PM - 03:00 PM",
    building: "Environmental Sciences",
    room: "201"
  },
  {
    id: "REL201",
    title: "Religious Studies: Comparative Approaches",
    description: "Major world religions, comparative theology, religious texts, ritual practices, sacred spaces, and contemporary religious movements in global context.",
    professor: "Dr. Sarah Goldberg",
    days: ["Monday", "Wednesday"],
    time: "11:00 AM - 12:30 PM",
    building: "Humanities Building",
    room: "505"
  },
  {
    id: "REL301",
    title: "Biblical Studies: Old and New Testament",
    description: "Historical-critical analysis of biblical texts, ancient Near Eastern context, textual criticism, hermeneutical approaches, and theological interpretation.",
    professor: "Dr. David Rosenbaum",
    days: ["Tuesday", "Thursday"],
    time: "09:00 AM - 10:30 AM",
    building: "Theology Center",
    room: "301"
  },
  {
    id: "VET701",
    title: "Veterinary Surgery and Medicine",
    description: "Small and large animal surgery techniques, anesthesiology, diagnostic imaging, surgical protocols, post-operative care, and veterinary emergency medicine.",
    professor: "Dr. Amanda Richardson",
    days: ["Monday", "Wednesday", "Friday"],
    time: "01:00 PM - 04:00 PM",
    building: "Veterinary Medicine Center",
    room: "105"
  }
];