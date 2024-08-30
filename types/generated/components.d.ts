import type { Schema, Attribute } from '@strapi/strapi';

export interface HostHost extends Schema.Component {
  collectionName: 'components_host_hosts';
  info: {
    displayName: 'Host';
    icon: 'user';
  };
  attributes: {
    host_name: Attribute.Relation<'host.host', 'oneToOne', 'admin::user'>;
    Note: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'host.host': HostHost;
    }
  }
}
