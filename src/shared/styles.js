import { css } from 'styled-components';

// Global style variables
export const background = {
	app: '#F6F9FC',
	appInverse: '#7A8997',
	positive: '#E1FFD4',
	negative: '#FEDED2',
	warning: '#FFF5CF',
};

export const color = {
	// primary: '#27d0ff',
	// secondary: '#7a7a7a',
	// success: '#22da93',
	// warning: '#feb900',
	// danger: '#f23557',
	// light: '#eee',
	// dark: '#1a1a1a',
	// white: '#fff',
	// black: '#000',
	// gray: '#414141',
	// lightgray: this.secondary,
	// darkgray: '#202124',

	// Palette
	primary: '#27d0ff',
	secondary: '#7a7a7a',
	success: '#22da93',
	warning: '#feb900',
	danger: '#f23557',

	orange: '#FC521F',
	gold: '#FFAE00',
	green: '#66BF3C',
	seafoam: '#37D5D3',
	purple: '#6F2CAC',
	ultraviolet: '#2A0481',

	// Monochrome
	lightest: '#FFFFFF',
	lighter: '#F8F8F8',
	light: '#F3F3F3',
	mediumlight: '#EEEEEE',
	medium: '#DDDDDD',
	mediumdark: '#999999',
	dark: '#666666',
	darker: '#444444',
	darkest: '#333333',

	border: 'rgba(0,0,0,.1)',

	// Status
	positive: '#66BF3C',
	negative: '#FF4400',
	// warning: '#E69D00',
};

export const spacing = {
	padding: {
		small: 10,
		medium: 20,
		large: 30,
	},
	borderRadius: {
		small: 5,
		default: 10,
	},
};

export const typography = {
	type: {
		primary: '"Roboto", Arial, sans-serif',
		headings: '"Montserrat", Arial,sans-serif;',
		code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
	},
	weight: {
		light: '200',
		regular: '400',
		bold: '700',
		extrabold: '800',
		black: '900',
	},
	size: {
		s1: '.8',
		s2: '1.2',
		s3: '1.6',
		m1: '2',
		m2: '2.4',
		m3: '2.8',
		l1: '3.2',
		l2: '4',
		l3: '4.8',
		code: '9',
	},
};

export const breakpoint = 600;
export const pageMargin = '5.55555';

export const pageMargins = css`
	padding: 0 ${spacing.padding.medium}px;
	@media (min-width: ${breakpoint * 1}px) {
		margin: 0 ${pageMargin * 1}%;
	}
	@media (min-width: ${breakpoint * 2}px) {
		margin: 0 ${pageMargin * 2}%;
	}
	@media (min-width: ${breakpoint * 3}px) {
		margin: 0 ${pageMargin * 3}%;
	}
	@media (min-width: ${breakpoint * 4}px) {
		margin: 0 ${pageMargin * 4}%;
	}
`;
