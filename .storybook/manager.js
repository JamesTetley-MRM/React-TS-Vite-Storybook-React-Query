import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'
import logo from '../public/assets/images/logo.svg'

const brandTheme = create({
  base: 'dark',
  brandTitle: 'React TS Vite Storybook',
  brandUrl:
    'https://github.com/JamesTetley-MRM/React-TS-Vite-Storybook-React-Query',
  brandImage: logo,
  brandTarget: '_blank'
})

addons.setConfig({
  theme: brandTheme
})
