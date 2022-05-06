export type BackofficeSection = {
  name: string;
  icon: string;
};

export const supervisorSection: BackofficeSection[] = [
  {
    name: 'Monitor',
    icon: '/icons/sidebar_monitor.svg',
  },
  {
    name: 'Dashboard',
    icon: '/icons/sidebar-2.svg',
  },
  {
    name: 'Reportes',
    icon: '/icons/reports.svg',
  },
  {
    name: 'Canales',
    icon: '/icons/sidebar_chats.svg',
  },
];

export const adminSection: BackofficeSection[] = [
  {
    name: 'Monitor',
    icon: '/icons/sidebar_monitor.svg',
  },
  {
    name: 'Dashboard',
    icon: '/icons/sidebar-2.svg',
  },
  {
    name: 'Usuarios',
    icon: '/icons/sidebar_usuarios.svg',
  },
  {
    name: 'Reportes',
    icon: '/icons/reports.svg',
  },
  {
    name: 'Canales',
    icon: '/icons/sidebar_chats.svg',
  },
  {
    name: 'Configuración',
    icon: '/icons/sidebar_configuracion.svg',
  },
  {
    name: 'Suscripciones',
    icon: '/icons/subscription.svg',
  },
];

export const adminSectionRestricted: BackofficeSection[] = [
  {
    name: 'Reportes',
    icon: '/icons/reports.svg',
  },
  {
    name: 'Suscripciones',
    icon: '/icons/subscription.svg',
  },
];

export const fullVersionSections: BackofficeSection[] = [];
