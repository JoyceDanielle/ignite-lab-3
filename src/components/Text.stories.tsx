import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
    title: 'Components/Text',
    component: Text,
    args:{
        children: 'lorem ipsun.',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj = {}

export const Smalll: StoryObj = {
    args:{
        size: 'sm'
    }
}

export const Large: StoryObj = {
    args:{
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> ={
    args:{
        asChild: true,
        children: (
            <p>Ola</p>
        )
    },
    argTypes:{
        children:{
            table:{
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}