# Football Field Admin Site

## Target

- Enable football field owners and managers to efficiently manage their facilities, including adding, editing, and removing football field listings.
- Provide a seamless integration with popular booking websites to attract more customers and increase field utilization.
- Offer a user-friendly interface that simplifies the scheduling, pricing, and special offers setup for each football field.
- Generate detailed reports and analytics to help owners make data-driven decisions and optimize field operations.
- Ensure mobile responsiveness for convenient on-the-go management.
- Collaborate with field owners or administrators to gather feedback and continuously improve the platform based on user preferences and suggestions.
- Streamline the management of customer bookings and facilitate direct communication with customers through the platform.

## Design

[Figma](https://www.figma.com/file/ihotGtX1kFp8bnKwGMzyQl/Final-Project?type=design&node-id=0%3A1&mode=design&t=Krsnt0yxeNoZzcNK-1)

## Deployment

[DN Football](https://football-field-admin-fe.vercel.app/)

## Information

- Editor: Visual Studio Code
- Supported browser: Chrome, Firefox, MS Edge, Opera, Safari lasted
- Supported screen: Screen width 996px or larger

## Team size

- Dev: Liem Nguyen
- Dev: Le Hoang

## Develop Environment

- [Visual Studio Code](https://code.visualstudio.com/)
- [Github](https://github.com/)

## Technical used in this project

- React
- TypeScript
- Vite
- React Router Dom
- TailwindCSS
- Lucide React _(Icon library)_
- Shadcn/UI _(Radix-UI)_
- GSAP _(Animation Library)_
- Tanstack
- Zustand
- Zod _(Validating)_

## Folder structure

```bash
.
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── pages/
│   │   ├── Login/
│   │       ├── components/
│   │       ├── index.tsx
│   ├── routes/
│   ├── services/
│   ├── stores/
│   ├── types/
│   ├── utils/
│   └── App.tsx
│   └── main.tsx
│   └── index.css
└── README.md
```

## Getting started

- Step 01: Clone repository with HTTPS

```bash
git clone https://github.com/liemgumball/football_field_admin-FE.git
```

- Step 02: Move to folder which just cloned in your computer

```bash
cd football_field_admin-FE
```

- Step 03: Install packages

```bash
yarn
```

- Step 04: Build

```bash
yarn build
```

- Step 05: Run (_needed some environment variables in order to run_)

```bash
yarn preview
```
