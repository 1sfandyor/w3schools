import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'arrowDown';
  };
  attributes: {
    title: Attribute.String;
    sections: Attribute.Relation<
      'menu.dropdown',
      'oneToMany',
      'api::section.section'
    >;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
    Tutorial: Attribute.Component<'menu.tutorial'>;
    Reference: Attribute.Component<'menu.reference'>;
    Description: Attribute.Text;
  };
}

export interface MenuMenuBtn extends Schema.Component {
  collectionName: 'components_menu_menu_btns';
  info: {
    displayName: 'menuBtn';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    type: Attribute.Enumeration<['secondary', 'primary']>;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    icon: Attribute.Media<'images'>;
  };
}

export interface MenuReference extends Schema.Component {
  collectionName: 'components_menu_references';
  info: {
    displayName: 'Reference';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface MenuTechno extends Schema.Component {
  collectionName: 'components_menu_technos';
  info: {
    displayName: 'techno';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface MenuTechnologies extends Schema.Component {
  collectionName: 'components_menu_technologies';
  info: {
    displayName: 'technologies';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface MenuTutorial extends Schema.Component {
  collectionName: 'components_menu_tutorials';
  info: {
    displayName: 'Tutorial';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.dropdown': MenuDropdown;
      'menu.link': MenuLink;
      'menu.menu-btn': MenuMenuBtn;
      'menu.menu-link': MenuMenuLink;
      'menu.reference': MenuReference;
      'menu.techno': MenuTechno;
      'menu.technologies': MenuTechnologies;
      'menu.tutorial': MenuTutorial;
    }
  }
}
