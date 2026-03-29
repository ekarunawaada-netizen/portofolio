export type ProjectCategory = 'Bangunan Baru' | 'Renovasi' | 'Pasang Keramik' | 'Interior Hospitality' | 'Residensial Lux' | 'Komersial' | 'Bangun Baru' | 'Semua';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  imageSrc: string;
  label?: 'Sebelum' | 'Sesudah';
  description?: string;
  colSpanClass?: string;
  variant?: 'gallery-large' | 'gallery-medium' | 'gallery-small' | 'featured-large' | 'featured-medium' | 'featured-text-box';
}

export const galleryProjects: Project[] = [
  {
    id: "g1",
    title: "Villa Minimalis Uluwatu",
    category: "Bangunan Baru",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGLwHkqJFginnytG6LRbfP3_fhKbJA8DUyg6T0CjJSeY5aJaqJMnrCwrmoKjAmkq1LAxB87diajjW5fK_QS30iRrV6V6nx88xSFPWaUraSfjL3XMH39MpeJO8x9zKL3K2bATGET0SdTQ8R7RtH1XH1pt94OkK-B22fROh653WwZTeGJ6pbqIX5nyIe5ELMoYdY78b2K5COLr3XNb1n8t_nahzmUkD8F7KssqorpV9y1SuHgfjekGQW4ouJUxOfHtUnnXDNDuSvb7U",
    label: "Sesudah",
    colSpanClass: "gallery-span-2-2 relative group overflow-hidden bg-surface-container-low",
    variant: "gallery-large"
  },
  {
    id: "g2",
    title: "Pemasangan Keramik Mewah",
    category: "Pasang Keramik",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3dePrGzMb2DbopJJ4pP7H8dTZTPQ7yQf5ekqeqQ30ENhtIxD1ZqBEGelPH25PTFQH0MRtoLSNIWS0OpU2VhUvVKXX3_4-IfVz5Hx1gbmTHK4n5hb3d_5LVR832XU97vBEBcGLYfXXbKAy_6rh_vA2m-x3_SbSnZkVQgoUWI_GtqMVDpxl07wYBvXocQ8mREb7zCDYVZb8_k6vpUOkrrgLEgh-ASwpDEIMK61FkmyJa-5xfRPNWjBBI38rdmJZj4fdNeYI8niIIwo",
    colSpanClass: "gallery-span-1-2 relative group overflow-hidden bg-surface-container-low",
    variant: "gallery-medium"
  },
  {
    id: "g3",
    title: "Restorasi Dinding Batu",
    category: "Renovasi",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsw4_LraS097cHclcT_v2AmsvXmx8NXCE9mdHHt8CTbvaw92oCipZIhERnyFcqntfzLpGfnam7J66z-W9q0ESd_ofHEUJDqa0mWjGiXVG5OWbTY9dLD8ZugyqnvaeKWABTCNz96ba0iATXiwDr1Xt0qBJ280zITIXyU1QJXWxDyVozcerHCPjvDECQ8Z1gRDruQB5cySKQnnVIO9KsDmzKILx-840wU3xfQk2CmPTpeUka87iesYGbgFP9l_TPbkcaFgBRALU7cOU",
    label: "Sebelum",
    colSpanClass: "relative group overflow-hidden bg-surface-container-low",
    variant: "gallery-small"
  },
  {
    id: "g4",
    title: "Renovasi Loft Industri",
    category: "Renovasi",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIDrtbOGBSYgtv-lY-iDCpnME9klpjVPNJCK_IaDQ_pnRPCOH3C4tdx2rNPI4lNC3Vyd6TMIvPyAOSkAchM2DOviozJGViXDNh49iW4FE1xHrRivoG6XEKCA4Wx8jZr30Hfxrc-yN_y6Rd8djWbi6ioehIVK_20o_h4PN86KxYnbZho8TDYpDv7NeBg7WHguqkhHBNYC-pfqxa_bkW0ek7U0g75R88ZHnTgJITUU-eyqSnmT7hi2uNNYLSyak1_s966ctBeKzPiZg",
    colSpanClass: "relative group overflow-hidden bg-surface-container-low",
    variant: "gallery-small"
  },
  {
    id: "g5",
    title: "Teras Slate Minimalis",
    category: "Bangunan Baru",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-eAZp9WorFG4qKGEQ5_wowV6NNibevvooX1EKa3ojgZL_WHbqneNbrqYWe1XAkufPR8i31Qsi8HB12Vg113wL8QAFT4bO11_P0MW9ETMrfBmjEVjRmcoTGvopmm1B_hGeYRtpEGmoBR5P9LTyDXKZ5d1DYq0czpFMgMxor-xq003dSCasaJxSHtB4kvXT0To3UegofxKgpGbhPJBiEl6c2ftCPmuxbid0YYMBfy_P0vVkHNuR0RRipKicHYuRKtytfel62bsUMJI",
    colSpanClass: "gallery-span-1-2 relative group overflow-hidden bg-surface-container-low",
    variant: "gallery-medium"
  },
  {
    id: "g6",
    title: "Renovasi Area Kolam Renang",
    category: "Renovasi",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIZosbnuRo-GjxIqZmZOL0xFUxn_q2YGGbKxXehXVQX7zy2peqaCL9Vt7Gop-0cl10POa4Q_CcEacKbWdSPBxOZrfl5XAIYjgQ1k1Cadzo9dHdp_-kiu7l5UZ3KF5O5m2M3bNV0uu8EPEVP3xzgIujqDo6LQYKdK2dZADX-jNTtCW-nvGsIF-cxUVeOxkthvl7BJMWRb-qSPbB9QP4tLR1X0bb7tl1Nsq1SyX2lzZbaZ_BmJd0nCRbFx8-N1lAt0c0beag0R4CBeQ",
    label: "Sesudah",
    colSpanClass: "gallery-span-2-2 relative group overflow-hidden bg-surface-container-low",
    variant: "gallery-large"
  },
  {
    id: "g7",
    title: "Struktur Rumah 2 Lantai",
    category: "Bangunan Baru",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKk6FrlWBdTdcU1zcp7PzA7e8JlgxQyYXGZhRSxdbZ-dsJmgTrgxrOFV_SGrys5GVCE5xQsfr3BRfqUXEZoDsQnxX5AfkVMv7XdSRFWWjbfEp4MmXN5zJ_reBJeDl_PvPm39k76XNM8u2CL5KkX1D62vq4tDTBlihSbZnC08jM38ZZOrXUdHku0Q0ST7AYBP8o-Hn2JOD2_YBy-fTDI5Fo5UoqczkUF_zpCkoVCfrZ1NtKL16SvezyZwxEZXqr4xrl_M4sRAD9LII",
    colSpanClass: "relative group overflow-hidden bg-surface-container-low",
    variant: "gallery-small"
  },
  {
    id: "g8",
    title: "Renovasi Dapur Pondok Indah",
    category: "Renovasi",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7TR-jPsaQnlFpgQdOvQOEdwxJ52125Hvpi6UBVltGGnx4j6og9d5s0hBZRZuyK0wSMHDDGyWN7TPXDvnHIUt4JZEntLc-bE6076GqGhBLjNi4h6C2dRXNrTpwswY2En-AP_Ir2WdxeVh0DAkgOnLMuIp1kuP3puzdF4H6mRlRpPaRW_wHe3a4rfZz1qWoSceo1KqBck7TKFbbfODTOB1_BkClBcheE0yTUAIcKVLYWnq8muaqxQci1IfHrRX4AF8qFBhApqOVZrc",
    label: "Sebelum",
    colSpanClass: "relative group overflow-hidden bg-surface-container-low",
    variant: "gallery-small"
  }
];

