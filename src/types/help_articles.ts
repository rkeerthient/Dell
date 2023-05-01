export default interface HelpArticle {
	body?: string,
	externalArticlePostDate?: string,
	externalArticleUpdateDate?: string,
	landingPageUrl?: string,
	nudgeEnabled?: boolean,
	primaryConversationContact?: any,
	promoted?: boolean,
	shortDescription?: string,
	slug?: string,
	voteCount?: number,
	voteSum?: number,
	name: string,
	c_category?: string,
	c_cShortRich?: string,
	c_fullBody?: string,
	c_subcategory?: string,
	c_type?: string,
	keywords?: string[],
	id: string,
	timezone?: any,
}
