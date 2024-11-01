import { Trans } from '@lingui/macro';
import { openContextModal } from '@mantine/modals';

import { DocumentationLinkItem } from '../components/items/DocumentationLinks';
import { StylishText } from '../components/items/StylishText';
import { UserRoles } from '../enums/Roles';
import { IS_DEV_OR_DEMO } from '../main';

export const footerLinks = [
  {
    link: 'https://inventree.org/',
    label: <Trans>Website</Trans>,
    key: 'website'
  },
  {
    link: 'https://github.com/inventree/InvenTree',
    label: <Trans>GitHub</Trans>,
    key: 'github'
  },
  {
    link: 'https://demo.inventree.org/',
    label: <Trans>Demo</Trans>,
    key: 'demo'
  }
];
export const navTabs = [
  { text: <Trans>Home</Trans>, name: 'home' },
  { text: <Trans>Dashboard</Trans>, name: 'dashboard' },
  { text: <Trans>Parts</Trans>, name: 'part', role: UserRoles.part },
  { text: <Trans>Stock</Trans>, name: 'stock', role: UserRoles.stock },
  {
    text: <Trans>Manufacturing</Trans>,
    name: 'manufacturing',
    role: UserRoles.build
  },
  {
    text: <Trans>Purchasing</Trans>,
    name: 'purchasing',
    role: UserRoles.purchase_order
  },
  { text: <Trans>Sales</Trans>, name: 'sales', role: UserRoles.sales_order }
];

export const docLinks = {
  app: 'https://docs.inventree.org/app/',
  getting_started: 'https://docs.inventree.org/en/latest/getting_started/',
  api: 'https://docs.inventree.org/en/latest/api/api/',
  developer: 'https://docs.inventree.org/en/latest/develop/starting/',
  faq: 'https://docs.inventree.org/en/latest/faq/'
};

export const navDocLinks: DocumentationLinkItem[] = [
  {
    id: 'getting_started',
    title: <Trans>Getting Started</Trans>,
    description: <Trans>Getting started with InvenTree</Trans>,
    link: docLinks.getting_started,
    placeholder: true
  },
  {
    id: 'api',
    title: <Trans>API</Trans>,
    description: <Trans>InvenTree API documentation</Trans>,
    link: docLinks.api
  },
  {
    id: 'developer',
    title: <Trans>Developer Manual</Trans>,
    description: <Trans>InvenTree developer manual</Trans>,
    link: docLinks.developer
  },
  {
    id: 'faq',
    title: <Trans>FAQ</Trans>,
    description: <Trans>Frequently asked questions</Trans>,
    link: docLinks.faq
  }
];

export function serverInfo() {
  return openContextModal({
    modal: 'info',
    title: (
      <StylishText size="xl">
        <Trans>System Information</Trans>
      </StylishText>
    ),
    size: 'xl',
    innerProps: {}
  });
}

export function aboutInvenTree() {
  return openContextModal({
    modal: 'about',
    title: (
      <StylishText size="xl">
        <Trans>About InvenTree</Trans>
      </StylishText>
    ),
    size: 'xl',
    innerProps: {}
  });
}

export function licenseInfo() {
  return openContextModal({
    modal: 'license',
    title: (
      <StylishText size="xl">
        <Trans>License Information</Trans>
      </StylishText>
    ),
    size: 'xl',
    innerProps: {}
  });
}

export const aboutLinks: DocumentationLinkItem[] = [
  {
    id: 'instance',
    title: <Trans>System Information</Trans>,
    description: <Trans>About this Inventree instance</Trans>,
    action: serverInfo
  },
  {
    id: 'about',
    title: <Trans>About InvenTree</Trans>,
    description: <Trans>About the InvenTree org</Trans>,
    action: aboutInvenTree
  },
  {
    id: 'licenses',
    title: <Trans>Licenses</Trans>,
    description: <Trans>Licenses for dependencies of the service</Trans>,
    action: licenseInfo
  }
];
