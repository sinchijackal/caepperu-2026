// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
	appUrl: string
}

export const configData: Config = {
	siteTitle: 'Congreso Anual de Estudiantes de Psicología Cusco 2026',
	siteDescription:
		'El Congreso Anual de Estudiantes de Psicología (CAEP) es un evento que reúne a estudiantes de psicología de todo el Perú para compartir conocimientos, experiencias y perspectivas sobre la psicología.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'CAEPPERU Cusco 2026'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true,
	appUrl: import.meta.env.PUBLIC_API_URL || 'http://app.caepperu.test'
}