export const featuredProjects: Project[] = [
  {
    id: "f1",
    title: "The Stone Haven Villa",
    category: "Residensial Lux",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv9hBDrvD-qaoG5RXqzz6AnMv1gggRjVnGgpnTEGCwRlF00qmjAAn2nZMgGs_zzur3I1OxOtz7Ng1N2TL1NQa6SMmuBjhBa55FCIRBDZFRz6NDDvD0PQiNNpkGeN9iDdvUk3KVtTVIRyZsbjhIPHcCjAoWXYy9gPvJEchFAjUQDIcIAoJtH6_j5c01XWHAz93EVP7qNpX3jIP0-v2mLShleX4HzbGu4QzbFHSuvrfGwChSwEsSlrNeReb7O3BYJM2X9ubM9p7TXT8",
    colSpanClass: "col-span-12 md:col-span-8 group relative overflow-hidden bg-primary-container min-h-[500px]",
    variant: "featured-large"
  },
  {
    id: "f2",
    title: "Nexus Office Renovation",
    category: "Komersial",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuHKLRJXFlssT1nZJ1vBFnLiRoFB697TX3eSNaMdtzOLL8GiNxHqcN-uv8wcNc9x42JiqC5i_6frpKiBNg1XFgPew1p5s39bwThZYeLNybqILI75qSIcMgfRTDIyG5ypjJdcd0528uUJYQVJGxBPEZUPDXsiXIiXgJxkii6HGgTAwl0_4ZKY0HIcu-8DYFJ2q2P0l-AMrwqyTGW3VaI1LHYxue6M88xgkJViUh5gQApGiXfxSrndgYHo6N9xfv-8WavmG2esVKHM4",
    colSpanClass: "col-span-12 md:col-span-4 group relative overflow-hidden bg-primary-container min-h-[500px]",
    variant: "featured-medium"
  },
  {
    id: "f3",
    title: "Minimalist Mono House",
    category: "Bangun Baru",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbMA9FuZ6eedkQuDaYcOvhe9N3wQK461nrqEZht6tdlSj780TgUhxgZhPahkq4KW160ZctdnAB9BS1mHw2ZCSt8_2UpmRqdKgh1glmPcZoTzaXyY2tCub_qUJQ0OurgCj-u16gFkzMNQlBAiFiJQ0fRmtNAUjdrPTHW013-1U_6b_n_f9A5EAhrDcMW7lzZT1q3vLbmwFv7ueXGt1CFpggrytjE5G_fS0r4L1QYg5OLFNssnisOjdauWNwM4HxL5BY1BazF0CX5Jk",
    colSpanClass: "col-span-12 md:col-span-4 group relative overflow-hidden bg-primary-container min-h-[400px]",
    variant: "featured-medium"
  },
  {
    id: "f4",
    title: "Grand Heritage Lobby",
    category: "Interior Hospitality",
    description: "Proyek renovasi interior seluas 500m2 dengan fokus pada restorasi material klasik dan instalasi kelistrikan modern.",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWk1x0WdqNHKRMWRDgRrfzNUmOYgSStJ7EfHZr_evcvk_NpDcvqHAvVBtcOdMSEWMNeF-v6Vns6XZzP1Jnf0PccmFIVpFQLd7pe6b3oH9g0SNHzyFlz_irdRrfAgSRTrpc49wKWDfWSTcvo0-HH79WrYT4S9u6oUZrmwhOWCNjG1Nnl5tdaLXkJXDCcmViUX1aLpX_zXy3qE6n0cT9rISQNKK2LC4AwkK1gdVj5acNgwBm0S4m69ZllSBjXYc62wNVutejwVi__7k",
    colSpanClass: "col-span-12 md:col-span-8 group relative overflow-hidden bg-primary-container min-h-[400px]",
    variant: "featured-text-box"
  }
];
