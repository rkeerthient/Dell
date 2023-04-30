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
	c_fullBody?: string,
	keywords?: string[],
	id: string,
	timezone?: any,
}
