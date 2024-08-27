import type { Schema, Attribute } from '@strapi/strapi';

export interface BasicTextBlock extends Schema.Component {
  collectionName: 'components_basic_text_blocks';
  info: {
    displayName: 'Text Block';
  };
  attributes: {
    item: Attribute.Text;
  };
}

export interface BasicSocials extends Schema.Component {
  collectionName: 'components_basic_socials';
  info: {
    displayName: 'socials';
    icon: 'user';
  };
  attributes: {
    linkedin_url: Attribute.String;
    github_url: Attribute.String;
    portfolio_url: Attribute.String;
  };
}

export interface BasicSmallTextBlock extends Schema.Component {
  collectionName: 'components_basic_small_text_blocks';
  info: {
    displayName: 'Small Text Block';
  };
  attributes: {
    skill_item: Attribute.String;
  };
}

export interface BasicSkills extends Schema.Component {
  collectionName: 'components_basic_skills';
  info: {
    displayName: 'Skills';
    description: '';
  };
  attributes: {
    skill_title: Attribute.String;
    skill_items: Attribute.Text;
  };
}

export interface BasicProfile extends Schema.Component {
  collectionName: 'components_basic_profiles';
  info: {
    displayName: 'Profile';
  };
  attributes: {
    profile_text: Attribute.Text;
  };
}

export interface BasicExperience extends Schema.Component {
  collectionName: 'components_basic_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    company: Attribute.String;
    start_date: Attribute.Date;
    end_date: Attribute.Date;
    job_title: Attribute.String;
    job_description: Attribute.Component<'basic.text-block', true>;
  };
}

export interface BasicEducation extends Schema.Component {
  collectionName: 'components_basic_educations';
  info: {
    displayName: 'Education';
  };
  attributes: {
    institution: Attribute.String;
    location: Attribute.String;
    start_date: Attribute.Date;
    end_date: Attribute.Date;
    degree: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'basic.text-block': BasicTextBlock;
      'basic.socials': BasicSocials;
      'basic.small-text-block': BasicSmallTextBlock;
      'basic.skills': BasicSkills;
      'basic.profile': BasicProfile;
      'basic.experience': BasicExperience;
      'basic.education': BasicEducation;
    }
  }
}
