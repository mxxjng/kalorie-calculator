module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		fontFamily: {
			headline: ['DM Sans'],
			text: ['Inter']
		},
		colors: {
			primary: '#FFC400',
			light_headline: '#222222',
			light_bg: '#FFFFFF',
			light_bg_highlight: '#E2E2E2',
			light_text: '#4F4F4F',
			dark_headline: '#FFFFFF',
			dark_bg: '#181A20',
			dark_bg_box: '#21242C',
			dark_bg_highlight: '#2C2F3A',
			dark_bg_table: '#1C1F26',
			dark_bg_highlight_2: '#474F61',
			dark_bg_table_highlight: '#23262F',
			dark_text: '#C5C6D3',
			danger: '#FD5353',
			white: '#FFFFFF',
			success: '#68F365',
			warning: '#FDC22C'
		},
		extend: {
			fontSize: {
				xss: '.65rem'
			}
		}
	},
	plugins: []
};
