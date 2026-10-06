// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
	text_s: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style?: string
	size?: string
	variation?: string
	icon?: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'CAEPPERU Cusco 2026',
		text: 'CAEPPERU Cusco 2026',
		text_s: 'Cusco'
	},
	navItems: [
		{ name: 'Inicio', link: '/' },
		{ name: 'Programa', link: '/#programa' },
		{ name: 'Precios', link: '/#precios' },
		{ name: 'Ponentes', link: '/#ponentes' },
		// {
		// 	name: 'Recursos',
		// 	link: '#',
		// 	submenu: [
		// 		{ name: 'Blog', link: '/blog' },
		// 	]
		// },
		{ name: 'Nosotros', link: '/#nosotros' },
		{ name: 'Certificado', link: '/verify' },
		// { name: 'Contacto', link: '/contact' }
	],
	navActions: [
		{
			name: 'Iniciar Sesión',
			link: 'https://app.caepperu.com',
			style: 'outline',
			icon: 'login'
		},
		{
			name: 'Inscríbete',
			link: 'https://app.caepperu.com/register',
			style: 'primary',
			icon: 'arrow'
		}
	]
}
