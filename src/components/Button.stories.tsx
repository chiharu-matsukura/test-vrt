/* eslint-disable import/extensions */
import React from 'react';
import { ComponentStory } from '@storybook/react';
import Button from './Button';
// eslint-disable-next-line import/no-useless-path-segments
import decorators from '.storybook/preview';

export default {
  title: 'components/Button',
  component: Button,
  decorators,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    screenshot: {
      delay: 200,
    },
  },
};

const Template: ComponentStory<typeof Button> = (args) => (
  <Button>hello world</Button>
);

export const Primary = Template.bind({});
