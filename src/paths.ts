export default class Paths {
	static home() {
		return '/';
	}

	static topicShowPath(slug: string) {
		return `/topics/${slug}`;
	}

	static postCreate(slug: string) {
		return `/topics/${slug}/post/new`;
	}

	static postShow(slug: string, postId: string) {
		return `/topics/${slug}/posts/${postId}`;
	}
}
