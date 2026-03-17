// Simple i18n store for EN/DE switching
export type Lang = 'en' | 'de';

let currentLang = $state<Lang>('en');

export function getLang() {
	return currentLang;
}

export function setLang(lang: Lang) {
	currentLang = lang;
}

export function toggleLang() {
	currentLang = currentLang === 'en' ? 'de' : 'en';
}

export const t = {
	get lang() {
		return currentLang;
	},

	// Navigation
	get navHome() {
		return currentLang === 'en' ? 'Home' : 'Startseite';
	},
	get navFamily() {
		return currentLang === 'en' ? 'Our Family' : 'Unsere Familie';
	},
	get seeMore() {
		return currentLang === 'en' ? 'See more' : 'Mehr erfahren';
	},
	get backToHome() {
		return currentLang === 'en' ? 'Back to Home' : 'Zurück zur Startseite';
	},

	// Header
	get title() {
		return currentLang === 'en' ? 'The Koo Family' : 'Familie Koo';
	},
	get subtitle() {
		return currentLang === 'en'
			? 'A family from South Korea, looking for a home in Berlin'
			: 'Eine Familie aus Südkorea, auf der Suche nach einem Zuhause in Berlin';
	},

	// Intro
	get introHeading() {
		return currentLang === 'en' ? 'Hello!' : 'Hallo!';
	},
	get introText() {
		return currentLang === 'en'
			? "We are the Koo family - a family of four from South Korea. We're looking for a welcoming home in Berlin where we can settle down and build our future together."
			: 'Wir sind die Familie Koo - eine vierköpfige Familie aus Südkorea. Wir suchen ein einladendes Zuhause in Berlin, wo wir uns niederlassen und gemeinsam unsere Zukunft aufbauen können.';
	},

	// Family members section
	get meetUs() {
		return currentLang === 'en' ? 'Meet Our Family' : 'Unsere Familie';
	},

	// Ilmo
	get ilmoName() {
		return 'Ilmo Koo';
	},
	get ilmoRole() {
		return currentLang === 'en' ? 'Husband & Software Developer' : 'Ehemann & Softwareentwickler';
	},
	get ilmoDesc() {
		return currentLang === 'en'
			? "I run my own software company focused on automation and digital transformation for small and medium businesses. I've been doing this work in South Korea, and Berlin's vibrant tech ecosystem is the perfect place to continue growing my business."
			: 'Ich führe mein eigenes Softwareunternehmen mit Fokus auf Automatisierung und digitale Transformation für kleine und mittlere Unternehmen. Diese Arbeit habe ich bereits in Südkorea gemacht, und Berlins lebendiges Tech-Ökosystem ist der perfekte Ort, um mein Unternehmen weiterzuentwickeln.';
	},

	// Kyuree
	get kyureeName() {
		return 'Kyuree Kawk';
	},
	get kyureeRole() {
		return currentLang === 'en' ? 'Wife & Jewelry Designer' : 'Ehefrau & Schmuckdesignerin';
	},
	get kyureeDesc() {
		return currentLang === 'en'
			? 'I dedicate most of my time to raising our two wonderful daughters. In my free time, I design and create jewelry - a creative passion that brings me joy.'
			: 'Ich widme die meiste Zeit der Erziehung unserer zwei wunderbaren Töchter. In meiner Freizeit entwerfe und fertige ich Schmuck - eine kreative Leidenschaft, die mir Freude bereitet.';
	},

	// Jane
	get janeName() {
		return 'Jane Koo';
	},
	get janeRole() {
		return currentLang === 'en' ? '6 years old' : '6 Jahre alt';
	},
	get janeDesc() {
		return currentLang === 'en'
			? "Our eldest daughter is excited to start 1st grade soon! She's curious, loves learning, and can't wait to make new friends in Berlin."
			: 'Unsere älteste Tochter freut sich darauf, bald die 1. Klasse zu beginnen! Sie ist neugierig, lernt gerne und kann es kaum erwarten, neue Freunde in Berlin zu finden.';
	},

	// Jennie
	get jennieName() {
		return 'Jennie Koo';
	},
	get jennieRole() {
		return currentLang === 'en' ? '4 years old' : '4 Jahre alt';
	},
	get jennieDesc() {
		return currentLang === 'en'
			? 'Our little one brings endless energy and laughter to our family. She loves kindergarten and is always ready for new adventures.'
			: 'Unsere Kleine bringt endlose Energie und Lachen in unsere Familie. Sie liebt den Kindergarten und ist immer bereit für neue Abenteuer.';
	},

	// Why Berlin section
	get whyBerlinTitle() {
		return currentLang === 'en' ? 'Why Berlin?' : 'Warum Berlin?';
	},
	get whyBerlinText() {
		return currentLang === 'en'
			? "Berlin's dynamic startup ecosystem and innovative spirit make it the ideal place for my software business. The city's openness to international entrepreneurs and families, combined with excellent schools and a family-friendly environment, convinced us that this is where we want to build our new home."
			: 'Berlins dynamisches Startup-Ökosystem und innovativer Geist machen es zum idealen Ort für mein Softwareunternehmen. Die Offenheit der Stadt gegenüber internationalen Unternehmern und Familien, kombiniert mit ausgezeichneten Schulen und einer familienfreundlichen Umgebung, hat uns überzeugt, dass wir hier unser neues Zuhause aufbauen möchten.';
	},

	// Cleanliness section
	get cleanlinessTitle() {
		return currentLang === 'en' ? 'A Clean & Caring Home' : 'Ein sauberes & gepflegtes Zuhause';
	},
	get cleanlinessText() {
		return currentLang === 'en'
			? 'With two young children who have sensitive skin, we maintain exceptionally high cleanliness standards in our home. Everything is regularly sanitized and kept spotless - from floors to surfaces to fabrics. This is not just a preference, but a necessity for our family. You can trust that we will care for your property with the same meticulous attention we give to our own living space.'
			: 'Mit zwei kleinen Kindern, die empfindliche Haut haben, halten wir außergewöhnlich hohe Sauberkeitsstandards in unserem Zuhause. Alles wird regelmäßig desinfiziert und makellos sauber gehalten - von Böden über Oberflächen bis zu Stoffen. Dies ist nicht nur eine Vorliebe, sondern eine Notwendigkeit für unsere Familie. Sie können darauf vertrauen, dass wir Ihre Immobilie mit der gleichen sorgfältigen Aufmerksamkeit pflegen, die wir unserem eigenen Wohnraum widmen.';
	},

	// Promise section
	get promiseTitle() {
		return currentLang === 'en' ? 'Our Promise' : 'Unser Versprechen';
	},
	get promiseText() {
		return currentLang === 'en'
			? 'We are respectful, quiet, and take great care of our living space. We value cleanliness and harmony with our neighbors. We are looking for a long-term home where our children can grow up happily.'
			: 'Wir sind respektvoll, ruhig und pflegen unseren Wohnraum sorgfältig. Wir schätzen Sauberkeit und ein harmonisches Miteinander mit unseren Nachbarn. Wir suchen ein langfristiges Zuhause, in dem unsere Kinder glücklich aufwachsen können.';
	},

	// Documents section
	get docsTitle() {
		return currentLang === 'en' ? 'Documents Available' : 'Verfügbare Unterlagen';
	},
	get docsText() {
		return currentLang === 'en'
			? 'We can provide financial proof and employment contract upon request.'
			: 'Wir können auf Anfrage Finanznachweis und Arbeitsvertrag vorlegen.';
	},

	// Contact
	get contactTitle() {
		return currentLang === 'en' ? 'Get in Touch' : 'Kontakt';
	},
	get contactText() {
		return currentLang === 'en'
			? "We would love to meet you and show you that we would be great tenants. Please don't hesitate to reach out!"
			: 'Wir würden uns freuen, Sie kennenzulernen und Ihnen zu zeigen, dass wir großartige Mieter wären. Zögern Sie nicht, uns zu kontaktieren!';
	},
	get contactEmail() {
		return 'johnnykoo84@gmail.com';
	},
	get contactPhone() {
		return '+49 1573 4010352';
	}
};
