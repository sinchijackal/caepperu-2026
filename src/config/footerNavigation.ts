// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutTextTitle: string
	aboutTextDesc: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'CAEP CUSCO 2026',
		aboutTextTitle: '¿Estás listo para vivir el CAEP?',
		aboutTextDesc: 'Forma parte del evento que reúne a los futuros psicólogos del Perú.',
		logo: {
			src: '/logo.svg',
			alt: 'CAEP CUSCO 2026',
			text: 'CAEP.'
		}
	},
	footerColumns: [
		{
			category: 'El Congreso',
			subCategories: [
				{
					subCategory: 'Inicio',
					subCategoryLink: '/'
				},
				{
					subCategory: 'Nosotros',
					subCategoryLink: '/#nosotros'
				},
				{
					subCategory: 'Programa',
					subCategoryLink: '/#programa'
				},
				{
					subCategory: 'Precios',
					subCategoryLink: '/#precios'
				}
			]
		},
		{
			category: 'Enlaces Rápidos',
			subCategories: [
				{
					subCategory: 'Inscríbete Ahora',
					subCategoryLink: 'https://app.caepperu.com/register'
				},
				{
					subCategory: 'Iniciar Sesión',
					subCategoryLink: 'https://app.caepperu.com'
				},
				{
					subCategory: 'Verificar Certificado',
					subCategoryLink: '/verify'
				}
			]
		},
		{
			category: 'Contacto',
			subCategories: [
				{
					subCategory: 'Informes WhatsApp',
					subCategoryLink: 'https://api.whatsapp.com/send?phone=+51936202205&text=Hola%20CAEP%20quiero%20inscribirme%20en%20el%20congreso'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© CAEPPERU 2026'
	}
}
