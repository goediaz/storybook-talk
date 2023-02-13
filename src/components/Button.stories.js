import { Button } from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['light', 'primary', 'secondary', 'success', 'warning', 'danger'],
      control: { type: 'select' },
      description: 'Select a button type to change the color.',
      table: {
       defaultValue: { summary: 'light' }
      }
    },
    onClick: {
      description: 'Callback function to run when the button is clicked', 
      table: {
        defaultValue: { summary: 'noop()' }
      }
    },
    label: {
      control: { type: 'text'},
      description: 'This is the text thats displayed inside the button',
      default: false
    },
    disabled: {
      control: { type: 'boolean'},
      description: 'Toggle if the button should be disabled or not',
      table: {
        defaultValue: { summary: false }
      }
    }
  },
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

const AllButtonsTemplate = (args) => {
  const buttonStates = ['light', 'primary', 'secondary', 'success', 'warning', 'danger'];
  const inlineStylesContainer = {
    'flex-direction': 'column',
    'display': 'flex',
    'width': '200px'
  };
  const inlineStylesButton = {
    'margin-bottom': '10px'
  }

  return (
    <div style={inlineStylesContainer}>
    {
      buttonStates.map(state => 
        <div style={inlineStylesButton}>
          <Button {...args} variant={state} onClick={action(`Clicked ${state}`)}/>
        </div>
      )
    }
    </div>
  )
};

export const AllButtons = AllButtonsTemplate.bind({});
AllButtons.args = {
  label: 'Click Me!',
}