import { Button } from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  onClick: action('Clicked Base'),
  disabled: false,
  label: 'Click me!'
};

export const Primary = Template.bind({});
Primary.args = {
  onClick: action('Clicked Primary'),
  disabled: false,
  variant: 'primary',
  label: 'Click me!'
};

export const Secondary = Template.bind({});
Secondary.args = {
  onClick: action('Clicked Secondary'),
  disabled: false,
  variant: 'secondary',
  label: 'Click me!'
};


export const Success = Template.bind({});
Success.args = {
  onClick: action('Clicked Success'),
  disabled: false,
  variant: 'success',
  label: 'Click me!'
}

export const Warning = Template.bind({});
Warning.args = {
  onClick: action('Clicked Warning'),
  disabled: false,
  variant: 'warning',
  label: 'Click me!'
}

export const Danger = Template.bind({});
Danger.args = {
  onClick: action('Clicked Danger'),
  disabled: false,
  variant: 'danger',
  label: 'Click me!'
};