import { Button } from './Button';

export default {
  title: 'components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  onClick: () => alert('Works'),
  disabled: false,
  label: 'Click me!'
};
