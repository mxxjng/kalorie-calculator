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
			primary: '#7668CB',
			light_headline: '#222222',
			light_bg: '#FFFFFF',
			light_bg_highlight: '#E2E2E2',
			light_text: '#4F4F4F',
			dark_headline: '#FFFFFF',
			dark_bg: '#181A20',
			dark_bg_box: '#262A34',
			dark_bg_highlight: '#262A34',
			dark_bg_table: '#1C1F26',
			dark_bg_highlight_2: '#474F61',
			dark_bg_table_highlight: '#23262F',
			dark_text: '#B5BBC9',
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
