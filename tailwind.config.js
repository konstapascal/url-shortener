module.exports = {
	mode: 'jit',
	darkMode: 'class',
	purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				light: {
					100: '#F9FAFB',
					200: '#F3F4F6'
				},
				dark: {
					100: '#272822',
					200: '#1E1F1C'
				},
				font: {
					white: '#F9FAFB',
					black: '#111827'
				}
			}
		}
	}
};
