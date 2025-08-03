// Simple fallback translations for basic UI text
export const fallbackTranslations: { [key: string]: { [key: string]: string } } = {
  // Russian translations
  ru: {
    "Home": "Дом",
    "Explore": "Исследовать", 
    "Messages": "Сообщения",
    "Bookmarks": "Закладки",
    "Profile": "Профиль",
    "More": "Больше",
    "Post": "Почта",
    "Theme": "Тема",
    "Language": "Язык",
    "Dark": "Темный",
    "Light": "Светлый",
    "Privacy & safety": "Конфиденциальность и безопасность",
    "Your anonymous messaging app.": "Ваше анонимное приложение для обмена сообщениями.",
    "Loading your anonymous experience...": "Загружаем ваш анонимный опыт...",
    "search": "поиск",
    "Subscribe to Premium": "Подписаться на Премиум",
    "Subscribe": "Подписаться",
    "Trending Crypto": "Трендовая криптовалюта",
    "Related NEWS": "Связанные новости",
    "Who to follow": "Кого подписать",
    "Follow": "Следовать",
    "Privacy Policy": "Политика конфиденциальности",
    "Loading...": "Загрузка...",
    "No news available": "Новости недоступны",
    "No crypto data available": "Данные о криптовалюте недоступны",
    "Loading crypto data...": "Загрузка данных о криптовалюте...",
    "see more": "увидеть больше",
    "Search using keyword": "Поиск по ключевому слову"
  },
  
  // Spanish translations  
  es: {
    "Home": "Inicio",
    "Explore": "Explorar",
    "Messages": "Mensajes", 
    "Bookmarks": "Marcadores",
    "Profile": "Perfil",
    "More": "Más",
    "Post": "Publicar",
    "Theme": "Tema",
    "Language": "Idioma",
    "Dark": "Oscuro",
    "Light": "Claro", 
    "Privacy & safety": "Privacidad y seguridad",
    "Your anonymous messaging app.": "Tu aplicación de mensajería anónima.",
    "Loading your anonymous experience...": "Cargando tu experiencia anónima...",
    "search": "buscar",
    "Subscribe to Premium": "Suscribirse a Premium",
    "Subscribe": "Suscribirse",
    "Trending Crypto": "Cripto en Tendencia",
    "Related NEWS": "Noticias Relacionadas",
    "Who to follow": "A quién seguir",
    "Follow": "Seguir",
    "Privacy Policy": "Política de Privacidad",
    "Loading...": "Cargando...",
    "No news available": "No hay noticias disponibles",
    "No crypto data available": "No hay datos de cripto disponibles",
    "Loading crypto data...": "Cargando datos de cripto...",
    "see more": "ver más",
    "Search using keyword": "Buscar usando palabra clave"
  },

  // French translations
  fr: {
    "Home": "Accueil",
    "Explore": "Explorer",
    "Messages": "Messages",
    "Bookmarks": "Signets", 
    "Profile": "Profil",
    "More": "Plus",
    "Post": "Publier",
    "Theme": "Thème",
    "Language": "Langue",
    "Dark": "Sombre",
    "Light": "Clair",
    "Privacy & safety": "Confidentialité et sécurité",
    "Your anonymous messaging app.": "Votre application de messagerie anonyme.",
    "Loading your anonymous experience...": "Chargement de votre expérience anonyme...",
    "search": "rechercher",
    "Subscribe to Premium": "S'abonner à Premium",
    "Subscribe": "S'abonner", 
    "Trending Crypto": "Crypto Tendance",
    "Related NEWS": "Actualités Connexes",
    "Who to follow": "Qui suivre",
    "Follow": "Suivre",
    "Privacy Policy": "Politique de Confidentialité",
    "Loading...": "Chargement...",
    "No news available": "Aucune actualité disponible",
    "No crypto data available": "Aucune donnée crypto disponible",
    "Loading crypto data...": "Chargement des données crypto...",
    "see more": "voir plus",
    "Search using keyword": "Rechercher par mot-clé"
  }
};

export function getFallbackTranslation(text: string, targetLanguage: string): string {
  const translations = fallbackTranslations[targetLanguage];
  if (translations && translations[text]) {
    return translations[text];
  }
  return text; // Return original if no fallback available
}
